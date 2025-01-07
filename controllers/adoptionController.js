import Adoption from '../models/adoption.js'
import {isAdopterValid}  from '../controllers/userController.js'


export function createAdoption(req,res){
if(!isAdopterValid(req)){
    res.status(403).json({
        message: "Forbidden"
    })
    return
}
    const startingId =1200;

    Adoption.countDocuments({}).then(
        (count)=>{
            console.log(count);
            const newId = startingId + count +1;
const newAdoption = new Adoption({
adoptionId : newId,
animalId : req.body.animalId,
email: req.user.email,
start: req.body.start,
end: req.body.end
})

newAdoption.save().then(
    (result)=>{
        res.json(
            {
                message:"Adoption created successfully",
                result : result
            }
        )
    }
    
).catch(
    (err)=>{
        res.json(
            {
                message: "Adoption creation failed",
                error: err
            }
        )
    }
)
        }
    ).catch(
        (err)=>{
            res.json(
                {
                    message: "Adoption creation failed",
                    error: err
                }
            )
        }
    )
}