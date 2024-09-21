import { EmergencyContactEntity } from "./entity";

export interface IUserSchema {
  id: number;
  phone: string;
  name: string;
  password: string;
}

export interface ICustomerSchema {
  id: number;
  user_id: number;
  phone: string;
  name: string;
  birth_date: string;
}

export interface IAlarmSchema {
  id: number;
  user_id: number;
  name: string;
  phone: string;
  birth_date: string;
  address: string;
  is_repetition: boolean;
  time: (string | null)[];
  is_active: boolean;
  ai_script: string;
  memo: string;
  emergency_phone: string;
  emergency_count: number;
}
