import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type SkeletonProps = {
  className?: string;
};

const Skeleton = ({ className }: SkeletonProps) => (
  <div
    className={twMerge(
      clsx(
        'bg-gray-200 dark:bg-gray-700 rounded animate-pulse',
        className
      )
    )}
    aria-busy="true"
    aria-label="Loading"
  />
);

export default Skeleton;