import { Request, Response, Router } from "express";
import userRoute from "./userRoute";
import customerRoute from "./customerRoute";

const router = Router();

router.use(userRoute);
router.use(customerRoute);

export default router;
