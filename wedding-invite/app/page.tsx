import Hero from "@/src/components/Hero";
import Intro from "@/src/components/Intro";
import Timeline from "@/src/components/Timing";
import Location from "@/src/components/Location";
import DressCode from "@/src/components/Dresscode";
import RSVP from "@/src/components/RSVP";
import Details from "@/src/components/Details";
import Organizer from "@/src/components/Organizator";
import Timer from "@/src/components/Timer";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Intro />
      <Location />
      <Timeline />
      <DressCode />
      <Details />
      <RSVP />
      <Organizer />
      <Timer />
    </main>
  );
}
