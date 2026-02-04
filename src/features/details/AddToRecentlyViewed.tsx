"use client";

import { useEffect } from "react";
import { Movie } from "@/@types/tmdb";
import { useRecentlyViewedStore } from "@/@store/recentlyViewed.store";

type AddToRecentlyViewedProps = {
  movie: Movie;
};

export default function AddToRecentlyViewed({
  movie,
}: AddToRecentlyViewedProps) {
  const addRecentlyViewed = useRecentlyViewedStore(
    (state) => state.addRecentlyViewed,
  );

  useEffect(() => {
    addRecentlyViewed(movie);
  }, [movie, addRecentlyViewed]);

  return null;
}
