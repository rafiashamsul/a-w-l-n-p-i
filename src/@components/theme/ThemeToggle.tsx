"use client";

import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeStore } from "@/@store/theme.store";

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();
  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Tooltip title={`Switch to ${isDark ? "light" : "dark"} mode`}>
      <IconButton
        onClick={handleToggle}
        color="inherit"
        aria-label={`switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
