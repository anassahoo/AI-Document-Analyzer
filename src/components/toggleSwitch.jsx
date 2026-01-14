import { useTheme } from "../ThemeContext";

function ToggleSwitch() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <label className="relative inline-flex cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={isDark}
        onChange={toggleTheme}
      />

      <div className="h-8 w-14 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 peer-checked:bg-purple-500 peer-focus:ring-2 peer-focus:ring-purple-300 shadow-sm" />

      <span className="absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 peer-checked:translate-x-6 flex items-center justify-center text-sm">
        {isDark ? "🌙" : "☀️"}
      </span>

      <span className="text-[#1e293b] dark:text-gray-300 font-medium text-sm">
        {isDark ? "Dark" : "Light"}
      </span>
    </label>
  );
}

export default ToggleSwitch;
