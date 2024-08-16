import { Request, Response, Router } from "express";
import { sessionChecker } from "../middlewares/authMiddleware";
import {
  customerDeleteRequestDto,
  customerPostRequestDto,
  customerPutRequestDto,
  signInPostRequestDto,
  signUpPostRequestDto,
} from "@shared/dto";
import * as customerQuery from "../../db/queries/customerQuery";

const router = Router();
router.post(
  "/api/customer",
  sessionChecker,
  async (req: Request, res: Response) => {
    const body: customerPostRequestDto = req.body;
    try {
      const result = await customerQuery.insertCustomer(
        req.session.userId!,
        body.customerInfo.phone,
        body.customerInfo.name,
        body.customerInfo.age
      );
    } catch (err: any) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(200).send("고객 추가 성공");
  }
);

router.put(
  "/api/customer",
  sessionChecker,
  async (req: Request, res: Response) => {
    const body: customerPutRequestDto = req.body;
    try {
      await customerQuery.updateCustomer(
        req.session.userId!,
        body.customerInfo.id,
        body.customerInfo.phone,
        body.customerInfo.name,
        body.customerInfo.age
      );
    } catch (err: any) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(200).send("고객 수정 성공");
  }
);

router.delete(
  "/api/customer",
  sessionChecker,
  async (req: Request, res: Response) => {
    const body: customerDeleteRequestDto = req.body;
    try {
      await customerQuery.deleteCustomer(
        req.session.userId!,
        body.customerInfo.id
      );
    } catch (err: any) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(200).send("고객 삭제 성공");
  }
);

export default router;
