import React from "react";
import Dark from "./DarkButton";

export default function Header() {
  return (
    <header className=" flex flex-col gap-4 py-8 font-bold md:flex-row md:items-center md:justify-between">
      <div className=" border-grayish-blue border-b pb-4 md:border-none md:pb-0">
        <h1 className=" text-2xl text-vDBlue dark:text-white">
          Social Media Dashboard
        </h1>
        <p className=" text-dGrayishT">Total Followers: 23,004</p>
      </div>
      <Dark />
    </header>
  );
}
