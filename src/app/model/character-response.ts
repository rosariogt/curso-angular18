import { Character } from "./character.model";

export interface CharacterResponse {
  statusResponse: StatusResponse,
  results: Character[];
}

export interface StatusResponse {
  success: boolean,
  errorMessage: string
}
