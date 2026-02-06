# TMDB Movie Discovery

A modern, feature-rich movie discovery web application built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS 4**. This application leverages the **TMDB API** to provide users with a seamless experience for browsing, searching, and managing their favorite movies.

## 🚀 Live Demo

**Deployed on Vercel**: (https://a-w-l-n-p-i.vercel.app/)

## 📖 Project Overview

This application serves as a comprehensive movie database interface where users can explore trending content, search for specific titles, and manage personal lists. It demonstrates a modern frontend architecture with a focus on performance, user experience, and code maintainability.

### Key Features

- **Movie Discovery**: Browse popular, top-rated, and genre-specific movies.
- **Detailed Info**: View comprehensive movie details including cast, rating, and similar recommendations.
- **Advanced Search**: Search for movies with a responsive and efficient search interface.
- **Personalization**:
  - **Watch Later**: Save movies to a local list (persisted via LocalStorage).
  - **Recently Viewed**: Automatically tracks movies you've visited.
- **Theming**: Fully supported Dark and Light modes.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **SEO Friendly**: Server-side rendered metadata for better search engine visibility.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [MUI](https://mui.com/) (Icons/Components)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) & Server Components
- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏗 Architecture Decisions

### Why App Router?
We utilized the Next.js App Router to leverage **React Server Components (RSC)**. This allows us to:
- Fetch data directly on the server (reducing client bundle size).
- Improve initial page load performance and SEO.
- Stream UI components using `Suspense` for a better user experience.

### Why Zustand?
Zustand was chosen for global client state management (Watch Later, Recently Viewed, Theme) because:
- It is extremely lightweight and boilerplate-free.
- It provides easy access to state outside of React components.
- It simplifies persisting state to `localStorage` with built-in middleware.

### Feature-Based Folder Structure
The codebase uses a **feature-based architecture** under `src/features` to improve scalability. Instead of grouping files by type (components, hooks), we group them by domain (e.g., `search`, `movie`, `genre`).

```text
src/
├── @components/    # Shared UI components (Button, Skeleton, etc.)
├── @layouts/       # Global layouts (Navbar, Footer)
├── @services/      # API clients (TMDB configuration)
├── @store/         # Global state (Zustand stores)
├── app/            # Next.js App Router pages
└── features/       # Feature-specific logic & components
    ├── home/       # Homepage widgets
    ├── search/     # Search logic & results
    ├── details/    # Movie detail components
    └── genre/      # Genre filtering & pagination
```

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following keys:

```bash
# TMDB API Configuration
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p

# App Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Note**: You need to obtain an API Key from [TMDB](https://www.themoviedb.org/settings/api).

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/tmdb-movie-discovery.git
    cd tmdb-movie-discovery
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Copy `.env.example` to `.env.local` and fill in your API credentials.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the app:**
    Visit `http://localhost:3000` in your browser.

## 📦 Build & Deployment

The project is optimized for deployment on **Vercel**.

1.  Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2.  Import the project into Vercel.
3.  Add the **Environment Variables** in the Vercel dashboard.
4.  Click **Deploy**.

---

Developed with ❤️ by [Rafia Zahan Tamanna]
