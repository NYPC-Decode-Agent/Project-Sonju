export type IPersonInfo = {
  id: number;
  name: string;
  isActive: boolean;
  phone: string;
  birth: string;
  address: string;
  memo: string;
  aiScript: string;
  schedule: number[];
  emergencyPhone: string;
  emergencyCount: number;
};

export type IPersonData = Record<number, IPersonInfo>;

export type IUserInfo = {
  phone: string;
  name: string;
};

export type IUserData = {
  userInfo: IUserInfo;
  personData: IPersonData;
};
