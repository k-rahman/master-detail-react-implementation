const express = require('express');
const cors = require('cors');
const { dogsData } = require('./data');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/assets"));
app.use(cors());


app.get('/api/dogs', (req, res) => {
   res.send(dogsData);
});

app.get('/api/dogs/:id', (req, res) => {
   const id = Number(req.params.id);
   const dog = dogsData.find(dog => dog.id === id);

   if (!dog) res.status(404).send('Error');

   res.send(dog);
});

app.put('/api/dogs/:id', (req, res) => {
   const body = req.body;
   const id = Number(req.params.id);
   const index = dogsData.findIndex(dog => dog.id === id);

   const dog = {
         id: body.id,
         img: body.img,
         name: body.name,
         species: body.species,
         interset: body.interset,
         likes: body.likes,
         dislikes: body.dislikes,
         comments: body.comments,
   };
   
   dogsData[index] = dog;
   res.send(dogsData);
})

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`listening on ${port}`));