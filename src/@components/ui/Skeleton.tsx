import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type SkeletonProps = {
  className?: string;
};

const Skeleton = ({ className }: SkeletonProps) => (
  <div
    className={twMerge(
      clsx(
        'bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse',
        className
      )
    )}
    aria-busy="true"
    aria-label="Loading"
  />
);

export default Skeleton;