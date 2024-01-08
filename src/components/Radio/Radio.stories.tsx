import React, { useState } from 'react';
import { Radio } from '../index';

export default {
  title: 'components/Radio',
  component: Radio,
  argTypes: {},
};

interface RadioItem {
  id: string;
  name: string;
  disabled?: boolean;
}

const data: RadioItem[] = [
  {
    id: '1',
    name: 'item 1'
  },
  {
    id: '2',
    name: 'item 2'
  },
  {
    id: '3',
    name: 'item 3'
  },
  {
    id: '4',
    name: 'item 4'
  },
  {
    id: '5',
    name: 'item 5',
    disabled: true
  },
];

const Template: React.FC = (args) => {
  const [value, setValue] = useState<string>('1');

  return (
    <>
      <Radio {...args} value={value} onChange={setValue} />
      <div>value: {value}</div>
    </>
  );
};

export const _Radio = Template.bind({});
_Radio.args = {
  data,
  inline: true
};
