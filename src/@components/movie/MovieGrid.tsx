import { FC } from 'react';
import { Movie } from '@/@types/tmdb';
import MovieCard from './MovieCard';

type MovieGridProps = {
  movies: Movie[];
};

const MovieGrid: FC<MovieGridProps> = ({ movies }) => (
  <div
    className="
      grid gap-6
      grid-cols-2
      sm:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
    "
  >
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

export default MovieGrid;