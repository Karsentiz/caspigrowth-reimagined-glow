
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-white font-poppins font-bold text-2xl mb-4 block">
              Caspi<span className="text-accent">Growth</span>
            </a>
            <p className="text-primary-foreground/70 mb-4">
              Accelerating digital growth for ambitious brands through data-driven marketing strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.16c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.76 3.58 17.58 3 16.24 3 13.64 3 11.54 5.1 11.54 7.7c0 .37.04.73.12 1.07-3.99-.2-7.53-2.11-9.9-5.02-.41.69-.65 1.5-.65 2.37 0 1.64.82 3.08 2.08 3.93-.76-.02-1.48-.24-2.11-.59v.05c0 2.28 1.63 4.19 3.8 4.62-.4.11-.82.17-1.26.17-.31 0-.61-.03-.91-.08.6 1.88 2.35 3.24 4.42 3.28-1.62 1.27-3.65 2.03-5.87 2.03-.38 0-.75-.02-1.12-.07C3.61 20.85 6.07 21.5 8.66 21.5c9.1 0 14.07-7.53 14.07-14.07 0-.21 0-.42-.01-.64.98-.7 1.82-1.57 2.48-2.56z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.915 2h-15.83c-1.15 0-2.085.935-2.085 2.085v15.83c0 1.15.935 2.085 2.085 2.085h15.83c1.15 0 2.085-.935 2.085-2.085v-15.83c0-1.15-.935-2.085-2.085-2.085zm-11.415 16.5h-2.75v-8.25h2.75v8.25zm-1.375-9.35c-.85 0-1.55-.7-1.55-1.55s.7-1.55 1.55-1.55 1.55.7 1.55 1.55-.7 1.55-1.55 1.55zm11 9.35h-2.75v-4.4c0-1.025-.025-2.35-1.425-2.35-1.45 0-1.675 1.125-1.675 2.275v4.475h-2.75v-8.25h2.65v1.2h.05c.375-.7 1.275-1.425 2.65-1.425 2.825 0 3.35 1.85 3.35 4.275v4.2z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25c3.15 0 3.53.01 4.77.07 1.15.05 1.78.25 2.2.41.56.22.95.48 1.37.9.42.42.68.81.9 1.37.16.42.36 1.05.41 2.2.06 1.24.07 1.62.07 4.77s-.01 3.53-.07 4.77c-.05 1.15-.25 1.78-.41 2.2-.22.56-.48.95-.9 1.37-.42.42-.81.68-1.37.9-.42.16-1.05.36-2.2.41-1.24.06-1.62.07-4.77.07s-3.53-.01-4.77-.07c-1.15-.05-1.78-.25-2.2-.41-.56-.22-.95-.48-1.37-.9-.42-.42-.68-.81-.9-1.37-.16-.42-.36-1.05-.41-2.2-.06-1.24-.07-1.62-.07-4.77s.01-3.53.07-4.77c.05-1.15.25-1.78.41-2.2.22-.56.48-.95.9-1.37.42-.42.81-.68 1.37-.9.42-.16 1.05-.36 2.2-.41 1.24-.06 1.62-.07 4.77-.07zm0-2.13c-3.2 0-3.61.01-4.86.07-1.25.06-2.11.26-2.86.55-.78.3-1.44.7-2.09 1.35-.65.65-1.05 1.31-1.35 2.09-.29.75-.49 1.61-.55 2.86-.06 1.25-.07 1.66-.07 4.86s.01 3.61.07 4.86c.06 1.25.26 2.11.55 2.86.3.78.7 1.44 1.35 2.09.65.65 1.31 1.05 2.09 1.35.75.29 1.61.49 2.86.55 1.25.06 1.66.07 4.86.07s3.61-.01 4.86-.07c1.25-.06 2.11-.26 2.86-.55.78-.3 1.44-.7 2.09-1.35.65-.65 1.05-1.31 1.35-2.09.29-.75.49-1.61.55-2.86.06-1.25.07-1.66.07-4.86s-.01-3.61-.07-4.86c-.06-1.25-.26-2.11-.55-2.86-.3-.78-.7-1.44-1.35-2.09-.65-.65-1.31-1.05-2.09-1.35-.75-.29-1.61-.49-2.86-.55-1.25-.06-1.66-.07-4.86-.07z"></path>
                  <path d="M12 6.87a5.13 5.13 0 100 10.26 5.13 5.13 0 000-10.26zm0 8.46a3.33 3.33 0 110-6.66 3.33 3.33 0 010 6.66z"></path>
                  <circle cx="17.3" cy="6.7" r="1.2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Paid Advertising
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Content Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Analytics & Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5" />
                <span className="text-primary-foreground/70">
                  123 Growth Street, Suite 100<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+14155550123" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  +1 (415) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:hello@caspigrowth.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  hello@caspigrowth.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/50 text-sm">
              &copy; {currentYear} CaspiGrowth. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
