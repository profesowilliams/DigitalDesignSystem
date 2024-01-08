import React, { useState } from 'react';
import { Switch } from '../index';

export default {
  title: 'components/Switch',
  component: Switch,
  argTypes: {},
};

const data = [
  {
    id: '1',
    name: 'item 1',
  },
  {
    id: '2',
    name: 'item 2',
  },
];

interface SwitchProps {
  theme: 'light' | 'dark';
  type: 'switch';
  inline: true;
  value: string[];
  onChange: (value: string[]) => void;
  disabled?: string;
}

const Template: React.FC<SwitchProps> = (args) => {
  const [value, setValue] = useState<string[]>(['2']);

  return (
    <>
      <Switch {...args} value={value} onChange={setValue} />
      <Switch {...args} value={value} onChange={setValue} disabled="disabled" />
    </>
  );
};

export const Light: React.FC<SwitchProps> = Template.bind({});
Object.assign(Light, {
  args: {
    theme: 'light',
    data, // Assuming 'data' is defined elsewhere in your code
    type: 'switch',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
});

export const Dark: React.FC<SwitchProps> = Template.bind({});
Object.assign(Dark, {
  args: {
    theme: 'dark',
    data, // Assuming 'data' is defined elsewhere in your code
    type: 'switch',
    inline: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
});
