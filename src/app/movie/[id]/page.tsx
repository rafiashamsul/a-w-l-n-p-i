
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  getMovieDetails, 
  getMovieCredits, 
  getSimilarMovies 
} from '@/@services/tmdb';
import MovieInfo from '@/features/details/MovieInfo';
import CastList from '@/features/details/CastList';
import SimilarMovies from '@/features/details/SimilarMovies';
import AddToRecentlyViewed from '@/features/details/AddToRecentlyViewed';
import { Movie } from '@/@types/tmdb';

// Next.js 15+ Params type
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const movie = await getMovieDetails(parseInt(id));
    return {
      title: `${movie.title} - TMDB Discovery`,
      description: movie.overview,
    };
  } catch {
    return {
      title: 'Movie Not Found',
    };
  }
}

export default async function MoviePage({ params }: Props) {
  const { id } = await params;
  const movieId = parseInt(id);

  if (isNaN(movieId)) {
    notFound();
  }

  let movie, credits, similar;

  try {
    // Fetch data in parallel
    [movie, credits, similar] = await Promise.all([
      getMovieDetails(movieId),
      getMovieCredits(movieId),
      getSimilarMovies(movieId)
    ]);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    notFound();
  }

  // Construct Movie object for store (transforming MovieDetails to Movie)
  const movieForStore: Movie = {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    overview: movie.overview,
    genre_ids: movie.genres.map(g => g.id),
  };

  return (
    <main className="container mx-auto px-4 py-8 space-y-12 animate-in fade-in duration-500">
      <AddToRecentlyViewed movie={movieForStore} />
      
      <MovieInfo movie={movie} />
      
      <CastList cast={credits.cast} />
      
      <SimilarMovies movies={similar.results} />
    </main>
  );
}
