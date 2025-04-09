
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight text-primary mb-4">
              Accelerate Your <span className="text-accent">Digital Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              We don't just build campaigns. We engineer data-driven growth strategies that deliver measurable results for ambitious brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-accent flex items-center gap-2">
                Fuel Your Growth <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-primary">
                Explore Services
              </a>
            </div>
          </div>
          <div className="hidden md:block reveal">
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-accent/10 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <div className="bg-primary/5 p-8 rounded">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                      <div className="h-3 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-accent rounded"></div>
                    <div>
                      <div className="text-xs text-gray-500">Performance</div>
                      <div className="text-sm font-medium">+127%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-primary rounded"></div>
                    <div>
                      <div className="text-xs text-gray-500">Conversion</div>
                      <div className="text-sm font-medium">+86%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
