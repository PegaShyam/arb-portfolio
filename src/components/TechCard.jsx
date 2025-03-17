import undulate from "../assets/uuundulate.svg"

const TechCard = ({ src, content, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-auto rounded-lg bg-cover bg-zinc-800/30 backdrop:blur-md flex items-center justify-between p-2 md:p-3 xl:p-4 cursor-pointer border"
    >
      <img
        src={src}
        alt={content}
        className="w-10 h-10 md:w-15 md:h-15 xl:w-20 xl:h-20 border rounded-lg bg-white object-contain"
      />
      <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-white p-1 md:p-2 lg:p-3 xl:p-4">{content}</p>
    </a>
  );
};

export default TechCard;
