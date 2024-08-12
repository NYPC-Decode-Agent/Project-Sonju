export interface signInRequestDto {
  userInfo: {
    phone: string;
    username: string;
    age: number;
  };
  emergencyContact: {
    phone: string;
    username: string;
    age: number;
    relationship: string;
  }[];
}

export interface userInfoResponseDto {
  csrfToken: string;
  userInfo: {
    phone: string;
    username: string;
    age: number;
  };
  emergencyContact: {
    phone: string;
    username: string;
    age: number;
    relationship: string;
  }[];
  callSchedule: {
    isRepetition: boolean;
    dayOfWeek: boolean[];
    time: string;
    isActivated: boolean;
  }[];
}
