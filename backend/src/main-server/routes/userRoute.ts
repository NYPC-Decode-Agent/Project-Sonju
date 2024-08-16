import { Request, Response, Router } from "express";
import { sessionChecker } from "../middlewares/authMiddleware";
import { SignInPostRequestDto, SignUpPostRequestDto } from "@shared/dto";
import * as userQuery from "../../db/queries/userQuery";
import { IUserSchema } from "src/types/schema";

const router = Router();

router.post("/api/user/sign-up", async (req: Request, res: Response) => {
  const body: SignUpPostRequestDto = req.body;
  let result: number[];
  console.log(body);
  try {
    result = await userQuery.insert(
      body.userInfo.phone,
      body.userInfo.name,
      body.userInfo.password
    );
  } catch (e: any) {
    res.status(400).send({ message: e.message });
    return;
  }
  req.session.userId = result[0];
  res.status(200).send("회원가입 성공");
});

router.post("/api/user/sign-in", async (req: Request, res: Response) => {
  const body: SignInPostRequestDto = req.body;
  let result: IUserSchema[];
  try {
    result = await userQuery.getByPhone(body.userInfo.phone);
    if (result.length === 0) {
      res.status(400).send("전화번호 존재하지 않음");
      return;
    }
    if (result[0].password !== body.userInfo.password) {
      res.status(400).send("비밀번호 다름");
      return;
    }
    req.session.userId = result[0].id;
    res.status(200).send("로그인 성공");
  } catch (err: any) {
    res.status(400).send({ message: err.message });
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
      await userQuery.update({
        id: req.session.userId!,
        phone: body.userInfo.phone,
        name: body.userInfo.name,
        password: body.userInfo.password,
      });
    } catch (e) {
      res.status(400).send("유저 정보 수정 실패");
      return;
    }
    res.status(200).send("유저 정보 수정 성공");
  }
);

export default router;
