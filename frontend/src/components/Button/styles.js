import styled from 'styled-components';

import MButton from '@mui/material/Button';

export const StyledButton = styled(MButton)`
  &.MuiButton-root {
    width: ${({width}) => width ? width : '15.625rem'};
    background-color: #de3e3e;
    color: #FFFFFF;
  }
  &.MuiButton-root:hover {
    background-color: #e32424;
    color: #FFFFFF;
  }
`;
