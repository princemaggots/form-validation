import React, { useMemo } from 'react';
import uuid from 'uuid/v4';
import Select from 'react-select';

const Selector = ({ maxLength,  label = () => {} }) => {
    const id = useMemo(() => uuid());
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ];
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Select
            align="left"
            isMulti
            options={options}
      />
        </div>
    );
};


export default Selector;