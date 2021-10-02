const express = require('express');
const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Welcome do Medicine API')});

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT} `))

//MOCKUP de API

app.get('/medicines/', (req, res) => {
  return res.json({brand: 'ben-u-ron', drug: 'paracetamol'}).status(200);
});

app.get('/medicines/:id', (req, res) => {
  res.send('retorna 1 Medicamento')
});

app.post('/medicines/', (req, res) => {
  console.log(req.params.id)
  res.send('POsta um medicamento')
});

app.put('/medicines/:1', (req, res) => {
  res.send('Altera 1 medicamento')
});

app.delete('/medicines/:id', (req, res) => {
  res.send('retorna todos os medicamentos')
});