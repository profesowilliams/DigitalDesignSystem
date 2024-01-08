import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav } from 'react-bootstrap';

interface MastheadProps {
  data: {
    title: string;
    leftMenu: React.ReactNode[];
    rightMenu: React.ReactNode[];
  };
  bg: keyof typeof navbarsBgs;
  expand: true | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const navbarsBgs = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
};

const Masthead: React.FC<MastheadProps> = ({ data, ...props }) => {
  return (
    <Navbar {...props}>
      <Container>
        <Navbar.Brand href="#home">{data.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {data.leftMenu.map((item, index) => (
              <React.Fragment key={`key-${index}`}>{item}</React.Fragment>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {data.rightMenu.map((item, index) => (
            <React.Fragment key={`key-${index}`}>{item}</React.Fragment>
          ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Masthead.defaultProps = {
  data: {},
  bg: 'light',
  expand: 'md',
};

Masthead.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string.isRequired,
    leftMenu: PropTypes.arrayOf(PropTypes.node).isRequired,
    rightMenu: PropTypes.arrayOf(PropTypes.node).isRequired,
  }),
  bg: PropTypes.oneOf(Object.values(navbarsBgs)),
  expand: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  ]),
};

export default Masthead;
export { Masthead };
