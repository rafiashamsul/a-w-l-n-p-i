"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SORT_OPTIONS = [
  { value: "popularity.desc", label: "Popularity" },
  { value: "primary_release_date.desc", label: "Release Date" },
  { value: "vote_average.desc", label: "Rating" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

const SortDropdown: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sortBy") || "popularity.desc";

  const handleChange = (event: SelectChangeEvent) => {
    const newSort = event.target.value;
    const params = new URLSearchParams(searchParams.toString());

    params.set("sortBy", newSort);
    params.set("page", "1"); // Reset to page 1 on sort change

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="min-w-[200px]">
      <FormControl
        fullWidth
        size="small"
        className="bg-white dark:bg-neutral-800 rounded-md"
      >
        <Select
          value={currentSort}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Sort by" }}
          sx={{
            ".MuiSelect-select": {
              py: 1,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(128, 128, 128, 0.2)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(128, 128, 128, 0.4)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2563EB", // blue-600
            },
            color: "inherit",
          }}
          className="text-foreground"
          MenuProps={{
            PaperProps: {
              className: "dark:bg-neutral-800 text-foreground",
            },
          }}
        >
          {SORT_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SortDropdown;
