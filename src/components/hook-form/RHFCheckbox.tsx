// import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Checkbox, FormControlLabel, FormControlLabelProps, FormGroup } from '@mui/material';

// ----------------------------------------------------------------------

// RHFCheckbox.propTypes = {
//   name: PropTypes.string.isRequired,
// };

interface RHFCheckboxProps {
  name: string;
  label: React.ReactNode;
  [key: string]: React.ReactNode;
}

export function RHFCheckbox({ name, label, ...other }: RHFCheckboxProps) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      {...other}
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
    />
  );
}

// ----------------------------------------------------------------------

// RHFMultiCheckbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   options: PropTypes.array.isRequired,
// };

interface RHFMultiCheckboxPoprs extends FormControlLabelProps {
  name: string;
  options: any[];
}

export function RHFMultiCheckbox<T extends RHFMultiCheckboxPoprs>({ name, options, ...other }: T) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onSelected = (option: any[]) =>
          field.value.includes(option)
            ? field.value.filter((value: any) => value !== option)
            : [...field.value, option];

        return (
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                {...other}
                key={option.value}
                control={
                  <Checkbox
                    checked={field.value.includes(option.value)}
                    onChange={() => field.onChange(onSelected(option.value))}
                  />
                }
                label={option.label}
              />
            ))}
          </FormGroup>
        );
      }}
    />
  );
}
