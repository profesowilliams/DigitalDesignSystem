import React, { useState } from 'react';
import { Checkbox } from '../index';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  argTypes: {},
};

interface Item {
  id: string;
  name: string;
  indeterminate?: boolean;
}

const data: Item[] = [
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
    indeterminate: true,
  },
];

const Template: React.FC = (args) => {
  const [value, setValue] = useState < string[] > (['2']);

  return (
    <>
      <Checkbox {...args} value={value} onChange={setValue} />
      <Checkbox {...args} value={value} onChange={setValue} disabled />
    </>
  );
};

export const Light: React.FC = Template.bind({});
Object.assign(Light, {
  args: {
    theme: 'light',
    data, // Assuming 'data' is defined elsewhere in your code
    type: 'checkbox',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});

export const Dark: React.FC = Template.bind({});
Object.assign(Dark, {
  args: {
    theme: 'dark',
    data, // Assuming 'data' is defined elsewhere in your code
    type: 'checkbox',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
});
