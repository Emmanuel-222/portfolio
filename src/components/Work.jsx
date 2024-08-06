import workImg from "../assets/movieLandbg.png";
import bgImg from "../assets/bg-img.png";
import sidehustleImg from "../assets/sidehustle.png";
import youtubeClone from "../assets/Youtubeclone.png";
import Project from "./Project";
import { MovielandUrl, MovieLandCode, SidehustleCode, SidehustleUrl } from "../utils/Constant";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full px-4">
        <div className="pb-8">
          <p className="text-bold text-4xl border-b-4 border-pink-600 inline">
            Work
          </p>
          <p className="py-4 text-[#8892b0] font-montserrat">// Check out some of my projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <Project projectName="MovieLand" image={workImg} demo={MovielandUrl} code={MovieLandCode}/>
          <Project projectName="Sidehustle" image={sidehustleImg} demo={SidehustleUrl} code={SidehustleCode} />
          <Project projectName="Sidehustle" image={youtubeClone} />
          <Project projectName="Sidehustle" image={bgImg} />
          <Project projectName="Sidehustle" image={bgImg} />
          <Project projectName="Sidehustle" image={bgImg} />
        </div>
      </div>
    </div>
  );
};

export default Work;