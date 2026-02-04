const Footer = () => (
  <footer className="w-full bg-gray-100 dark:bg-gray-900 py-4 mt-8">
    <div className="mx-auto max-w-screen-xl px-4 text-center text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} TMDB Movies. All rights reserved.
    </div>
  </footer>
);

export default Footer;
