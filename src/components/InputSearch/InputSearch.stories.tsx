import React, { useState } from 'react';
import { InputSearch } from '../index';

export default {
  title: 'components/Inputsearch',
  component: InputSearch,
  argTypes: {},
};

const Template = (args: any) => {
  const [value, setValue] = useState<string>('');
  const onSearch = (val: string) => {
    alert(`onChange value: ${val}`);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <InputSearch {...args} value={value} onChange={onChange} onSearch={onSearch} />
      <div>value: {value}</div>
    </>
  );
};

export const Inputsearch = Template.bind({});
Inputsearch.args = {};
