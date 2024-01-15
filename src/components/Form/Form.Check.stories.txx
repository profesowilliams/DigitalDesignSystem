import React from 'react';
import { Form } from '../index';

export default {
  title: 'components/Form/Check',
  component: Form,
  argTypes: {},
};

const types: string[] = ['checkbox', 'radio', 'switch'];

interface FormControlProps {
  type: string;
  id: string;
  label: string;
  inline?: boolean;
  name?: string;
  disabled?: boolean;
}

const FormControlTemplate: React.FC = (args) => {
  return (
    <Form>
      <h3>Form.Check Default</h3>
      {types.map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check
            type={type as any}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type as any}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}

      <h3>Form.Check Inline</h3>
      {types.map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type as any}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type as any}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            disabled
            label="3 (disabled)"
            type={type as any}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
};

export const Check: React.FC<FormControlProps> = FormControlTemplate.bind({});
Check.args = {};
