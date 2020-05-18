import React, { useMemo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const InputField = ({ label, selected, dropdownMode, minDate, maxDate, onChange, onBlur = () => {} }) => {
    const id = useMemo(() => uuid(), []);
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <DatePicker
        align="left"
        selected={selected}
        onChange={onChange}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode={dropdownMode}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
//   selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: '',
  type: 'text',
};

export default InputField;