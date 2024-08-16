import { Request, Response, Router } from "express";
import { sessionChecker } from "../middlewares/authMiddleware";
import { signInPostRequestDto, signUpPostRequestDto } from "@shared/dto";
import * as userQuery from "../../db/queries/userQuery";
import { UserSchema } from "src/types/schema";

const router = Router();

router.get("/api/info", sessionChecker, async (req: Request, res: Response) => {
  try {
    const userId = req.session.userId!;
    const info = await userQuery.getAllInfo(userId);

    res.status(200).json(info);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
    return;
  }
});

export default router;
