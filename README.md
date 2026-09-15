# Chhoeng Dyne — Portfolio & CV Website

Personal portfolio website for **Chhoeng Dyne**, Software Engineer specializing in Android development (Kotlin, Jetpack Compose) and modern web applications (React, Vue.js, Node.js).

---

## 🚀 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) + [React 19](https://react.dev)
- **Routing**: [TanStack Router](https://tanstack.com/router) (file-based routing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + OKLCH design tokens
- **Build Tool**: [Vite](https://vitejs.dev) + [TypeScript](https://www.typescriptlang.org)

---

## 💻 Running Locally on Your Computer

### 1. Install dependencies
```bash
npm install
```

### 2. Start the local development server
```bash
npm run dev
```
Open your browser to:
```
http://localhost:8080
```

### 3. Build for production
```bash
npm run build
```

---

## 📦 How to Push to GitHub

When you are ready to upload this project to your GitHub account:

1. Create a new repository on [GitHub](https://github.com/new) named `portfolio` (or `warm-web-gallery`).
2. In your terminal, stage and commit your changes:
   ```bash
   git add .
   git commit -m "Decouple from Lovable and prepare standalone portfolio"
   ```
3. Set your GitHub remote (replace with your repo URL):
   ```bash
   git remote set-url origin https://github.com/Chhoeng-Dyne/portfolio.git
   ```
4. Push your code:
   ```bash
   git push -u origin main
   ```

---

## 🌐 How to Host for Free on Vercel

Vercel provides free, fast hosting that connects directly to your GitHub repository:

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Select your GitHub repository (`portfolio`).
4. Keep the default settings and click **"Deploy"**.
5. Vercel will build your website and provide a free live URL (e.g., `https://your-name.vercel.app`).
6. Every time you run `git push` to your GitHub repository, Vercel will automatically rebuild and update your live website!
