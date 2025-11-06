export type NavigationVariant = "button" | "link";

export interface NavigationLink {
  label: string;
  href: string;
  variant?: NavigationVariant;
}

export interface SiteSettings {
  siteTitle: string;
  siteTagline: string;
  metaDescription: string;
  navigation: NavigationLink[];
  footerLinks: NavigationLink[];
  contactEmail: string;
  contactPhone: string;
  location: string;
  socials: NavigationLink[];
}

export const siteSettings: SiteSettings = {
  siteTitle: "Wadeh AI Automation Agency",
  siteTagline: "Next-generation automation for emerging markets",
  metaDescription:
    "A next-generation AI automation agency based in Ethiopia. Wadeh AI builds intelligent systems that simplify workflows, boost productivity, and unlock growth for emerging markets.",
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact", variant: "button" },
  ],
  footerLinks: [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ],
  contactEmail: "abdulfetahjemal7se@gmail.com",
  contactPhone: "+251961219838",
  location: "Addis Ababa, Ethiopia",
  socials: [
    { label: "Telegram", href: "https://t.me/the_wadeh", variant: "link" },
    { label: "WhatsApp", href: "https://wa.me/251961219838", variant: "link" },
    { label: "LinkedIn", href: "https://linkedin.com/in/wadeh-life", variant: "link" },
  ],
};
