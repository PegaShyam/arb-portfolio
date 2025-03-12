import undulate from "../assets/uuundulate.svg"

const TechCard = ({ src, content, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-auto rounded-lg bg-cover bg-zinc-800/30 backdrop:blur-md flex items-center justify-between p-4 cursor-pointer border"
    >
      <img
        src={src}
        alt={content}
        className="w-20 h-20 border rounded-lg bg-white object-contain"
      />
      <p className="text-3xl font-semibold text-white p-4">{content}</p>
    </a>
  );
};

export default TechCard;
