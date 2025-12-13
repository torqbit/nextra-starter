# Nextjs Website Template

A modern, responsive, and feature-rich Next.js marketing website template for AI-powered SaaS applications. This template includes a beautiful landing page, documentation, and AI assistant integration, all with dark/light theme support.

![Light Theme](/screenshots/light.png#gh-light-mode-only)
![Dark Theme](/screenshots/dark.png#gh-dark-mode-only)

## ✨ Features

- 🚀 **Next.js 16** with App Router
- 📚 **Nextra v4** for beautiful documentation
- 🤖 **AI Assistant** powered by Torqbit
- 🌓 **Dark/Light** theme support
- 📱 **Fully responsive** design
- ⚡ **Optimized** for performance
- 🎨 **Customizable** components
- 🔍 **SEO** optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Documentation**: Nextra v4
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Hero Icons
- **Theming**: next-themes
- **Type Safety**: TypeScript
- **AI Integration**: Torqbit

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/ai-saas-template.git](https://github.com/yourusername/ai-saas-template.git)
   cd ai-saas-template
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## 🎨 Customization

### Branding

Update the brand information in src/lib/props.ts:

```typescript
export const brand = {
  logo: "/logo.png", // Replace with your logo
  name: "Your Brand",
  tagline: "Your tagline here",
};
```

### Theme Colors

Customize the theme colors in tailwind.config.js:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        DEFAULT: '#000000',  // Your brand color
      },
    },
  },
}
```

### Pricing Plans

Update the pricing plans in src/lib/props.ts:

```typescript
export const PricingProps = {
  annualDiscount: 20,
  plans: [
    {
      name: "Starter",
      monthlyPrice: 25,
      description: "Perfect for small businesses",
      features: ["1 AI assistant", "1,000 messages", "Basic features"],
      buttonLabel: "Get Started",
      buttonVariant: "outline",
      isPopular: false,
    },
    // Add more plans as needed
  ],
};
```

## 📝 Documentation

The documentation is built using Nextra v4, a modern static site generator for Next.js. You can find the documentation in the `docs` directory.

To add new pages to the documentation,

1. Create a new .mdx or .md file in the docs directory
2. Update the navigation in theme.config.tsx

## ![alt text](toq-32.png) AI Assistant

The AI assistant is integrated using Torqbit. To set it up:

1. Sign up for a Torqbit API key
2. Add the API key to your environment variables:
   ```bash
   NEXT_PUBLIC_TORQBIT_API_KEY=your_api_key_here
   ```

## 📄 License

MIT

## 📝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

```

Would you like me to make any adjustments to this README? I can:

1. Add more specific setup instructions
2. Include additional customization options
3. Add more details about specific features
4. Include a contributors section
5. Add a FAQ section

Let me know what you'd like to modify or add!
```
