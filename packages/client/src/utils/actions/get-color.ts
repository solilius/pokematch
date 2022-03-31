import { Type, TypeEffectiveness } from "@pokematch/common";

const typeColorMap: { [key in Type]?: string } = {
  [Type.Normal]: "#aa9",
  [Type.Fighting]: "#b54",
  [Type.Flying]: "#89f",
  [Type.Poison]: "#a59",
  [Type.Ground]: "#db5",
  [Type.Rock]: "#ba6",
  [Type.Bug]: "#ab2",
  [Type.Ghost]: "#66b",
  [Type.Fire]: "#f42",
  [Type.Water]: "#39f",
  [Type.Grass]: "#7c5",
  [Type.Electric]: "#fc3",
  [Type.Psychic]: "#f59",
  [Type.Ice]: "#6cf",
  [Type.Dragon]: "#76e",
  [Type.Fairy]: "#e9e",
  [Type.Steel]: "#aab",
  [Type.Dark]: "#754",
};

export const getTypeColor = (type: Type): string | undefined => typeColorMap[type];


const effectivnessColorMap: { [key in TypeEffectiveness]?: string } = {
  [TypeEffectiveness.DoubleSuperEffective] : '#73d216',
  [TypeEffectiveness.SuperEffective] : '#4e9a06',
  [TypeEffectiveness.Effective] : '#fff',
  [TypeEffectiveness.NotEffective] : '#a40000',
  [TypeEffectiveness.DoubleNotEffective] : '#7c0000',
  [TypeEffectiveness.Immune] : '#2e3436',
}

export const getEffectivnessColor = (effectives: TypeEffectiveness): string | undefined => effectivnessColorMap[effectives]