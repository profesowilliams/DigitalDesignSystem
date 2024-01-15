import React from 'react';
import { Form } from '../index';

export default {
  title: 'components/Form/Range',
  component: Form,
  argTypes: {},
};

interface FormControlTemplateProps {
  // Define any prop types if needed
}

const FormControlTemplate: React.FC<FormControlTemplateProps> = (args) => {
  return (
    <Form>
      <h3>Range</h3>
      <Form.Range />
    </Form>
  );
};

export const Range: React.FC<FormControlTemplateProps> = FormControlTemplate;
Range.args = {};
