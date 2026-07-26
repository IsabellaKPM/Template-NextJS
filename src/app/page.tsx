import { Button } from "@/shared/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
          Template Next.js con Tailwind CSS y TypeScript
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-150 text-balance">
          El header y footer ya son modulares. Empieza a crear componentes en su sección correspondiente.
        </p>

        <Button size="lg">Click me</Button>
      </div>
    </main>
  );
}
