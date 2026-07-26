export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Template Next.js. Todos los derechos reservados.
        </p>

        <p className="text-center sm:text-right">
          Construido con Next.js, TypeScript y Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
