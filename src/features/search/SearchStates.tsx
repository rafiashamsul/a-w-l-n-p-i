import { FC } from "react";
import Container from "@/@layouts/Container";
import EmptyState from "@/@components/ui/EmptyState";

export const SearchInitialState: FC = () => (
  <div className="py-8">
    <Container>
      <EmptyState
        title="Start typing to search movies"
        description="Enter a movie title in the search bar to find movies."
      />
    </Container>
  </div>
);

export const SearchErrorState: FC = () => (
  <div className="py-8">
    <Container>
      <h1 className="text-2xl font-bold mb-6 text-foreground">
        Search Results
      </h1>
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
        <h3 className="text-lg font-medium text-red-800 dark:text-red-200 mb-2">
          Failed to load search results
        </h3>
        <p className="text-red-600 dark:text-red-300">
          There was an error searching for movies. Please try again later.
        </p>
      </div>
    </Container>
  </div>
);

type SearchEmptyStateProps = {
  query: string;
};

export const SearchEmptyState: FC<SearchEmptyStateProps> = ({ query }) => (
  <div className="py-8">
    <Container>
      <h1 className="text-2xl font-bold mb-6 text-foreground">
        Search Results for &quot;{query}&quot;
      </h1>
      <EmptyState
        title={`No results found for "${query}"`}
        description="Try adjusting your search terms or look for something else."
        actionLabel="Go to Home"
        actionHref="/"
      />
    </Container>
  </div>
);
