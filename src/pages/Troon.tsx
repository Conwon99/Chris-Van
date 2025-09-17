import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Clock, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Troon = () => {
  const handleQuoteClick = () => {
    window.location.href = "tel:+447853224528";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447853224528?text=Hi%20Gordon,%20I'd%20like%20a%20free%20quote%20for%20garden%20services%20in%20Troon";
  };

  return (
    <>
      <Helmet>
        <title>Garden Services Troon | Professional Tree Surgery & Lawn Care in Ayrshire</title>
        <meta name="description" content="Local garden services in Troon, Ayrshire. Tree surgery, lawn care, hedge cutting, and landscaping. Coastal gardening expertise for Troon's unique conditions." />
        <meta name="keywords" content="garden services troon, tree surgery troon, lawn care troon, hedge cutting troon, gardener troon, garden maintenance troon" />
        <link rel="canonical" href="https://mapletreeandgardens.netlify.app/troon" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Garden Services Troon | Professional Tree Surgery & Lawn Care in Ayrshire" />
        <meta property="og:description" content="Local garden services in Troon, Ayrshire. Tree surgery, lawn care, hedge cutting, and landscaping. Coastal gardening expertise for Troon's unique conditions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mapletreeandgardens.netlify.app/troon" />
        <meta property="og:image" content="https://mapletreeandgardens.netlify.app/aboutimg.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Garden Services Troon | Professional Tree Surgery & Lawn Care in Ayrshire" />
        <meta name="twitter:description" content="Local garden services in Troon, Ayrshire. Tree surgery, lawn care, hedge cutting, and landscaping. Coastal gardening expertise for Troon's unique conditions." />
        <meta name="twitter:image" content="https://mapletreeandgardens.netlify.app/aboutimg.png" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--grass-green))] to-[hsl(var(--sky-blue))] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Professional Garden Services in Troon, Ayrshire
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Your local tree surgeon and qualified gardener serving Troon and surrounding areas. 
              Expert <a href="/tree-surgery" className="text-white hover:text-yellow-200 underline">tree surgery</a>, garden maintenance, <a href="/lawn-mowing" className="text-white hover:text-yellow-200 underline">lawn care</a>, and hedge cutting services.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleQuoteClick}
              className="bg-white text-[hsl(var(--grass-green))] hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Troon Garden Services
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[hsl(var(--grass-green))] text-lg px-8 py-4 h-auto rounded-full font-semibold"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services in Troon */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Why Choose Maple Tree & Gardens in Troon?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Local Troon Knowledge
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We understand Troon's unique coastal conditions and local gardening challenges
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                20+ Years Experience
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Fully qualified arborist with extensive experience serving Troon residents
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Reliable Service
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Consistent, professional service with regular maintenance schedules available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troon Garden Challenges & Solutions */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Troon Garden Challenges & Solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Coastal Soil Conditions
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Troon's coastal location means gardens often have sandy, well-draining soil that can be 
                challenging for certain plants. We understand these conditions and can recommend 
                appropriate plants and care techniques.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Sandy, well-draining soil</li>
                <li>• Salt-tolerant plant selection</li>
                <li>• Specialized soil treatments</li>
                <li>• Drainage solutions</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Salt Spray & Wind Damage
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Coastal winds and salt spray can damage plants and hedges. We provide protective 
                measures and choose wind-resistant plants that thrive in Troon's coastal environment.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Wind-resistant plant selection</li>
                <li>• Protective hedging solutions</li>
                <li>• Salt spray protection</li>
                <li>• Storm damage repair</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Troon Weather Considerations
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Troon's maritime climate brings mild winters and cool summers, but also variable 
                weather patterns. We adapt our garden care to these conditions for optimal results.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Maritime climate adaptation</li>
                <li>• Seasonal care adjustments</li>
                <li>• Weather-resistant solutions</li>
                <li>• Year-round maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services in Troon */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Our Services in Troon
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Tree Surgery in Troon
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Professional tree surgery services including tree removal, pruning, and emergency 
                storm damage cleanup. We understand Troon's tree species and coastal challenges.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Tree removal and felling</li>
                <li>• Tree pruning and crown reduction</li>
                <li>• Emergency tree removal</li>
                <li>• Stump grinding and removal</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Lawn Care in Troon
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Regular lawn mowing, grass cutting, and turf maintenance services. We understand 
                Troon's coastal soil conditions and provide appropriate lawn care treatments.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Regular lawn mowing</li>
                <li>• Grass cutting and edging</li>
                <li>• Lawn fertilization</li>
                <li>• Seasonal lawn treatments</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Hedge Cutting in Troon
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Professional hedge cutting and trimming services. We understand how coastal winds 
                and salt spray affect hedges and provide appropriate care and protection.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Hedge cutting and trimming</li>
                <li>• Hedge shaping and maintenance</li>
                <li>• Wind damage repair</li>
                <li>• Salt spray protection</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Garden Landscaping in Troon
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Garden landscaping and design services tailored to Troon's coastal environment. 
                We create beautiful, weather-resistant gardens that thrive in local conditions.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Coastal garden design</li>
                <li>• Wind-resistant landscaping</li>
                <li>• Patio and pathway installation</li>
                <li>• Plant selection and planting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Troon Neighborhoods We Serve */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Troon Neighborhoods We Serve
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Troon Town Centre
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Central Troon including the main shopping area and residential streets
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Barassie
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Barassie area including the beach and surrounding residential properties
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Fullarton
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Fullarton area with its mix of residential and commercial properties
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Loans
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Loans area including properties near the golf course and coastal areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Troon References */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Local Troon References
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Troon Golf Course Area
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                We provide garden services for properties near Troon Golf Course, understanding the 
                unique landscaping needs of golf course-adjacent properties and maintaining 
                appropriate boundaries and aesthetics.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Royal Troon Golf Club
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Our services extend to properties near Royal Troon Golf Club, where we understand 
                the importance of maintaining high-quality landscaping that complements the 
                prestigious golf course environment.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Troon Harbour
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                We serve properties around Troon Harbour, where coastal conditions require 
                specialized garden care and wind-resistant plant selection for optimal results.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Coastal Path Gardens
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Properties along Troon's coastal path benefit from our expertise in coastal 
                gardening, including salt spray protection and wind-resistant landscaping solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[hsl(var(--grass-green))] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Contact Maple Tree & Gardens in Troon
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to get professional garden services in Troon? Contact us today for a free quote. 
            We understand Troon's unique coastal conditions and provide expert garden care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={handleQuoteClick}
              className="bg-white text-[hsl(var(--grass-green))] hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: 07853 224528
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[hsl(var(--grass-green))] text-lg px-8 py-4 h-auto rounded-full font-semibold"
            >
              WhatsApp Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-white">
            <MapPin className="w-5 h-5" />
            <span>Serving Troon, Barassie, Fullarton, Loans, and surrounding areas</span>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Troon;
