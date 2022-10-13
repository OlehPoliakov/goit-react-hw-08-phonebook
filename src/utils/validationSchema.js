import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup.string().min(3).max(20).required(),
  number: yup.number().min(3).required(),
});

export const userLoginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(7).max(14),
});

export const userRegisterSchema = yup.object({
  name: yup.string().required().min(3).max(30),
  email: yup.string().required().email(),
  password: yup.string().required().min(7).max(14),
});
