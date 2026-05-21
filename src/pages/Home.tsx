import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, ShieldCheck, Factory, ExternalLink } from "lucide-react";
import heroImg from "@assets/hero_section_1779134538238.jpg";
import bakeryImg from "@assets/Bakery_and_Food_processing_1779134559009.jpg";
import agriImg from "@assets/Agricultural_machinary_1779134550853.jpg";
import cookingImg from "@assets/comercial_cooking_and_snacks_1779134564684.jpeg";
import commImg from "@assets/commercial_communication_system_1779134570117.webp";
import youtopiaLogo from "@assets/youtopia_logo_transparent.png";

export default function Home() {
  const features = [
    { title: "Certified Quality", description: "All our machinery meets strict industrial standards for durability and performance.", icon: ShieldCheck },
    { title: "On-Site Maintenance", description: "We provide expert installation and local maintenance across Ethiopia.", icon: Factory },
    { title: "Fast Delivery", description: "Extensive local inventory ensures your operations get up and running quickly.", icon: Clock },
  ];

  const categories = [
    {
      name: "Bakery & Food Processing",
      description: "Baking Ovens, Mixers, Dough Processing, and Preparation Equipment.",
      href: "/products?category=Bakery",
      image: bakeryImg,
    },
    {
      name: "Agricultural Machinery",
      description: "Maize Threshers, Chaff Cutters, and Oil Presses.",
      href: "/products?category=Agricultural",
      image: agriImg,
    },
    {
      name: "Commercial Cooking & Snacks",
      description: "Electric Stoves, Induction Cookers, and Snack Equipment.",
      href: "/products?category=Cooking",
      image: cookingImg,
    },
    {
      name: "Communication Systems",
      description: "KU Band Satellite Systems and Communication Devices.",
      href: "/products?category=Communication",
      image: commImg,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-white min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${heroImg})`, filter: "blur(3px) brightness(0.5)", transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-0" />

        <div className="container mx-auto px-4 z-10 pt-24 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/50 text-primary font-semibold text-sm tracking-widest uppercase">
              Ethiopia's Top Industrial Supplier
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-sans leading-tight tracking-tight">
              Powering Your Business with <span className="text-primary">Reliable Machinery.</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
              Welcome to epower - your trusted general electric machinery shop and manufacturing office in Ethiopia. From heavy duty agricultural equipment to commercial bakery systems, we provide the tools that drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 text-lg font-bold">
                <Link href="/products">Browse Our Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8 text-lg font-bold border-white text-white hover:bg-white hover:text-black transition-colors">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-gray-900">Our Product Catalog</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-medium">Browse our extensive selection of industrial and commercial machinery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, idx) => (
              <Link key={idx} href={cat.href}>
                <div className="group relative overflow-hidden cursor-pointer h-72 md:h-80">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-2 leading-tight">{cat.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.description}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <span>Shop Now</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Left column — sticky only on large screens, normal flow on mobile/tablet */}
            <div className="lg:col-span-1 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-gray-900">Engineered for Maximum Performance</h2>
              <div className="w-16 h-1.5 bg-primary mb-6"></div>
              <p className="text-lg text-gray-600 font-medium mb-8">When your business depends on machinery, you can't afford downtime. Epower Trading PLC provides equipment built to last.</p>
              <Button asChild variant="outline" className="rounded-none border-2 border-black text-black hover:bg-black hover:text-white h-12 px-8 font-bold">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-gray-50 p-8 border border-gray-100">
                  <feature.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
              <div className="bg-black p-8 text-white flex flex-col justify-center border-b-4 border-primary">
                <CheckCircle className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">100% Guaranteed</h3>
                <p className="text-gray-400 leading-relaxed">We stand behind every machine we sell with comprehensive local support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-10 blur-3xl pointer-events-none transform scale-150"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Ready to Upgrade Your Operations?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Contact our sales team today for a custom quote on equipment tailored to your specific business needs.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none h-16 px-12 text-xl font-bold shadow-xl shadow-primary/20">
            <Link href="/contact">Request a Quote Today</Link>
          </Button>
        </div>
      </section>

      {/* Powered By Youtopia */}
      <section className="relative bg-gray-50 border-t-4 border-b-4 border-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">

            {/* Left — logo */}
            <div className="shrink-0">
              <img
                src={youtopiaLogo}
                alt="Youtopia Events & Promotion"
                className="h-20 object-contain drop-shadow"
                loading="lazy"
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 bg-gray-300" />

            {/* Right — text + link */}
            <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Powered by</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Youtopia Events &amp; Promotion - Ethiopia's creative digital &amp; events agency.
              </p>
              <a
                href="http://youtopia.et/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-sm px-7 py-2.5 uppercase tracking-widest transition-all"
              >
                Visit Us <ExternalLink size={13} />
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
