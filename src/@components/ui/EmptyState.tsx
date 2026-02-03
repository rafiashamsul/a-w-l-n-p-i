import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type EmptyStateProps = {
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
};

const EmptyState = ({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) => (
  <div
    className={twMerge(
      clsx(
        'flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8 w-full',
        'min-h-[200px]'
      )
    )}
    role="status"
  >
    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
      {title}
    </h2>
    {description && (
      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
        {description}
      </p>
    )}
    {actionLabel && actionHref && (
      <Link
        href={actionHref}
        className={twMerge(
          clsx(
            'inline-block px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          )
        )}
      >
        {actionLabel}
      </Link>
    )}
  </div>
);

export default EmptyState;