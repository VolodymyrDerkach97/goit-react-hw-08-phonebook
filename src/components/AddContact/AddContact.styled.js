import styled from '@emotion/styled';
import ReactInputMask from 'react-input-mask';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f7f9d5;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
`;
export const InputStyled = styled(ReactInputMask)`
  height: 35px;
  border-radius: 5px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
