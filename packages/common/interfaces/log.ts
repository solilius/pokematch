/** Log Data */
export interface Log {
  /** Trainer Id */
  trainerId: string;
  /** Event type */
  eventName: string;
  /** Log data */
  data: object;
  /** Date of the log */
  timestamp: Date;
}