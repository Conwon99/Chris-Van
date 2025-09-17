import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageSquare, Mail, Clock, MapPin } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { trackPhoneCall, trackMessenger, trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const serviceOptions = [
    'Small Removals',
    'Courier Services', 
    'Tip Runs / Waste Removal',
    'Flat-Pack Assembly',
    'In-Store Collection & Delivery',
    'Garage & Shed Clearances',
    'End-of-Tenancy Clearance',
    'Garden Waste Removal'
  ];


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xnnbokpv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: 'Free Quote Request from Website'
        }),
      });

      if (response.ok) {
        // Track successful form submission
        trackQuoteRequest('contact_form', [formData.service]);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
          title: "Quote request sent!",
          description: "Thank you for your request. We'll respond within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      trackFormInteraction('quote_form', 'submit_error');
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleCallClick = () => {
    trackPhoneCall('hero_section');
    window.location.href = "tel:+447735852822";
  };

  const handleMessengerClick = () => {
    trackMessenger('hero_section');
    window.open("https://wa.me/447735852822", "_blank");
  };

  return (
    <section id="hero" className="relative bg-black min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="/chrisback.png"
          alt="Chris, Your Man with a Van background"
          className="w-full h-full object-cover"
          fallbackSrc="/chrisback.png"
          loading="eager"
        />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              
              <h1 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight drop-shadow-lg">
                <span className="text-white italic text-6xl lg:text-7xl">CHRIS</span><span className="text-white">,</span><br />YOUR MAN WITH A VAN
              </h1>
              
              <p className="text-lg text-white/90 font-medium max-w-lg leading-relaxed drop-shadow-md">
                Professional van services in Cumnock and surrounding areas. Small removals, courier services, tip runs, waste removal, flat-pack assembly, and in-store collection & delivery. SEPA registered, 5-star service, all jobs done personally. Free quotes via WhatsApp.
              </p>
            </div>



            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/20">
              <Button 
                onClick={handleCallClick}
                className="flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-xl px-8 py-5 justify-start text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                Call: 07735 852822
              </Button>
              <Button 
                onClick={handleMessengerClick}
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white rounded-xl px-8 py-5 justify-start text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-6 h-6" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-service" id="contact-form">
            <div className="text-center mb-6">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
                GET A FREE QUOTE.
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white font-semibold">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white font-semibold">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="mt-2 rounded-xl border-2"
                />
              </div>


              <div>
                <Label htmlFor="message" className="text-white font-semibold">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your van service needs..."
                  className="mt-2 rounded-xl border-2 min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-8 rounded-xl">
                SEND
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;