const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
   const {frase} = req.body;
   if(frase){
       res.send(`Tu frase es: ${frase}`);
   }
    else{
         res.status(400).send('No se ha enviado');
    }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});