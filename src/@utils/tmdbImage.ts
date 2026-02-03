
const TMDB_IMAGE_BASE_URL = process.env.TMDB_IMAGE_BASE_URL || 'https://image.tmdb.org/t/p';

export function getPosterUrl(
  path?: string | null,
  size: 'w342' | 'w500' | 'original' = 'w500'
): string {
  if (!path) return '/placeholder.svg';
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

export function getProfileUrl(
  path?: string | null,
  size: 'w185' | 'w342' | 'original' = 'w185'
): string {
  if (!path) return '/avatar-placeholder.svg';
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}