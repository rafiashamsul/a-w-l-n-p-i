import 'server-only';
import { Genre, Movie, MovieDetails, Credits, PaginatedResponse } from '@/@types/tmdb'; // Adjust imports as needed

const TMDB_API_KEY = process.env.TMDB_API_KEY || 'YOUR_TMDB_API_KEY';
const TMDB_BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3';

if (!TMDB_API_KEY) throw new Error('TMDB_API_KEY is not set in environment variables.');

type TMDBResponse<T> = T;

type QueryParams = Record<string, string | number | boolean | undefined>;

async function fetcher<T>(endpoint: string, params: QueryParams = {}): Promise<TMDBResponse<T>> {
  const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', TMDB_API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) url.searchParams.append(key, String(value));
  });

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });
    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.status_message || `TMDB API error: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    throw new Error(`TMDB fetch failed: ${(err as Error).message}`);
  }
}

// 1. Get genres
export async function getGenres(): Promise<{ genres: Genre[] }> {
  return fetcher<{ genres: Genre[] }>('/genre/movie/list');
}

// 2. Get top rated movies
export async function getTopRatedMovies(page?: number): Promise<PaginatedResponse<Movie>> {
  return fetcher<PaginatedResponse<Movie>>('/movie/top_rated', { page });
}

// 3. Get popular movies by genre
export async function getPopularMoviesByGenre(genreId: number, page?: number): Promise<PaginatedResponse<Movie>> {
  return fetcher<PaginatedResponse<Movie>>('/discover/movie', {
    with_genres: genreId,
    sort_by: 'popularity.desc',
    page,
  });
}

// 4. Get movies by genre and sort
export async function getMoviesByGenre(
  genreId: number,
  sortBy: string,
  page?: number
): Promise<PaginatedResponse<Movie>> {
  return fetcher<PaginatedResponse<Movie>>('/discover/movie', {
    with_genres: genreId,
    sort_by: sortBy,
    page,
  });
}

// 5. Get movie details
export async function getMovieDetails(movieId: number): Promise<MovieDetails> {
  return fetcher<MovieDetails>(`/movie/${movieId}`);
}

// 6. Get movie credits
export async function getMovieCredits(movieId: number): Promise<Credits> {
  return fetcher<Credits>(`/movie/${movieId}/credits`);
}

// 7. Get similar movies
export async function getSimilarMovies(movieId: number, page?: number): Promise<PaginatedResponse<Movie>> {
  return fetcher<PaginatedResponse<Movie>>(`/movie/${movieId}/similar`, { page });
}

// 8. Search movies
export async function searchMovies(query: string, page?: number): Promise<PaginatedResponse<Movie>> {
  return fetcher<PaginatedResponse<Movie>>('/search/movie', { query, page });
}
