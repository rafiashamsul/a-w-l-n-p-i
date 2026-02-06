import Link from "next/link";
import { Genre } from "@/@types/tmdb";
import Container from "@/@layouts/Container";

type Props = {
  genres: Genre[];
};

export default function GenreList({ genres }: Props) {
  if (!genres || genres.length === 0) return null;

  return (
    <section className="py-8 bg-neutral-100 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
      <Container>
        <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
          Browse by Genre
        </h2>
        <div className="flex flex-wrap gap-3">
          {genres.map((genre) => (
            <Link
              key={genre.id}
              href={`/genre/${genre.id}`}
              className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm hover:shadow-md hover:bg-primary hover:text-gray-400 dark:hover:bg-primary transition-all text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
