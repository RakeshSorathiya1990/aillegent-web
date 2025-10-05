import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import { ArrowRight, Globe, Code2, Shield, Zap, Sparkles, Lightbulb, Palette, GitBranch, Package } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Header */}
   <Header></Header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Turn Vision into Reality</h1>

            <p className="text-lg md:text-xl font-medium text-foreground text-pretty">
              We aim to deliver world-class software solutions precisely aligned with your market demands.
            </p>

            <div className="flex justify-center py-4">
              <Image
                src="/vision-to-reality-simple.jpg"
                alt="Turn Vision into Reality"
                width={200}
                height={200}
                className="w-auto h-auto max-w-[200px] rounded-lg shadow-lg"
                priority
              />
            </div>



            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Our team aligns with your vision and objectives, driving innovative solutions to achieve them. We
              specialize in building scalable, end-to-end enterprise applications using modern, cutting-edge
              technologies and proven methodologies.
            </p>

            <div className="flex items-center justify-center pt-2">
              <Button size="lg" className="text-base px-8">
                  <Link href="/contact"> Schedule a Consultation</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

      </section>


      {/* Stats Section */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground">Years of Expertise</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Production-Ready Solutions</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Enterprise Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              By harnessing AI, we accelerate product delivery while concentrating on what matters most — robust
              architecture and high-impact business features — with minimal manual coding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AI-Accelerated Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                We leverage AI tools to automate repetitive coding tasks, allowing our team to focus on critical
                architecture decisions and business logic that truly matter.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Collaborative Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner with you throughout the development lifecycle, ensuring your vision is fully understood and
                translated into innovative, high-quality software solutions that exceed expectations.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Architecture & High-Impact Features</h3>
              <p className="text-muted-foreground leading-relaxed">
                With AI handling boilerplate code, we dedicate more time to designing scalable, maintainable
                architectures and features that deliver real business value and competitive advantage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-24 bg-card">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive solutions to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card id="service-strategy" className="p-8 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Product Strategy & Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Define a clear vision and build a scalable, future-ready foundation with expert product planning and
                technical architecture.
              </p>
            </Card>

            <Card id="service-development" className="p-8 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Custom Software Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deliver tailored, full-lifecycle software solutions — from concept to deployment — using modern
                technologies and agile practices.
              </p>
            </Card>

            <Card id="service-ai" className="p-8 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AI-Powered Engineering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accelerate development, reduce manual effort, and unlock smarter features with intelligent, AI-driven
                solutions.
              </p>
            </Card>

            <Card id="service-design" className="p-8 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">UX/UI Design & Engineering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Craft user-centric interfaces and seamless experiences that enhance engagement and drive business value.
              </p>
            </Card>


            <Card id="service-devops" className="p-8 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">DevOps & Cloud Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enable faster, more reliable releases with CI/CD automation, cloud-native deployments, and scalable
                infrastructure management.
              </p>
            </Card>

            <Card id="service-enablement" className="p-8 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Developer Enablement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build reusable libraries and SDKs that simplify integration, promote consistency, and empower developers
                internally or externally.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">Industry Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Extensive technical expertise spanning various industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                  "Ad Platforms",
                  "E-commerce",
                   "Finance",
                   "Health & Insurance",
                   "Intellectual Property",
                   "Travel",
             
              ].map((domain) => (
                <Card key={domain} className="p-6 text-center hover:border-primary transition-colors">
                  <div className="font-medium">{domain}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

     
      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose Aillegent</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              By combining strategic business insights with technical expertise, we help clients build efficient,
              high-quality software products that maximize value with minimal resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Production-Grade Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                We deliver enterprise-ready solutions built with industry best practices, rigorous testing, and proven
                methodologies that ensure reliability and scalability.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Proven Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team brings 10+ years of professional experience delivering mission-critical software solutions
                across diverse industries and complex technical challenges.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Full-Cycle Partnership</h3>
              <p className="text-muted-foreground leading-relaxed">
                From strategic planning to deployment and ongoing maintenance, we provide comprehensive support to
                ensure your software continues to deliver value long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to transform your vision?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Let's discuss how we can help you build scalable solutions that add value to your business.
            </p>
            <div className="flex items-center justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-base px-8">
                 <Link href="/contact"> Schedule a Consultation</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
     <Footer></Footer>
    </div>
  )
}
