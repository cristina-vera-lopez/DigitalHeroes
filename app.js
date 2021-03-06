const express = require('express'); 
const app = express(); 
app.listen(3030, () => console.log('Server running in 3030 port')); 

const heroesRouter = require('./routes/heroes');
const mainRouter = require('./routes/main');

app.use('/', mainRouter);
app.use('/heroes', heroesRouter);

