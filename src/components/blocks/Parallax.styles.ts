import styled from 'styled-components';
import { rem, mediaUp } from '../core/styles';

type ParallaxImageProps = {
  imgSrc: string;
  backgroundPositionY?: number;
};
export const ParallaxImage = styled.div<ParallaxImageProps>`
  display: flex;
  background-image: url(${({ imgSrc = '' }) => imgSrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-y: ${({ backgroundPositionY = 'inherit' }) => rem(backgroundPositionY)};
  background-position-x: center;

  ${mediaUp.xs`
     height: 40vh;
    `}
  ${mediaUp.sm`
     height: 50vh;
     `}
     ${mediaUp.md<{ backgroundPositionY?: number }>`
    height: 60vh;
    background-position-y: ${({ backgroundPositionY = 0 }) => rem(backgroundPositionY * 0.7)}
  `}
    ${mediaUp.lg<{ backgroundPositionY?: number }>`
    height: 60vh;
    background-position-y: ${({ backgroundPositionY = 0 }) => rem(backgroundPositionY * 0.3)}
  `}
`;

export default ParallaxImage;
