import React from 'react';
import { Card } from '../index';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {},
};

interface CardProps {
  width: string;
  header: string;
  title: string;
  body: string;
}

const Template: React.FC<CardProps> = (args) => {
  return <Card {...args} />;
};

export const _InsetBody: React.FC<CardProps> = Template.bind({});
_InsetBody.args = {
  width: '18rem',
  header: 'Header',
  title: 'Card Title',
  body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
}

export const _Thumbnail: React.FC<CardProps> = Template.bind({});
_Thumbnail.args = {
  width: '18rem',
  header: 'Header',
  title: 'Card Title',
  body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
}

export const _ImageAbove: React.FC<CardProps> = Template.bind({});
_ImageAbove.args = {
  width: '18rem',
  header: 'Header',
  title: 'Card Title',
  body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
}

export const _HorizontalLayout: React.FC<CardProps> = Template.bind({});
_HorizontalLayout.args = {
  width: '18rem',
  header: 'Header',
  title: 'Card Title',
  body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
}
