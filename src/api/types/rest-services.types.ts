export type AuthRequest = {
  grant_type: string;
  client_id: string;
  client_secret: string;
  scope: string;
  username: string;
  password: string;
}

export type LoginRequest = {
  code: string;
}

export type AuthResponse = {
  access_token: string;
  scope: string;
  id_token: string;
}

export type LogoutResponse = {
  status: string;
  message: string;
  code: number;
}

export type ModyoMeResponse = {
  name: string;
  first_name: string;
  last_name: string;
  second_last_name: string;
  email: string;
  username: string;
  url: string;
  active: string;
  delegated_token: {
    uuid: string;
    access_token: string;
    access_token_expires_in: string;
  }
}