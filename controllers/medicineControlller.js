const mongoose  = require("mongoose")
const Medicine = require("../models/medicine")


const index = async (req, res) => {
    res.json(await Medicine.find({}))
}

const show = async (req, res) => {
    try {
        medicine = await Medicine.findById(req.params.id)
        return medicine === null ? res.status(404).json({error : "medicine not found"}) : res.status(200).json(medicine)
    }catch(e) {
        res.status(400).json({error : "invalid ID"})
    }
}

const create = async (req, res) => {
    const medicine = new Medicine(req.body)
    try{
        const saved = await  medicine.save()
        res.status(201).json(saved)
    }catch(e){
        const { errors , statusCode } = handleErrors(e)
        res.status(statusCode).json({errors})
    }
}

const update = async (req, res) => {
    try{
        const medicine = await Medicine.findById(req.params.id)
        if(medicine === null){
            res.status(404).json({error : "medicine not found"})
        }else{
            medicine.drug = req.body.drug
            medicine.brand = req.body.brand
            medicine.dose = req.body.dose
            const saved = await medicine.save()
            return res.status(200).json(saved)
        }
    }catch(error){
        const { errors , statusCode } = handleErrors(error)
        res.status(statusCode).json({errors})
    }
}

const destroy = (req, res) => {
    try {
    const medicine = await Medicine.findById(req.params.id)
    if(medicine === null){
            res.status(404).json({error : "medicine not found"})
        }else{
            const destroy = await medicine.delete()
            return res.status(200).json(destroy);
        }
    }catch(error) { 
        const { errors , statusCode } = handleErrors(error)
        res.status(statusCode).json({errors})
    }
}


const handleErrors = (e) => {
    if(e instanceof mongoose.Error.ValidationError){
        console.log(e.errors)
        errors = {}
        Object.keys(e.errors).forEach((key) => { errors[key] = e.errors[key].message})
        return {errors, statusCode: 400}
    }
    return {errors : ["internal server error"], statusCode: 500}
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}