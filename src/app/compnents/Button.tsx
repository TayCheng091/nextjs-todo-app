type ButtonStyle = "danger" | "primary" | "success" | "secondary" | "none";

interface ButtonProps {
  children: string;
  style?: ButtonStyle;
  onClick: () => void;
}

function Button({ children, style, onClick }: ButtonProps) {
  const getButtonStyle = (style: ButtonStyle = "none") => {
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
      className={`px-2 py-1.5 rounded border border-border-color  transition hover:opacity-80 ${getButtonStyle(
        style
      )}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
