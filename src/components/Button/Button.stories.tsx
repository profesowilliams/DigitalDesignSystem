import React from 'react';
import { Button, buttonVariant } from '../index';

export default {
  title: 'components/Button',
  component: Button,
  parameters: {
    tags: ['autodocs'],
    argTypes: {},
  },
};

const Template: React.FC = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {Object.values(buttonVariant).map((variant: string) => (
        <span key={variant} style={{ margin: 5 }}>
          <Button {...args} variant={variant}>
            {variant}
          </Button>
        </span>
      ))}
    </div>
  );
};

const Btn: React.FC = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <span key={args.variant} style={{ margin: 5 }}>
        <Button {...args} variant={args.variant}></Button>
      </span>
    </div>
  );
};

export const Primary: React.FC = Btn.bind({});
Primary.args = {
  variant: 'primary',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Primary',
};

export const Secondary: React.FC = Btn.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Secondary',
};

export const Filled: React.FC = Btn.bind({});
Filled.args = {
  variant: 'filled',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Filled',
};

export const Tertiary: React.FC = Btn.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Tertiary',
};

export const Link: React.FC = Btn.bind({});
Link.args = {
  variant: 'link',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Link',
};

export const Affirmative: React.FC = Btn.bind({});
Affirmative.args = {
  variant: 'affirmative',
  size: 'sm',
  active: false,
  disabled: false,
  label: 'Affirmative',
};
