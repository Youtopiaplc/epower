import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import heroImg from "@assets/hero_section_1779134538238.jpg";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  productInterested: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const searchParams = new URLSearchParams(window.location.search);
  const initialProduct = searchParams.get("product") || "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      productInterested: "",
      message: initialProduct ? `I am interested in getting a quote for: ${initialProduct}` : "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Here you would normally send to your backend API
      // For now, we'll simulate an API call and log to console
      console.log("Form submitted:", values);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thank you! We'll be in touch shortly.",
        className: "bg-green-50 border-green-200 text-green-900",
      });
      
      form.reset({
        fullName: "",
        email: "",
        phone: "",
        productInterested: "",
        message: "",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gray-50 pb-24">
      {/* Page Header with hero image background — left-aligned */}
      <div className="relative text-white py-24 border-b-4 border-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ backgroundImage: `url(${heroImg})`, filter: "blur(3px) brightness(0.4)", transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Contact Us</h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Have questions about a specific machine? Need technical specifications or a price quote? Reach out to our support team today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-6">Get In Touch</h2>

            <div className="bg-white p-6 border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wide text-sm mb-1 text-gray-900">Head Office</h4>
                <p className="text-gray-600 font-medium">Garad Building, 1st Floor, Office No. 6, Wolo Sefer, Addis Ababa</p>
              </div>
            </div>

            <div className="bg-white p-6 border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wide text-sm mb-1 text-gray-900">Phone</h4>
                <p className="text-gray-600 font-medium">+251 903 20 20 92</p>
              </div>
            </div>

            <div className="bg-white p-6 border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wide text-sm mb-1 text-gray-900">Email</h4>
                <p className="text-gray-600 font-medium">Support@epoweret.com</p>
              </div>
            </div>

            <div className="bg-white p-6 border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wide text-sm mb-1 text-gray-900">Business Hours</h4>
                <p className="text-gray-600 font-medium">Monday – Friday<br/>8:30 AM – 6:00 PM</p>
              </div>
            </div>

            <a
              href="https://wa.me/251903202092"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] p-6 border border-[#1ebe5d] shadow-sm flex items-start gap-4 hover:bg-[#1ebe5d] transition-colors group"
            >
              <div className="w-12 h-12 bg-white/20 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wide text-sm mb-1 text-white">WhatsApp</h4>
                <p className="text-white/90 font-medium">+251 903 20 20 92</p>
                <p className="text-white/70 text-xs mt-1 group-hover:text-white transition-colors">Tap to chat directly</p>
              </div>
            </a>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-8">Send an Inquiry</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-gray-700">Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="rounded-none border-gray-300 focus-visible:ring-primary h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-gray-700">Email Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" type="email" className="rounded-none border-gray-300 focus-visible:ring-primary h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-gray-700">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+251..." className="rounded-none border-gray-300 focus-visible:ring-primary h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productInterested"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-gray-700">Product Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none border-gray-300 focus:ring-primary h-12">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none border-gray-200">
                            <SelectItem value="Bakery & Food Processing">Bakery & Food Processing</SelectItem>
                            <SelectItem value="Agricultural Machinery">Agricultural Machinery</SelectItem>
                            <SelectItem value="Commercial Cooking & Snacks">Commercial Cooking & Snacks</SelectItem>
                            <SelectItem value="Communication Systems">Communication Systems</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-gray-700">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          className="rounded-none border-gray-300 focus-visible:ring-primary min-h-[150px] resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-none h-14 text-lg font-bold mt-4"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"} <Send className="ml-2" size={18} />
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 border border-gray-200 shadow-sm overflow-hidden h-[420px]">
          <iframe
            src="https://maps.google.com/maps?q=XQVF%2B8XH%2C+Addis+Ababa%2C+Ethiopia&output=embed&z=17"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            title="Epower Trading PLC Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}