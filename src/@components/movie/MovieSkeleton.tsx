import { FC } from 'react';
import Skeleton from '@/@components/ui/Skeleton';

type MovieSkeletonProps = {
  count?: number;
};

const MovieSkeleton: FC<MovieSkeletonProps> = ({ count = 10 }) => (
  <div
    className="
      grid gap-6
      grid-cols-2
      sm:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
    "
  >
    {Array.from({ length: count }).map((_, idx) => (
      <div key={idx} className="bg-white dark:bg-neutral-900 rounded-lg shadow overflow-hidden">
        <div className="relative w-full aspect-[2/3] bg-neutral-200 dark:bg-neutral-800">
          <Skeleton className="absolute inset-0 w-full h-full" />
          <div className="absolute top-2 right-2 z-10">
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
        </div>
        <div className="p-3">
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    ))}
  </div>
);

export default MovieSkeleton;