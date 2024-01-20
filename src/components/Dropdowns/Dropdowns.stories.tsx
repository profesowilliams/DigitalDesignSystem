import React, { useState } from 'react';
import { Dropdowns } from '../Dropdowns';

export default {
  title: 'components/Dropdowns',
  component: Dropdowns,
  argTypes: {},
};

const data = [];

for (let i = 1; i < 20; i += 1) {
  data.push({
    id: 'id-' + i,
    name: 'item ' + i,
    href: '#',
  });
}

interface DropdownsProps {
  data: any[]; // Update with the appropriate data type for your 'data' array
  value: string;
  onChange: (value: string) => void;
}

const Template: React.FC<DropdownsProps> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    args.onChange(newValue);
  };

  return <Dropdowns {...args} value={value} onChange={handleValueChange} />;
};

export const _Dropdowns = Template.bind({});
_Dropdowns.args = {
  data,
  value: '',
  onChange: (newValue: string) => console.log(newValue), // Update the handler as needed
};
