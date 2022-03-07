import styled from "styled-components";
import { Button } from 'fomantic-ui-react';

const CornerButton = styled(Button)`
  position: fixed;
  top: 12px;
  right: 12px;
`;
export const LoginButton = () => {
  const onClicked = () => {};

  return <CornerButton onClick={onClicked}> Login </CornerButton>;
};
