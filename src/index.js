const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());

const users = []

app.post('/registration', (request, response)=>{
  const {name, email, cpf, latitude, longitude, type, date, event} = request.body;

  const userAlredyExists = users.some((user) => user.cpf === cpf);
  if(userAlredyExists) {
    return response.status(400).json({error: "Usuário ja cadastrado"})
  }

  const id = uuidv4();

  users.push({
    id: uuidv4(),
    name, 
    email,
    cpf, 
    latitude, 
    longitude,
    type, 
    date, 
    event
  });

  return response.status(201).send();

})

app.listen(3333)