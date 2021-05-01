const Vaccine = require('../models/Vaccine')

var PetOwnerController = {

    create: async (req, res) => {
        try {
            var newVaccine = new Vaccine({
                dosis: req.body.dosis,
                animal: req.body.animal,
                name: req.body.name,
                desc: req.body.desc,
            })

            await newVaccine.save()
            return res.status(201).json({ error: false, message: "Creada" })
        }
        catch(err) {
            return res.status(400).json(err)
        }
    },

    deleteVacc: async (req, res) => {
        try {
            var ret = await Vaccine.findOneAndDelete({ _id: req.body._id })

            return res.status(200).json({ obj: ret })
        }
        catch(err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = PetOwnerController