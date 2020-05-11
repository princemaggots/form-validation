import { useState, useCallback } from 'react';

const useValidate = onValidate => {
    const [valid, setValid] = useState('unset');
    const validate = useCallback(
        event => {
            setValid(onValidate(event.currentTarget.value) ? 'valid' : 'invalid')
        },
        [onValidate, setValid],
    );
    return [valid, validate];
};

export default useValidate;