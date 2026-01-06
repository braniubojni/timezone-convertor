import NativeSelect from '@mui/material/NativeSelect';
import { useState, type ChangeEvent } from 'react';
import { sortOpts } from '../../context/consts';
import { useTimezone } from '../../context/hooks';
import type { TSortOption } from '../../context/types';
import { BootstrapInput, SelectWrapper } from './styles';

export const SortSelect = () => {
  const { dispatch } = useTimezone();
  const [value, setValue] = useState<TSortOption>(sortOpts[0].value);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as TSortOption;
    setValue(selectedValue);
    dispatch({ type: 'SET_SORT_OPTION', payload: selectedValue });
  };

  return (
    <SelectWrapper sx={{ m: 1 }} variant="standard">
      <NativeSelect
        value={value}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        {sortOpts.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </NativeSelect>
    </SelectWrapper>
  );
};
