import Header from "@/components/Header";
import Kv from "@/Sections/Kv";
import Introduction from "@/Sections/Introduction";
import Solution from "@/Sections/Solution";
import ExperienceDifference from "@/Sections/ExperienceDifference";
import Features from "@/Sections/Features";
import OriginalFeatures from "@/Sections/OriginalFeatures";
import Comparison from "@/Sections/Comparison";
import Faq from "@/Sections/Faq";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="min-h-screen">
        <Kv />
        <Introduction />
        <Solution />
        <ExperienceDifference />
        <Features />
        <OriginalFeatures />
        <Comparison />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
