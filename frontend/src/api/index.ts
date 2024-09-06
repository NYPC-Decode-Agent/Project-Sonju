import { InfoGetResponseDto, SignInPostRequestDto, SignUpPostRequestDto } from "@shared/dto";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { request } from "./request";

export const useSignUpMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: SignUpPostRequestDto) => request.post("/api/user/sign-up", data),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useSignInMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: SignInPostRequestDto) => request.post("/api/user/sign-in", data),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useSignOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => request.post("/api/user/sign-out"),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useUserInfoQuery = () => useQuery({
  queryKey: ["user"],
  queryFn: () => request.get<InfoGetResponseDto>("/api/info"),
  retry: 0,
});
