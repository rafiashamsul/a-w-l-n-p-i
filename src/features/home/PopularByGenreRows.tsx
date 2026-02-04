import Link from 'next/link';
import { Genre, Movie } from '@/@types/tmdb';
import { getPopularMoviesByGenre } from '@/@services/tmdb';
import MovieCard from '@/@components/movie/MovieCard';
import Container from '@/@layouts/Container';

// Async component for individual genre row
async function GenreRow({ genre }: { genre: Genre }) {
  let movies: Movie[] = [];
  
  try {
    const { results } = await getPopularMoviesByGenre(genre.id);
    movies = results.slice(0, 5);
  } catch (error) {
    console.error(`Failed to fetch popular movies for genre ${genre.name}:`, error);
    return null;
  }

  if (movies.length === 0) return null;

  return (
    <section className="py-8 border-b border-neutral-200 dark:border-neutral-800 last:border-0">
      <Container>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Popular in {genre.name}</h2>
          <Link 
            href={`/genre/${genre.id}`}
            className="text-primary hover:underline text-sm font-medium"
          >
            See all
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type Props = {
  genres: Genre[];
};

export default function PopularByGenreRows({ genres }: Props) {
  return (
    <div className="flex flex-col">
      {genres.map(genre => (
        <GenreRow key={genre.id} genre={genre} />
      ))}
    </div>
  );
}
