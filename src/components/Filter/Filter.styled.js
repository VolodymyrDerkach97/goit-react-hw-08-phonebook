import { TextField } from '@mui/material';
import styled from 'styled-components';

// MuiOutlinedInput-input
export const TextFildStyled = styled(TextField)({
  ' &.MuiFormControl-root': {
    marginLeft: 'auto',
    marginRight: '15px',
  },
  '& .MuiOutlinedInput-input': {
    padding: '6px',
  },
  ' #outlined-helperText-label': {
    top: '-9px',
  },
});
