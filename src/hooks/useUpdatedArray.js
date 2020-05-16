import { useCallback, useMemo } from 'react';


const useUpdateArray = (list, name, onUpdate, ) => [
  useCallback(() => {
    onUpdate(name, [...list || {}]);
  }, [onUpdate, list]),
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
    [list, onUpdate],
  ),
  useMemo(() => list.map((_, i) => () => onUpdate(name, [...list.slice(0, i), ...list.slice(i + 1)])), [
    list,
    onUpdate,
  ]),
  useCallback(
    item => {
      onUpdate(name, [...list, item ||  {}]);
    },
    [onUpdate, list],
  ),
];

export default useUpdateArray;