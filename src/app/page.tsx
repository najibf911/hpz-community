import Hero from "@/components/hero";
import Reason from "@/components/reason";
import Benefit from "@/components/benefit";
import Method from "@/components/method";
import BestContent from "@/components/bestContent";
import Registration from "@/components/registration";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Reason />
      <Benefit />
      <Method />
      <BestContent />
      <FAQ />
      <Registration />
      <Footer />
    </main>
  );
}
