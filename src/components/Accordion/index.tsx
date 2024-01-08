import React from 'react';
import r2wc from "@r2wc/react-to-web-component";
import PropTypes from 'prop-types';
import { Accordion as BAccordion } from 'react-bootstrap';

const { Item, Header, Body } = BAccordion;

interface AccordionProps {
  options: Array<{
    id: string;
    title: string;
    component: React.ReactNode;
  }>;
  defaultActiveKey: string;
  flush: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ options, ...props }) => {
  return (
    <BAccordion {...props}>
      {options.map((item) => (
        <Item key={item.id} eventKey={item.id}>
          <Header>{item.title}</Header>
          <Body>{item.component}</Body>
        </Item>
      ))}
    </BAccordion>
  );
};

Accordion.defaultProps = {
  options: [],
  defaultActiveKey: '',
  flush: false,
};

export default Accordion;
export { Accordion };
