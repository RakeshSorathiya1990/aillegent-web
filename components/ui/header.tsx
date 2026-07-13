import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Header */}
      <header>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/allignet-logo-2.png"
              alt="Aillegent"
              width={220}
              height={66}
              className="h-16 w-auto"
              quality={100}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
             <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#expertise"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Expertise
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
