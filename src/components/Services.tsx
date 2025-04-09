
import { Zap, BarChart3, Search, PenTool, Megaphone, Code } from "lucide-react";

const serviceItems = [
  {
    icon: <Search size={24} />,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that boost your organic visibility and drive qualified traffic.",
  },
  {
    icon: <Megaphone size={24} />,
    title: "Paid Advertising",
    description:
      "High-ROI campaigns across search, social, and display networks that maximize your ad spend.",
  },
  {
    icon: <PenTool size={24} />,
    title: "Content Marketing",
    description:
      "Engaging content strategies that build authority and create meaningful connections with your audience.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Analytics & Insights",
    description:
      "Comprehensive analytics that reveal actionable insights to continuously refine your marketing strategy.",
  },
  {
    icon: <Code size={24} />,
    title: "Web Development",
    description:
      "High-performance websites optimized for conversion, speed, and seamless user experience.",
  },
  {
    icon: <Zap size={24} />,
    title: "Growth Strategy",
    description:
      "Holistic growth frameworks tailored to your unique business goals and market position.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-primary">
            Supercharge Your <span className="text-accent">Digital Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our full-funnel approach creates measurable impact at every stage of your customer's journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-muted shadow-sm hover:shadow-md transition-shadow reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/5 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-accent">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins text-primary">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <a href="#contact" className="btn-accent">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
