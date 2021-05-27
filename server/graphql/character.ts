import { interfaceType, idArg, nonNull } from 'nexus';
import { getFriends } from '../data';
import { NexusGenEnums } from '../star-wars-typegen';
import { Character as CharacterBackingType } from '../types/backingTypes';

type EpisodeBackingType = CharacterBackingType['appears_in'][number];

const episodeLookup: Record<EpisodeBackingType, NexusGenEnums['Episode']> = {
  4: 'NEWHOPE',
  5: 'EMPIRE',
  6: 'JEDI',
};

export const Character = interfaceType({
  name: 'Character',
  resolveType(character) {
    return character.type;
  },
  definition: (t) => {
    t.string('id', { description: 'The id of the character' });
    t.string('name', { description: 'The name of the character' });
    t.list.field('friends', {
      type: 'Character',
      description:
        'The friends of the character, or an empty list if they have none.',
      resolve: (character) => Promise.all(getFriends(character)),
    });
    t.list.field('appearsIn', {
      type: 'Episode',
      description: 'Which movies they appear in.',
      resolve: (character) =>
        character.appears_in.map((episode) => episodeLookup[episode]),
      args: {
        id: nonNull(idArg()),
      },
    });
  },
});
