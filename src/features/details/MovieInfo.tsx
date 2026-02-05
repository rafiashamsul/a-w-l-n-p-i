import Image from "next/image";
import { MovieDetails } from "@/@types/tmdb";
import { getPosterUrl } from "@/@utils/tmdbImage";

type MovieInfoProps = {
  movie: MovieDetails;
};

export default function MovieInfo({ movie }: MovieInfoProps) {
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Poster */}
      <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 relative aspect-[2/3] rounded-xl overflow-hidden shadow-lg bg-neutral-200 dark:bg-neutral-800">
        <Image
          src={getPosterUrl(movie.poster_path, "w500")}
          alt={movie.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold  mb-2">
            {movie.title}{" "}
            <span className="text-neutral-500 font-normal">
              ({releaseYear})
            </span>
          </h1>
          {movie.tagline && (
            <p className="text-lg text-neutral-500 dark:text-neutral-400 italic">
              {movie.tagline}
            </p>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="font-semibold text-foreground/80">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
          <span className="text-neutral-300">•</span>
          <span className="text-foreground/80">{movie.release_date}</span>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700"
            >
              {genre.name}
            </span>
          ))}
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">Overview</h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
