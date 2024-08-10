import ButtonNav from "./ButtonNav";

type ButtonNavProps = {
  handleButtonClick: (id: string) => void;
  buttonSelection: "all" | "available";
};

export default function Header({
  handleButtonClick,
  buttonSelection,
}: ButtonNavProps) {
  return (
    <header className="flex flex-col items-center gap-5 lg:w-[550px]">
      
      <h1 className="z-10 text-center text-4xl font-semibold tracking-wider text-white">
        Our Collection
      </h1>
      <p className="text-gray-medium z-10 text-center text-base font-semibold tracking-wide">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <ButtonNav
        handleButtonClick={handleButtonClick}
        buttonSelection={buttonSelection}
      />
    </header>
  );
}
