import * as Yup from "yup";
const validateModel = {
  0: Yup.object({
    name: Yup.string("Just text")
      .matches(/^[a-zA-Z]+$/, "Just Text")
      .required("Required"),
    lastName: Yup.string("Just text")
      .matches(/^[a-zA-Z]+$/, "Just Text")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    secondLastName: Yup.string("Just text"),
  }),
  1:Yup.object({
    email: Yup.string("Just text")
      .email("Email is invalid")
      .required("Email is required"),
    address: Yup.string().required("Required"),
  }),
};

export default validateModel;