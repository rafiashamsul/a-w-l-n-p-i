"use client";

import { useEffect, useState } from "react";
import { useRecentlyViewedStore } from "@/@store/recentlyViewed.store";
import MovieCard from "@/@components/movie/MovieCard";
import Container from "@/@layouts/Container";
import EmptyState from "@/@components/ui/EmptyState";
import Skeleton from "@/@components/ui/Skeleton";

export default function RecentlyViewedPage() {
  const { recentlyViewed } = useRecentlyViewedStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-6 text-foreground">
          Recently Viewed
        </h1>

        {!isMounted ? (
          // Client-side hydration loading state
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden bg-white dark:bg-neutral-900 shadow"
              >
                <div className="relative w-full aspect-[2/3] bg-neutral-200 dark:bg-neutral-800">
                  <Skeleton className="absolute inset-0 w-full h-full" />
                </div>
                <div className="p-3 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : recentlyViewed.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {recentlyViewed.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No recently viewed movies yet"
            description="Start exploring movies to build your history."
            actionLabel="Go to Home"
            actionHref="/"
          />
        )}
      </Container>
    </div>
  );
}
