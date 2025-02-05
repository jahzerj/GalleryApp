import Image from "next/image";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 600px;
  height: 340px;
  border-radius: 50px;
  object-fit: cover;
`;

export default function Preview({ artist, pieceName, image }) {
  return (
    <>
      <StyledImg
        className="preview_img"
        src={image}
        layout="responsive"
        // width={400}
        // height={200}
        alt={`An art piece by ${artist}`}
      />
      <p>Title: {pieceName}</p>
      <p>Artist: {artist}</p>
    </>
  );
}
