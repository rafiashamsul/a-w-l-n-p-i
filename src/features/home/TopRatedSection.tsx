import { Movie } from "@/@types/tmdb";
import MovieGrid from "@/@components/movie/MovieGrid";
import Container from "@/@layouts/Container";
import EmptyState from "@/@components/ui/EmptyState";

type Props = {
  movies: Movie[];
};

export default function TopRatedSection({ movies }: Props) {
  if (!movies || movies.length === 0) {
    return (
      <section className="py-12">
        <Container>
          <EmptyState title="No top rated movies found." />
        </Container>
      </section>
    );
  }

  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
          Top Rated Movies
        </h2>
        <MovieGrid movies={movies} />
      </Container>
    </section>
  );
}
