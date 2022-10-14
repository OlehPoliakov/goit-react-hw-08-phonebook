import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup.string().min(3).max(20).required(),
  number: yup.number().min(3).required(),
});

export const userLoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(7).max(14).required(),
});

export const userRegisterSchema = yup.object({
  name: yup.string().min(3).max(30).required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).max(14).required(),
});
