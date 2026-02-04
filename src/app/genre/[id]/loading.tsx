import Container from "@/@layouts/Container";
import MovieSkeleton from "@/@components/movie/MovieSkeleton";
import Skeleton from "@/@components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="py-8">
      <Container>
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <Skeleton className="h-9 w-48 sm:w-64 mb-2" />
            <Skeleton className="h-5 w-32" />
          </div>
          <div className="w-full md:w-auto">
            <Skeleton className="h-10 w-full md:w-[200px] rounded-md" />
          </div>
        </div>

        {/* Movie Grid Skeleton */}
        <MovieSkeleton count={20} />

        {/* Pagination Skeleton */}
        <div className="flex items-center justify-center gap-4 mt-12 mb-8">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </Container>
    </div>
  );
}
