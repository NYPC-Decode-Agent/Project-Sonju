import {
  // InfoGetResponseDto,
  SignInPostRequestDto,
  SignUpPostRequestDto,
} from '@shared/dto';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { request } from './request';
import { IPersonData, IPersonInfo, IUserData, IUserInfo } from './types';
import { getStorage, setStorage } from './storage';

export const useSignUpMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: SignUpPostRequestDto) =>
      request.post('/api/user/sign-up', data),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

export const useSignInMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: SignInPostRequestDto) =>
      request.post('/api/user/sign-in', data),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

export const useSignOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => request.post('/api/user/sign-out'),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

type EditPersonInfoMutationProps = {
  id: number;
  personInfo: IPersonInfo;
};
export const useEditPersonInfoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async({ id, personInfo }: EditPersonInfoMutationProps) => {
      const personData = getStorage("personData");
      personData[id] = personInfo;
      setStorage('personData', personData);
      console.log(personData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'personData'] });
    },
  });
};

export const useUserDataQuery = () =>
  useQuery({
    queryKey: ['user'],
    // queryFn: async(): Promise<IUserData> => {
    //   const response = await request.get<InfoGetResponseDto>('/api/info');
    //   const { userInfo, alarmInfo } = response.data;
    //   return {
    //     userInfo,
    //     personInfo: alarmInfo.map(({
    //       id,
    //       name,
    //       is_active,
    //       phone,
    //       birth_date,
    //       address,
    //       memo,
    //       ai_script,
    //       time,
    //       emergency_phone,
    //       emergency_count,
    //     }): IPersonInfo => ({
    //       id,
    //       name,
    //       isActive: is_active,
    //       phone,
    //       birth: birth_date,
    //       address,
    //       memo,
    //       aiScript: ai_script,
    //       time, // ?
    //       emergencyPhone: emergency_phone,
    //       emergencyCount: emergency_count,
    //     })),
    //   };
    // },
    queryFn: (): IUserData => ({
      userInfo: getStorage("userInfo"),
      personData: getStorage("personData"),
    }),
    retry: 0,
  });

export const useUserInfoQuery = () =>
  useQuery({
    queryKey: ['user', 'userInfo'],
    queryFn: (): IUserInfo => getStorage("userInfo"),
    retry: 0,
  });

export const usePersonDataQuery = () =>
  useQuery({
    queryKey: ['user', 'personData'],
    queryFn: (): IPersonData => getStorage("personData"),
    retry: 0,
  });
