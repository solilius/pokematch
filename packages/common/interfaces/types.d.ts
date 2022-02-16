import { Generation } from "../types/generation";
import { Type } from "../types/type";

export interface Types {
  a: Type;
  b?: Type;
  pastTypes: {
    generation: Generation;
    a: Type;
    b?: Type;
  }
}
