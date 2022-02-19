import axios from 'axios';
import {
  TypeChart as TypeChartInterface,
  Generation,
  Type,
  TypeEffectiveness,
  TypeRelations,
  TypesRelations
} from '@pokematch/common';

import envs from '../utils/envs';

interface ResponseType {
  name: Type;
  generation: Generation;
  damage_relations: {
    double_damage_from: { name: Type }[];
    half_damage_from: { name: Type }[];
    no_damage_from: { name: Type }[];
    double_damage_to: { name: Type }[];
    half_damage_to: { name: Type }[];
    no_damage_to: { name: Type }[];
  };
}

enum RelationSide {
  Attack,
  Defense,
}

const InitiateTypeEffectivenessMap = (): TypeRelations =>
  Object.values(Type).reduce((map: any, type: Type) => { map[type] = TypeEffectiveness.Effective; return map; }, {});


const formatDamageRelations = (
  {
    double_damage_to, half_damage_to, no_damage_to,
    double_damage_from, half_damage_from, no_damage_from,

  }: ResponseType['damage_relations'],
  relationSide: RelationSide,
): TypeRelations => {
  const relationFields = {
    [RelationSide.Attack as number]: [double_damage_to, half_damage_to, no_damage_to],
    [RelationSide.Defense as number]: [double_damage_from, half_damage_from, no_damage_from],
  }
  const relations = InitiateTypeEffectivenessMap();

  relationFields[relationSide][0].forEach(type => relations[type.name] = TypeEffectiveness.SuperEffective);
  relationFields[relationSide][1].forEach(type => relations[type.name] = TypeEffectiveness.NotEffective);
  relationFields[relationSide][2].forEach(type => relations[type.name] = TypeEffectiveness.Immune);

  return relations;
}

const getRelations = async (relationSide: RelationSide): Promise<TypesRelations> => {
  const relations: TypesRelations = {};

  for (const typeName of Object.values(Type)) {
    const { data } = await axios.get(`${envs.pokemonApi}/type/${typeName}`);
    relations[typeName] = formatDamageRelations(data.damage_relations, relationSide);
  }

  return relations;
}

export const getTypeChart = async () => {
  try {
    const generationTypeChart: TypeChartInterface = {
      attacking: await getRelations(RelationSide.Attack),
      defending: await getRelations(RelationSide.Defense),
    };

    console.log(generationTypeChart);

  } catch (error) {
    console.log(`[getTypeChart] Failed`, error);
  }
}