import express from "express";
import { addData, getData } from "../controllers/dataControllers.js";

const router = express.Router();

router.post('/addData', addData);
router.get('/:userId/getData', getData);

export default router