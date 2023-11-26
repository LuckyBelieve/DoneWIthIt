import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
function AppFormPicker({ name, items, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        placeholder={placeholder}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
