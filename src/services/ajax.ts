import { token } from '../sections/auth/auth';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import HttpStatusCodes from './httpStatusCodes';
import { errorMessage, message } from 'src/utils/message';

const baseURL = process.env.REACT_APP_API_URL;

const ajax: Readonly<AxiosInstance> = axios.create({
  baseURL: baseURL,
  timeout: 30000,
});

const AuthInterceptor = (config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig => {
  const accessToken = token.get().access_token;
  if (accessToken) (config.headers as AxiosRequestHeaders).Authorization = `bearer ${accessToken}`;
  return config;
};

const OnResponseSuccess = (response: AxiosResponse<any>): AxiosResponse<any> => response;

const OnResponseFailure = async (error: AxiosError<any>): Promise<any> => {
  const httpStatus = error?.response?.status;
  const errors = error?.response?.data?.errors;

  switch (httpStatus) {
    case HttpStatusCodes.UNAUTHORIZED:
      if (error.config?.url?.toLowerCase() === '/api/Login'.toLowerCase()) {
        message('登入失敗', 'error');
      } else if (error.config?.url?.toLowerCase() === '/api/Login/RefreshToken'.toLowerCase()) {
        message('登入逾期', 'error');
        console.log('RefreshToken fail');
        token.logout();
      } else {
        // reflash token
        console.log('call reflash token');
        const refresh_token = token.get().refresh_token;

        if (!refresh_token) {
          console.log('refresh_token is null');
          token.logout();
        } else {
          const isRefresh = await token.refresh();

          if (!isRefresh) {
            console.error('RefreshToken error');
            token.logout();
          } else {
            return await ajax.request(error.config as AxiosRequestConfig);
          }
        }
      }

      // logout
      console.log('You are not logged in, please login first.');
      break;
    case HttpStatusCodes.NOT_FOUND:
      errorMessage(errors, 'Requested resource was not found.');
      break;
    case HttpStatusCodes.FORBIDDEN:
      errorMessage(errors, 'Access to this resource is forbidden');
      break;
    case HttpStatusCodes.UNPROCESSABLE_ENTITY:
      // This case should be handled at the forms
      break;
    default:
      errorMessage(errors, 'Unknown error occurred, please try again later.');

      break;
  }
  return Promise.reject(errors);
};

// ajax.defaults.headers.get.Accepts = "application/json";
ajax.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
ajax.interceptors.request.use(AuthInterceptor);
ajax.interceptors.response.use(OnResponseSuccess, OnResponseFailure);

export default ajax;
