const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello!');
})

app.post('/api/getWord', (req, res) => {
    const { word } = req.body
    if (word) {
        console.log(word)
        const wordResponse= axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => {
            res.status(200).json(response.data[0].meanings[0].definitions[0].definition);
            console.log(response.data[0].meanings[0].definitions[0].definition)
            
        })
        .catch((error) => {
            res.status(400).json({ error: "Word not found" }); // Handle error case
        });

      } 
      else {
        res.status(400).json({ error: "No word provided" }); // Handle error case
      }
    
    
})

app.listen(3007, () => console.log('Example app listening on port 3007!'));

module.exports = app;
