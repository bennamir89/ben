// ✅ Folder: /app/layout.jsx
import './globals.css'

export const metadata = {
  title: 'Ben Amir | ICT & Computer Science Teacher',
  description: 'Portfolio and teaching resources by Ben Amir, Senior ICT & CS educator with international experience in IGCSE, A-Level, and digital education.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  )
}

// ✅ Folder: /styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  scroll-behavior: smooth;
}

// ✅ File: tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1E40AF', // blue-800
        secondary: '#1E3A8A', // blue-900
      },
    },
  },
  plugins: [],
}

// ✅ File: postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// ✅ File: .gitignore
node_modules
.next
out
dist
.DS_Store
.env.local
.env.production

// ✅ File: README.md
# Ben Amir Portfolio

This is the official personal website and teaching portfolio of **Ben Amir**, an experienced ICT & Computer Science educator with over 10 years of international experience.

## 🧠 Features
- Built with **Next.js 14** and **Tailwind CSS**
- Sections: Home, About, Experience, and Learn (resources)
- Responsive, clean layout
- Ready for deployment on **Vercel**

## 🚀 How to Run Locally
```bash
npm install
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

## 🗂️ Folder Structure
```
/app
  ├─ layout.jsx
  ├─ page.jsx
/public
  ├─ images/profile.jpg
  ├─ Muhammad_Amir_CV_2025.pdf
/styles
  └─ globals.css
```

## 🌍 Deployment
Deployed on [Vercel](https://vercel.com) — automatic from GitHub main branch.

---
© {new Date().getFullYear()} Ben Amir
