const express = require('express');
const app = express();
//const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! - Vamos Velez -');
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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
