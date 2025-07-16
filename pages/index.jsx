import HeroBanner from ".../components/HeroBanner";
import ProjectCarousel from ".../components/ProjectCarousel";
import { projects } from "../utils/projects";
import Navbar from ".../components/Navbar";
<>
  <Navbar />
  <HeroBanner />
  <ProjectCarousel title="RajFlix Originals" projects={projects} />
</>
export default function Home() {
  return (
    <>
      <HeroBanner />
      <ProjectCarousel title="RajFlix Originals" projects={projects} />
    </>
  );
}