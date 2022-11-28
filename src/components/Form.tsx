import { Formik } from "formik";

const Form = (props: { config: any }) => {
  const { config } = props;
  //console.log(config);

  return (
    <Formik
      initialValues={config}
      onSubmit={config.onSubmit}
      validationSchema={config.validationSchema}
      validate={config.validate}
    >
      {(props) => (
        <form className="my-form" onSubmit={props.handleSubmit}>
          {config.form?.map((field: any, index: number) => (
            <div key={index} className="my-form-field-container">
              <label className="my-form-field-label" htmlFor={field.id}>
                {field.label}
              </label>
              <input
                className="my-form-field-input"
                type={field.type}
                id={field.id}
                value={props.values.field}
                placeholder={field?.initialValue}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              <>
                {props?.errors[field.id] ? (
                  <div className="my-form-errormsg">
                    {(props.errors as any)[field.id]}
                  </div>
                ) : null}
              </>
            </div>
          ))}

          <button className="my-form-submit-btn" type="submit">
            submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
