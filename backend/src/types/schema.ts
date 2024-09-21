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
  customer_id: number;
  day_of_week: boolean[];
  time: string;
  is_active: boolean;
  script: string;
}
