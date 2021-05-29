const yup = require("yup");

const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).max(10).required(),
  familyName: yup.string(),
  phone: yup.number(),
});

module.exports = {
  userSchema,
  loginSchema,
};
