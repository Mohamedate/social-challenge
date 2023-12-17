import { useEffect, useState } from "react";

export default function Dark() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleDarkLight() {
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
  }
  const styleToggle =
    theme === "dark"
      ? " bg-gradient-to-r from-toggleF to-toggleT "
      : "bg-toggle";
  const styleCircle = theme === "dark" ? "" : " translate-x-[25px]";
  return (
    <div className=" flex items-center justify-between gap-4">
      <p className=" text-dGrayishT">Dark Mode</p>
      <button
        onClick={handleDarkLight}
        className={`relative h-7 w-14 cursor-pointer rounded-full p-1 ${styleToggle}`}
      >
        <span
          className={`block h-full w-5 rounded-full bg-white ${styleCircle} transition-all duration-500`}
        ></span>
      </button>
    </div>
  );
}
