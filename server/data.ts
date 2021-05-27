import { NexusGenEnums } from './star-wars-typegen';
import { Character, Human, Droid } from './types/backingTypes';

/*
 * Copied from GraphQL JS:
 *
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this
 * source tree.
 */

/*
 * This defines a basic set of data for our Star Wars Schema.
 *
 * This data is hard coded for the sake of the demo, but you could imagine fetching this data from a backend
 * service rather than from hardcoded JSON objects in a more complex demo.
 */

const luke: Human = {
  type: 'Human',
  id: '1000',
  name: 'Luke Skywalker',
  friends: ['1002', '1003', '2000', '2001'],
  appears_in: [4, 5, 6],
  home_planet: 'Tatooine',
};

const vader: Human = {
  type: 'Human',
  id: '1001',
  name: 'Darth Vader',
  friends: ['1004'],
  appears_in: [4, 5, 6],
  home_planet: 'Tatooine',
};

const han: Human = {
  type: 'Human',
  id: '1002',
  name: 'Han Solo',
  friends: ['1000', '1003', '2001'],
  appears_in: [4, 5, 6],
};

const leia: Human = {
  type: 'Human',
  id: '1003',
  name: 'Leia Organa',
  friends: ['1000', '1002', '2000', '2001'],
  appears_in: [4, 5, 6],
  home_planet: 'Alderaan',
};

const tarkin: Human = {
  type: 'Human',
  id: '1004',
  name: 'Wilhuff Tarkin',
  friends: ['1001'],
  appears_in: [4],
};

const humanData = {
  '1000': luke,
  '1001': vader,
  '1002': han,
  '1003': leia,
  '1004': tarkin,
} as Record<string, Human>;

const threepio: Droid = {
  type: 'Droid',
  id: '2000',
  name: 'C-3PO',
  friends: ['1000', '1002', '1003', '2001'],
  appears_in: [4, 5, 6],
  primary_function: 'Protocol',
};

const artoo: Droid = {
  type: 'Droid',
  id: '2001',
  name: 'R2-D2',
  friends: ['1000', '1002', '1003'],
  appears_in: [4, 5, 6],
  primary_function: 'Astromech',
};

const droidData = {
  '2000': threepio,
  '2001': artoo,
} as Record<string, Droid>;

const wait = (ms: number) =>
  new Promise((res) => setTimeout(res, randomIntFromInterval(ms, ms + 500)));

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** Helper function to get a character by ID. */
async function getCharacter(id: string) {
  await wait(250);
  // Returning a promise just to illustrate GraphQL.js's support.
  return Promise.resolve(humanData[id] ?? droidData[id]);
}

/** Allows us to query for a character's friends. */
export function getFriends(character: Character) {
  // Notice that GraphQL accepts Arrays of Promises.
  return character.friends.map((id) => getCharacter(id));
}

/** Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2. */
export async function getHero(
  episode?: NexusGenEnums['Episode'] | null
): Promise<Character> {
  await wait(250);
  if (episode === 'EMPIRE') {
    // Luke is the hero of Episode V.
    return luke;
  }
  // Artoo is the hero otherwise.
  return artoo;
}

export const allHumans = Object.keys(humanData).map((key) => humanData[key]);

/** Allows us to query for the human with the given id. */
export async function getHuman(id: string): Promise<Human> {
  await wait(250);
  return humanData[id];
}

export const allDroids = Object.keys(droidData).map((key) => droidData[key]);

/** Allows us to query for the droid with the given id. */
export async function getDroid(id: string): Promise<Droid> {
  await wait(250);
  return droidData[id];
}
