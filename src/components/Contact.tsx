
import { useState } from "react";
import { Check } from "lucide-react";
import emailjs from '@emailjs/browser';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    submitted: false,
    submitting: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({
      ...formState,
      submitting: true,
    });

    try {
      // Create a template for EmailJS that includes recipient
      const templateParams = {
        to_email: "avital@caspigrowth.com",
        from_name: formState.name,
        from_email: formState.email,
        company: formState.company,
        message: formState.message,
      };

      await emailjs.send(
        'service_caspigrowth', // Replace with your EmailJS service ID after setup
        'template_contact', // Replace with your EmailJS template ID after setup
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key after setup
      );

      console.log("Form submitted:", formState);
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon."
      });
      
      setFormState({
        ...formState,
        submitted: true,
        submitting: false,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      setFormState({
        ...formState,
        submitting: false,
      });
    }
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
              Ready to <span className="text-accent">Dominate Media?</span>
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Let's discuss how we can help you achieve brand recognition and drive measurable results across podcast, TV, and digital channels.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-1 rounded-full">
                  <Check size={16} className="text-accent" />
                </div>
                <span>Free media strategy consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-1 rounded-full">
                  <Check size={16} className="text-accent" />
                </div>
                <span>Custom multi-channel approach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-1 rounded-full">
                  <Check size={16} className="text-accent" />
                </div>
                <span>Transparent pricing and ROI reporting</span>
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
                  We'll get back to you within 24 hours to discuss your media strategy opportunities.
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
                <button 
                  type="submit" 
                  className="bg-accent text-white px-6 py-2 rounded-md font-medium w-full disabled:opacity-70"
                  disabled={formState.submitting}
                >
                  {formState.submitting ? 'Sending...' : 'Send Message'}
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
