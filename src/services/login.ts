import ajax from './ajax';

export interface LoginModel {
  email: string;
  password: string;
}

export interface LoginViewModel {
  access_token: 'string';
  refresh_token: 'string';
}

export interface RefreshTokenModel {
  refresh_token: 'string';
}

export const loginAPI = {
  login: (data: LoginModel) => ajax.post<LoginViewModel>('/api/Login', data),
  refresh: (data: RefreshTokenModel) => ajax.post<LoginViewModel>('/api/Login/RefreshToken', data),
  test: () => ajax.get('/api/TbPages/5'),
};
