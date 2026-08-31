import Link from "next/link";
import { ROUTES } from "@/shared/lib/routes";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href={ROUTES.home} className="text-xl font-bold tracking-tight">
          Template Next.js
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href={ROUTES.home}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Tab One
          </Link>
          <Link
            href={ROUTES.home}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Tab Two
          </Link>
        </nav>
      </div>
    </header>
  );
}
