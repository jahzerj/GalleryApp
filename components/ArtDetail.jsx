import Image from "next/image";
import styled from "styled-components";
import styles from "@/styles";

const StyledImg = styled.img`
  width: 600px;
  height: 340px;
  border-radius: 50px;
  object-fit: cover;
`;

const StyledPieceContext = styled.div`
  justify-content: start;
  width: 100%;
  padding: 0 12px;
`;

export default function ArtDetails({
  image,
  currDetailsName,
  artist,
  year,
  genre,
}) {
  return (
    <>
      <StyledImg src={image} height={80} width={80} alt="Alt" />
      <StyledPieceContext>
        <p>Title: {currDetailsName}</p>
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </StyledPieceContext>
    </>
  );
}
