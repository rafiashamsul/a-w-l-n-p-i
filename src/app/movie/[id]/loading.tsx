
import Skeleton from '@/@components/ui/Skeleton';

export default function MovieLoading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12 animate-in fade-in duration-500">
      {/* Top Section: Movie Details */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster Skeleton */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
          <Skeleton className="w-full aspect-[2/3] rounded-xl shadow-lg" />
        </div>

        {/* Info Skeleton */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <Skeleton className="h-10 w-3/4 md:w-1/2" />
          
          {/* Rating + Release Date */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>

          {/* Genre Chips */}
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-8 w-20 rounded-full" />
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-16 rounded-full" />
          </div>

          {/* Overview */}
          <div className="space-y-3 pt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-10/12" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-32" /> {/* "Cast" Title */}
        <div className="flex gap-4 overflow-x-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 min-w-[100px]">
              <Skeleton className="w-20 h-20 rounded-full" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>
      </div>

      {/* Similar Movies Section */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" /> {/* "Similar Movies" Title */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="w-full aspect-[2/3] rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
