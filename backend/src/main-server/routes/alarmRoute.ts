import { Request, Response, Router } from "express";
import { sessionChecker } from "../middlewares/authMiddleware";
import {
  AlarmDeleteRequestDto,
  AlarmPostRequestDto,
  AlarmPutRequestDto,
} from "@shared/dto";
import * as alarmQuery from "../../db/queries/alarmQuery";

const router = Router();

router.post(
  "/api/alarm",
  sessionChecker,
  async (req: Request, res: Response) => {
    const body: AlarmPostRequestDto = req.body;
    try {
      await alarmQuery.insertAlarm({
        user_id: req.session.userId!,
        customer_id: body.customerInfo.id,
        day_of_week: body.alarm.dayOfWeek,
        time: body.alarm.time,
        is_active: body.alarm.isActive,
        script: body.alarm.script,
      });
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
    const body: AlarmPutRequestDto = req.body;
    try {
      await alarmQuery.updateAlarm({
        id: body.alarm.id,
        customer_id: body.customerInfo.id,
        user_id: req.session.userId!,
        day_of_week: body.alarm.dayOfWeek,
        time: body.alarm.time,
        is_active: body.alarm.isActive,
        script: body.alarm.script,
      });
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
    const body: AlarmDeleteRequestDto = req.body;
    try {
      await alarmQuery.deleteAlarm(
        req.session.userId!,
        body.customerInfo.id,
        body.alarm.id
      );
    } catch (err: any) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(200).send("알람 삭제 성공");
  }
);

export default router;
