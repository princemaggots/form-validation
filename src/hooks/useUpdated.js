import { useCallback } from 'react';

const useUpdated = (name, onUpdate) =>
    useCallback(
        event => {
            onUpdate(name, event.currentTarget.value);
        },
        [name, onUpdate],
    );

    export default useUpdated;