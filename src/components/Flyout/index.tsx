import React from 'react';
import r2wc from "@r2wc/react-to-web-component";
import PropTypes from 'prop-types';
import { Offcanvas } from 'react-bootstrap';
import './index.scss';

const { Header, Title, Body } = Offcanvas;

interface FlyoutProps {
  show?: boolean;
  title?: string;
  children?: React.ReactNode;
  placement?: 'start' | 'end' | 'top' | 'bottom';
  backdrop?: boolean;
  scroll?: boolean;
  backdropClassName?: string;
  onHide?: () => void;
}

const Flyout: React.FC<FlyoutProps> = ({ title, children, ...props }) => {
  return (
    <Offcanvas {...props}>
      <Header closeButton>
        <Title>{title}</Title>
      </Header>
      <Body>
        {children}
      </Body>
    </Offcanvas>
  );
};

Flyout.defaultProps = {
  show: false,
  title: '',
  children: '',
  placement: 'start',
  backdrop: true,
  scroll: false,
  backdropClassName: 'canvas-backdrop',
  onHide: () => { },
};

Flyout.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  placement: PropTypes.oneOf(['start', 'end', 'top', 'bottom']),
  backdrop: PropTypes.bool,
  scroll: PropTypes.bool,
  backdropClassName: PropTypes.string,
  onHide: PropTypes.func,
};

export default Flyout;
export { Flyout };
