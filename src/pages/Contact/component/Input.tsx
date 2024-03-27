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
  return (
    <input className={` ${className}`} type={type} placeholder={placeholder} />
  );
};

export default Input;
