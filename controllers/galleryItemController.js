import GalleryItem from '../models/galleryItem.js'
export function creatGalleryItem (req,res){

    const user = req.user
    if(user == null){
        res.status(403).json({
            message: "Please login to create a gallery item"
        })
        return
    }if (user.type !="admin"){
        res.status(403).json({
            message: "Please do not have permission to create a gallery item"
        })
        return
    }
    const galleryItem = req.body

    const newGalleryItem = new GalleryItem(req.body)
    newGalleryItem.save().then(
    ()=>{
        res.json({
            message: "Gallery Item created successfully"
        })
    }
).catch(
    (err)=>{
        console.log(err)
        res.status(500).json({
            message: "Gallery Item creation failed"
        })
    }
)
}

export function getGalleryItem (req,res){
    GalleryItem.find().then(
        (list)=>{
            res.json({
                list:list
            })
        }
    )

}

