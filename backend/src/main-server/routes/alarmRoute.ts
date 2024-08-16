import { Request, Response, Router } from "express";
import { sessionChecker } from "../middlewares/authMiddleware";
import { alarmPostRequestDto } from "@shared/dto";
import * as alarmQuery from "../../db/queries/alarmQuery";

const router = Router();

router.post(
  "/api/alarm",
  sessionChecker,
  async (req: Request, res: Response) => {
    const body: alarmPostRequestDto = req.body;
    try {
      const result = await alarmQuery.insertAlarm(
        req.session.userId!,
        body.customerInfo.id,
        body.alarm
      );
    } catch (err: any) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(200).send("알람 추가 성공");
  }
);

router.put(
  "/api/alarm",
  sessionChecker,
  async (req: Request, res: Response) => {
    const body: alarmPostRequestDto = req.body;
    try {
      await alarmQuery.updateAlarm(
        req.session.userId!,
        body.customerInfo.id,
        body.alarm
      );
    } catch (err: any) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(200).send("알람 수정 성공");
  }
);

router.delete(
  "/api/alarm",
  sessionChecker,
  async (req: Request, res: Response) => {
    const body: alarmPostRequestDto = req.body;
    try {
      await alarmQuery.deleteAlarm(req.session.userId!, body.customerInfo.id);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(200).send("알람 삭제 성공");
  }
);

export default router;
