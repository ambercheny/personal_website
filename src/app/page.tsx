import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <ExperienceTimeline />
      <CallToAction />
    </main>
  );
}
