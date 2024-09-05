type ButtonStyle = "danger" | "primary" | "success" | "secondary" | "default";

interface ButtonProps {
  children: string;
  style?: ButtonStyle;
  onClick?: () => void;
  customStyle?: string;
  type?: "button" | "submit" | "reset";
}

function Button({
  children,
  style,
  onClick,
  customStyle,
  type = "button",
}: ButtonProps) {
  const getButtonStyle = (style: ButtonStyle = "default") => {
    switch (style) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-gray-500 text-white";
      case "success":
        return "bg-green-500 text-white";
      case "danger":
        return "bg-red-500 text-white";
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      className={`px-2 py-2 rounded-lg border border-border-color  transition hover:opacity-60 ${getButtonStyle(
        style
      )} ${customStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
