export interface GroupedArray<TItem> {
  [key: string]: TItem[];
  [key: number]: TItem[];
}

export interface Group<TItem> {
  key: string;
  items: TItem[];
}

function getGroupedArray<TItem>(arr: TItem[], expr: (item: TItem) => string | number) {
  const grouped: GroupedArray<TItem> = {};

  for (const item of arr) {
    const keyValue = expr(item);
    const values = grouped[keyValue] || [];
    values.push(item);
    grouped[keyValue] = values;
  }
  return grouped;
}

export function groupedToArr<TItem>(grouped: GroupedArray<TItem>) {
  const groups: Group<TItem>[] = [];

  for (const key in grouped) {
    const items = grouped[key];
    groups.push({
      key,
      items
    })
  };

  return groups;
}

export function groupBy<TItem>(arr: TItem[], expr: (item: TItem) => string | number): Group<TItem>[] {
  const grouped = getGroupedArray(arr, expr);

  return groupedToArr(grouped);
}

export function groupByFlat<TItem>(arr: TItem[], expr: (item: TItem) => string | number): (TItem | { key: string | number, count: number })[] {
  const grouped = getGroupedArray(arr, expr);

  const results = [];

  
  for (const key in grouped) {
    const items = grouped[key];

    results.push({ key, count: items.length });
    results.push(...items);
  };

  return results;
}
