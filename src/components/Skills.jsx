import { motion } from "framer-motion";

import Card from "./Card/Card";
import { IoLogoJavascript, IoLogoGithub } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div name="skill" className="w-full h-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full px-4">
        <div>
          <p className="text-4xl inline font-bold border-pink-600 border-b-4 my-4">
            Experience
          </p>
          <p className="py-4 font-montserrat text-[#8892b0]">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-4 md:gap-0 text-center py-4 cursor-pointer">
          {/* skills section */}
          <Card
            icon={<IoLogoJavascript className="text-[3.5em]" />}
            name={"JavaScript"}
          />
          <Card
            icon={<IoLogoGithub className="text-[3.5em]" />}
            name={"GitHub"}
          />
          <Card
            icon={<IoLogoReact className="text-[3.5em]" />}
            name={"React"}
          />
          <Card
            icon={<SiTailwindcss className="text-[3.5em]" />}
            name={"TailwindCss"}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
