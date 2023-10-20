import { httpClient } from "../httpClient";

export interface SignInParams {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
}

export async function SignIn({ email, password }: SignInParams) {
  const { data } = await httpClient.post<SignInResponse>('/auth/signin', { email, password});

  return data;
}

