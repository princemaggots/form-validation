import { useCallback, useMemo } from 'react';


const useUpdateArray = (list, name, onUpdate, ) => [
  useCallback(() => {
    onUpdate(name, [...list || {}]);
  }, [onUpdate, name, list]),
  useMemo(
    () =>
      list.map((item, i) => (field, value) =>
        onUpdate(name, [
          ...list.slice(0, i),
          {
            ...item,
            [field]: value,
          },
          ...list.slice(i + 1),
        ]),
      ),
    [onUpdate, name, list],
  ),
  useMemo(() => list.map((_, i) => () => onUpdate(name, [...list.slice(0, i), ...list.slice(i + 1)])), [
    list, 
    name,
    onUpdate,
   
  ]),
  useCallback(
    item => {
      onUpdate(name, [...list, item ||  {}]);
    },
    [onUpdate, name, list],
  ),
];

export default useUpdateArray;