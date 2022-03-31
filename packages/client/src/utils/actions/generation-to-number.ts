import { Generation } from "@pokematch/common";

/** up to 10, default is undefined */
const romanNumberToNumber = (roman: string): number | undefined => {
  switch (roman) {
    case 'i':
      return 1;
    case 'ii':
      return 2;
    case 'iii':
      return 3;
    case 'iv':
      return 4;
    case 'v':
      return 5;
    case 'vi':
      return 6;
    case 'vii':
      return 7;
    case 'viii':
      return 8;
    case 'ix':
      return 9;
    case 'x':
      return 10;
    default:
      return undefined;
  }
}

export const generationToNumber = (gen: Generation): number | undefined =>
  romanNumberToNumber(gen.replace('generation-', ''));

