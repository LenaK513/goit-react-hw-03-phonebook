import React from 'react';
import PropTypes from 'prop-types';
import { InputFilter } from './Filter.styled';
import { Input } from 'components/Form/Form.styled';
export const Filter = ({ value, onChangeForFilter }) => {
  return (
    <InputFilter>
      Find contacts by name
      <Input type="text" value={value} onChange={onChangeForFilter} />
    </InputFilter>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
