export function isNullish<T> (input: T | undefined | null): input is null | undefined {
  return input == null;
}