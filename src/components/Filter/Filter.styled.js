import { TextField } from '@mui/material';
import styled from 'styled-components';

// MuiOutlinedInput-input
export const TextFildStyled = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    padding: '5px',
  },
  ' #outlined-helperText-label': {
    top: '-9',
  },
});
