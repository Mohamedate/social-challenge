export default function Rating({ up, rate, sign, mt = "" }) {
  return (
    <div
      className={` ${
        up ? " text-green" : "text-red"
      } ${mt} flex items-center gap-1 font-semibold`}
    >
      <img src={up ? "./images/icon-up.svg" : "./images/icon-down.svg"} />
      <span>{rate}</span>
      <p>{sign}</p>
    </div>
  );
}
