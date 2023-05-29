import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

import { token } from '../auth';
import { LoginModel, loginAPI } from 'src/services/login';
import { useDispatch } from 'react-redux';
import { login } from 'src/reducers/userSlice';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('請填入有效Email').required('請填入Email'),
    password: Yup.string().required('請填入密碼'),
  });

  const defaultValues = {
    email: 'admin@example.com',
    password: 'Demo123456',
    // remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: LoginModel) => {
    const result = await loginAPI.login(data);
    token.set(result.data);
    dispatch(login());
    navigate('/dashboard/app', { replace: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} mb={3}>
        <RHFTextField name="email" label="Email" />

        <RHFTextField
          name="password"
          label="密碼"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      {/* 
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
    </FormProvider>
  );
}
