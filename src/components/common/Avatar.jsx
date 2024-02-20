import styled, { css } from "styled-components";
import defaultUser from "assets/defaultUser.jpg";

function Avatar({ src, size }) {
  return (
    <AvatartFigure size={size}>
      <img src={src ?? defaultUser} alt="아바타이미지" />
    </AvatartFigure>
  );
}

const AvatartFigure = styled.figure`
  ${(p) => {
    switch (p.size) {
      case "large":
        return css`
          width: 75px;
          height: 75px;
        `;
      default:
        return css`
          width: 50px;
          height: 50px;
        `;
    }
  }}
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
  }
`;

export default Avatar;
