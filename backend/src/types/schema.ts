import { EmergencyContactEntity } from "./entity";

export interface UserSchema {
  id: number;
  phone: string;
  username: string;
  password: string;
  age: number;
  emergency_contact: EmergencyContactEntity[];
  call_schedule: CallScheduleSchema[];
}

export interface CallScheduleSchema {
  id: number;
  userId: number;
  is_repetition: boolean;
  day_of_week: boolean[];
  time: string;
  is_activated: boolean;
  created_at: Date;
  deleted_at: Date;
}
