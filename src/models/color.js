import {Schema, model} from "mongoose"

const colorSchema = new Schema({
    nombreColor: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    hexaColor:{
        type: String,
        minLength:2,
        maxLength:30
    },
    rgbaColor:{
        type: String,
        minLength:2,
        maxLength:30
    }
})

const Color = model("color", colorSchema)

export default Color