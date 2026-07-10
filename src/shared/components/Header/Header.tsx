import Link from "next/link";
import { ROUTES } from "@/shared/lib/routes";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-neutral-800 dark:bg-zinc-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={ROUTES.home} className="text-xl font-bold tracking-tight">
          Template Next.js
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href={ROUTES.home}
            className="inline-flex items-center leading-none hover:text-gray-600 dark:hover:text-gray-300"
          >
            Tab One
          </Link>
          <Link
            href={ROUTES.home}
            className="inline-flex items-center leading-none hover:text-gray-600 dark:hover:text-gray-300"
          >
            Tab Two
          </Link>
        </nav>
      </div>
    </header>
  );
}
