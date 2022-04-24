import styled from "styled-components";

export const SubheadingWrapper = styled.div`
  padding: 0 10px;
  position: relative;
  background-color: var(--red);
  width: fit-content;
  font-size: 22px;
  border-top-right-radius: 8px;
  ::after {
    content: "";
    width: 180px;
    height: 2px;
    background-color: var(--red);
    position: absolute;
    bottom: 0;
    @media (min-width: 768px) {
      width: 600px;
    }
  }
  @media (min-width: 768px) {
    padding: 0 15px;
  }
`