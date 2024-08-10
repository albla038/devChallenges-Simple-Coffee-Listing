import Button from "./Button";

type ButtonNavProps = {
  handleButtonClick: (id: string) => void;
  buttonSelection: "all" | "available";
};

export default function ButtonNav({
  handleButtonClick,
  buttonSelection,
}: ButtonNavProps) {
  return (
    <nav className="flex items-center justify-center gap-4">
      <Button
        id="all"
        style={buttonSelection === "all" ? "selected" : "unselected"}
        handleClick={handleButtonClick}
      >
        All Products
      </Button>
      <Button
        id="available"
        style={buttonSelection === "available" ? "selected" : "unselected"}
        handleClick={handleButtonClick}
      >
        Available Now
      </Button>
    </nav>
  );
}
