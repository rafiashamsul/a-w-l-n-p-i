import { FC } from "react";
import { Movie } from "@/@types/tmdb";
import MovieCard from "@/@components/movie/MovieCard";
import Container from "@/@layouts/Container";
import Pagination from "@/features/genre/Pagination";

type SearchResultsProps = {
  movies: Movie[];
  query: string;
  page: number;
  totalPages: number;
};

const SearchResults: FC<SearchResultsProps> = ({
  movies,
  query,
  page,
  totalPages,
}) => {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
          Search Results for &quot;{query}&quot;
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} />
      </Container>
    </div>
  );
};

export default SearchResults;
