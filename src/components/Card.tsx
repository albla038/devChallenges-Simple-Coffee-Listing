import { ApiData } from "../lib/types";

export default function Card({ data }: { data: ApiData }) {
  const { name, image, price, rating, votes, popular, available } = data;

  return (
    <div className="relative flex w-[260px] cursor-pointer flex-col gap-2">
      <img src={image} alt="Product image" width={260} className="rounded-xl" />
      {popular && (
        <span className="bg-yellow absolute left-[6px] top-[6px] rounded-full px-2 py-[2px] text-[9px] font-semibold">
          Popular
        </span>
      )}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">{name}</p>
        <span className="bg-green-light rounded-md px-2 py-1 text-xs font-extrabold text-black">
          {price}
        </span>
      </div>
      <div className="flex items-center gap-1 text-sm font-semibold">
        {rating ? (
          <>
            <img src="/Star_fill.svg" alt="Star" width={24} height={24} />
            <p className="text-white">
              {rating}
              <span className="text-gray-medium"> ({votes} votes)</span>
            </p>
          </>
        ) : (
          <>
            <img
              src="/Star.svg"
              alt="Star with no fill"
              width={24}
              height={24}
            />
            <p className="text-gray-medium">No ratings</p>
          </>
        )}
        {!available && <p className="text-orange ml-auto">Sold out</p>}
      </div>
    </div>
  );
}
