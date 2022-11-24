import * as Yup from "yup";

export const testForm = {
  onSubmit: (values: string) => console.log(values),
  validationSchema: Yup.object({
    username: Yup.string()
      .required("Type a username please")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string(),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    passwordConfirmation: Yup.string()
      .required("Please retype your password.")
      .oneOf([Yup.ref("password")], "Your passwords do not match."),
  }),
  form: [
    {
      id: "username",
      label: "Username",
      type: "text",
      field: "",
      initialValue: "Ex. Donald Trump",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      field: "",
      initialValue: "covfefe@truth.com",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      field: "",
      initialValue: "bestpassword",
    },
    {
      id: "passwordConfirmation",
      label: "Password confirmation",
      type: "password",
      field: "",
      initialValue: "bestpassword",
    },
  ],
};
