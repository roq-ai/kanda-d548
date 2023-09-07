import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  price: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
