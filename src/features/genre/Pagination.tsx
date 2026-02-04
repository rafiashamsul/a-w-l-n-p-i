'use client';

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type PaginationProps = {
  page: number;
  totalPages: number;
};

const Pagination: FC<PaginationProps> = ({ page, totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());

    router.push(`?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-12 mb-8">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
        className={twMerge(
          'p-2 rounded-full transition-colors flex items-center justify-center',
          'border border-neutral-200 dark:border-neutral-700',
          page <= 1
            ? 'opacity-50 cursor-not-allowed text-neutral-400'
            : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200'
        )}
      >
        <KeyboardArrowLeftIcon />
      </button>

      <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
        className={twMerge(
          'p-2 rounded-full transition-colors flex items-center justify-center',
          'border border-neutral-200 dark:border-neutral-700',
          page >= totalPages
            ? 'opacity-50 cursor-not-allowed text-neutral-400'
            : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200'
        )}
      >
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
