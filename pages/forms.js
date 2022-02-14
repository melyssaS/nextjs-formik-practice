import React, { useState } from "react";
import Button from "../components/Button/Button";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import OtherForm from "../components/OtherForm/OtherForm";
import { Formik, Form } from "formik";
import validateModel from "../Utils/validateModel";

const FormPage = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="flex align-center justify-center bg-amber-200 m-4 p-4">
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          secondLastName: "",
          email: "",
          address: "",
        }}
        validationSchema={validateModel[step]}
        onSubmit={() => {
          console.log("submit!");
        }}
      >
        {({ errors }) => (
          <Form className="block bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {step === 0 && <RegisterForm />}
            {step === 1 && <OtherForm />}
            <div className="inline-flex">
              {step !== 0 && (
                <Button
                  title="Prev"
                  onClick={() => {
                    console.log(step);
                    setStep(step - 1);
                  }}
                  type="submit"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                />
              )}
              <Button
                title={step !== 1 ? "Next" : "Send"}
                onClick={() => {
                  console.log(Object.keys(errors));
                  console.log(step);
                  setStep(step + 1);
                }}
                type="submit"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormPage;
