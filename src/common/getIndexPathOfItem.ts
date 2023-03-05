import { IndexPath } from "@ui-kitten/components";

export const getIndexPathOfItem = <T>(arr: T[] | Realm.Results<T & Realm.Object<unknown, never>>, itemToFind: T, fieldSelector: (x: T) => any) => {
  if (!arr?.length || !itemToFind || !fieldSelector) {
    return undefined;
  }

  var index = arr.findIndex(x => fieldSelector(x) == fieldSelector(itemToFind));

  if (index < 0) {
    return undefined;
  }

  return new IndexPath(index);
}
