# E-Commerce Platform

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## 📦 Installation

1. **Prerequisites**
   - Node.js (v18+)
   - npm (v9+)
   - Git

2. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/e-commerce.git
   cd e-commerce
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Fill in the required values (e.g., `API_URL`, `JWT_SECRET`, `DB_CONNECTION_STRING`)

5. **Run the development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 to see the app in your browser.

6. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🛠️ Development Workflow

| Phase | Description |
|-------|-------------|
| **Feature Development** | Create a new branch (`feature/<name>`), implement the feature, write tests, and open a Pull Request. |
| **Code Review** | At least one teammate must approve the PR. Address any requested changes. |
| **CI/CD** | Automated linting (`npm run lint`), testing (`npm test`), and build checks run on every push. |
| **Staging Deployment** | Deploy to the staging environment (`npm run build && docker-compose up -d staging`) for final validation. |
| **Production Release** | Merge to `main`, tag a version, and deploy to production (`docker-compose up -d production`). |

**Branching Strategy**: Use GitFlow – `main` for production, `develop` for integration, `feature/*` for new work, `release/*` for preparation, and `hotfix/*` for patches.

**Commit Convention**: Follow Conventional Commits (`feat:`, `fix:`, `chore:`, etc.) to enable automated changelog generation.

---

## 🚀 Key Features

- **Product Catalog** – Browse products with categories, search, and filtering.
- **Shopping Cart** – Add/remove items, update quantities, and view totals.
- **Checkout Flow** – Secure payment integration (Stripe/PayPal) and order confirmation.
- **User Authentication** – Sign‑up, login, password reset, and JWT‑based sessions.
- **User Profile** – Manage personal details, address book, and order history.
- **Admin Dashboard** – Manage inventory, view sales analytics, and configure promotions.
- **Responsive Design** – Works on desktop, tablet, and mobile devices.
- **Progressive Web App (PWA)** – Offline support and installable experience.
- **Internationalization** – Ready for multiple languages and locale‑specific formatting.
- **Accessibility** – WCAG‑2.1 AA compliant UI components.
