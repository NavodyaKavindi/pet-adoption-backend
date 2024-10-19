import express from 'express';

import {creatGalleryItem, getGalleryItem} from '../controllers/galleryItemController.js'
const galleryItemRouter= express.Router()


galleryItemRouter.post("/",creatGalleryItem)
galleryItemRouter.get("/", getGalleryItem)

export default galleryItemRouter;