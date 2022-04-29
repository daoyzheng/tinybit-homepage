import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 150px;
`

export const ContactContentWrapper = styled.div`
  > :first-child {
    color: var(--lightred);
    font-size: 30px;
    @media (min-width: 1280px) {
      font-size: 3vw;
    }
  }
  > :nth-child(2) {
    font-size: 16px;
    max-width: 600px;
    line-height: 30px;
    text-align: center;
    @media (min-width: 1280px) {
      font-size: 1vw;
    }
  }
  > :nth-child(3) {
    font-size: 16px;
    padding: 10px 20px;
    border: 1px solid var(--red);
    border-radius: 5px;
    cursor: pointer;
    color: white;
    &:hover {
      background-color: var(--lightred);
    }
    @media (min-width: 1280px) {
      font-size: 1vw;
    }
  }
`