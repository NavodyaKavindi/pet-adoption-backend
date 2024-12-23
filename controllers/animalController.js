import Animal from '../models/animal.js';
import { isAdminValid } from './userController.js';
export function createAnimal  (req,res){

    if (!isAdminValid(req)){
        res.status(403).json({
            message: "Forbidden"
        })
        return
    }


const newAnimal = newAnimal (req.body)
newAnimal.save().then(

    (result)=>{
        res.json(
            {
                message: "Animal created succesfully",
                result: result
            }
        )
    }
).catch(
    (err)=>{
        res.json(
            {
                message: "Animal creation failed",
                error: err
            }
        )
    }
)

}

//delete animal
export function deleteAnimal (req, res){
if (!isAdminValid (req)){
res.status(403).json(
{
    message: "Forbidden"
}
)
return
}
const animalId= req.params.animalId
Animal.findOneAndDelete({animalId:roomId}).then(
()=>{
    req.json(
        {
            message:"Animal deleted successfully"
        }
    )
}
).catch(
()=>{
    req.json(
        {
            message:"Animal deletion failed"
        }
    )
}
)
}

export function findAnimalById (req,res){

    const animalId = req.params.animalId
    Animal.findOne({animalId:animalId}).then(
        (result)=>{
            if(result== null){
                res.status(404).json({
                    message: "Animal not found"
                })
                return
            }else{
                res.json(
                    {
                        message: "Animal found",
                        result: result
                    }
                )
            }
        }
    ).catch(
        (err)=>{
            res.json(
                {
                    message:"Animal search failed",
                    error: err
                }
            )
        }
    )
}

export function getAnimals(req,res){
    Animal.find().then(
        (result)=>{
            res.json(
                {
                    Animals: result
                }
            )
        }
    ).catch(
        ()=>{
            res.json(
                {
                    message:"Failed to get animals"
                }
            )
        }
    )
}

//update animal
export function updateAnimal(req,res){
    if(!isAdminValid(req)){
        res.status(403).json({
message: "Forbidden"
        } )
        return
    }

   const animalId= req.params.animalId;
   
   Animal.FindOneAndUpdate({
    animalId: animalId
    },req.body).then(
        ()=>{
            res.json({
                message: "Animal updated successfully"
            })
    
  }  ).catch(
    ()=>{
        res.json({
            message: "Animal update Failed"
        }

        )
    }
  )
        
    
}


