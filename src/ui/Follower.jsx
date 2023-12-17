import useNumAnim from "../useNumAnim";
import Rating from "./Rating";
export default function Follower({
  follower: { code, icon, user, numF, rate, up, color },
}) {
  const { start: numAnim } = useNumAnim({ num: numF });
  return (
    <div className=" relative mb-5 flex cursor-pointer flex-col items-center overflow-hidden rounded-md bg-light-grayish py-8 transition-transform duration-300 hover:translate-y-[-12px] dark:bg-dBgCard">
      <div className={` absolute left-0 top-0 h-1 w-full ${color}`}></div>
      <div className=" mb-6 flex gap-2">
        <img className="w-6" src={icon} />
        <p className=" font-semibold text-dGrayishT">{user}</p>
      </div>
      <span className=" text-6xl font-bold text-vDBlue dark:text-white">
        {numAnim}
        {code === "instagram" && "K"}
      </span>
      <p className=" mt-2 text-xs uppercase tracking-[4px] text-dGrayishT">
        followers
      </p>
      <Rating up={up} rate={rate} sign={"Today"} mt="mt-5" />
    </div>
  );
}
