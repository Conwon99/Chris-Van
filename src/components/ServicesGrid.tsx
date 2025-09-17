import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, Trash2, ShoppingCart, Home, Scissors } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { trackServiceClick } from "@/utils/analytics";

const ServicesGrid = () => {
  const services = [
    {
      title: "Small Removals",
      description: "Professional small removal services in Cumnock and surrounding areas",
      features: ["House moves", "Office relocations", "Furniture transport", "Personal service"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Truck,
      color: "primary-orange"
    },
    {
      title: "Courier Services", 
      description: "Reliable courier and delivery services across Ayrshire",
      features: ["Same-day delivery", "Package collection", "Secure transport", "Tracking available"],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Package,
      color: "sunshine-yellow"
    },
    {
      title: "Tip Runs & Waste Removal",
      description: "SEPA registered waste removal and tip run services",
      features: ["Bin bag collection", "Garage clearances", "Shed clearances", "No fly tipping"],
      image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Trash2,
      color: "light-orange"
    },
    {
      title: "In-Store Collection & Delivery",
      description: "Collection from stores and delivery to your door",
      features: ["Furniture stores", "Online purchases", "Same-day service", "Careful handling"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: ShoppingCart,
      color: "primary-orange"
    },
    {
      title: "End-of-Tenancy Clearance",
      description: "Complete property clearance for tenants and landlords",
      features: ["Full property clear", "Furniture removal", "Deep clean prep", "Landlord services"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Home,
      color: "sunshine-yellow"
    }
  ];

  const handleQuoteClick = (serviceTitle: string) => {
    trackServiceClick(serviceTitle, 'services_grid');
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <div className="flex items-center mb-6">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mr-6">
              MY SERVICES
            </h2>
            <div className="flex-1 h-px bg-white"></div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Professional small removals, courier services, tip runs, waste removal, and in-store collection & delivery in Cumnock and across Ayrshire. SEPA registered, 5-star service, all jobs done personally with free quotes via WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group">
              {/* Service Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={`Professional ${service.title.toLowerCase()} service in Troon, Ayrshire - expert garden maintenance and tree surgery`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  fallbackSrc={service.fallbackImage}
                />
                <div className={`absolute top-4 left-4 w-12 h-12 bg-[hsl(var(--${service.color}))] rounded-full flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-white/90">
                      <div className="w-1.5 h-1.5 bg-[hsl(var(--primary-orange))] rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={() => handleQuoteClick(service.title)}
                  className="w-full bg-[hsl(var(--primary-orange))] hover:bg-[hsl(var(--dark-orange))] text-white font-semibold rounded-full group/button"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;