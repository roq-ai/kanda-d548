import * as yup from 'yup';

export const clientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
