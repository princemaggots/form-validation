import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const InputField = ({ maxLength, placeholder, label, value, onChange, type, onBlur = () => {} }) => {
    const id = useMemo(() => uuid(), []);
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                align="left"
                type={type}
                name={id}
                maxLength={maxLength}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                />
        </div>
    );
};

InputField.propTypes = {
    maxLength: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
    value: '',
    type: 'text',
};

export default InputField;