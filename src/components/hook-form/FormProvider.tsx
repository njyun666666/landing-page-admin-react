// import PropTypes from 'prop-types';
// form
import { FieldValues, FormProvider as Form, useForm, UseFormProps, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------

// FormProvider.propTypes = {
//   children: PropTypes.node.isRequired,
//   methods: PropTypes.object.isRequired,
//   onSubmit: PropTypes.func,
// };

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  methods: UseFormReturn<any, object>;
}) {
  const methodsa = useForm();

  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
