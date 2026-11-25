import About from "@/components/site/About"
import Certifications from "@/components/site/Certifications"
import Contact from "@/components/site/Contact"
import Experience from "@/components/site/Experience"
import Footer from "@/components/site/Footer"
import Header from "@/components/site/Header"
import Hero from "@/components/site/Hero"
import Projects from "@/components/site/Projects"
import Skills from "@/components/site/Skills"

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
