import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Form, Button } from 'react-bootstrap';

const inputSearchSize = {
  SM: 'sm',
  LG: 'lg'
}

interface InputSearchProps {
  placeholder?: string;
  size?: keyof typeof inputSearchSize;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ placeholder = 'Search...', value = '', defaultValue = '', onChange = () => { }, onSearch = () => { }, size, ...props }) => {
  const [val, setVal] = useState<string>(value || defaultValue);

  const handleOnSearch = () => {
    onSearch(val);
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setVal(newValue);
    onChange(newValue);
  }

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleOnSearch();
    }
  }

  return (
    <InputGroup className="mb-3" {...props}>
      <Form.Control
        placeholder={placeholder}
        type="search"
        value={val}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
      <Button
        style={{ borderColor: '#ced4da' }}
        variant="outline-secondary"
        className="input-search-button"
        onClick={handleOnSearch}
      >
        <i className="bi bi-search"></i>
      </Button>
    </InputGroup>
  );
};

InputSearch.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(inputSearchSize)),
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

export default InputSearch;
export { InputSearch };
