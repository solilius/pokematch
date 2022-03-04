import { TypesRelations } from "../../types";

/** Pokemon types resistence map */
 export type TypeChart = {
   /** Type bonus damage map  */
   attacking: TypesRelations,
   /** Type resistence map */
   defending: TypesRelations,
  };
