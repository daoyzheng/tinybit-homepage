import styled from "styled-components";

export const OffColorSection = styled.section`
  background-color: var(--grey);
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
  color: #f1b91a;
  opacity: 0.2;
  font-size: 180px;
`