
export default function Header() {
  return (
    <header className="w-full bg-[#C65A28] px-6 py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          FlavorHub
        </h1>

        <nav aria-label="Dashboard">
          <span className="text-sm font-medium text-white">
            Recipe Dashboard
          </span>
        </nav>
      </div>
    </header>
  );
}
