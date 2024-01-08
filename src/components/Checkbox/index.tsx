import React, { useEffect, useRef, useMemo } from 'react';
import r2wc from "@r2wc/react-to-web-component";
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import _keyBy from 'lodash/keyBy';
import './checkbox.scss';

interface CheckboxProps {
  data: Array<{
    id: string;
    name: string;
    indeterminate?: boolean;
    disabled?: boolean;
  }>;
  name?: string;
  inline?: boolean;
  value: string[];
  onChange: (value: string[], event: React.ChangeEvent<HTMLInputElement>) => void;
  theme?: 'light' | 'dark';
}

const Checkbox: React.FC<CheckboxProps> = ({ data, name = 'checkbox-group-name', inline = true, value, onChange, theme = 'light', ...props }) => {
  const objectValue = useMemo(() => _keyBy(value), [value]);
  const checkboxRefs = useRef < (HTMLInputElement | null)[] > (new Array(data.length).fill(null));

  useEffect(() => {
    data.forEach((item, index) => {
      if (checkboxRefs.current[index]) {
        checkboxRefs.current[index]!.indeterminate = !!item.indeterminate;
      }
    });
  }, [data]);

  const handleOnClick = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (objectValue[id]) {
      delete objectValue[id];
    } else {
      objectValue[id] = id;
    }
    onChange(Object.values(objectValue), e);
  };

  return (
    <div className="mb-3">
      {data.map((item, index) => (
        <Form.Check
          key={item.id}
          id={item.id}
          label={item.name}
          inline={inline}
          name={name}
          disabled={item.disabled}
          checked={!!objectValue[item.id]}
          onChange={handleOnClick(item.id)}
          ref={(el) => checkboxRefs.current[index] = el}
          data-theme={theme} // Set the data-theme attribute
          {...props}
        />
      ))}
    </div>
  );
};

Checkbox.defaultProps = {
  data: [],
  name: 'checkbox-group-name',
  inline: true,
  value: [],
  onChange: () => { },
  theme: 'light',
};

Checkbox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    indeterminate: PropTypes.bool,
    disabled: PropTypes.bool,
  })),
  name: PropTypes.string,
  inline: PropTypes.bool,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default React.memo(Checkbox);
export { Checkbox };

const TdsCheckbox = r2wc(Checkbox);
customElements.define("tds-checkbox", TdsCheckbox);
