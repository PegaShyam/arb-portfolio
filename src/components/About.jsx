import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity";
import GradientText from "../TextAnimations/GradientText/GradientText";
import TechCard from "./TechCard";
import { SKILL_ITEM } from "../constants";

const About = () => {
  return (
    <section className="px-6 py-10" id="techstack">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Tech Stack
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <GradientText
        colors={["#FFFFFF", "#40ffaa", "#FFFFFF","#40ffaa",]}
        animationSpeed={8}
        showBorder={false}
        className="font-extrabold text-lg md:text-xl xl:text-3xl text-left mb-5 px-2 py-1 rounded-lg bg-zinc-900/30 backdrop-blur-lg"
      >
        Click on any tech stack to view the cheatsheet made by me!
      </GradientText>

      <ScrollVelocity
        texts={[
          [
            <TechCard
              src={SKILL_ITEM[0].src}
              content={SKILL_ITEM[0].content}
              key={SKILL_ITEM[0].id}
              link={SKILL_ITEM[0].link}
            />,
            <TechCard
              src={SKILL_ITEM[1].src}
              content={SKILL_ITEM[1].content}
              key={SKILL_ITEM[1].id}
              link={SKILL_ITEM[1].link}
            />,
            <TechCard
              src={SKILL_ITEM[2].src}
              content={SKILL_ITEM[2].content}
              key={SKILL_ITEM[2].id}
              link={SKILL_ITEM[2].link}
            />,
          ],
          [
            <TechCard
              src={SKILL_ITEM[3].src}
              content={SKILL_ITEM[3].content}
              key={SKILL_ITEM[3].id}
              link={SKILL_ITEM[3].link}
            />,
            <TechCard
              src={SKILL_ITEM[4].src}
              content={SKILL_ITEM[4].content}
              key={SKILL_ITEM[4].id}
              link={SKILL_ITEM[4].link}
            />,
            <TechCard
              src={SKILL_ITEM[5].src}
              content={SKILL_ITEM[5].content}
              key={SKILL_ITEM[5].id}
              link={SKILL_ITEM[5].link}
            />,
          ],
          [
            <TechCard
              src={SKILL_ITEM[6].src}
              content={SKILL_ITEM[6].content}
              key={SKILL_ITEM[6].id}
              link={SKILL_ITEM[6].link}
            />,
            <TechCard
              src={SKILL_ITEM[7].src}
              content={SKILL_ITEM[7].content}
              key={SKILL_ITEM[7].id}
              link={SKILL_ITEM[7].link}
            />,
            <TechCard
              src={SKILL_ITEM[8].src}
              content={SKILL_ITEM[8].content}
              key={SKILL_ITEM[8].id}
              link={SKILL_ITEM[8].link}
            />,
          ],
        ]}
        velocity={30}
        className="custom-scroll-text flex items-center justify-center gap-1 md:gap-5 xl:gap-10 py-4 "
      />
    </section>
  );
};

export default About;
