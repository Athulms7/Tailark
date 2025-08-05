# 🌐 Webzee – SaaS Landing Page

**Webzee** is a clean, responsive, animated SaaS landing page built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion/GSAP**. Designed to showcase your product or startup beautifully, it includes animated sections, responsive layout, and a premium modern UI.

---

## 🚀 Features

- ✨ Modern Next.js 14 App Directory
- 🎨 Styled with Tailwind CSS and custom design tokens
- 🧠 Scroll-based animations with Framer Motion or GSAP
- 🧩 Component-based architecture
- 💬 Masonry-style testimonial section
- ⚙️ `next/image` optimization with external avatars
- 📱 Mobile responsive design
- 🌗 Light mode support
- 🔥 Ready for deployment (Vercel, Render, etc.)

---

## 📁 Project Structure

webzee/ ├── app/ │   ├── _components/        # UI components (Testimonials, Features, etc.) │   ├── layout.tsx          # App layout with global styles │   └── page.tsx            # Main homepage ├── public/                 # Static files (images, preview, icons) ├── styles/                 # Tailwind & global CSS (if any) ├── next.config.js          # Next.js config ├── tailwind.config.ts      # Tailwind CSS configuration ├── tsconfig.json           # TypeScript settings ├── postcss.config.js       # PostCSS plugins └── README.md               # You are here!

---

## ⚙️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/) / [GSAP](https://greensock.com/gsap/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Dicebear Avatars](https://www.dicebear.com/) (for testimonial avatars)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/webzee.git
cd webzee

2. Install Dependencies

npm install
# or
yarn

3. Run the Dev Server

npm run dev
# or
yarn dev

Visit http://localhost:3000 in your browser.


---

🧩 Configuration

Allow External Avatars in next.config.js

> Required for next/image to load Dicebear avatars.



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.dicebear.com"],
  },
};

module.exports = nextConfig;

Then restart your dev server.


---

🚀 Build & Deploy

Local Production Build

npm run build
npm run start

Deploy Platforms

Vercel

Render

Netlify (with adapter)

Any other Next.js-compatible hosting



---

📸 Preview

> Add this file: /public/preview.png



📸 Screenshot Preview

![Webzee Screenshot](./public/preview.png)


---

✨ Contributing

Contributions, suggestions, and pull requests are welcome!
Feel free to fork the project and open issues or PRs.


---

📃 License

This project is licensed under the MIT License.


---

👨‍💻 Author

Athul M S
GitHub – @Athulms7





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

