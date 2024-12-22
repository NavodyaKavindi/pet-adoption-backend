import mongoose from "mongoose" ; 
const animalSchema= new mongoose.Schema(
{
animalId:{
type: Number,
required: true,
unque: true

},

category:{
type: String,
required: true

},



available:{
    type: Boolean,
    required: true,
    default: true
},

photos: [
    {
        type: String
    }
],

specialDescription: {
    type: String,
    default: ""
},

notes: {
    type: String,
    default:""
}

}

)

const Animals = mongoose.model("Animals", animalSchema)

export default Animal;