import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How much does a small removal cost?",
      answer: "Small removal costs vary depending on the amount of items, distance, and complexity. Basic small removals typically start from £50-100, while larger house moves can range from £150-400. We provide free, no-obligation quotes for all removal work. Contact us via WhatsApp for a quick quote."
    },
    {
      question: "Do you provide same-day courier services?",
      answer: "Yes, we offer same-day courier and delivery services across Cumnock and surrounding Ayrshire areas. Whether it's urgent package delivery, furniture collection, or document transport, we can respond quickly to meet your needs. Message us on WhatsApp for immediate assistance."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide van services across Cumnock and surrounding Ayrshire areas, including Ayr, Kilmarnock, Irvine, and other parts of South Ayrshire. We also cover some areas of East Ayrshire. Contact us to confirm coverage for your specific location."
    },
    {
      question: "Are you SEPA registered for waste removal?",
      answer: "Yes, we are SEPA registered for waste removal and tip runs, ensuring all waste is disposed of legally and responsibly. We carry full public liability insurance and are fully insured for all van services work. No fly tipping - all waste goes to proper disposal facilities."
    },
    {
      question: "What types of waste do you collect?",
      answer: "We collect various types of waste including bin bags, garage clearances, shed clearances, end-of-tenancy clearances, old fence removal, and garden waste. We're SEPA registered so all waste is disposed of legally. Contact us to discuss your specific waste removal needs."
    },
    {
      question: "Do you provide in-store collection and delivery?",
      answer: "Yes, we offer in-store collection and delivery services from furniture stores, online purchases, and other retailers. We can collect items from stores and deliver them safely to your door, handling everything with care. Same-day service available when possible."
    },
    {
      question: "Do you offer free quotes?",
      answer: "Yes, we provide completely free, no-obligation quotes for all our services. You can request a quote by calling 07735 852822, messaging us on WhatsApp, or using our contact form. We'll assess your needs and provide a detailed, transparent quote."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
              Common questions about our van services, removals, courier services, and waste removal in Cumnock and Ayrshire
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg text-[hsl(var(--asphalt-grey))] pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-[hsl(var(--primary-blue))] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[hsl(var(--primary-blue))] flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-[hsl(var(--asphalt-grey))] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-[hsl(var(--asphalt-grey))] mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447735852822"
                className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--primary-blue))] text-white rounded-full font-semibold hover:bg-[hsl(var(--primary-blue))]/90 transition-colors"
              >
                Call 07735 852822
              </a>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[hsl(var(--primary-blue))] text-[hsl(var(--primary-blue))] rounded-full font-semibold hover:bg-[hsl(var(--primary-blue))] hover:text-white transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
