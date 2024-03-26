const PortfolioBox: React.FC = () => {
  return (
    <div className="group overflow-hidden rounded-lg relative cursor-pointer">
      {/* image */}
      <img
        className="object-cover"
        src="https://tunis-next.netlify.app/assets/img/projects/project-2.jpg"
        alt="mahdi alaee | portfolio image"
      />
      {/* hover element */}
      <div
        className="absolute top-0 w-full h-0 flex justify-center items-center text-xl bg-yellowColor 
            overflow-hidden transition-all duration-300 group-hover:h-full"
      >
        some text...
      </div>
    </div>
  );
};

export default PortfolioBox;
