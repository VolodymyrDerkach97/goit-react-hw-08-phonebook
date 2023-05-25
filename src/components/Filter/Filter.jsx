import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/filterSlice';
import { TextField } from '@mui/material';
import { TextFildStyled } from './Filter.styled';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <TextFildStyled
        id="outlined-helperText"
        label="Filter"
        placeholder="Find contacts by name"
        value={value}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </>
  );
};

export default Filter;
