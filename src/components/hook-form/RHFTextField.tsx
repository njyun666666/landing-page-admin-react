// import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps } from '@mui/material';

// ----------------------------------------------------------------------

// RHFTextField.propTypes = {
//   name: PropTypes.string,
// };

type RHFTextFieldProp = {
  name: string;
} & TextFieldProps;

export default function RHFTextField({ name, ...other }: RHFTextFieldProp) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...other}
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}
