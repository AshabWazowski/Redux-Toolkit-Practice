import express from "express";
import { addData, deleteData, editData, getData, updateData } from "../controllers/dataControllers.js";

const router = express.Router();

router.post('/addData', addData);
router.get('/:userId/getData', getData);
router.get('/:id/edit', editData)
router.put('/:id/update', updateData);
router.delete('/:id/delete', deleteData);
 
export default router