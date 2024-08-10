import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  id: string;
  style?: "selected" | "unselected";
  handleClick: (id: string) => void;
};

export default function Button({
  children,
  id,
  style,
  handleClick,
}: ButtonProps) {
  return (
    <button
      className={clsx([
        "rounded-xl p-2 px-4 text-base font-semibold text-white transition-all active:opacity-65",
        // Prop styling
        style === "selected"
          ? "bg-gray-medium hover:bg-opacity-85"
          : "hover:underline",
      ])}
      onClick={() => handleClick(id)}
      id={id}
    >
      {children}
    </button>
  );
}
