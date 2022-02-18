import { Generation, Type, TypeEffectiveness, TypeRelations } from "..";
import { typeChartGenerationMap } from ".";

interface Options {
  typeA: Type;
  typeB: Type;
  generation: Generation;
}

export const calcType = ({ typeA, typeB, generation }: Options): TypeRelations => {
  const chart = typeChartGenerationMap[generation];
  const chartTypeA = chart.defending[typeA];
  const chartTypeB = chart.defending[typeB];

  const res: any = {};

  for (let type of Object.values(Type)) {
    const combinedResistence = chartTypeA[type] + chartTypeB[type];
    res[type] = combinedResistence < TypeEffectiveness.DoubleNotEffective ?
      TypeEffectiveness.Immune :
      combinedResistence;
  }

  return res;
}
