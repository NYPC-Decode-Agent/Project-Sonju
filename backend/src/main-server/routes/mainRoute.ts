import { Request, Response, Router } from "express";
import userRoute from "./userRoute";
import customerRoute from "./customerRoute";
import infoRoute from "./infoRoute";
import { info } from "console";

const router = Router();

router.use(userRoute);
router.use(customerRoute);
router.use(infoRoute);

export default router;
