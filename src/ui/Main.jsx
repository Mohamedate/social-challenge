export default function Main({ children }) {
  return (
    <main className=" relative">
      <div className=" bg-topBgL dark:bg-topBgD absolute  h-52 w-full rounded-b-xl"></div>
      {children}
    </main>
  );
}
