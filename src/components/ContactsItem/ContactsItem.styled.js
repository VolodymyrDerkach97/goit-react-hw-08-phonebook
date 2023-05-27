import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ContactButtonStyled = styled(Button)`
  min-width: 50px;
  height: 30px;
  padding: 5px;
  margin-left: 10px;
  border: 1px solid blue;

  border-radius: 5px;
  /* background-color: #78c4c8; */
`;

export const Contact = styled.li`
  padding: 5px;
  margin: 5px;

  border: 1px solid blue;
  box-shadow: blue;
  border-radius: 10px;
  @media screen and (min-width: 460px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &:hover {
    box-shadow: -1px 13px 5px -8px rgba(0, 0, 0, 0.23);
  }
`;

export const ContactWrapper = styled.div`
  text-align: left;
`;
export const ButtonWrapper = styled.div`
  @media screen and (min-width: 460px) {
    display: flex;
    justify-content: space-between;
  }
`;
