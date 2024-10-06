import Router from "express";
import connectToPython from "../controller/connectToPython.js";

const router = Router();

router.post("/stocks", connectToPython);

export default router;
