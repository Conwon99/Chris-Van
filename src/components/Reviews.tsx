import { Star, ArrowRight } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Cumnock",
      rating: 5,
      text: "Chris was absolutely brilliant! Helped us move house and was so careful with all our furniture. Professional, reliable, and great value for money. Would definitely use again and recommend to anyone needing van services.",
      service: "Small Removals"
    },
    {
      name: "Mike Thompson",
      location: "Ayrshire",
      rating: 5,
      text: "Excellent courier service! Chris delivered my package same day and was very professional. Great communication throughout. Will definitely use again for future deliveries.",
      service: "Courier Services"
    },
    {
      name: "Lisa Brown",
      location: "Ayr",
      rating: 5,
      text: "Chris helped clear out our garage and took everything to the tip. SEPA registered so we knew it was all disposed of properly. Very reasonable price and did a great job. Highly recommend!",
      service: "Waste Removal"
    },
    {
      name: "David Wilson",
      location: "Kilmarnock",
      rating: 5,
      text: "Fantastic service! Chris collected furniture from the store and delivered it safely to our home. Very professional and careful with our items. Will definitely use again for future deliveries.",
      service: "In-Store Collection"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-accent fill-current" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-4 relative overflow-hidden" style={{ backgroundImage: 'url(/t.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            {/* Dark banner */}
            <div className="bg-[hsl(var(--asphalt-grey))] text-white px-6 py-3 rounded-lg mb-4 inline-block">
              <p className="font-semibold text-sm">DISCOVER WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US</p>
            </div>
            
            {/* Main title */}
            <h2 className="font-display font-bold text-6xl lg:text-7xl text-white mb-4">
              REVIEWS
            </h2>
          </div>
          
          {/* Contact button */}
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            CONTACT US NOW <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {renderStars(review.rating)}
              </div>
              
              <blockquote className="text-gray-700 mb-4 leading-relaxed text-sm">
                "{review.text}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-base">
                  {review.name}
                </h4>
                {/* Google logo placeholder */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className="text-xs text-gray-500">Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <button className="text-white hover:text-yellow-400 transition-colors">‹</button>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded font-bold">1</button>
            <button className="text-white hover:text-yellow-400 transition-colors px-2">2</button>
            <button className="text-white hover:text-yellow-400 transition-colors px-2">3</button>
            <button className="text-white hover:text-yellow-400 transition-colors px-2">4</button>
            <button className="text-white hover:text-yellow-400 transition-colors px-2">5</button>
            <span className="text-white px-2">...</span>
            <button className="text-white hover:text-yellow-400 transition-colors px-2">17</button>
            <button className="text-white hover:text-yellow-400 transition-colors">›</button>
          </div>
        </div>

        {/* Review Us on Google Section */}
        <div className="bg-[hsl(var(--asphalt-grey))] rounded-xl p-8 text-center max-w-md mx-auto">
          <h3 className="text-white font-bold text-xl mb-4">REVIEW US ON GOOGLE</h3>
          
          <div className="flex justify-center mb-6">
            {renderStars(5)}
          </div>
          
          <a
            href="https://www.google.com/search?q=Chris+Your+Man+with+a+Van+Cumnock+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
          >
            LEAVE US A REVIEW
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;