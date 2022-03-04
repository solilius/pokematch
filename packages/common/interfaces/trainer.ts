/** User Information */
export interface Trainer {
  /** Trainer's Id, to relate to TrainerPokemons */
  id: string;
  /** Username */
  username: string;
  /** Trainer's name */
  displayedName?: string;
  /** Encrypted password */
  password: string;
  /** Last login timestamp */
  lastLogin: Date;
}