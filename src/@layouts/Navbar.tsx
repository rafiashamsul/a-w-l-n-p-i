"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
      setMobileOpen(false);
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Recently Viewed", href: "/recently-viewed" },
    { label: "Watch Later", href: "/watch-later" },
  ];

  const isActive = (path: string) => pathname === path;

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <Image
            src="/logo.svg"
            alt="TMDB Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span>TMDB Movies</span>
        </div>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={isActive(item.href)}
              onClick={handleDrawerToggle}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "rgba(37, 99, 235, 0.1)",
                  color: "#2563EB",
                  "&:hover": {
                    bgcolor: "rgba(37, 99, 235, 0.2)",
                  },
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActive(item.href) ? "bold" : "medium",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-between h-16">
        {/* Mobile Menu Button */}
        <div className="md:hidden mr-2">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="text-gray-700 dark:text-gray-200"
          >
            <MenuIcon />
          </IconButton>
        </div>

        {/* Logo / Home */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-700 transition group"
        >
          <Image
            src="/logo.svg"
            alt="TMDB Logo"
            width={32}
            height={32}
            className="rounded-md transform group-hover:scale-105 transition-transform duration-200"
          />
          <span className="hidden sm:inline">TMDB Movies</span>
          <span className="sm:hidden">TMDB</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-semibold"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Search */}
        <form
          className="relative flex items-center w-full max-w-[200px] md:max-w-[260px] ml-4"
          role="search"
          aria-label="Search movies"
          onSubmit={handleSearch}
        >
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
              <SearchIcon fontSize="small" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search movies..."
              className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm rounded-full pl-10 pr-4 py-2 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all duration-200 outline-none placeholder-gray-500"
              autoComplete="off"
            />
          </div>
        </form>

        {/* Mobile Drawer */}
        <nav>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 280,
                bgcolor: "background.paper",
                backgroundImage: "none",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
