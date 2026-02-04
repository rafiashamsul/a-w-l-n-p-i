import { FC, ReactNode } from 'react';

type GenreHeaderProps = {
  title: string;
  movieCount?: number;
  children?: ReactNode;
};

const GenreHeader: FC<GenreHeaderProps> = ({ title, movieCount, children }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">
          {title}
        </h1>
        {movieCount !== undefined && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Showing {movieCount} movies
          </p>
        )}
      </div>
      {children && (
        <div className="w-full md:w-auto">
          {children}
        </div>
      )}
    </div>
  );
};

export default GenreHeader;
