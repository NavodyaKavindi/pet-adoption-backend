import mongoose from "mongoose" ; 

const categorySchema= mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },

        image:{
            type: String,
            required: true
        },
        descripton: {
            type: String,
            required: true,

        },
    }
);

const Category= mongoose.model("categories", categorySchema)

export default Category;