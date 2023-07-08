export type TypeOfMessage = 'success' | 'error' | 'info' | 'warning';

export interface Message {
  type: TypeOfMessage;
  text: string;
}
