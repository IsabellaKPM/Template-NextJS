export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-neutral-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Template Next.js. Todos los derechos
          reservados.
        </p>
        <p>Construido con Next.js, TypeScript y Tailwind CSS</p>
      </div>
    </footer>
  );
}
