import { typeChartGenI, typeChartGenII, typeChartGenVI } from ".";
import { Generation } from "..";

export const typeChartGenerationMap = {
  [Generation.I]: typeChartGenI,
  [Generation.II]: typeChartGenII,
  [Generation.III]: typeChartGenII,
  [Generation.IV]: typeChartGenII,
  [Generation.V]: typeChartGenII,
  [Generation.VI]: typeChartGenVI,
  [Generation.VII]: typeChartGenVI,
  [Generation.VIII]: typeChartGenVI,
}
