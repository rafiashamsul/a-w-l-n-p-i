import { Metadata } from "next";
import { searchMovies } from "@/@services/tmdb";
import { Movie } from "@/@types/tmdb";
import SearchResults from "@/features/search/SearchResults";
import {
  SearchEmptyState,
  SearchErrorState,
  SearchInitialState,
} from "@/features/search/SearchStates";

type SearchPageProps = {
  searchParams: Promise<{ q?: string; page?: string }>;
};

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q
      ? `Search results for "${q}" - TMDB Discovery`
      : "Search Movies - TMDB Discovery",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q, page } = await searchParams;
  const currentPage = Number(page) || 1;
  const query = q?.trim() || "";

  if (!query) {
    return <SearchInitialState />;
  }

  let results: Movie[] = [];
  let totalPages = 0;
  let error = null;

  try {
    const data = await searchMovies(query, currentPage);
    results = data.results;
    totalPages = data.total_pages;
  } catch (err) {
    console.error("Search error:", err);
    error = err;
  }

  if (error) {
    return <SearchErrorState />;
  }

  if (results.length === 0) {
    return <SearchEmptyState query={query} />;
  }

  return (
    <SearchResults
      movies={results}
      query={query}
      page={currentPage}
      totalPages={Math.min(totalPages, 500)}
    />
  );
}
