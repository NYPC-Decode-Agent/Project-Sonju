import { Request, Response, Router } from "express";
import { sessionChecker } from "../middlewares/authMiddleware";
import { signInPostRequestDto, signUpPostRequestDto } from "@shared/dto";
import * as userQuery from "../../db/queries/userQuery";
import { UserSchema } from "src/types/schema";

const router = Router();

export default router;
