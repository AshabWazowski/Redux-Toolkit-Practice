import { Router } from "express";
import { addData, getData } from "../controllers/dataControllers";

const router = Router();

router.post('/addData', addData);
router.get('/:userId/getData', getData);