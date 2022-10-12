import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup.string().min(3).max(20).required(),
  number: yup.number().min(3).required(),
});
