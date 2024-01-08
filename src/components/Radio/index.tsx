import React, { useCallback } from 'react';
import r2wc from "@r2wc/react-to-web-component";
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

interface RadioItem {
  id: string;
  name: string;
  disabled?: boolean;
}

interface RadioProps {
  data: RadioItem[];
  name?: string;
  inline?: boolean;
  value?: string;
  onChange?: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({ data = [], name = 'checkbox-group-name', inline = true, value = '', onChange = () => { }, ...props }) => {
  const handleOnClick = useCallback((id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e);
  }, [onChange]);

  return (
    <div className="mb-3">
      {data.map(item => (
        <Form.Check
          key={item.id}
          id={item.id}
          label={item.name}
          inline={inline}
          name={name}
          disabled={item.disabled}
          checked={value === item.id}
          type="radio"
          onChange={handleOnClick(item.id)}
          {...props}
        />
      ))}
    </div>
  );
};

Radio.defaultProps = {
  data: [],
  name: 'checkbox-group-name',
  inline: true,
  value: '',
  onChange: () => { },
};

Radio.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  inline: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

//const TdsRadio = r2wc(Radio);
//customElements.define("tds-radio", TdsRadio);

export default Radio;
export { Radio };
