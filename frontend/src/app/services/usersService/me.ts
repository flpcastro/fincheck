import { httpClient } from "../httpClient";

interface MeResponse {
  name: string;
  email: string;
}

export async function Me() {
  const { data } = await httpClient.get<MeResponse>('/users/me');
  return data;
}

