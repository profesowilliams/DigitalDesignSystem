import React from 'react';
import { Button, buttonVariant } from '../index';

export default {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

interface ButtonProps {
  variant: buttonVariant;
  size: string;
  active: boolean;
  disabled: boolean;
  label: string;
}

const Template: React.FC<ButtonProps> = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {Object.values(buttonVariant).map((variant) => (
        <span key={variant} style={{ margin: 5 }}>
          <Button {...args} variant={variant}>
            {variant}
          </Button>
        </span>
      ))}
    </div>
  );
};

const Btn: React.FC<ButtonProps> = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <span key={args.variant} style={{ margin: 5 }}>
        <Button {...args} variant={args.variant}></Button>
      </span>
    </div>
  );
};

export const Primary = Btn.bind({});
Primary.args = {
  variant: 'primary',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Primary',
};

export const Secondary = Btn.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Secondary',
};

export const Filled = Btn.bind({});
Filled.args = {
  variant: 'filled',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Filled',
};

export const Tertiary = Btn.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Tertiary',
};

export const Link = Btn.bind({});
Link.args = {
  variant: 'link',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Link',
};

export const Affirmative = Btn.bind({});
Affirmative.args = {
  variant: 'affirmative',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Affirmative',
};

export const Destructive = Btn.bind({});
Destructive.args = {
  variant: 'destructive',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Destructive',
};
