// 유저의 대해 모든 customer 정보 긁어오기
export interface InfoGetResponseDto {
  userInfo: {
    phone: string;
    name: string;
  };
  alarmInfo: (IAlarm & { id: number })[];
}

export interface ICustomerInfo {
  id: number;
  phone: string;
  name: string;
  birthDate: string;
  alarm: (IAlarm & { id: number })[];
}

export interface IAlarm {
  name: string;
  is_active: boolean;
  phone: string;
  birth_date: string;
  address: string;
  time: (string | null)[];
  ai_script: string;
  memo: string;
  emergency_phone: string;
  emergency_count: number;
}

// 회원가입
export interface SignUpPostRequestDto {
  userInfo: {
    phone: string;
    name: string;
    password: string;
  };
}

//로그인
export interface SignInPostRequestDto {
  userInfo: {
    phone: string;
    password: string;
  };
}

// 유저 정보 수정
export interface UserPutRequestDto {
  userInfo: {
    name: string;
    password: string;
  };
}

// customer의 등록
export interface CustomerPostRequestDto {
  customerInfo: {
    phone: string;
    name: string;
    birthDate: string;
  };
}

// customer 정보 수정
export interface CustomerPutRequestDto {
  customerInfo: {
    id: number;
    phone: string;
    name: string;
    birthDate: string;
  };
}

// customer 삭제
export interface CustomerDeleteRequestDto {
  customerInfo: {
    id: number;
  };
}

// customer의 alarm  등록
export interface AlarmPostRequestDto {
  customerInfo: {
    id: number;
  };
  alarm: IAlarm;
}

// customer의 alarm  수정
export interface AlarmPutRequestDto {
  customerInfo: {
    id: number;
  };
  alarm: IAlarm & { id: number };
}

// customer의 alarm 삭제
export interface AlarmDeleteRequestDto {
  customerInfo: {
    id: number;
  };
  alarm: {
    id: number;
  };
}
