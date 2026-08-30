import { Button } from "@/shared/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
          Template Next.js with Tailwind CSS and TypeScript
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-150 text-balance">
          The Header and Footer components are included in the layout, and the
          Providers component wraps the main content to provide context for
          theming and state management. The Button component is also available
          for use in the application.
        </p>

        <Button size="lg">Click me</Button>
      </div>
    </main>
  );
}
