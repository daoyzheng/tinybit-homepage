import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: relative;
  border: 1px solid blue;
  width: 40px;
  height: 40px;
`

export const LetterDWrapper = styled.div`
  position: relative;
  /* border: 1px solid red; */
  width: 50%;
  height: 50%;
  overflow: hidden;
`

export const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: yellow;
`

export const HalfCircle = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid yellow;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  transform: rotate(90deg);
  border-bottom: 0;
`

export const LetterSeparator = styled.div`
  position: absolute;
  top: -10px;
  left: 48%;
  width: 3px;
  height: 60px;
  background-color: blue;
  transform: translateX(-2px) rotate(25deg);
`

export const LetterZWrapper = styled.div`
  position: relative;
  /* border: 1px solid red; */
  width: 50%;
  height: 50%;
  left: 20px;
  bottom: 0px;
  div:last-child {
    position: absolute;
    bottom: 0;
  }
`

export const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: yellow;
`

export const SlantedLine = styled.div`
  height: 120%;
  width: 2px;
  background-color: yellow;
  transform: translateX(3px) rotate(50deg) translateY(-7px);
`