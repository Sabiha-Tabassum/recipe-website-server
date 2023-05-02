const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const data = require('./data/chefData.json');


app.use(cors());

app.get('/', (req,res) => {
   res.send('server is running')
});

app.get('/chefData', (req,res) => {
    res.send(data);
})

app.get('/chefData/:id', (req,res) => {
     const id = parseInt(req.params.id);
     console.log(id)
     const selectedRecipe = data.find(r => parseInt(r.id) === id)
     res.send(selectedRecipe)
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})