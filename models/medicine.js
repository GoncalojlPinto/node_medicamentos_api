const mongoose = require("mongoose")

const Medicine = mongoose.model("Medicine", {
    brand: {
        type: String,
        required: [true, "Brand is required"],
        trim: true
    },
    drug: {
        type: String,
        required: true,
        trim: true
    },
    dose: {
        type: String,
        required: true
    }
})

module.exports = Medicine