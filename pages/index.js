import FavBtn from "@/components/FavBtn";
import Heart from "@/components/Heart";
import Spotlight from "@/components/Spotlight";
import { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "@/styles";

const StyledSpotlightContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  height: auto;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  background-color: transparent;
`;

const StyledSpolightBtn = styled.button`
  background: transparent;
  position: absolute;
  border: none;
  right: 50px;
  top: 40px;
  z-index: 100;
`;

const StyledHeading = styled.h1`
  text-align: center;
  margin: 0 auto;
`;

export default function HomePage({
  data,
  error,
  isLoading,
  toggleFavPieces,
  favPieces,
}) {
  const [randomPiece, setRandomPiece] = useState();

  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * data.length);
    let randomElement = data[randomIndex];

    setRandomPiece(randomElement);
  }, [data]);

  if (!randomPiece) return;
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <StyledHeading> Art Gallery</StyledHeading>
      <StyledSpotlightContainer>
        <Spotlight
          image={randomPiece.imageSource}
          artist={randomPiece.artist}
          pieceId={randomPiece.slug}
          isFavorite={favPieces.includes(randomPiece.slug)}
        />

        <StyledSpolightBtn onClick={() => toggleFavPieces(randomPiece.slug)}>
          <Heart fav={randomPiece.slug} favPieces={favPieces} />
        </StyledSpolightBtn>
      </StyledSpotlightContainer>
    </>
  );
}
