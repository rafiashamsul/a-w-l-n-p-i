"use client";
import { FC, MouseEvent } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Movie } from "@/@types/tmdb";
import { useWatchLaterStore } from "@/@store/watchLater.store";

type WatchLaterButtonProps = {
  movie: Movie;
};

const WatchLaterButton: FC<WatchLaterButtonProps> = ({ movie }) => {
  const { isWatchLater, toggleWatchLater } = useWatchLaterStore();
  const saved = isWatchLater(movie.id);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWatchLater(movie);
  };

  return (
    <Tooltip title={saved ? "Remove from Watch Later" : "Add to Watch Later"}>
      <IconButton
        size="small"
        color={saved ? "primary" : "default"}
        onClick={handleClick}
        aria-label={saved ? "Remove from Watch Later" : "Add to Watch Later"}
        className="bg-white/80 backdrop-blur rounded-full shadow"
      >
        {saved ? (
          <BookmarkAddedIcon fontSize="small" />
        ) : (
          <BookmarkAddOutlinedIcon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default WatchLaterButton;
