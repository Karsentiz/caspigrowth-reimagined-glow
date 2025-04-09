
import { useState } from "react";
import { Check } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    submitted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to your form backend
    console.log("Form submitted:", formState);
    setFormState({
      ...formState,
      submitted: true,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Ready to <span className="text-accent">Accelerate Growth?</span>
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Let's discuss how we can help you achieve your business goals and drive measurable results.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-1 rounded-full">
                  <Check size={16} className="text-accent" />
                </div>
                <span>Free strategy consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-1 rounded-full">
                  <Check size={16} className="text-accent" />
                </div>
                <span>Custom growth roadmap</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-1 rounded-full">
                  <Check size={16} className="text-accent" />
                </div>
                <span>Transparent pricing and approach</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-foreground p-8 rounded-lg shadow-lg reveal">
            {formState.submitted ? (
              <div className="text-center py-8">
                <div className="bg-accent/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-poppins text-primary">
                  Thanks for reaching out!
                </h3>
                <p className="text-muted-foreground">
                  We'll get back to you within 24 hours to discuss your growth opportunities.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold mb-4 font-poppins text-primary">
                  Get in touch
                </h3>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                  ></textarea>
                </div>
                <button type="submit" className="bg-accent text-white px-6 py-2 rounded-md font-medium w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
