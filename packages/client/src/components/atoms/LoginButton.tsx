import styled from "styled-components";
const CornerButton = styled.button`
  position: fixed;
  top: 12px;
  right: 12px;
`;

export const LoginButton = () => {
  const onClicked = () => {};

  return <CornerButton onClick={onClicked}> Login </CornerButton>;
};
