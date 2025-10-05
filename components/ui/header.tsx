import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Globe, Code2, Shield, Zap, Sparkles, Lightbulb, Palette, GitBranch, Package } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'

export default function Header() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
         
          <Image
            src="/allignet-logo-2.png"
            alt="Aillegent"
            width={220}
            height={66}
            className="h-16 w-auto"
            quality={100} 
            priority
          />
   
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Expertise
            </a>
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
             <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  )
}
