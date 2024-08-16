// 유저의 대해 모든 customer 정보 긁어오기
export interface infoGetResponseDto {
  userInfo: {
    phone: string;
    name: string;
  };
  customerInfo: ICustomerInfo[];
}

export interface ICustomerInfo {
  id: number;
  phone: string;
  name: string;
  age: number;
  alarm: (IAlarm & { id: number })[];
}

export interface IAlarm {
  isRepetition: boolean;
  dayOfWeek: boolean[];
  time: string;
  isActive: boolean;
  script: string;
}

// 회원가입
export interface signUpPostRequestDto {
  userInfo: {
    phone: string;
    name: string;
    password: string;
  };
}

//로그인
export interface signInPostRequestDto {
  userInfo: {
    phone: string;
    password: string;
  };
}

// 유저 정보 수정
export interface userPutRequestDto {
  userInfo: {
    name: string;
    password: string;
  };
}

// customer의 등록
export interface customerPostRequestDto {
  customerInfo: {
    phone: string;
    name: string;
    age: number;
  };
}

// customer 정보 수정
export interface customerPutRequestDto {
  customerInfo: {
    id: number;
    phone: string;
    name: string;
    age: number;
  };
}

// customer 삭제
export interface customerDeleteRequestDto {
  customerInfo: {
    id: number;
  };
}

// customer의 alarm  등록
export interface alarmPostRequestDto {
  customerInfo: {
    id: number;
  };
  alarm: IAlarm;
}

// customer의 alarm  수정
export interface alarmPutRequestDto {
  customerInfo: {
    id: number;
  };
  alarm: {
    id: number;
    isRepetition: boolean;
    dayOfWeek: boolean[];
    time: string;
    isActive: boolean;
    script: string;
  };
}

// customer의 alarm 삭제

export interface alarmDeleteRequestDto {
  customerInfo: {
    id: number;
  };
  alarm: {
    id: number;
  };
}
