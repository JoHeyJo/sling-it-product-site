import { useMemo } from "react";

function NiceDate({ iso }: { iso: string }) {
  const d = useMemo(() => new Date(iso), [iso]);
  const fmt = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
  }).format(d);
  return <time dateTime={iso}>{fmt}</time>;
}

export default NiceDate