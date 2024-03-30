interface InputProps {
  placeholder: string;
  type?: "text" | "textarea";
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  className = "",
  placeholder,
}) => {
  return type === "textarea" ? (
    <textarea
      className={`dark:bg-midBrown font-thin px-6 py-3 rounded-3xl border dark:border-transparent border-gray-300 
      transition-all duration-200 focus:border-yellowColor outline-none placeholder:text-sm placeholder:opacity-70 ${className}`}
      placeholder={placeholder}
    ></textarea>
  ) : (
    <input
      className={`dark:bg-midBrown font-thin px-6 py-3 rounded-full border dark:border-transparent border-gray-300 
        transition-all duration-200 focus:border-yellowColor outline-none placeholder:text-sm placeholder:opacity-70 ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
