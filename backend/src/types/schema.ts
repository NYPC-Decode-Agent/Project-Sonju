import { EmergencyContactEntity } from "./entity";

export interface UserSchema {
  id: number;
  phone: string;
  username: string;
  password: string;
  age: number;
  createdAt: Date;
  deletedAt: Date | null;
}
