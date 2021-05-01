const PetOwner = require('../models/PetOwner')

const jwt = require('jsonwebtoken')

var PetOwnerController = {
    // req: body, query, params
    // res: objetos o datos de respuesta

    // GET, POST, PUT, DELETE

    // GET -> Consultar datos
    // POST -> Crear / Envio de datos en JSON
    // PUT/PATCH -> Actualizar datos
    // Delete -> Eliminar

    // Cuando se necesita enviar datos desde el cliente a la API -> req.body
    // Cuando se necesita enviar parametros de consulta -> req.query
    // Cuando se necesita enviar parametro de consulta especifico -> req.params

    // Ejemplo: Crear un usuario
    // POST -> req.body

    // Ejemplo: Obtener todos los usuarios alfabeticamente de 10 en 10
    // GET -> req.query

    // Ejemplo: Actualizar DUI de una persona
    // PUT -> req.body

    // Ejemplo: Obtener usuario por id
    // GET -> req.params

    create: async (req, res) => {
        try {
            // Promesa -> JS Comportamiento que no mata el hilo principal y puede ser ejecutado o rechazado
            
            // Objeto de tipo PetOwner | Undefined
            var petOwner = await PetOwner.findOne({ username: req.body.username })

            if(petOwner != null)
                throw { error: true, message: "Username registrado" }

            var newPetOwner = new PetOwner({
                username: req.body.username,
                password: req.body.password
            })

            await newPetOwner.save()
            return res.status(201).json({ error: false, message: "Creado" })
        }
        catch(err) {
            return res.status(400).json(err)
        }
    },

    login: async (req, res) => {
        try {
            var petOwner = await PetOwner.findOne({ username: req.body.username })

            if(petOwner == null)
                throw { error: true, message: "Usuario incorrecto" }

            if(petOwner.password !== req.body.password)
                throw { error: true, message: "Contra incorrecta" }

            const token = jwt.sign({ _id: petOwner._id }, process.env.TOKEN_KEY)

            return res.status(200).json({ error: false, message: "Loggeado", token: token })
        }
        catch(err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = PetOwnerController