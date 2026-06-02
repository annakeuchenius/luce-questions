import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import SubmissionForm from "@/components/SubmissionForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <SubmissionForm />
      </main>
      <Footer />
    </>
  );
}
