import { Movie } from "@/@types/tmdb";
import MovieCard from "@/@components/movie/MovieCard";

type SimilarMoviesProps = {
  movies: Movie[];
};

export default function SimilarMovies({ movies }: SimilarMoviesProps) {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Similar Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
