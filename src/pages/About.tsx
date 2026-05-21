import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, Eye, ShieldCheck, ThumbsUp, Wrench, ArrowRight } from "lucide-react";
import heroImg from "@assets/hero_section_1779134538238.jpg";
import aboutImg from "@assets/about_us_picture_1779158885888.jpg";

export default function About() {
  return (
    <div className="w-full bg-white pb-24">
      {/* Page Header with hero image background — left-aligned */}
      <div className="relative text-white py-24 border-b-4 border-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ backgroundImage: `url(${heroImg})`, filter: "blur(3px) brightness(0.4)", transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">About epower</h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Ethiopia's leading supplier of industrial and commercial machinery.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-1">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900">
              Building Businesses with <span className="text-primary">ePower</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary"></div>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              ePower is a premier general electric machinery shop and manufacturing office located in the heart of Addis Ababa. We specialize in sourcing, manufacturing, and supplying high grade electrical and mechanical equipment tailored for industrial, commercial, and agricultural applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Whether you are outfitting a large scale commercial bakery, upgrading your agricultural processing, or setting up a modern commercial kitchen, ePower delivers the reliable technology you need. We understand that in commercial environments, downtime equals lost revenue.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Over the years, we have grown to become the trusted partner for commercial bakeries, vast agricultural operations, and busy kitchens. We don't just sell equipment, we provide the operational backbone that powers real businesses.
            </p>
          </div>

          <div className="relative order-2 max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3"></div>
            <img
              src={aboutImg}
              alt="Epower Trading PLC — Agricultural Operations"
              className="relative z-10 w-full h-auto object-cover border-4 border-black"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4">Mission & Vision</h2>
            <div className="w-16 h-1.5 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 border border-gray-200 shadow-sm hover:border-primary transition-colors">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-wide mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower local industries, farmers, and commercial entrepreneurs by providing accessible, high performance machinery. We are committed to delivering engineering excellence and reliable local support to ensure every client has the exact tools they need to operate successfully.
              </p>
            </div>

            <div className="bg-black text-white p-10 border border-black shadow-sm">
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-wide mb-4">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To be the cornerstone of commercial and industrial growth in Ethiopia, recognized as the premier and most trusted destination for manufacturing solutions and heavy duty machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4">Core Values</h2>
            <div className="w-16 h-1.5 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6">
              <ShieldCheck className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Reliability</h3>
              <p className="text-gray-600 font-medium">Delivering machines that work as hard as you do, day in and day out.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <ThumbsUp className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Quality First</h3>
              <p className="text-gray-600 font-medium">Ensuring strict performance standards across every product line we carry.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Wrench className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Local Support</h3>
              <p className="text-gray-600 font-medium">Dedicated on the ground support directly from our Addis Ababa office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ backgroundImage: `url(${heroImg})`, filter: "brightness(0.2)", transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-0" />
        <div className="relative z-10 py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Ready to work together?</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Partner With Us</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-gray-200 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Have questions about a machine? Need technical specifications or a price quote? Our team in Addis Ababa is ready to help you find the right equipment for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-none h-14 px-10 text-lg font-bold transition-all">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none h-14 px-10 text-lg font-bold transition-all">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
