import React from 'react';
import r2wc from "@r2wc/react-to-web-component";
import PropTypes from 'prop-types';
import { Button as BButton, Spinner } from 'react-bootstrap';
import './button.scss';

interface ButtonProps {
  label?: string;
  variant?: keyof typeof buttonVariant;
  size?: keyof typeof buttonSize;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  type?: string;
  as?: string;
  loading?: boolean;
  loadingText?: string;
  SpinnerProps?: {
    size?: string;
    animation?: string;
  };
}

const buttonVariant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  FILLED: 'filled',
  TERTIARY: 'tertiary',
  LINK: 'link',
  AFFIRMATIVE: 'affirmative',
  DESTRUCTIVE: 'destructive',
};

const buttonSize = {
  SM: 'sm',
  LG: 'lg',
};

const Button: React.FC<ButtonProps> = ({ label, loading, loadingText, children, SpinnerProps, ...props }) => {
  return (
    <BButton {...props}>
      {loading ? (
        <span className="btn-loading-container">
          <Spinner {...SpinnerProps} />
          <span className="btn-loading-text">{loadingText}</span>
        </span>
      ) : (
        <>
          {children}
          {label}
        </>
      )}
    </BButton>
  );
};

Button.defaultProps = {
  label: '',
  variant: 'secondary',
  size: 'sm',
  active: false,
  disabled: false,
  onClick: undefined,
  href: undefined,
  type: 'button',
  as: undefined,
  loading: false,
  loadingText: 'Loading',
  SpinnerProps: {
    size: 'sm',
    animation: 'border',
  },
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(buttonVariant)) as React.Requireable<keyof typeof buttonVariant>,
  size: PropTypes.oneOf(Object.values(buttonSize)) as React.Requireable<keyof typeof buttonSize>,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.string,
  as: PropTypes.string,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  SpinnerProps: PropTypes.object as React.Requireable<object>,
};

export default Button;
export { Button, buttonVariant, buttonSize };

const TdsButton = r2wc(Button);
customElements.define('tds-button', TdsButton);
