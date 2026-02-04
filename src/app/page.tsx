import { Suspense } from 'react';
import { getGenres, getTopRatedMovies } from '@/@services/tmdb';
import TopRatedSection from '@/features/home/TopRatedSection';
import GenreList from '@/features/home/GenreList';
import PopularByGenreRows from '@/features/home/PopularByGenreRows';
import EmptyState from '@/@components/ui/EmptyState';
import { Genre, PaginatedResponse, Movie } from '@/@types/tmdb';

export default async function Home() {
  let genresData: { genres: Genre[] } | undefined;
  let topRatedData: PaginatedResponse<Movie> | undefined;
  let error = null;

  try {
    [genresData, topRatedData] = await Promise.all([
      getGenres(),
      getTopRatedMovies()
    ]);
  } catch (err) {
    console.error('Failed to load home page data:', err);
    error = err;
  }

  if (error || !genresData || !topRatedData) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <EmptyState 
          title="Something went wrong" 
          description="We couldn't load the movies. Please try again later."
          actionLabel="Retry"
          actionHref="/"
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-16 bg-white dark:bg-black">
      <TopRatedSection movies={topRatedData.results} />
      <GenreList genres={genresData.genres} />
      <Suspense fallback={<div className="py-12 text-center text-neutral-500">Loading popular movies...</div>}>
        <PopularByGenreRows genres={genresData.genres} />
      </Suspense>
    </main>
  );
}
