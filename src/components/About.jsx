import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity";
import TechCard from "./TechCard";
import { SKILL_ITEM } from "../constants";

const About = () => {
  return (
    <section className="px-6 py-10" id="techstack">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Tech Stack
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

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
            />,
            <TechCard
              src={SKILL_ITEM[2].src}
              content={SKILL_ITEM[2].content}
              key={SKILL_ITEM[2].id}
            />,
          ],
          [
            <TechCard
              src={SKILL_ITEM[3].src}
              content={SKILL_ITEM[3].content}
              key={SKILL_ITEM[3].id}
            />,
            <TechCard
              src={SKILL_ITEM[4].src}
              content={SKILL_ITEM[4].content}
              key={SKILL_ITEM[4].id}
            />,
            <TechCard
              src={SKILL_ITEM[5].src}
              content={SKILL_ITEM[5].content}
              key={SKILL_ITEM[5].id}
            />,
          ],
          [
            <TechCard
              src={SKILL_ITEM[6].src}
              content={SKILL_ITEM[6].content}
              key={SKILL_ITEM[6].id}
            />,
            <TechCard
              src={SKILL_ITEM[7].src}
              content={SKILL_ITEM[7].content}
              key={SKILL_ITEM[7].id}
            />,
            <TechCard
              src={SKILL_ITEM[8].src}
              content={SKILL_ITEM[8].content}
              key={SKILL_ITEM[8].id}
            />,
          ],
        ]}
        velocity={30}
        className="custom-scroll-text flex items-center justify-center gap-10 py-4 "
      />
    </section>
  );
};

export default About;
