
import { Zap, Megaphone, PenTool, Tv, Headphones, Users } from "lucide-react";

const serviceItems = [
  {
    icon: <Headphones size={24} />,
    title: "Podcast Marketing",
    description:
      "Strategic podcast placements and partnerships that connect your brand with engaged audiences actively seeking industry insights.",
  },
  {
    icon: <Tv size={24} />,
    title: "TV Advertising",
    description:
      "High-impact television campaigns that build brand awareness and create memorable impressions across targeted demographics.",
  },
  {
    icon: <Megaphone size={24} />,
    title: "Paid Advertising",
    description:
      "High-ROI campaigns across search, social, and display networks that maximize your ad spend and drive conversions.",
  },
  {
    icon: <PenTool size={24} />,
    title: "Content Marketing",
    description:
      "Engaging content strategies that build authority and create meaningful connections with your audience across all channels.",
  },
  {
    icon: <Users size={24} />,
    title: "Influencer Marketing",
    description:
      "Authentic partnerships with relevant influencers who amplify your brand message to their highly engaged followers.",
  },
  {
    icon: <Zap size={24} />,
    title: "Growth Strategy",
    description:
      "Holistic growth frameworks tailored to your unique business goals and market position for sustainable results.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-primary">
            Supercharge Your <span className="text-accent">Media Presence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our multi-channel approach creates maximum visibility and engagement across traditional and digital media platforms.
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
