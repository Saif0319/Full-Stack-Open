const mongoose = require("mongoose")
const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: String,
    number: String
})

playerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Player = mongoose.model("Player", playerSchema)

module.exports = Player;