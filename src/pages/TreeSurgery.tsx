import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine, Shield, Clock, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const TreeSurgery = () => {
  const handleQuoteClick = () => {
    window.location.href = "tel:+447853224528";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447853224528?text=Hi%20Gordon,%20I'd%20like%20a%20free%20quote%20for%20tree%20surgery%20services";
  };

  return (
    <>
      <Helmet>
        <title>Tree Surgery Services Troon & Ayrshire | Professional Tree Removal & Pruning</title>
        <meta name="description" content="Professional tree surgery services in Troon & Ayrshire. Expert tree removal, pruning, and emergency services. PA1 & PA6 certified arborist with 20+ years experience. Free quotes available." />
        <meta name="keywords" content="tree surgery troon, tree removal ayrshire, tree pruning troon, emergency tree removal, arborist troon, tree cutting ayrshire, stump grinding troon" />
        <link rel="canonical" href="https://mapletreeandgardens.netlify.app/tree-surgery" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Tree Surgery Services Troon & Ayrshire | Professional Tree Removal & Pruning" />
        <meta property="og:description" content="Professional tree surgery services in Troon & Ayrshire. Expert tree removal, pruning, and emergency services. PA1 & PA6 certified arborist with 20+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mapletreeandgardens.netlify.app/tree-surgery" />
        <meta property="og:image" content="https://mapletreeandgardens.netlify.app/lovable-uploads/treecutting.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tree Surgery Services Troon & Ayrshire | Professional Tree Removal & Pruning" />
        <meta name="twitter:description" content="Professional tree surgery services in Troon & Ayrshire. Expert tree removal, pruning, and emergency services. PA1 & PA6 certified arborist with 20+ years experience." />
        <meta name="twitter:image" content="https://mapletreeandgardens.netlify.app/lovable-uploads/treecutting.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--grass-green))] to-[hsl(var(--sky-blue))] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Professional Tree Surgery Services in Troon & Ayrshire
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Expert tree surgery, tree removal, and tree pruning services across Troon, Prestwick, and Ayrshire. 
              Fully qualified arborist with 20+ years experience. Emergency tree removal available 24/7. We also provide <a href="/lawn-mowing" className="text-white hover:text-yellow-200 underline">professional lawn care</a> and <a href="/troon" className="text-white hover:text-yellow-200 underline">garden services in Troon</a>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleQuoteClick}
              className="bg-white text-[hsl(var(--grass-green))] hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Emergency Tree Removal
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

      {/* Why Choose Our Tree Surgery Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Why Choose Our Tree Surgery Services?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                20+ Years Experience
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Fully qualified arborist with extensive experience in tree surgery across Ayrshire
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                PA1 & PA6 Certified
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Professional certification for safe pesticide application and tree work
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Emergency Response
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                24/7 emergency tree removal for storm damage and dangerous trees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tree Surgery Process */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Our Tree Surgery Process
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[hsl(var(--grass-green))] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-display text-lg font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Free Assessment
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We visit your property to assess the tree and provide a detailed quote
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[hsl(var(--grass-green))] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-display text-lg font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Safety Planning
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We plan the safest approach, considering property and surrounding areas
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[hsl(var(--grass-green))] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-display text-lg font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Professional Work
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Our qualified team performs the tree surgery with professional equipment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[hsl(var(--grass-green))] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="font-display text-lg font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Complete Cleanup
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We remove all debris and leave your property clean and tidy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tree Surgery Services We Offer */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Tree Surgery Services We Offer
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Tree Removal & Felling
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Safe and professional tree removal for trees that are dead, diseased, or in dangerous positions. 
                We handle everything from small garden trees to large mature specimens.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Complete tree removal</li>
                <li>• Stump grinding and removal</li>
                <li>• Safe felling techniques</li>
                <li>• Property protection</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Tree Pruning & Crown Reduction
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Professional tree pruning to maintain tree health, improve structure, and reduce size. 
                We use proper pruning techniques to ensure long-term tree health.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Crown reduction and thinning</li>
                <li>• Deadwood removal</li>
                <li>• Structural pruning</li>
                <li>• Health improvement</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Stump Grinding & Removal
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Complete stump removal using professional grinding equipment. We can grind stumps 
                below ground level and remove all wood chips and debris.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Below-ground grinding</li>
                <li>• Complete debris removal</li>
                <li>• Site restoration</li>
                <li>• Replanting preparation</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Storm Damage Cleanup
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Emergency response for storm-damaged trees. We provide 24/7 emergency tree removal 
                to make your property safe after severe weather.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• 24/7 emergency response</li>
                <li>• Storm damage assessment</li>
                <li>• Safe removal of damaged trees</li>
                <li>• Insurance claim support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Tree Surgery Challenges in Ayrshire */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Local Tree Surgery Challenges in Ayrshire
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Coastal Weather Conditions
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Ayrshire's coastal location brings unique challenges for tree care. Strong winds, salt spray, 
                and variable weather conditions can cause significant damage to trees, requiring specialized 
                knowledge and techniques.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Wind damage from coastal storms</li>
                <li>• Salt spray affecting tree health</li>
                <li>• Variable weather patterns</li>
                <li>• Soil conditions near the coast</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Common Tree Species in Ayrshire
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                We have extensive experience with the common tree species found in Ayrshire, including 
                native species and those that thrive in coastal conditions.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Oak, Ash, and Beech trees</li>
                <li>• Coastal species like Hawthorn</li>
                <li>• Ornamental and garden trees</li>
                <li>• Coniferous species</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tree Surgery FAQs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Tree Surgery FAQs
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Do I need permission to remove a tree?
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Tree removal permissions depend on the tree's location and size. We can advise on local 
                regulations and help with any necessary applications to the council.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                How much does tree surgery cost?
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Tree surgery costs vary depending on tree size, location, and complexity. We provide 
                free, no-obligation quotes for all tree surgery work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Are you insured for tree surgery work?
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Yes, we are fully insured for all tree surgery work, including public liability and 
                professional indemnity insurance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Do you provide emergency tree removal?
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Yes, we provide 24/7 emergency tree removal for dangerous trees and storm damage. 
                Call us immediately for emergency situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Related Garden Services
            </h2>
            <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
              Complete your garden transformation with our other professional services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Professional Lawn Care
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-6">
                Keep your lawn looking pristine with our regular mowing, grass cutting, and turf maintenance services.
              </p>
              <a href="/lawn-mowing" className="inline-block bg-[hsl(var(--grass-green))] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Learn More About Lawn Care
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Garden Services in Troon
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-6">
                Discover our complete range of garden services tailored for Troon's coastal conditions.
              </p>
              <a href="/troon" className="inline-block bg-[hsl(var(--grass-green))] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Explore Troon Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[hsl(var(--grass-green))] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Contact Maple Tree & Gardens for Tree Surgery
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to get professional tree surgery services? Contact us today for a free quote. 
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

export default TreeSurgery;
