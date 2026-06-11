import { Button } from "@components/shared/Button/Button";
import { useThemeContext } from "@context/ThemeContext/ThemeContext";

export const Preferences = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto text-slate-900 dark:text-slate-100">
      <h1 className="w-full text-4xl font-bold text-left">Preferences</h1>

      <div className="max-w-xl p-5 mt-6 bg-white border shadow-sm rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <h2 className="mb-2 text-2xl font-bold">Appearance</h2>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
          Change between light mode and dark mode. Your choice is saved after refresh.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <span className="font-semibold capitalize">Current theme: {theme}</span>
          <Button type="button" onClick={toggleTheme}>
            Switch to {theme === "dark" ? "Light" : "Dark"} Mode
          </Button>
        </div>
      </div>
    </div>
  );
};
