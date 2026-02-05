import Skeleton from "@/@components/ui/Skeleton";
import MovieSkeleton from "@/@components/movie/MovieSkeleton";
import Container from "@/@layouts/Container";

export default function Loading() {
  return (
    <main className="min-h-screen pb-16 bg-background">
      {/* 1) Page heading area */}
      <div className="pt-12 pb-4">
        <Container>
          <Skeleton className="h-10 w-48 mb-2" />
          <Skeleton className="h-4 w-96 max-w-full" />
        </Container>
      </div>

      {/* 2) Top Rated section title + grid skeleton */}
      <section className="py-8">
        <Container>
          <Skeleton className="h-9 w-64 mb-8" />
          <MovieSkeleton count={10} />
        </Container>
      </section>

      {/* 3) Genres list skeleton (chips/rows) */}
      <section className="py-8 bg-neutral-100 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
        <Container>
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 14 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))}
          </div>
        </Container>
      </section>

      {/* 4) A few genre sections (e.g. 3 sections) */}
      {Array.from({ length: 3 }).map((_, i) => (
        <section
          key={i}
          className="py-8 border-b border-neutral-200 dark:border-neutral-800 last:border-0"
        >
          <Container>
            <div className="flex justify-between items-end mb-6">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-5 w-16" />
            </div>
            {/* 5 movie card skeletons per section */}
            <MovieSkeleton count={5} />
          </Container>
        </section>
      ))}
    </main>
  );
}
