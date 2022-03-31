import { Type } from "./type";

export type TypesRelations =  {[key in Type]?: TypeRelations};
export type TypeRelations =  {[key in Type]?: TypeEffectiveness};

export enum TypeEffectiveness {
  DoubleSuperEffective = 2,
  SuperEffective = 1,
  Effective = 0,
  NotEffective = -1,
  DoubleNotEffective = -2,
  Immune = -4,
}
