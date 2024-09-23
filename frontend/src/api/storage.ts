import { IPersonData } from "./types";

export const setStorage = (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value));
export const getStorage = (key: string) => JSON.parse(localStorage.getItem(key)!);

// 고객 데이터 샘플
setStorage("personData", {
  0: {
    id: 0,
    isActive: true,
    name: '',
    phone: '',
    birth: '',
    address: '',
    memo: '',
    aiScript: '',
    emergencyPhone: '',
    emergencyCount: 0,
    schedule: [-1, -1, -1, -1, -1, -1, -1],
  },
  1: {
    id: 1,
    isActive: true,
    name: '김철수',
    phone: '01012345678',
    birth: '19500101',
    address: '서울특별시 강남구 테헤란로',
    memo: '심장약 복용: 특별 케어 필요',
    aiScript: '안녕하세요. 씀씀이예요.',
    emergencyPhone: '+821011111111',
    emergencyCount: 3,
    schedule: [-1, 137, -1, -1, -1, -1, -1],
  },
  2: {
    id: 2,
    isActive: true,
    name: '이영희',
    phone: '01087654321',
    birth: '19491231',
    address: '서울특별시 서초구 양재동',
    memo: '',
    aiScript: '안녕하세요. 씀씀이예요.',
    emergencyPhone: '+821011111111',
    emergencyCount: 3,
    schedule: [-1, -1, -1, -1, -1, -1, -1],
  },
} satisfies IPersonData);
