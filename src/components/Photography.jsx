import { motion } from "framer-motion";
import { PHOTOS } from "../constants";
import TrueFocus from "../TextAnimations/TrueFocus/TrueFocus";

const Photography = () => {
  const photoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <section className="px-6 py-10" id="photography">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Photography
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <h3 className="text-4xl text-center font-medium tracking-tight mb-5 flex-col items-center justify-center">
        Bringing stories to life —{" "}
        <TrueFocus
          sentence="ONE FRAME"
          manualMode={false}
          blurAmount={5}
          borderColor="lightblue"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />{" "}
        at a time.
      </h3>
      <h3 className="text-md md:text-xl text-center font-medium tracking-tight mb-10">
        Explore my world through the lens, check out my photo collection and see
        where my passion for photography takes me!
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PHOTOS.map((photo, index) => (
          <motion.div
            key={index}
            classname="relative rounded-lg overflow-hidden h-[500px] transition transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={photoVariants}
          >
            <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-white text-black">
              <h2 className="text-2xl font-medium mb-4">{photo.name}</h2>
              <img
                src={photo.image}
                alt={photo.name}
                className="inset-0 w-full h-[30rem] object-cover transition-opacity duration-300"
              />
              <div className="flex flex-col justify-between">
                <p className="mt-4 mb-4 flex-grow text-2xl">
                  {photo.description}
                </p>
                <a
                  href={photo.link}
                  target="_blank"
                  rel=" noopener noreferrer"
                  className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center border border-black"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Photography;
