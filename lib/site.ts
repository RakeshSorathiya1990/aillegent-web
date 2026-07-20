export const site = {
  name: "Aillegent",
  url: "https://aillegent.com",
  tagline: "Product Engineering, AI, Cloud & Quality",
  description:
    "Build, deploy, test, and optimise intelligent digital products with Aillegent — from rapid MVP to enterprise-scale production.",
  email: "info@aillegent.com",
  phone: "+91 90283 21652",
  phoneHref: "+919028321652",
  location: "Gandhinagar, India",
  ogImage: "/img/og-cover.jpg",
  linkedin: "https://www.linkedin.com/company/aillegent/",
} as const

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export const services = [
  { slug: "product-engineering", title: "Product Engineering" },
  { slug: "applied-ai", title: "Applied AI" },
  { slug: "data-engineering", title: "Data Engineering" },
  { slug: "cloud-platform", title: "Cloud & Platform" },
  { slug: "quality-engineering", title: "Quality Engineering" },
  { slug: "cost-optimisation", title: "Cost Optimisation" },
] as const

export const products = [
  { slug: "shilp", title: "Shilp" },
  { slug: "eventik", title: "Eventik" },
  { slug: "permit360", title: "Permit360" },
] as const

export const industries = [
  { slug: "finance", title: "Finance" },
  { slug: "intellectual-property", title: "Intellectual Property" },
  { slug: "advertising-technology", title: "Advertising Technology" },
  { slug: "recruitment", title: "Recruitment" },
] as const
