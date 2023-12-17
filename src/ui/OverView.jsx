import React from "react";
import Rating from "./Rating";
import useNumAnim from "../useNumAnim";

export default function OverView({
  overview: { title, icon, numO, up, rate },
  index,
}) {
  const { start: numAnim } = useNumAnim({ num: numO });
  return (
    <div className=" rounded-md bg-light-grayish p-6 font-bold dark:bg-dBgCard">
      <div className=" mb-4 flex items-center justify-between">
        <p className="text-dGrayishT">{title}</p>
        <img src={icon} />
      </div>
      <div className=" flex items-end justify-between">
        <span className=" block text-4xl dark:text-white">
          {numAnim}
          {index === 3 && "K"}
        </span>
        <Rating up={up} rate={rate} sign={"%"} />
      </div>
    </div>
  );
}
