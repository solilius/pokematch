/** User Information */
export interface Trainer {
  /** Trainer's Id, to relate to TrainerPokemons */
  id: string;
  /** Username */
  name: string;
  /** Encrypted password */
  password: string;
  /** Last login timestamp */
  lastLogin: Date;
}