import { useEffect, useState } from "react";

const CERT_GRID_QUERIES = {
  three: "(min-width: 1150px)",
  two: "(min-width: 540px)",
} as const;

function getGridColumns(): number {
  if (typeof window === "undefined") return 1;
  if (window.matchMedia(CERT_GRID_QUERIES.three).matches) return 3;
  if (window.matchMedia(CERT_GRID_QUERIES.two).matches) return 2;
  return 1;
}

/** Matches certifications grid column count at current viewport. */
export function useCertificationGridColumns(): number {
  const [columns, setColumns] = useState(getGridColumns);

  useEffect(() => {
    const mediaThree = window.matchMedia(CERT_GRID_QUERIES.three);
    const mediaTwo = window.matchMedia(CERT_GRID_QUERIES.two);

    function update() {
      setColumns(getGridColumns());
    }

    mediaThree.addEventListener("change", update);
    mediaTwo.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      mediaThree.removeEventListener("change", update);
      mediaTwo.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return columns;
}

export const CERTIFICATION_VISIBLE_ROWS = 2;