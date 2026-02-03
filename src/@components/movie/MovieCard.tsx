import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { getPosterUrl } from '@/@utils/tmdbImage';
import { Movie } from '@/@types/tmdb';
import WatchLaterButton from './WatchLaterButton';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const releaseDate =
    movie.release_date && movie.release_date.trim() !== ''
      ? new Date(movie.release_date).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : 'N/A';

  return (
    <div className="relative group">
      <Link
        href={`/movie/${movie.id}`}
        className={twMerge(
          'block bg-white dark:bg-neutral-900 rounded-lg shadow hover:shadow-lg transition-all overflow-hidden',
          'focus:outline-none focus:ring-2 focus:ring-primary'
        )}
      >
        <div className="relative w-full aspect-[2/3] bg-neutral-200 dark:bg-neutral-800">
          <Image
            src={getPosterUrl(movie.poster_path)}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute top-2 right-2 z-10">
            <WatchLaterButton movie={movie} />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-base font-semibold truncate mb-1">{movie.title}</h3>
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 gap-2">
            <span className="font-medium text-yellow-600 dark:text-yellow-400">
              ★ {movie.vote_average?.toFixed(1) ?? 'N/A'}
            </span>
            <span className="mx-1">•</span>
            <span>{releaseDate}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;