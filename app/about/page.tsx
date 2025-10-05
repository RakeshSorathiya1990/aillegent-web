import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/">
            <Image
              src="/allignet-logo-2.png"
              alt="Aillegent"
              width={220}
              height={66}
              className="h-16 w-auto"
              quality={100}
              priority
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="/#expertise"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Expertise Test
            </a>
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

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
              About <span className="text-primary">Aillegent</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              At Aillegent, we are a team of experts dedicated to transforming
              ideas into intelligent digital solutions. With over 10 years of
              industry expertise, we specialize in delivering end-to-end
              technology services including Product Strategy & Architecture,
              Custom Software Development, AI-Powered Engineering, UX/UI Design
              & Development, DevOps & Cloud Delivery, and Developer Enablement.
            </p>
          </div>

          {/* Image representing growth and success */}
          <div className="flex-1 relative w-full h-[300px] md:h-[400px]">
            <Image
              src="https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?_gl=1*gjm8me*_ga*MTk1MzUzODE2Ni4xNzU5NjYxNTMw*_ga_8JE65Q40S6*czE3NTk2NjE1MzAkbzEkZzEkdDE3NTk2NjE2NzUkajU5JGwwJGgw" // Replace with your actual image path
              alt="Growth and Success"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Who We Serve */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Who We Serve</h2>
          <p className="text-muted-foreground text-base">
            We partner with startups, small businesses, and enterprises to help
            them turn visionary ideas into scalable digital products. From
            guiding business expansion and building future roadmaps to
            stabilizing and optimizing enterprise solutions — we bring
            technology and innovation together to accelerate growth.
          </p>
        </Card>

        {/* Our Mission */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-base">
            We are deeply focused on delivering modern, scalable, and compatible
            solutions that empower our clients and partners to achieve their
            vision. At Aillegent, we take time to understand your business
            goals, crafting tailored solutions that drive success today and
            shape the technology of tomorrow.
          </p>
        </Card>
      </div>

      <Footer></Footer>
    </div>
  );
}
