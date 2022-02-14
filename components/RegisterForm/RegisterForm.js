import React from "react";
import { Form} from "formik";
import TextField from "../TextField/TextField";

const RegisterForm = () => {

  return (
    <>

      
          <TextField
            labelText="Name"
            type="text"
            name="name"
            placeholder="Name"
          />
          <TextField
            labelText="Last Name"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <TextField
            labelText="Second Last Name"
            type="text"
            name="secondLastName"
            placeholder="Second Last Name"
          />


    </>
  );
};

export default RegisterForm;
