import { getGenres, getMoviesByGenre } from "@/@services/tmdb";
import MovieGrid from "@/@components/movie/MovieGrid";
import Container from "@/@layouts/Container";
import EmptyState from "@/@components/ui/EmptyState";
import ErrorState from "@/@components/ui/ErrorState";
import GenreHeader from "@/features/genre/GenreHeader";
import SortDropdown from "@/features/genre/SortDropdown";
import Pagination from "@/features/genre/Pagination";

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ sortBy?: string; page?: string }>;
};

export default async function GenrePage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const sortBy = resolvedSearchParams.sortBy || "popularity.desc";
  const page = Number(resolvedSearchParams.page) || 1;
  const genreId = Number(id);

  if (isNaN(genreId)) {
    return (
      <Container>
        <ErrorState
          title="Invalid Genre"
          description="The genre ID provided is invalid."
        />
      </Container>
    );
  }

  // Fetch genres and movies in parallel
  const [genresData, moviesData] = await Promise.all([
    getGenres().catch(() => null),
    getMoviesByGenre(genreId, sortBy, page).catch(() => null),
  ]);

  if (!genresData || !genresData.genres) {
    return (
      <Container>
        <ErrorState
          title="Error loading genres"
          description="Could not fetch genre information."
        />
      </Container>
    );
  }

  const genre = genresData.genres.find((g) => g.id === genreId);

  if (!genre) {
    return (
      <Container>
        <ErrorState
          title="Genre not found"
          description={`Could not find a genre with ID ${id}.`}
        />
      </Container>
    );
  }

  const movies = moviesData?.results || [];
  const totalPages = moviesData?.total_pages || 0;
  const totalResults = moviesData?.total_results || 0;

  return (
    <div className="py-8">
      <Container>
        <GenreHeader title={genre.name} movieCount={totalResults}>
          <SortDropdown />
        </GenreHeader>

        {movies.length > 0 ? (
          <>
            <MovieGrid movies={movies} />
            <Pagination page={page} totalPages={Math.min(totalPages, 500)} />
          </>
        ) : (
          <EmptyState
            title="No movies found"
            description="We couldn't find any movies for this genre."
          />
        )}
      </Container>
    </div>
  );
}
