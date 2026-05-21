import { useState } from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const productId = match && params?.id ? parseInt(params.id, 10) : null;
  
  const product = products.find(p => p.id === productId);
  
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none">
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen pb-24">
      {/* Breadcrumb Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex items-center text-sm font-medium text-gray-500">
          <Link href="/products" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft size={16} /> All Products
          </Link>
          <span className="mx-3">/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-primary transition-colors">
            {product.category}
          </Link>
          <span className="mx-3">/</span>
          <span className="text-gray-900 truncate max-w-[200px] md:max-w-md">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 border border-gray-200 p-8 flex items-center justify-center">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-square bg-gray-50 border p-2 flex items-center justify-center transition-all ${
                      activeImage === idx ? "border-primary ring-1 ring-primary" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2 inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider w-fit">
              {product.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
              {product.description}
            </p>

            <div className="space-y-6 flex-1">
              <h3 className="text-xl font-bold uppercase tracking-wide border-b-2 border-primary pb-2 inline-block">
                Technical Specifications
              </h3>
              
              <div className="bg-gray-50 border border-gray-200 rounded-none overflow-hidden">
                <table className="w-full text-left text-sm md:text-base">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="hover:bg-white transition-colors">
                        <th className="px-6 py-4 font-bold text-gray-900 w-1/3 bg-gray-100/50">{key}</th>
                        <td className="px-6 py-4 text-gray-700">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none h-16 px-10 text-lg font-bold flex-1">
                <Link href={`/contact?product=${encodeURIComponent(product.name)}`}>Request a Quote</Link>
              </Button>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-gray-600 bg-gray-50 px-6 h-16 border border-gray-200">
                <CheckCircle2 className="text-green-600" size={20} /> Local Warranty
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
