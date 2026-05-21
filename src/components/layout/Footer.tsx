import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@assets/Untitled_design_20260403_201627_0000_1775386508261_1779125339572.webp";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div className="space-y-6">
            <img src={logo} alt="Epower Trading PLC" className="h-20 object-contain" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted machinery partner in Ethiopia. We power real businesses with reliable, no-nonsense industrial equipment.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-sans uppercase tracking-wider">Products</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/products?category=Bakery" className="hover:text-primary transition-colors">Bakery & Food Processing</Link></li>
              <li><Link href="/products?category=Agricultural" className="hover:text-primary transition-colors">Agricultural Machinery</Link></li>
              <li><Link href="/products?category=Cooking" className="hover:text-primary transition-colors">Commercial Cooking & Snacks</Link></li>
              <li><Link href="/products?category=Communication" className="hover:text-primary transition-colors">Communication Systems</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-sans uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-sans uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <span>Garad Building, 1st Floor, Office No. 6, Wolo Sefer, Addis Ababa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+251 903 20 20 92</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>Support@epoweret.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-primary shrink-0 mt-0.5" size={18} />
                <span>Monday – Friday: 8:30 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 Epower Trading PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
