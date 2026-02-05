import Container from "@/@layouts/Container";
import Skeleton from "@/@components/ui/Skeleton";

export default function SearchSkeleton() {
  return (
    <div className="py-8">
      <Container>
        {/* Search Result Title Skeleton */}
        <Skeleton className="h-9 w-64 mb-6" />

        {/* Movie Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-neutral-900 rounded-lg shadow overflow-hidden"
            >
              <div className="relative w-full aspect-[2/3] bg-neutral-200 dark:bg-neutral-800">
                <Skeleton className="absolute inset-0 w-full h-full" />
              </div>
              <div className="p-3 space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
