const express = require('express')
const morgan = require("morgan")
const mongoose = require("mongoose")
const Player = require("./modules/mongo")

const app = express()
app.use(express.json())
const PORT = 3000

db_URI = "mongodb+srv://saif:saif0319@cluster0.7xs8nrx.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(db_URI)
.then((result) => app.listen(PORT))
.catch((error) => console.log(error))




let persons = [
      {
        "name": "Cristiano",
        "number": "7777777777",
        "id": 1
      },
      {
        "name": "Bale",
        "number": "1111111111",
        "id": 2
      },
      {
        "name": "Benzema",
        "number": "9999999999",
        "id": 3
      }
    ]

    app.use(morgan((tokens, request, response) => {
      return [
        tokens.method(request, response),
        tokens.url(request, response),
        tokens.status(request, response),
        tokens.res(request, response, 'content-length'), '-',
        tokens['response-time'](request, response), 'ms',
        JSON.stringify(request.body)
      ].join(' ')
    }))
  


  // MongoDB
    app.get('/add-player', (request, response) => {
      const pl = new Player({
        name: "Luka",
        number: "10101010"
      })

      pl.save()
      .then((result) => {
        response.send(result)
        console.log("player saved")
        mongoose.connection.close()
      })
      .catch((error) => {
        console.log(error)
      })

    })



    app.get('/all-players', (request, response) => {
        Player.find({}).then((result) => {
          response.send(result)
          mongoose.connection.close()
        })
    })



  
  // GET ALL
  app.get('/api/players', (request, response) => {
    response.json(persons)
  })


  // ?
  app.get('/info', (request, response) => {
    response.send(
        `<p>phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
        `
    )
  })


  //GET a single entry
  app.get('/api/players/:id', (request, response) => {

    const id = Number(request.params.id)
    const pl = persons.find(p => p.id === id)
    
    if(pl) {
        response.json(pl)
    } else {
        response.status(404).end()
    }

  })



  // Delete entry
  app.delete('/api/players/:id', (request,response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
  })

  

  // Check
  const contains = (obj, array) => {
    
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === obj.name) {
          return true;
      }
  }

    return false;
  }


  // Add 
  app.post('/api/players', (request, response) => {

      const body = request.body
      console.log(body);

      const player = {
        name: body.name,
        number: body.number,
        id: Math.round(Math.random() * 1000) + persons.length
      }

      const val = contains(player, persons)

      if(val === true) {
        return response.status(400).json({ 
          error: 'name already exists' 
        })
      } 
      
      if (val === false) {
        persons = persons.concat(player)
        response.json(player)
      }
  })


  

  
  
  

// const PORT = 3000
// app.listen(PORT)
console.log(`Server running on port ${PORT}`)