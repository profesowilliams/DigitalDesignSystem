import React, { useState } from 'react';
import { Radio } from '../index';
import { Form } from 'react-bootstrap';

export default {
  title: 'components/Radio',
  component: Radio,
  argTypes: {
        theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
  },
};

interface RadioItem {
  id: string;
  name: string;
  disabled?: boolean;
}

const data: RadioItem[] = [
  {
    id: '1',
    name: 'item 1',
  },
  {
    id: '2',
    name: 'item 2',
  },
  {
    id: '3',
    name: 'item 3',
  },
  {
    id: '4',
    name: 'item 4',
  },
  {
    id: '5',
    name: 'item 5',
    disabled: true,
  },
];

const Template: React.FC = (args) => {
  const [value, setValue] = useState<string>('1');

  return (
    <Form>
      <Radio {...args} value={value} onChange={setValue} />
      <div>value: {value}</div>
    </Form>
  );
};

export const Light = Template.bind({});
Light.args = {
  data,
  inline: true
};

export const Dark = Template.bind({});
Dark.args = {
  data,
  inline: true
};

export const Selected = Template.bind({});
Selected.args = {
    data: [
      {
        id: '1',
        name: 'Selected',
        checked: true,
      },
    ],  inline: true
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
    data: [
      {
        id: '1',
        name: 'Selected',
        disabled: true,
      },
    ],
  inline: true
};

export const Unselected = Template.bind({});
Unselected.args = {
    data: [
      {
        id: '2',
        name: 'Unselected',
      },
    ],
};

export const DisabledUnselected = Template.bind({});
DisabledUnselected.args = {
    data: [
      {
        id: '2',
        name: 'Unselected',
        disabled: true,
        value: '',
      },
  ],
};
