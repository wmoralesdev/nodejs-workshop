// ORM -> Object Relation Mapper
const { Schema, model } = require('mongoose')

var Vaccine = new Schema({
    dosis: Number,
    animal: String,
    name: String,
    desc: String
})

module.exports = model("Vaccine", Vaccine)