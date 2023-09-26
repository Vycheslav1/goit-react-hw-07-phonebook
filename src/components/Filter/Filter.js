import { Label, InputFilter } from './FilterStyles.js';

import { useDispatch } from 'react-redux';

import { setStatusFilter } from 'redux/filterSlice.js';

import { nanoid } from 'nanoid';

const InputIdFilter = nanoid();

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label htmlFor={InputIdFilter}>
      Find contacts by name
      <InputFilter
        type="text"
        name="filtration"
        onInput={e => dispatch(setStatusFilter(e.target.value))}
      />
    </Label>
  );
};

export { Filter };
