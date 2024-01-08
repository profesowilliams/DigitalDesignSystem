import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as BDropdown } from 'react-bootstrap';
import _find from 'lodash/find';

const { Toggle, Menu, Item } = BDropdown;

const dropdownVariant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
  LINK: 'link',
  OUTLINE_PRIMARY: 'outline-primary',
  OUTLINE_SECONDARY: 'outline-secondary',
  OUTLINE_SUCCESS: 'outline-success',
  OUTLINE_DANGER: 'outline-danger',
  OUTLINE_WARNING: 'outline-warning',
  OUTLINE_INFO: 'outline-info',
  OUTLINE_DARK: 'outline-dark',
  OUTLINE_LIGHT: 'outline-light'
};

interface DropdownItem {
  id: string;
  name: string;
  href: string;
}

interface DropdownsProps {
  data: DropdownItem[];
  defaultText: string;
  value: string;
  onChange: (value: string, event: React.MouseEvent<HTMLElement>) => void;
  maxHeight: number | string;
  variant?: keyof typeof dropdownVariant | undefined;
}

const Dropdowns: React.FC<DropdownsProps> = ({ data, defaultText, value, onChange, maxHeight, variant, ...props }) => {

  const handleOnChange = (val: string) => (e: React.MouseEvent<HTMLElement>) => {
    onChange(val, e);
  }

  let title = value && _find(data, item => item.id === value);

  if (typeof title === 'object') {
    title = title.name;
  }

  return (
    <BDropdown {...props} >
      <Toggle variant={variant}>
        {title || defaultText}
      </Toggle>

      <Menu style={{ overflowY: 'auto', maxHeight }}>
        {
          data.map(item => (
            <Item
              key={item.id}
              href={item.href}
              id={item.id}
              active={item.id === value}
              onClick={handleOnChange(item.id)}
            >
              {item.name}
            </Item>
          ))
        }
      </Menu>
    </BDropdown>
  );
};

Dropdowns.defaultProps = {
  data: [],
  value: '',
  defaultText: 'Select...',
  maxHeight: 300,
  variant: undefined,
  onChange: () => { }
};

Dropdowns.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  defaultText: PropTypes.string,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(Object.values(dropdownVariant)),
  onChange: PropTypes.func,
};

export default Dropdowns;
export { Dropdowns };
