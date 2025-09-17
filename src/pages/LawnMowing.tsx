import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Clock, Phone, MapPin, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";

const LawnMowing = () => {
  const handleQuoteClick = () => {
    window.location.href = "tel:+447853224528";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447853224528?text=Hi%20Gordon,%20I'd%20like%20a%20free%20quote%20for%20lawn%20mowing%20services";
  };

  return (
    <>
      <Helmet>
        <title>Lawn Mowing Services Troon & Ayrshire | Professional Grass Cutting & Turf Care</title>
        <meta name="description" content="Professional lawn mowing and turf care services in Troon & Ayrshire. Regular grass cutting, lawn maintenance, and seasonal treatments. Free quotes available." />
        <meta name="keywords" content="lawn mowing troon, grass cutting ayrshire, turf care troon, lawn maintenance ayrshire, grass cutting prestwick" />
        <link rel="canonical" href="https://mapletreeandgardens.netlify.app/lawn-mowing" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Lawn Mowing Services Troon & Ayrshire | Professional Grass Cutting & Turf Care" />
        <meta property="og:description" content="Professional lawn mowing and turf care services in Troon & Ayrshire. Regular grass cutting, lawn maintenance, and seasonal treatments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mapletreeandgardens.netlify.app/lawn-mowing" />
        <meta property="og:image" content="https://mapletreeandgardens.netlify.app/lovable-uploads/lawnmower.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lawn Mowing Services Troon & Ayrshire | Professional Grass Cutting & Turf Care" />
        <meta name="twitter:description" content="Professional lawn mowing and turf care services in Troon & Ayrshire. Regular grass cutting, lawn maintenance, and seasonal treatments." />
        <meta name="twitter:image" content="https://mapletreeandgardens.netlify.app/lovable-uploads/lawnmower.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--grass-green))] to-[hsl(var(--sky-blue))] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Professional Lawn Mowing & Turf Care in Troon & Ayrshire
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Expert lawn mowing, grass cutting, and turf maintenance services across Troon, Prestwick, and Ayrshire. 
              Regular lawn care schedules available. Professional results every time. We also provide <a href="/tree-surgery" className="text-white hover:text-yellow-200 underline">professional tree surgery</a> and <a href="/troon" className="text-white hover:text-yellow-200 underline">garden services in Troon</a>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleQuoteClick}
              className="bg-white text-[hsl(var(--grass-green))] hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Lawn Care Quote
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

      {/* Why Regular Lawn Mowing Matters */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Why Regular Lawn Mowing Matters in Ayrshire
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Healthy Lawn Growth
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Regular mowing promotes healthy grass growth and prevents thatch buildup
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Professional Appearance
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Maintain a pristine lawn that enhances your property's curb appeal
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Time Saving
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Let us handle your lawn care while you focus on other priorities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Lawn Care Services */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Our Lawn Care Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Regular Lawn Mowing
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Professional lawn mowing service with regular schedules to keep your grass at the perfect height. 
                We use professional equipment for consistent, high-quality results.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Weekly, bi-weekly, or monthly schedules</li>
                <li>• Professional mowing equipment</li>
                <li>• Consistent cutting height</li>
                <li>• Grass collection and disposal</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Grass Cutting & Edging
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Precise grass cutting with professional edging for clean, defined lawn boundaries. 
                We ensure your lawn edges are perfectly trimmed and maintained.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Professional edging tools</li>
                <li>• Clean lawn boundaries</li>
                <li>• Pathway and border trimming</li>
                <li>• Detailed finishing work</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Lawn Fertilization
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Seasonal lawn fertilization to promote healthy growth and maintain vibrant green color. 
                We use appropriate fertilizers for Ayrshire's soil conditions.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Seasonal fertilization program</li>
                <li>• Soil-appropriate nutrients</li>
                <li>• Spring and autumn treatments</li>
                <li>• Weed prevention</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Seasonal Lawn Treatments
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Comprehensive seasonal lawn care including aeration, overseeding, and specialized 
                treatments to keep your lawn healthy year-round.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Spring lawn preparation</li>
                <li>• Summer maintenance</li>
                <li>• Autumn lawn care</li>
                <li>• Winter protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ayrshire Lawn Care Challenges */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Ayrshire Lawn Care Challenges
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Coastal Soil Conditions
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Ayrshire's coastal areas have unique soil conditions that require specialized lawn care 
                techniques and treatments for optimal grass growth.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Weather Considerations
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Variable weather patterns in Ayrshire, including coastal winds and rainfall, 
                affect lawn health and require adaptable care schedules.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Common Lawn Problems
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We understand and can treat common Ayrshire lawn problems including moss, 
                weeds, and patchy growth areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lawn Care Process & Schedule */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Lawn Care Process & Schedule
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[hsl(var(--grass-green))] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-display text-lg font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Initial Assessment
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We assess your lawn condition and discuss your preferences for maintenance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[hsl(var(--grass-green))] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-display text-lg font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Schedule Planning
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We create a customized lawn care schedule that fits your needs and budget
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[hsl(var(--grass-green))] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-display text-lg font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Regular Maintenance
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Consistent lawn care visits to maintain your lawn's health and appearance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[hsl(var(--grass-green))] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="font-display text-lg font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Seasonal Care
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Specialized seasonal treatments to keep your lawn healthy year-round
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lawn Care FAQs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Lawn Care FAQs
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                How often should I mow my lawn?
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                During the growing season (spring to autumn), most lawns benefit from weekly mowing. 
                We can adjust the frequency based on your lawn's growth rate and preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                What's the best height to cut grass?
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                The ideal cutting height depends on grass type and season. Generally, we maintain 
                2.5-4cm height for most lawns, adjusting for weather conditions and grass health.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Do you collect grass clippings?
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Yes, we collect and dispose of all grass clippings, leaving your lawn clean and tidy. 
                We can also mulch clippings back into the lawn if preferred.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Can you help with lawn problems like moss or weeds?
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Yes, we can identify and treat common lawn problems including moss, weeds, and patchy areas. 
                Our PA1 & PA6 certification allows us to apply professional treatments safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[hsl(var(--grass-green))] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Contact Maple Tree & Gardens for Lawn Care
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to get professional lawn mowing and turf care services? Contact us today for a free quote. 
            We serve Troon, Prestwick, Ayr, and across Ayrshire.
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
            <span>Serving Troon, Prestwick, Ayr, and across Ayrshire</span>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default LawnMowing;
