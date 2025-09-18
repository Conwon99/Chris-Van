import { Star, ArrowRight } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Ali Mitch",
      location: "",
      rating: 5,
      text: "Fantastic service. efficient and kept in touch throughout. Will definitely use again. highly recommend",
      service: ""
    },
    {
      name: "Sammy Gibson Stead",
      location: "",
      rating: 5,
      text: "I used Chris for a family member today who needed items picked up and delivered to new house . Very professional , queries answered promptly which was much appreciated. Price , time and updates all very clearly communicated before and on the day . Absolutey recommend these services, thankyou.",
      service: ""
    },
    {
      name: "Al Walking Ayrshire",
      location: "",
      rating: 5,
      text: "I contacted Chris at short notice for a job to move a dining table from Lanarkshire to Ayrshire. Chis was friendly, approachable and very good value. The table was picked up and delivered to my home in Ayrshire in perfect condition. I will definitely use Chris again 👍🏻",
      service: ""
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                {/* Facebook logo placeholder */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <span className="text-xs text-gray-500">Facebook</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;