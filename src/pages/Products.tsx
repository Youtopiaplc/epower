import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Search, Filter, ChevronRight, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function Products() {
  const searchParams = new URLSearchParams(window.location.search);
  const initialCategory = searchParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || "All");

  const categories = ["All", "Bakery & Food Processing", "Agricultural Machinery", "Commercial Cooking & Snacks", "Communication Systems"];

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory ||
        product.category.includes(activeCategory);

      return matchesSearch && matchesCategory;
    });

    // Featured products always appear first
    return [...filtered].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-black text-white py-16 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Our Products</h1>
          <p className="text-gray-400 text-lg max-w-2xl font-medium">Browse our comprehensive catalog of industrial machinery engineered for performance and reliability.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-1/4 shrink-0 space-y-8">
            <div className="bg-white p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide flex items-center gap-2">
                <Search size={18} className="text-primary" /> Search
              </h3>
              <Input
                type="search"
                placeholder="Search machinery..."
                className="rounded-none border-gray-300 focus-visible:ring-primary focus-visible:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="bg-white p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide flex items-center gap-2">
                <Filter size={18} className="text-primary" /> Categories
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                      activeCategory === cat || cat.includes(activeCategory)
                        ? "bg-primary text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="w-full lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600 font-medium">Showing {filteredProducts.length} result{filteredProducts.length !== 1 && 's'}</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 text-center border border-gray-200 shadow-sm">
                <p className="text-xl text-gray-500 font-medium">No products found matching your criteria.</p>
                <Button
                  onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                  variant="outline"
                  className="mt-6 rounded-none border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/products/${product.id}`}>
                    <div className={`group bg-white border shadow-sm hover:shadow-xl transition-all cursor-pointer h-full flex flex-col overflow-hidden ${
                      product.featured ? "border-primary ring-1 ring-primary" : "border-gray-200 hover:border-primary"
                    }`}>
                      <div className="aspect-square relative overflow-hidden bg-white p-4 flex items-center justify-center border-b border-gray-100">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {product.featured && (
                          <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2.5 py-1.5 uppercase tracking-wider flex items-center gap-1">
                            <Star size={11} fill="white" /> Top Rated
                          </div>
                        )}
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-bold text-lg leading-tight mb-2 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                          {product.description}
                        </p>
                        <div className="pt-4 border-t border-gray-100 mt-auto flex items-center text-primary font-bold text-sm uppercase tracking-wide">
                          View Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
