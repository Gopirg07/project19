import { useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

const movieValidationSchema = yup.object({
  email: yup
  .string()
  .min(8, "Try Something Bigger 👍")
  .required("email field cant be empty")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
  password: yup
  .string()
  .min(4, "Try Something Bigger 👍")
  .required("password field cant be empty"),
})

export function Basicform() {
  const { handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
      initialValues: {
        email: "g@g.com",
        password: ""
      },
      validationSchema: movieValidationSchema,
      onSubmit: (values) => {
        console.log("Form Values Are", values)
      }
    })
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        value={values.email}
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.email && errors.email ? errors.email : null}
      <input
        type="password"
        placeholder="pass"
        value={values.password}
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password ? errors.password : null}

      <h2>errors</h2>
      <pre>{JSON.stringify(errors)}</pre>
      <h2>touched</h2>
      <pre>{JSON.stringify(touched)}</pre>

      <button type="submit">Submit</button>
    </form>
  );
}
