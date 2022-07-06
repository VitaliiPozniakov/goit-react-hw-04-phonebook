import React from 'react';
import { Input, Label, LabelText } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <Label>
    <LabelText>Find contacts by name</LabelText>
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
