const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Sample static movie data
const movies = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    genre: 'Science Fiction',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  },
  {
    id: 3,
    title: 'The Godfather',
    year: 1972,
    genre: 'Crime',
    description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
  },
  {
    id: 4,
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
  },
  {
    id: 5,
    title: 'Pulp Fiction',
    year: 1994,
    genre: 'Crime',
    description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  },
  {
    id: 6,
    title: 'The Conversation',
    year: 1972,
    genre: 'Suspense',
    description: 'Man reocrds a couples conversation for earning money and cannot fathom the fact that they are going to be killed by his boss. For this, he gets involved in this matter',
  },
  {
    id: 7,
    title: 'One flew over the Cuckoos Nest',
    year: 1974,
    genre: 'Psychopath',
    description: 'This story is about a man who is sane, but enters a mental asylum and completely disturbs the decorum over there. Matters turn worse when he starts to argue with the main nurse on every matter.',
  },
  {
    id: 8,
    title: 'Raging Bull',
    year: 1980,
    genre: 'Action',
    description: 'A middleweight ascends through the ranks to achieve his first shot at a boxing title. But his personal life, laden with paranoia, jealousy and rage, scuttles his professional growth.',
  },
  {
    id: 9,
    title: 'Serpico',
    year: 1973,
    genre: 'Thriller',
    description: 'A sincere policeman of New York reveals the extensive corruption in the local police force, hoping to get rid of the corrupt elements. But his dishonest comrades turn against him.',
  },
  {
    id: 10,
    title: '....and justice for all',
    year: 1977,
    genre: 'Law',
    description: 'Defence attorney Arthur Kirkland finds himself in a crisis of conscious and ethics when he is forced to defend a judge in a rape case who could be guilty.',
  },
  {
    id: 11,
    title: 'A few good men',
    year: 1992,
    genre: 'Drama',
    description: 'Lt. Daniel Kaffee, a US military lawyer, defends two US marines charged with murdering a fellow marine at the Guantanamo Bay Naval Base in Cuba. The needle of suspicion, however, points to a colonel.',
  },
  {
    id: 12,
    title: 'To kill a Mockingbird',
    year: 1962,
    genre: 'Law',
    description: 'In the Depression era, Atticus Finch, a lawyer, sets out to defend a black man, who is accused of raping a white woman. Meanwhile, his children, Scout and Jem, spy on their reclusive neighbour.',
  },
  {
    id: 13,
    title: 'Anatomy of a murder',
    year: 1959,
    genre: 'Mystery',
    description: 'A small-town barrister successfully defends the army officer, who is accused of killing the owner of a bar for beating and raping his wife.',
  },
  {
    id: 14,
    title: 'Good Will Hunting',
    year: 1996,
    genre: 'Drama',
    description: 'Will Hunting, a janitor at MIT, is a mathematical genius. But circumstances force him to join therapeutic sessions, where he confronts his past, re-evaluates his present and thinks of his future.',
  },
  {
    id: 15,
    title: 'Sherlock Holmes',
    year: 2009,
    genre: 'Mystery',
    description: 'Detective Sherlock Holmes and his partner, Dr Watson, send Blackwood, a serial killer, to the gallows. However, they are shocked to learn that he is back from the dead and must pursue him again.',
  },
];

// GET request to fetch movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
