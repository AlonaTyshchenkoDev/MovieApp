export interface CRequestToken {
  success: boolean,
  expires_at: string,
  request_token: string
}

export interface IUser {
  username: string,
  password: string,
  request_token: string
}

export interface ISessionResponse {
  avatar: {},
  id: number,
  include_adult: boolean,
  iso_639_1: string,
  iso_3166_1: string,
  name: string
  username: string
}
