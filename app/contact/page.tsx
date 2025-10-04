import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/">
            <Image
              src="/aillegent-logo.jpg"
              alt="Aillegent"
              width={220}
              height={66}
              className="h-16 w-auto"
              quality={100}
              priority
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="/#expertise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Expertise Test
            </a>
            <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button size="sm" asChild>
              <a href="/contact">Contact</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ready to transform your vision into reality? Let's discuss how we can help you build world-class software
            solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and how we can help..."
                    className="min-h-32"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">contact@aillegent.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-muted-foreground">Remote-first team serving clients globally</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image
                src="/aillegent-logo.jpg"
                alt="Aillegent"
                width={220}
                height={66}
                className="h-16 w-auto"
                quality={100}
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transforming visions into reality with enterprise-grade solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/#service-strategy" className="hover:text-foreground transition-colors">
                    Product Strategy & Architecture
                  </a>
                </li>
                <li>
                  <a href="/#service-development" className="hover:text-foreground transition-colors">
                    Custom Software Development
                  </a>
                </li>
                <li>
                  <a href="/#service-ai" className="hover:text-foreground transition-colors">
                    AI-Powered Engineering
                  </a>
                </li>
                <li>
                  <a href="/#service-design" className="hover:text-foreground transition-colors">
                    UX/UI Design & Engineering
                  </a>
                </li>
                <li>
                  <a href="/#service-devops" className="hover:text-foreground transition-colors">
                    DevOps & Cloud Delivery
                  </a>
                </li>
                <li>
                  <a href="/#service-enablement" className="hover:text-foreground transition-colors">
                    Developer Enablement
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Aillegent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
