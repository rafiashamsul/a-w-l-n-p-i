import Image from "next/image";
import { Cast } from "@/@types/tmdb";
import { getProfileUrl } from "@/@utils/tmdbImage";

type CastListProps = {
  cast: Cast[];
};

export default function CastList({ cast }: CastListProps) {
  const topCast = cast.slice(0, 10);

  if (topCast.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Top Cast</h2>
      <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-visible md:pb-0">
        {topCast.map((actor) => (
          <div
            key={actor.id}
            className="flex-shrink-0 w-[140px] md:w-auto bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden"
          >
            <div className="relative w-full aspect-[2/3] bg-neutral-200 dark:bg-neutral-800">
              <Image
                src={getProfileUrl(actor.profile_path)}
                alt={actor.name}
                fill
                sizes="(max-width: 768px) 140px, (max-width: 1024px) 33vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <p className="font-semibold text-foreground text-sm truncate">
                {actor.name}
              </p>
              <p
                className="text-xs text-foreground/60 truncate"
                title={actor.character}
              >
                {actor.character}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
