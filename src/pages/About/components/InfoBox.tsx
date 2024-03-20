interface InfoBoxProps {
  count: number;
  text: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ count, text }) => {
  return (
    <li className="p-6 border border-black-3 max-w-60 max-h-40">
      {/* count */}
      <h6 className="text-yellowColor text-4xl font-black sm:text-5xl">
        {count}
        {/* absolute element */}
        <span className="">+</span>
      </h6>
      {/* entity */}
      <span className="text-sm font-extralight sm:pl-12 sm:text-base sm:block sm:relative">
        {text}
        {/* absolute element */}
        <span className="absolute left-1 top-4 w-8 border-b border-[#e5e7eb] border-opacity-50"></span>
      </span>
    </li>
  );
};

export default InfoBox;
