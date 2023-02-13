// seed.js will be run by the script `npm run seed`

// this will seed our databse with a buncha pets

// we can modify this later after building out our API a little bit.

const mongoose = require('mongoose')
const Pet = require('./gems')
const db = require('../../config/db')

const startPets = [
    { name: 'Amethyst', color: 'purple', easyToFind: true },
    { name: 'Diamond', color: 'clear', easyToFind: true },
    { name: 'Cherry Quartz', color: 'pink', easyToFind: false },
    { name: 'Ruby', color: 'red', easyToFind: false },
    { name: 'White Sea Pearl', color: 'white', easyToFind: false }
]

// first we connect to the db
// then remove all pets
// then add the start pets
// and always close the connection, whether its a success or failure

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Pet.deleteMany()
            .then(deletedPets => {
                console.log('the deleted pets:', deletedPets)
                // now we add our pets to the db
                Pet.create(startPets)
                    .then(newPets => {
                        console.log('the new pets', newPets)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })