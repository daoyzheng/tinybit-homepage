import styled from "styled-components";

export const OffColorSection = styled.section`
  background-color: var(--grey);
  z-index: 0;
`

interface WatermarkProps {
  translateRate: number
}

export const Watermark = styled.div.attrs<WatermarkProps>(props => ({
  style: {
    transform: `translateY(${props.translateRate}px)`
  }
}))<WatermarkProps>`
  position: absolute;
  right: 0;
  bottom: 30px;
  text-transform: uppercase;
  color: #9f9f9f;
  opacity: 0.2;
  font-size: 140px;
  z-index: 1;
`