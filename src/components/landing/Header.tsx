import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">SBTC</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#interest-form">Register Interest</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
