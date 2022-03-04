import { MoveDetails, Pokemon } from ".";

/** Trained Pokemon information */
export interface TrainedPokemon extends Pokemon {
  /** Id of the owning trainer */
  trainerId: string;
  /** Name of the current ability */
  currentAbility: string,
  /** List of the moves currently on the pokemon */
  currentMoves: {
    move_1: MoveDetails;
    move_2?: MoveDetails;
    move_3?: MoveDetails;
    move_4?: MoveDetails;
  },
  /** Is currently in the team */
  isActiveMember: boolean;
  /** Date of last update */
  lastUpdate: Date;
}