
const teamMembers = [
  {
    name: "Alex Caspi",
    role: "Founder & Growth Strategist",
    bio: "Former marketing lead at top tech companies with a passion for data-driven growth strategies.",
    imageClass: "bg-gray-200",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Digital Marketing",
    bio: "10+ years experience optimizing campaigns across search and social platforms.",
    imageClass: "bg-gray-200",
  },
  {
    name: "David Chen",
    role: "Technical SEO Specialist",
    bio: "Technical SEO wizard who transforms complex data into actionable insights.",
    imageClass: "bg-gray-200",
  },
  {
    name: "Mia Rodriguez",
    role: "Content Strategy Director",
    bio: "Award-winning content creator who builds compelling narratives that convert.",
    imageClass: "bg-gray-200",
  },
];

const Team = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-primary">
            Meet Your <span className="text-accent">Growth Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just marketers. We're growth partners committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`${member.imageClass} w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary`}
              >
                {member.name.split(" ").map(part => part[0]).join("")}
              </div>
              <h3 className="text-xl font-bold mb-1 font-poppins text-primary">
                {member.name}
              </h3>
              <p className="text-accent text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
