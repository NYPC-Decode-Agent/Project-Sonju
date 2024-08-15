import { Request, Response, Router } from "express";

const router = Router();

router.get("/v0/user/sign-in", (req: Request, res: Response) => {
  res.send("Hello, World!1");
});

router.get("/v0/user/sign-up", (req: Request, res: Response) => {
  res.send("Hello, World!3");
});

router.get("/v0/user/sign-out", (req: Request, res: Response) => {
  res.send("Hello, World!2");
});

router.post("/v0/user/sign-in", (req: Request, res: Response) => {
  console.log(req.body);
  res.json("Hello, World!4");
});

export default router;
