import { enumType } from 'nexus';

const OriginalEpisodes = [
  { name: 'NEWHOPE', description: 'Released in 1977.' },
  { name: 'EMPIRE', description: 'Released in 1980.' },
  { name: 'JEDI', description: 'Released in 1983' },
];

export const Episode = enumType({
  name: 'Episode',
  description: 'One of the films in the Star Wars Trilogy',
  members: OriginalEpisodes,
});

export const MoreEpisodes = enumType({
  name: 'MoreEpisodes',
  members: [...OriginalEpisodes, 'OTHER'],
});
