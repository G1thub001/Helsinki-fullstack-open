const mongoose = require('mongoose')
require('dotenv').config()

const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')

    if (process.argv.length === 3) {
      Person.find({}).then(persons => {
        console.log('phonebook:')

        persons.forEach(person => {
          console.log(person.name, person.number)
        })

        mongoose.connection.close()
      })
    }

    if (process.argv.length === 5) {
      const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
      })

      person.save().then(() => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        mongoose.connection.close()
      })
    }
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })