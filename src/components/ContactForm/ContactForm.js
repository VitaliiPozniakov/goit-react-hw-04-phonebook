import React from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(32)
    .trim()
    .matches()
    .required('Please enter name'),
  number: yup.number().required('Please enter number'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmitProp }) => {
  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    onSubmitProp(name, number);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.forma}>
        <label htmlFor="name" className={css.label}>
          <span className={css.labelText}>Name</span>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label htmlFor="number" className={css.label}>
          <span className={css.labelText}>Number</span>
          <Field type="tel" name="number" className={css.input} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>
        <div className={css.btnWraper}>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.prototype = {
  onSubmitProp: PropTypes.func.isRequired,
};
