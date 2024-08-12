import { Request, Response, Router } from "express";
import userRoute from "./userRoute";

const router = Router();

router.use(userRoute);

export default router;
