import Header from "@/components/Header";
import Kv from "@/sections/Kv";
import Introduction from "@/sections/Introduction";
import Solution from "@/sections/Solution";
import ExperienceDifference from "@/sections/ExperienceDifference";
import Features from "@/sections/Features";
import OriginalFeatures from "@/sections/OriginalFeatures";
import Comparison from "@/sections/Comparison";
import Faq from "@/sections/Faq";
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
