
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
<div>
      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
               <Image
                          src="/allignet-logo-2.png"
                          alt="Aillegent"
                          width={220}
                          height={66}
                          className="h-16 w-auto"
                          quality={100} 
                          priority
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
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                   
                </li>
                <li>
                   <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
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
