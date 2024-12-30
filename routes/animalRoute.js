import express from 'express';
import{createAnimal, deleteAnimal, getAnimal, findAnimalById, updateAnimal} from '../controllers/animalController.js' 

const animalRouter= express.Router()

animalRouter.post("/", createAnimal)
animalRouter.delete("/:animalId", deleteAnimal)
animalRouter.get("/", getAnimal)
animalRouter.get("/:animalId", findAnimalById)
animalRouter.put("/:animalId", updateAnimal)


export default animalRouter