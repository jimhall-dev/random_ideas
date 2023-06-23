const express = require('express');

const PORT = 5000;

const ideas = [
  {
    id: 1,
    text: 'Positive Newsletter, a newsletter that only shares positive uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn different colors the older your milk is',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];

const app = express();

app.get('/', (request, response) => {
  response.send({ message: 'Welcome to the RandomIdea API' });
});

// Get all ideas
app.get('/api/ideas', (request, response) => {
  response.send({ success: true, data: ideas });
});
// Get single idea
app.get('/api/ideas/:id', (request, response) => {
  const idea = ideas.find((idea) => idea.id === parseInt(request.params.id));
  if (idea) {
    response.send({ success: true, data: idea });
  } else {
    response.status(404).json({ success: false, error: 'Resource Not Found' });
  }
});

app.listen(PORT, () => console.log(`Server listening on port...${PORT}`));
