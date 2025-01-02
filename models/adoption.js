import mongoose from "mongoose" ; 

const adoptionSchema= mongoose.Schema({
    adoptionId:{
        type: Number,
        required: true,
        unique: true
    },

    animalId:{
        type: Number,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    statuse: {
        type: String,
        required : true,
        default: "pending"

    },
    reason: {
        type: String,
        default:""
    },

    start: {
        type: Date,
        required: true,

    },

    end:{
        type: Date,
        required: true
    },

    notes: {
        type: String,
        default:""
    }


}
)
const Adoption= mongoose.model("adoptionS", adoptionSchema)

export default Adoption;