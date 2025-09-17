import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Home, Facebook, MessageSquare, Truck } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[hsl(var(--asphalt-grey))]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight">
                ABOUT ME
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                Hi, I'm Chris! I'm your local go-to for all things van services in Cumnock and across Ayrshire. I'm a quality-driven, SEPA registered professional turning your moving and delivery needs into reality—one job at a time. Always happy to help, no job is too small.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61578652119720" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-[hsl(var(--asphalt-grey))]" />
                </a>
                <a 
                  href="https://wa.me/447735852822" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <MessageSquare className="w-6 h-6 text-[hsl(var(--asphalt-grey))]" />
                </a>
              </div>
            </div>
          </div>

          {/* Chris Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="text-center">
              <div className="w-48 h-48 mb-6 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <LazyImage
                  src="/chris.png"
                  alt="Chris, Your Man with a Van"
                  className="w-full h-full object-cover"
                  fallbackSrc="/chris.png"
                />
              </div>
              <h3 className="font-display font-bold text-3xl text-white mb-2">
                CHRIS
              </h3>
              <p className="text-white/80 text-lg">
                Your Man with a Van
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;