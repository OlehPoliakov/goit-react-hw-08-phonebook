import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup.string().min(3).max(30).required(),
  number: yup.number().required(),
});
