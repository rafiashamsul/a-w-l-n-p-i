import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Movie } from '@/@types/tmdb';

interface WatchLaterState {
  watchLater: Movie[];
  toggleWatchLater: (movie: Movie) => void;
  removeWatchLater: (id: number) => void;
  isWatchLater: (id: number) => boolean;
}

export const useWatchLaterStore = create<WatchLaterState>()(
  persist(
    (set, get) => ({
      watchLater: [],
      toggleWatchLater: (movie) => {
        const { watchLater } = get();
        const exists = watchLater.some((m) => m.id === movie.id);
        if (exists) {
          set({ watchLater: watchLater.filter((m) => m.id !== movie.id) });
        } else {
          set({ watchLater: [...watchLater, movie] });
        }
      },
      removeWatchLater: (id) => {
        set({
          watchLater: get().watchLater.filter((m) => m.id !== id),
        });
      },
      isWatchLater: (id) => {
        return get().watchLater.some((m) => m.id === id);
      },
    }),
    {
      name: 'tmdb_watch_later',
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
