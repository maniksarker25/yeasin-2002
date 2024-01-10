// components
import Nav from "@/components/Nav/Nav";
import About from "@/sections/About/About";
import Footer from "@/sections/Footer/Footer";
import Hero2 from "@/sections/Hero/Hero2";
import ProjectNext from "@/sections/ProjectNext/ProjectNext";
import Skills from "@/sections/Skills/Skills";
import Contact from "@/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero2 />
      <About />
      <Skills />
      <ProjectNext />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}
