import jwtDecode, { JwtPayload } from 'jwt-decode';
import { logout } from 'src/reducers/userSlice';
import { LoginViewModel, loginAPI } from 'src/services/login';
import { store } from 'src/store';

interface accounModel extends JwtPayload {
  uid: string;
  photoURL?: string;
}

const access_token = 'access_token';
const refresh_token = 'refresh_token';

export const token = {
  set: (data: LoginViewModel) => {
    window.localStorage.setItem(access_token, data.access_token);
    window.localStorage.setItem(refresh_token, data.refresh_token);
  },
  get: (): LoginViewModel => {
    return {
      access_token: window.localStorage.getItem(access_token),
      refresh_token: window.localStorage.getItem(refresh_token),
    } as LoginViewModel;
  },
  logout: () => {
    window.localStorage.removeItem(access_token);
    window.localStorage.removeItem(refresh_token);
    store.dispatch(logout());
  },
  payload: (): accounModel | undefined => {
    const access_token = token.get().access_token;
    if (!!access_token) {
      return jwtDecode(access_token) as accounModel;
    }
  },
  refresh: async () => {
    const refresh_token = token.get().refresh_token;
    return await loginAPI
      .refresh({ refresh_token })
      .then((response) => {
        token.set(response.data);
        return true;
      })
      .catch((error) => {
        console.error('refresh token', error);
        return false;
      });
  },
};
