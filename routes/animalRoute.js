import express from 'express';
import{createAnimal, deleteAnimal, getAnimals, getAnimalsByCategory, findAnimalById, updateAnimal} from '../controllers/animalController.js' 

const animalRouter= express.Router()

animalRouter.post("/", createAnimal)
animalRouter.delete("/:animalId", deleteAnimal)
animalRouter.get("/", getAnimals)
animalRouter.get("/by.category/: category",getAnimalsByCategory)
animalRouter.get("/:animalId", findAnimalById)
animalRouter.put("/:animalId", updateAnimal)


export default animalRouter;