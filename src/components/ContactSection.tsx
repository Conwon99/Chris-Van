import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageSquare, Mail, Clock, MapPin } from "lucide-react";
import { trackPhoneCall, trackMessenger, trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    services: [] as string[],
    message: ''
  });
  const { toast } = useToast();

  const serviceOptions = [
    'Gardening',
    'Tree Work', 
    'Fencing/Decking',
    'Garden Clear-outs'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

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
          phone: formData.phone,
          email: formData.email,
          postcode: formData.postcode,
          services: formData.services.join(', '),
          message: formData.message,
          _subject: 'Free Quote Request from Website'
        }),
      });

      if (response.ok) {
        // Track successful form submission
        trackQuoteRequest('contact_form', formData.services);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
          title: "Quote request sent!",
          description: "Thank you for your request. We'll respond within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          postcode: '',
          services: [],
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
    trackPhoneCall('contact_section');
    window.location.href = "tel:+447853224528";
  };

  const handleMessengerClick = () => {
    trackMessenger('contact_section');
    window.open("https://www.facebook.com/profile.php?id=100085773295610", "_blank");
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Your Free Tree Surgery & Garden Quote
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Call or message us on Facebook now for emergency tree removal, or request a free quote for tree surgery, garden maintenance, hedge cutting, and lawn care services in Troon & Ayrshire—attach photos for a faster estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
                Contact Your Local Tree Surgeon & Gardener
              </h3>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleCallClick}
                  className="w-full justify-start gap-4 p-6 h-auto bg-[hsl(var(--sky-blue))] hover:bg-[hsl(var(--sky-blue))] hover:opacity-90 text-white rounded-2xl"
                >
                  <Phone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">Call Gordon</div>
                    <div className="text-sm opacity-90">+44 7853 224528</div>
                  </div>
                </Button>

                <Button 
                  onClick={handleMessengerClick}
                  className="w-full justify-start gap-4 p-6 h-auto bg-[hsl(var(--grass-green))] hover:bg-[hsl(var(--grass-green))] hover:opacity-90 text-white rounded-2xl"
                >
                  <MessageSquare className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">Facebook Messenger</div>
                    <div className="text-sm opacity-70">Quick response guaranteed</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Business Info */}
            <div className="space-y-6 pt-8 border-t">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <div className="font-semibold text-[hsl(var(--asphalt-grey))]">Email</div>
                  <div className="text-[hsl(var(--asphalt-grey))] opacity-80">mapletreeayshire@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <div className="font-semibold text-[hsl(var(--asphalt-grey))]">Service Areas</div>
                  <div className="text-[hsl(var(--asphalt-grey))] opacity-80">Troon, Ayr, Prestwick, Dundonald, and across Ayrshire</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <div className="font-semibold text-[hsl(var(--asphalt-grey))]">Response Time</div>
                  <div className="text-[hsl(var(--asphalt-grey))] opacity-80">Usually within a week for quotes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="card-service">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-[hsl(var(--asphalt-grey))] font-semibold">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[hsl(var(--asphalt-grey))] font-semibold">Phone</Label>
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

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-[hsl(var(--asphalt-grey))] font-semibold">Email</Label>
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
                  <Label htmlFor="postcode" className="text-[hsl(var(--asphalt-grey))] font-semibold">Postcode</Label>
                  <Input
                    id="postcode"
                    value={formData.postcode}
                    onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
              </div>

              <div>
                <Label className="text-[hsl(var(--asphalt-grey))] font-semibold">Services Needed</Label>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {serviceOptions.map(service => (
                    <Button
                      key={service}
                      type="button"
                      variant={formData.services.includes(service) ? "default" : "outline"}
                      onClick={() => handleServiceToggle(service)}
                      className={`rounded-xl ${
                        formData.services.includes(service)
                          ? 'bg-[hsl(var(--grass-green))] text-white'
                          : 'border-2 text-[hsl(var(--asphalt-grey))]'
                      }`}
                    >
                      {service}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-[hsl(var(--asphalt-grey))] font-semibold">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your garden needs..."
                  className="mt-2 rounded-xl border-2 min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full btn-hero">
                Send Quote Request ✨
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;