import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const InputField = ({ maxLength, placeholder, label, value, type, onChange, onBlur = () => {} }) => {
    const id = useMemo(() => uuid());
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

InputField.proptypes 