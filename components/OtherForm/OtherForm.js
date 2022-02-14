import React from "react";
import { Form } from "formik";
import TextField from "../TextField/TextField";

const OtherForm = () => {
  return (
    <>
      <TextField
        labelText="Email"
        type="text"
        name="email"
        placeholder="Email"
      />
      <TextField
        labelText="Address"
        type="text"
        name="address"
        placeholder="Address"
      />
    </>
  );
};

export default OtherForm;
