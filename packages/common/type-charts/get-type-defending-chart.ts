import { Generation, Type, TypeEffectiveness, TypeRelations } from "../types";
import { typeChartGenerationMap } from "./";

interface Options {
  typeA: Type;
  typeB?: Type;
  generation: Generation;
}

export const calculateTypeResistenceMap = ({ typeA, typeB, generation }: Options): TypeRelations => {
  const chart = typeChartGenerationMap[generation];
  const chartTypeA = chart.defending[typeA];

  // if there is only 1 type retuen its resistence map
  if (!typeB) {
    return chart.defending[typeA]
  };

  const chartTypeB = chart.defending[typeB];
  const res: any = {};

  for (let type of Object.keys(chartTypeA)) {
    // calculate the effectives of a type against the 2 types of the pokemon
    const combinedResistence = chartTypeA[type as Type] + chartTypeB[type as Type];

    // if the result is lower than TypeEffectiveness.DoubleNotEffective value
    // then it means one of your types is immune to the attacking type
    res[type] = combinedResistence < TypeEffectiveness.DoubleNotEffective ?
      TypeEffectiveness.Immune :
      combinedResistence;
  }

  return res;
}
