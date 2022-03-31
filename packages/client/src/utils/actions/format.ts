export const formatId = (id?: number): string => {
  if (!id) return '0';
  if (id < 10) return `00${id}`;
  if (id < 100) return `0${id}`;
  return `${id}`;
};

export const capitalizeFirstLetter = (s: string): string => s[0].toUpperCase() + s.slice(1);

export const formatName = (name: string): string => {
  const str = name.replace("-", " ");
  const words = str.split(" ");

  return words
    .map((w) => capitalizeFirstLetter(w))
    .toString()
    .replace(",", " ");
};