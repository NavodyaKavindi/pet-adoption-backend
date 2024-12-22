import express from 'express';
import{createCategory} from '../controllers/categoryController.js'
import { deleteCategory } from '../controllers/categoryController.js';
import { getCategory } from '../controllers/categoryController.js';
import { getCategoryByName } from '../controllers/categoryController.js';
import { updateCategory } from '../controllers/categoryController.js';

 const categoryRouter= express.Router()


 categoryRouter.post("/",createCategory)

 categoryRouter.delete("/:name",deleteCategory)


 categoryRouter.get("/:name",getCategoryByName)

 categoryRouter.get("/searchByCategory", (req,res)=>{
    res,json({
        message: "searchByCategory"
    })
 })
 categoryRouter.get("/",getCategory)
 categoryRouter.put("/",updateCategory)

 export default categoryRouter;