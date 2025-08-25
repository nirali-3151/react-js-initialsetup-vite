import ThemeToggle from "@components/themeToggle/ThemeToggle";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 border-b bg-[var(--bg)] text-[var(--text)]">
      <h1 className="text-xl font-bold text-[var(--text)]">
        My App
      </h1>
      <div className="flex gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
