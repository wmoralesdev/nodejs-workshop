const { Schema, model } = require('mongoose')

var Vaccination = new Schema({
    petId: {
        type: String,
        required: true
    },
    vaccineId: {
        type: String,
        required: true
    },
    current_dosis: Number
})

module.exports = model("Vaccination", Vaccination)