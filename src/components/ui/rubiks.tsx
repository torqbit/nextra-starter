import { useEffect, useRef } from "react";
import * as THREE from "three";

interface MouseState {
  x: number;
  y: number;
  isHovering: boolean;
}

interface AnimationState {
  time: number;
  currentRotationSpeed: number;
  targetRotationSpeed: number;
}

interface LightsRef {
  rimLight?: THREE.PointLight;
  fillLight?: THREE.DirectionalLight;
}

const RubiksCube = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rubiksCubeRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef<MouseState>({ x: 0, y: 0, isHovering: false });
  const animationRef = useRef<AnimationState>({
    time: 0,
    currentRotationSpeed: 0.01,
    targetRotationSpeed: 0.01,
  });
  const lightsRef = useRef<LightsRef>({});
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera with adjusted settings for larger cube
    const camera = new THREE.PerspectiveCamera(35, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.set(4, 4, 8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    const updateRendererSize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance

      if (cameraRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
      }
    };

    updateRendererSize();
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Enhanced lighting for better vibrancy
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(10, 10, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffcc88, 0.7);
    fillLight.position.set(-10, 5, -5);
    scene.add(fillLight);
    lightsRef.current.fillLight = fillLight;

    const backLight = new THREE.DirectionalLight(0xff77aa, 0.5);
    backLight.position.set(0, -5, -10);
    scene.add(backLight);

    const rimLight = new THREE.PointLight(0xdd99ff, 0.8, 20);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);
    lightsRef.current.rimLight = rimLight;

    // Function to create gradient texture
    const createGradientTexture = (color1: string, color2: string, color3: string): THREE.CanvasTexture => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");

      if (!ctx) throw new Error("Could not get canvas context");

      const gradient = ctx.createLinearGradient(0, 0, 256, 256);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(0.5, color2);
      gradient.addColorStop(1, color3);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);

      return new THREE.CanvasTexture(canvas);
    };

    // Create gradient textures with brighter orange-to-purple theme
    const gradients = {
      peachOrange: createGradientTexture("#ff9e5e", "#ff7b35", "#ff5a1c"),
      orangePink: createGradientTexture("#ff7b35", "#ff4a8a", "#ff2f94"),
      pinkPurple: createGradientTexture("#ff4a8a", "#d84dff", "#b82be2"),
      purpleMagenta: createGradientTexture("#d84dff", "#c04dff", "#a82bff"),
      coralPeach: createGradientTexture("#ff9e5e", "#ffb07a", "#ffc296"),
      lavenderPurple: createGradientTexture("#d84dff", "#c23dff", "#a82bff"),
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
              metalness: 0.05,
              roughness: 0.15,
              emissive: x === 1 ? 0xff7b35 : 0x000000,
              emissiveIntensity: x === 1 ? 0.35 : 0,
              toneMapped: false,
            }),
            new THREE.MeshStandardMaterial({
              map: x === -1 ? gradients.orangePink : null,
              color: x === -1 ? 0xffffff : 0x1a1a1a,
              metalness: 0.05,
              roughness: 0.15,
              emissive: x === -1 ? 0xff4a8a : 0x000000,
              emissiveIntensity: x === -1 ? 0.35 : 0,
              toneMapped: false,
            }),
            new THREE.MeshStandardMaterial({
              map: y === 1 ? gradients.coralPeach : null,
              color: y === 1 ? 0xffffff : 0x1a1a1a,
              metalness: 0.05,
              roughness: 0.15,
              emissive: y === 1 ? 0xffb07a : 0x000000,
              emissiveIntensity: y === 1 ? 0.35 : 0,
              toneMapped: false,
            }),
            new THREE.MeshStandardMaterial({
              map: y === -1 ? gradients.pinkPurple : null,
              color: y === -1 ? 0xffffff : 0x1a1a1a,
              metalness: 0.05,
              roughness: 0.15,
              emissive: y === -1 ? 0xd84dff : 0x000000,
              emissiveIntensity: y === -1 ? 0.35 : 0,
              toneMapped: false,
            }),
            new THREE.MeshStandardMaterial({
              map: z === 1 ? gradients.purpleMagenta : null,
              color: z === 1 ? 0xffffff : 0x1a1a1a,
              metalness: 0.05,
              roughness: 0.15,
              emissive: z === 1 ? 0xc04dff : 0x000000,
              emissiveIntensity: z === 1 ? 0.4 : 0,
              toneMapped: false,
            }),
            new THREE.MeshStandardMaterial({
              map: z === -1 ? gradients.lavenderPurple : null,
              color: z === -1 ? 0xffffff : 0x1a1a1a,
              metalness: 0.05,
              roughness: 0.15,
              emissive: z === -1 ? 0xc23dff : 0x000000,
              emissiveIntensity: z === -1 ? 0.45 : 0,
              toneMapped: false,
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
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current) return;
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
      updateRendererSize();
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      animationRef.current.time += 0.01;
      const time = animationRef.current.time;

      // Smooth floating motion
      rubiksCube.position.y = Math.sin(time * 0.5) * 0.3;

      const { isHovering } = mouseRef.current;
      const { rimLight, fillLight } = lightsRef.current;

      if (!rimLight || !fillLight) return;

      // Hover effects
      if (isHovering) {
        animationRef.current.targetRotationSpeed = 0.025;

        // Interactive rotation based on mouse position
        rubiksCube.rotation.y += mouseRef.current.x * 0.015;
        rubiksCube.rotation.x += mouseRef.current.y * 0.015;

        // Enhance lighting on hover
        rimLight.intensity += (1.2 - rimLight.intensity) * 0.1;
        fillLight.intensity += (0.7 - fillLight.intensity) * 0.1;

        // Move rim light with mouse
        rimLight.position.x = mouseRef.current.x * 10;
        rimLight.position.y = mouseRef.current.y * 10;
      } else {
        animationRef.current.targetRotationSpeed = 0.01;

        // Reset lighting when not hovering
        rimLight.intensity += (0.5 - rimLight.intensity) * 0.05;
        fillLight.intensity += (0.4 - fillLight.intensity) * 0.05;

        // Reset rim light position
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
    };

    animate();

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener("mousemove", handleMouseMove);
        mountRef.current.removeEventListener("mouseleave", handleMouseLeave);
        if (renderer.domElement && mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }

      // Dispose of Three.js resources
      rubiksCube.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => {
                if (material.map) material.map.dispose();
                material.dispose();
              });
            } else {
              if (object.material.map) object.material.map.dispose();
              object.material.dispose();
            }
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "300px",
        margin: 0,
        padding: 0,
      }}
    />
  );
};

export default RubiksCube;
