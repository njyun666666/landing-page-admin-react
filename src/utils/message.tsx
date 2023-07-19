// import { KeyPrefix } from 'i18next';
import { SnackbarMessage, VariantType, enqueueSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
// import { resources } from '../i18n/config';

export const message = (message: SnackbarMessage, variant: VariantType = 'info') => {
  enqueueSnackbar(message, { variant });
};

export const errorMessage = (errors: any, defaultMessage: string = '') => {
  enqueueSnackbar(<ErrorMessage errors={errors} defaultMessage={defaultMessage} />, { variant: 'error' });
};

// const translation = resources['zh'].translation;
const translationMapping: { [key: string]: string } = {
  required: 'required_field',
  valid: 'valid_field',
};

const ErrorMessage = ({ errors, defaultMessage }: { errors: any; defaultMessage: string }) => {
  errors = { Page: 'in use', Password: 'required', Login: ['this is test', 'required', 'valid'] };

  const { t } = useTranslation();

  const getMessage = (key: string, value: any): string[] => {
    if (typeof value === 'string') {
      return [tran(key, value)];
    }

    if (value instanceof Array) {
      return (value as string[]).reduce((prev, val) => [...prev, tran(key, val)], [] as string[]);
    }

    return [];
  };

  const tran = (key: string, value: string): string => {
    if (!!translationMapping[value]) {
      return t(translationMapping[value] as any, { field: t(key as any) });
    }
    return `${t(key as any)}: ${t(value as any)}`;
  };

  if (!errors) {
    return <>{defaultMessage}</>;
  }

  return (
    <>
      {Object.entries(errors).map(([key, value]) =>
        getMessage(key.toLowerCase(), value).map((message) => (
          <>
            {message}
            <br />
          </>
        ))
      )}
    </>
  );
};
