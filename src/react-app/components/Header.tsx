import { ThemeToggle } from './ui/theme-toggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}

