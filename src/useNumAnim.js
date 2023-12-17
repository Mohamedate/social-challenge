import { useEffect, useState } from "react";

export default function useNumAnim({ num }) {
  const [start, setStart] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      if (start < num) setStart((p) => p + 1);
    }, [2]);

    return () => clearTimeout(id);
  }, [start, num, setStart]);

  return { start };
}
