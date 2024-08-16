import { Request, Response, Router } from "express";
import userRoute from "./userRoute";
import customerRoute from "./customerRoute";
import infoRoute from "./infoRoute";
import alarmRoute from "./alarmRoute";
import { info } from "console";

const router = Router();

router.use(userRoute);
router.use(customerRoute);
router.use(infoRoute);
router.use(alarmRoute);

export default router;
