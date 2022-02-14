import React from "react";
import { ErrorMessage, Field } from "formik";

const TextField = ({labelText,...props}) => {
  return (
    <div className="mb-2">
      <label htmlFor={props.name} className="block font-bold mb-2">{labelText}</label>
      <Field {...props} className="py-2 px-3 border rounded shadow"></Field>
      <ErrorMessage component="div" name={props.name} className="font-bold px-3 text-red-700 my-2" />
    </div>
  );
};

export default TextField;
