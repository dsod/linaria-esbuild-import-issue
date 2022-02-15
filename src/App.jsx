import { css } from "@linaria/core";
import { styled } from "@linaria/react";

const StyledDiv = styled.div`
  border: 1px solid green;
`;

const styles = css`
  border: 1px solid green;
`;

export default function App() {
  return (
    <div className={css}>
      <Test>Hello</Test>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
