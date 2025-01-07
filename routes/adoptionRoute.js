import express from 'express';
import{createAdoption} from '../controllers/adoptionController.js'

const adoptionRouter = express.Router();
adoptionRouter.post('/', createAdoption);
export default adoptionRouter;