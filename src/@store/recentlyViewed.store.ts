import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Movie } from '@/@types/tmdb';

interface RecentlyViewedState {
  recentlyViewed: Movie[];
  addRecentlyViewed: (movie: Movie) => void;
  clearRecentlyViewed: () => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedState>()(
  persist(
    (set, get) => ({
      recentlyViewed: [],
      addRecentlyViewed: (movie) => {
        const { recentlyViewed } = get();
        // Remove duplicate if exists
        const filtered = recentlyViewed.filter((m) => m.id !== movie.id);
        // Add to top and limit to 20
        const updated = [movie, ...filtered].slice(0, 20);
        set({ recentlyViewed: updated });
      },
      clearRecentlyViewed: () => {
        set({ recentlyViewed: [] });
      },
    }),
    {
      name: 'tmdb_recently_viewed',
      storage: createJSONStorage(() => {
        if (typeof window !== 'undefined') return localStorage;
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
    }
  )
);
