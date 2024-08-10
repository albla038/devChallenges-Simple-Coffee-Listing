import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { ApiData } from "./lib/types";
import Header from "./Header";
import clsx from "clsx";

export default function App() {
  // state
  const [data, setData] = useState<ApiData[] | null>(null);
  const [buttonSelection, setButtonSelection] = useState<"all" | "available">(
    "all",
  );

  // event handlers
  const handleButtonClick = (id: string) => {
    setButtonSelection(id === "available" ? "available" : "all");
  };

  // side effects
  async function fetchApiData(): Promise<ApiData[] | null> {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json",
      );
      const data = await res.json();

      if (!res.ok) {
        console.log("Data not OK: ", data);
        return null;
      }

      return data;
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
    return null;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApiData();
      if (data && buttonSelection === "available") {
        setData(data.filter((element) => element.available === true));
      } else {
        setData(data);
      }
    };

    fetchData();
  }, [buttonSelection]);

  return (
    <div
      className={clsx([
        "flex min-h-screen flex-col items-center bg-black bg-[size:1280px_300px] bg-top bg-no-repeat",
        // Extra large screen
        "xl:bg-contain",
      ])}
      style={{ backgroundImage: "url('/bg-cafe.jpg')" }}
    >
      <main
        className={clsx([
          "bg-gray-dark relative mt-36 flex min-h-10 max-w-[405px] flex-col items-center gap-12 overflow-hidden rounded-xl px-8 pb-16 pt-20",
          // Large screen
          "lg:max-w-[720px]",
          // Extra large screen
          "xl:w-[1080px] xl:max-w-full",
        ])}
      >
        <img
          src="/vector.svg"
          alt=""
          width={257}
          height={153}
          className="absolute z-0 -translate-y-[30%] translate-x-[53%]"
        />
        <Header
          handleButtonClick={handleButtonClick}
          buttonSelection={buttonSelection}
        />

        {!data ? (
          <p className="mx-auto mt-6 text-white">Loading...</p>
        ) : (
          <CardList data={data} />
        )}
      </main>
    </div>
  );
}
