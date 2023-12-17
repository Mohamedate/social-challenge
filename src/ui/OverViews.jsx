import { overviews } from "../data";
import OverView from "./OverView";

export default function OverViews() {
  return (
    <div>
      <p className=" mb-8 mt-6 text-2xl font-bold text-dGrayishT md:text-3xl">
        Overview - Today
      </p>
      <div className=" grid grid-cols-my-grid gap-8">
        {overviews.map((item, i) => (
          <OverView overview={item} key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
