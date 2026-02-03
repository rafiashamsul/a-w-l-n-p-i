import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type ErrorStateProps = {
  title?: string;
  description?: string;
  onRetry?: () => void;
};

const ErrorState = ({
  title = 'Something went wrong',
  description,
  onRetry,
}: ErrorStateProps) => (
  <div
    className={twMerge(
      clsx(
        'flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8 w-full',
        'min-h-[200px]'
      )
    )}
    role="alert"
  >
    <h2 className="text-lg sm:text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
      {title}
    </h2>
    {description && (
      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
        {description}
      </p>
    )}
    {onRetry && (
      <button
        type="button"
        onClick={onRetry}
        className={twMerge(
          clsx(
            'inline-block px-4 py-2 rounded bg-red-600 text-white font-medium hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
          )
        )}
      >
        Retry
      </button>
    )}
  </div>
);

export default ErrorState;