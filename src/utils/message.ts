import { VariantType, enqueueSnackbar } from 'notistack';

export const message = (message: string, variant: VariantType = 'info') => {
  enqueueSnackbar(message, { variant });
};
