import { EmergencyContactEntity } from "./entity";

export interface UserSchema {
  id: number;
  phone: string;
  username: string;
  password: string;
  age: number;
  emergencyContact: EmergencyContactEntity[];
  callSchedule: CallScheduleSchema[];
}

export interface CallScheduleSchema {
  id: number;
  userId: number;
  isRepetition: boolean;
  dayOfWeek: boolean[];
  time: string;
  isActivated: boolean;
  createdAt: Date;
  deletedAt: Date;
}
