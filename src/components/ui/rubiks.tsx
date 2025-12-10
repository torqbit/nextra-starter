import { useEffect, useRef } from "react";

const RubiksCube = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const rubiksCubeRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });
  const animationRef = useRef({ time: 0, currentRotationSpeed: 0.01, targetRotationSpeed: 0.01 });
  const lightsRef = useRef({});

  useEffect(() => {
    if (!mountRef.current) return;

    // Dynamically import Three.js
    import("three").then((THREE) => {
      // Create scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Create camera
      const camera = new THREE.PerspectiveCamera(50, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
      camera.position.set(8, 8, 12);
      camera.lookAt(0, 0, 0);
      cameraRef.current = camera;

      // Create renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Enhanced lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
      keyLight.position.set(10, 10, 10);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xffaa66, 0.4);
      fillLight.position.set(-10, 5, -5);
      scene.add(fillLight);
      lightsRef.current.fillLight = fillLight;

      const backLight = new THREE.DirectionalLight(0xff6699, 0.3);
      backLight.position.set(0, -5, -10);
      scene.add(backLight);

      const rimLight = new THREE.PointLight(0xcc88ff, 0.5);
      rimLight.position.set(-5, 5, -5);
      scene.add(rimLight);
      lightsRef.current.rimLight = rimLight;

      // Function to create gradient texture
      const createGradientTexture = (color1, color2, color3) => {
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext("2d");

        const gradient = ctx.createLinearGradient(0, 0, 256, 256);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(0.5, color2);
        gradient.addColorStop(1, color3);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);

        return new THREE.CanvasTexture(canvas);
      };

      // Create gradient textures for each face
      const gradients = {
        peachOrange: createGradientTexture("#ffd4a3", "#ffaa66", "#ff8844"),
        orangePink: createGradientTexture("#ffaa66", "#ff6699", "#ff4477"),
        pinkPurple: createGradientTexture("#ff6699", "#cc88ff", "#aa66ff"),
        purpleMagenta: createGradientTexture("#cc88ff", "#dd77ff", "#ff66cc"),
        coralPeach: createGradientTexture("#ff9977", "#ffbb88", "#ffd4a3"),
        lavenderPurple: createGradientTexture("#dd99ff", "#bb88ff", "#9966ff"),
      };

      // Create Rubik's Cube group
      const rubiksCube = new THREE.Group();
      rubiksCubeRef.current = rubiksCube;

      // Create individual cubelets (3x3x3 = 27 small cubes)
      const cubeSize = 0.95;
      const gap = 0.05;
      const spacing = cubeSize + gap;

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            if (x === 0 && y === 0 && z === 0) continue;

            const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

            const materials = [
              new THREE.MeshStandardMaterial({
                map: x === 1 ? gradients.peachOrange : null,
                color: x === 1 ? 0xffffff : 0x1a1a1a,
                metalness: 0.2,
                roughness: 0.3,
              }),
              new THREE.MeshStandardMaterial({
                map: x === -1 ? gradients.orangePink : null,
                color: x === -1 ? 0xffffff : 0x1a1a1a,
                metalness: 0.2,
                roughness: 0.3,
              }),
              new THREE.MeshStandardMaterial({
                map: y === 1 ? gradients.coralPeach : null,
                color: y === 1 ? 0xffffff : 0x1a1a1a,
                metalness: 0.2,
                roughness: 0.3,
              }),
              new THREE.MeshStandardMaterial({
                map: y === -1 ? gradients.pinkPurple : null,
                color: y === -1 ? 0xffffff : 0x1a1a1a,
                metalness: 0.2,
                roughness: 0.3,
              }),
              new THREE.MeshStandardMaterial({
                map: z === 1 ? gradients.purpleMagenta : null,
                color: z === 1 ? 0xffffff : 0x1a1a1a,
                metalness: 0.2,
                roughness: 0.3,
              }),
              new THREE.MeshStandardMaterial({
                map: z === -1 ? gradients.lavenderPurple : null,
                color: z === -1 ? 0xffffff : 0x1a1a1a,
                metalness: 0.2,
                roughness: 0.3,
              }),
            ];

            const cube = new THREE.Mesh(geometry, materials);
            cube.position.set(x * spacing, y * spacing, z * spacing);
            rubiksCube.add(cube);
          }
        }
      }

      scene.add(rubiksCube);

      // Mouse move handler
      const handleMouseMove = (event) => {
        const rect = mountRef.current.getBoundingClientRect();
        mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        mouseRef.current.isHovering = true;
      };

      const handleMouseLeave = () => {
        mouseRef.current.isHovering = false;
      };

      mountRef.current.addEventListener("mousemove", handleMouseMove);
      mountRef.current.addEventListener("mouseleave", handleMouseLeave);

      // Handle window resize
      const handleResize = () => {
        if (!mountRef.current) return;
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      };

      window.addEventListener("resize", handleResize);

      // Animation loop
      const animate = () => {
        animationRef.current.time += 0.01;
        const time = animationRef.current.time;

        // Smooth floating motion
        rubiksCube.position.y = Math.sin(time * 0.5) * 0.3;

        const { isHovering } = mouseRef.current;
        const { rimLight, fillLight } = lightsRef.current;

        // Hover effects
        if (isHovering) {
          animationRef.current.targetRotationSpeed = 0.025;

          rubiksCube.rotation.y += mouseRef.current.x * 0.015;
          rubiksCube.rotation.x += mouseRef.current.y * 0.015;

          rimLight.intensity += (1.2 - rimLight.intensity) * 0.1;
          fillLight.intensity += (0.7 - fillLight.intensity) * 0.1;

          rimLight.position.x = mouseRef.current.x * 10;
          rimLight.position.y = mouseRef.current.y * 10;

          const scale = 1 + Math.sin(time * 3) * 0.02;
          rubiksCube.scale.set(scale, scale, scale);
        } else {
          animationRef.current.targetRotationSpeed = 0.01;

          rimLight.intensity += (0.5 - rimLight.intensity) * 0.05;
          fillLight.intensity += (0.4 - fillLight.intensity) * 0.05;

          rimLight.position.x += (-5 - rimLight.position.x) * 0.05;
          rimLight.position.y += (5 - rimLight.position.y) * 0.05;

          const targetScale = 1;
          rubiksCube.scale.x += (targetScale - rubiksCube.scale.x) * 0.05;
          rubiksCube.scale.y += (targetScale - rubiksCube.scale.y) * 0.05;
          rubiksCube.scale.z += (targetScale - rubiksCube.scale.z) * 0.05;
        }

        animationRef.current.currentRotationSpeed +=
          (animationRef.current.targetRotationSpeed - animationRef.current.currentRotationSpeed) * 0.05;

        rubiksCube.rotation.x += animationRef.current.currentRotationSpeed * 0.7;
        rubiksCube.rotation.y += animationRef.current.currentRotationSpeed;
        rubiksCube.rotation.z += animationRef.current.currentRotationSpeed * 0.5;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        if (mountRef.current) {
          mountRef.current.removeEventListener("mousemove", handleMouseMove);
          mountRef.current.removeEventListener("mouseleave", handleMouseLeave);
          if (renderer.domElement) {
            mountRef.current.removeChild(renderer.domElement);
          }
        }
        renderer.dispose();
      };
    });
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "300px",
        background: "transparent",
        margin: 0,
        padding: 0,
      }}
    />
  );
};

export default RubiksCube;
