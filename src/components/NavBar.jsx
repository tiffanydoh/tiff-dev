import { useState } from "react";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex justify-evenly m-16">
      {/* Brand */}
      <span className="font-mono text-sm font-medium text-green-700">
        tiffany do
      </span>

      {/* Nav links */}
      <ul className="flex gap-8 list-none">
        <li>
          <a
            href="#experience"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="text-sm text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 hover:border-gray-400 transition-colors"
      >
        {darkMode ? "☀" : "☾"}
      </button>
    </nav>
  );
}
