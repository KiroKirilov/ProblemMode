import { useMemo } from "react"
import { Results } from "realm";

export const useIteratableResults = <T>(data: Results<T>) => {
  const iteratableData = useMemo(() => data.map(x => x), [data]);

  return iteratableData;
}
