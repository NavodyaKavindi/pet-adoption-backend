import Category from '../models/category.js';
export function createCategory(req,res){

    if(req.user == null){
        res.status(403).json({
            message: "Unauthorized"
        })
        return
    }if (req.user.type !="admin"){
        res.status(403).json({
            message: "Forbidden"
        })
        return
    }

    const newcategory = new Category(req.body)
    newcategory.save().then(
        (result)=>{
            res.json(
                {
                    message:"Category created successfully",
                    result: result
                }
            )
        }
    ).catch (
        (err)=>{
            res.json(
                {
                    message: "Category creation failed",
                    error: err
                }
            )
        }
    )
}

//delete category
export function deleteCategory(req,res){

    if(user == null){
        res.status(403).json({
            message: "Unauthorized"
        })
        return
    }if (req.user.type !="admin"){
        res.status(403).json({
            message: "Forbidden"
        })
        return
    }

    const name = req.params.name
    Category.findOneAndDelete({name:name}).then(
        ()=>{
            req.json(
                {
                    message:"Category deleted successfully"
                }
            )
        }
    ).catch(
        ()=>{
            req.json(
                {
                    message:"Category deletion failed"
                }
            )
        }
    )
}
  
export function getCategory(req,res){
    Category.find().then(
        (result)=>{
            res.json({
                Categories: result 
            }
                
            )
        }
    ). catch(
        ()=>{
            res.json({
                message : "Failed to get categories"
            })
        }
    )
}

