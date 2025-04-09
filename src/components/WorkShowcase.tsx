
const caseStudies = [
  {
    client: "TechFusion",
    industry: "SaaS",
    result: "+187% Organic Traffic",
    description: "Complete SEO overhaul and content strategy that transformed their digital presence.",
    imageClass: "bg-blue-100",
  },
  {
    client: "GreenLeaf",
    industry: "E-commerce",
    result: "+143% ROAS",
    description: "Optimized paid media strategy across Meta and Google platforms.",
    imageClass: "bg-green-100",
  },
  {
    client: "UrbanDine",
    industry: "Food & Beverage",
    result: "+79% Conversions",
    description: "Website redesign and conversion rate optimization focused on user experience.",
    imageClass: "bg-amber-100",
  },
];

const WorkShowcase = () => {
  return (
    <section id="work" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-primary">
            Results That <span className="text-accent">Speak Volumes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe in measurable growth. Here's how we've transformed our clients' digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`${study.imageClass} h-48 flex items-center justify-center p-8`}
              >
                <div className="text-2xl font-bold font-poppins">
                  {study.client}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {study.industry}
                  </span>
                  <span className="text-accent font-bold">{study.result}</span>
                </div>
                <p className="text-foreground">{study.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <a href="#contact" className="btn-primary">
            See How We Can Help
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
