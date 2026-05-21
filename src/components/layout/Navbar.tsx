import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@assets/Untitled_design_20260403_201627_0000_1775386508261_1779125339572.webp";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-background shadow-sm">
      <div className="container mx-auto px-4 h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src={logo} alt="Epower Trading PLC" className="h-20 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors hover:text-primary ${
                location === link.path ? "text-primary border-b-2 border-primary py-1" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-none">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-28 left-0 w-full bg-white dark:bg-background border-b shadow-lg flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block px-4 py-2 font-medium ${
                location === link.path ? "text-primary border-l-4 border-primary bg-gray-50 dark:bg-gray-900" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t">
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-none">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
