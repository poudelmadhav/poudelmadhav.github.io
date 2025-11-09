# Madhav Paudel - Portfolio

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring particle.js animations and a responsive design.

## 🚀 Features

- **Interactive Particle Background**: Dynamic particle.js effects with mouse interaction
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Dark Mode**: Theme support with next-themes
- **Smooth Animations**: Elegant section transitions and hover effects
- **Performance Optimized**: Built with Next.js for optimal performance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v22.x or higher)

This project uses [Corepack](https://nodejs.org/api/corepack.html) to manage pnpm. Corepack is included with Node.js 16.10+.

### Enable Corepack

```bash
corepack enable
```

This will automatically install and use the correct version of pnpm specified in `package.json`.

## 🛠️ Local Setup

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd madhav-portfolio
```

### 2. Enable Corepack (if not already enabled)

```bash
corepack enable pnpm
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Run Development Server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 5. View in Browser

Open your browser and navigate to `http://localhost:3000` to see the portfolio in action.

## 🏗️ Build for Production

To create an optimized production build:

```bash
pnpm build
```

This command will:
- Create an optimized production build in the `.next` folder
- Perform static optimization where possible
- Generate static pages for better performance

### Preview Production Build Locally

After building, you can preview the production build locally:

```bash
pnpm start
```

This will start a production server at [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
madhav-portfolio/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── ui/                  # Radix UI components
│   ├── about-section.tsx    # About section
│   ├── contact-section.tsx  # Contact section
│   ├── experience-section.tsx # Experience section
│   ├── footer.tsx           # Footer component
│   ├── hero-section.tsx     # Hero section
│   ├── navigation.tsx       # Navigation bar
│   └── particles-background.tsx # Particle.js background
├── lib/                     # Utility functions
├── public/                  # Static assets
└── styles/                  # Additional styles
```

## 🧰 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Particle.js](https://vincentgarreau.com/particles.js/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🌐 Deployment

This portfolio is configured for deployment on GitHub Pages. The deployment is automated through GitHub Actions.

### Deploying to GitHub Pages

1. Push your code to GitHub
2. The GitHub Actions workflow will automatically build and deploy your site
3. Your site will be available at `https://<username>.github.io/<repository-name>/`

For manual deployment or other platforms:

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
pnpm build

# Deploy the .next folder
```

## 🔧 Customization

To customize the portfolio for your needs:

1. **Update Personal Information**: Edit the content in components files
2. **Change Colors**: Modify Tailwind CSS theme in `tailwind.config.js`
3. **Add Sections**: Create new components in the `components/` directory
4. **Modify Particles**: Adjust settings in `components/particles-background.tsx`

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Madhav Paudel**
- Position: Principal Engineer at Chulo Solutions Pvt. Ltd.
- Portfolio: https://poudelmadhav.com.np

---

Built with ❤️ using Next.js and Tailwind CSS
