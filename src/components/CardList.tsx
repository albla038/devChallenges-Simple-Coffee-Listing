import clsx from "clsx";
import { ApiData } from "../lib/types";
import Card from "./Card";

type CardListProps = { data: ApiData[] };

export default function CardList({ data }: CardListProps) {
  console.log("CardList data: ", data);

  return (
    <ul
      className={clsx([
        "flex flex-col items-center justify-center gap-16",
        // Large screen
        "lg:grid lg:grid-cols-2 lg:gap-x-8",
        // Extra large screen
        "xl:grid-cols-3",
      ])}
    >
      {data.map((item) => (
        <li key={item.id}>
          <Card data={item} />
        </li>
      ))}
    </ul>
  );
}
