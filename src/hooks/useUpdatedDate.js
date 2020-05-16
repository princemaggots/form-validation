import { useCallback } from 'react';

const useUpdatedDate = (name, onUpdate) =>
  useCallback(
    event => {
      onUpdate(name, `${event.getMonth() + 1}/${event.getDate()}/${event.getFullYear()}`);
    },
    [name, onUpdate],
  );

export default useUpdatedDate;