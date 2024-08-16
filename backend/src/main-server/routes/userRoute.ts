import { Request, Response, Router } from "express";
import { sessionChecker } from "../middlewares/authMiddleware";
import { signInPostRequestDto, signUpPostRequestDto } from "@shared/dto";
import * as userQuery from "../../db/queries/userQuery";
import { UserSchema } from "src/types/schema";

const router = Router();

router.post("/api/user/sign-up", async (req: Request, res: Response) => {
  const body: signUpPostRequestDto = req.body;
  let result: number[];
  console.log(body);
  try {
    result = await userQuery.insert(
      body.userInfo.phone,
      body.userInfo.name,
      body.userInfo.password
    );
  } catch (e) {
    console.log(e);
    res.status(400).send("회원가입 실패");
    return;
  }
  req.session.userId = result[0];
  res.status(200).send("회원가입 성공");
});

router.post("/api/user/sign-in", async (req: Request, res: Response) => {
  const body: signInPostRequestDto = req.body;
  let result: UserSchema[];
  try {
    result = await userQuery.getByPhone(body.userInfo.phone);
    if (result.length === 0) {
      res.status(400).send("로그인 실패");
      return;
    }
    if (result[0].password !== body.userInfo.password) {
      res.status(400).send("로그인 실패");
      return;
    }
    req.session.userId = result[0].id;
    res.status(200).send("로그인 성공");
  } catch (e) {
    res.status(400).send("로그인 실패");
    return;
  }
});

router.post(
  "/api/user/sign-out",
  sessionChecker,
  (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send("로그아웃 실패");
        return;
      }
      res.status(200).send("로그아웃 성공");
    });
  }
);

router.put(
  "/api/user/info",
  sessionChecker,
  async (req: Request, res: Response) => {
    const body = req.body;
    try {
      await userQuery.update(
        req.session.userId!,
        body.userInfo.name,
        body.userInfo.password
      );
    } catch (e) {
      res.status(400).send("유저 정보 수정 실패");
      return;
    }
    res.status(200).send("유저 정보 수정 성공");
  }
);

export default router;
