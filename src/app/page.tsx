// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import ContactForm from "./contactForm";
import Aboutus from "./aboutus";
import Projects from "./projects/page";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <div id="aboutus">
        <Aboutus/>
      </div>
      
      <Testimonials />
      <Projects/>
      <div id="contact">
        <ContactForm />
      </div>   
      <Footer />
    </>
  );
}
