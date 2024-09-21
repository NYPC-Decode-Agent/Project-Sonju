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
        time: body.alarm.time,
        is_active: body.alarm.is_active,
        ai_script: body.alarm.ai_script,
        phone: body.alarm.phone,
        birth_date: body.alarm.birth_date,
        address: body.alarm.address,
        is_repetition: false,
        memo: body.alarm.memo,
        emergency_phone: body.alarm.emergency_phone,
        emergency_count: body.alarm.emergency_count,
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
        user_id: req.session.userId!,
        time: body.alarm.time,
        is_active: body.alarm.is_active,
        ai_script: body.alarm.ai_script,
        phone: body.alarm.phone,
        birth_date: body.alarm.birth_date,
        address: body.alarm.address,
        is_repetition: false,
        memo: body.alarm.memo,
        emergency_phone: body.alarm.emergency_phone,
        emergency_count: body.alarm.emergency_count,
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
