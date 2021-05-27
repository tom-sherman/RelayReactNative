export interface CharacterFields {
  id: string;
  name: string;
  friends: string[];
  appears_in: (4 | 5 | 6)[];
}

export interface Human extends CharacterFields {
  type: 'Human';
  home_planet?: string;
}

export interface Droid extends CharacterFields {
  type: 'Droid';
  primary_function: string;
}

export type Character = Human | Droid;
