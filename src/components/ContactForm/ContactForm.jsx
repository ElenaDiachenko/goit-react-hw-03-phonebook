import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Label, Input, Message } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name is not valid'
    ),
  number: yup
    .string()
    .required('This field is Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number is not valid'
    ),
});

const initialValues = {
  name: '',
  number: '',
};
export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    onSubmit(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Name
          <Input type="text" name="name" />
          <Message name="name" component="span" />
        </Label>

        <Label>
          Number
          <Input type="tel" name="number" />
          <Message name="number" component="span" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
