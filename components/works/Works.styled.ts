import styled from "styled-components";

export const WorksWrapper = styled.div`
  margin-top: 150px;
`

export const WorksImageWrapper = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 5px 5px 5px var(--grey), 10px 10px var(--red);
  &:hover {
    ::after {
      opacity: 0;
    }
  }
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--red);
    opacity: 0.2;
    transition: opacity 500ms;
  }
  @media (min-width: 768px) {
    width: 550px;
  }
`

export const WorksDescriptionWrapper = styled.div`
  > :nth-child(1) {
    font-size: 2vw;
    width: fit-content;
  }
  > :nth-child(2) {
    display: flex;
    align-items: center;
    div {
      margin-right: 15px;
      color: lightgrey;
    }
  }
`