import Preview from "@/components/Preview";
import { Fragment } from "react";
import Heart from "@/components/Heart";

import styled from "styled-components";
import styles from "@/styles";

const StyledPreviewsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  height: auto;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
`;

const StyledBtn = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  right: 50px;
  top: 40px;
`;

export default function Favorites({ favPieces, data, toggleFavPieces }) {
  console.log("data:", data);

  return (
    <>
      {data.map((piece) =>
        favPieces.includes(piece.slug) ? (
          <StyledPreviewsContainer key={piece.slug}>
            <Preview
              artist={piece.artist}
              pieceName={piece.name}
              image={piece.imageSource}
            />
            <StyledBtn onClick={() => toggleFavPieces(piece.slug)}>
              <Heart fav={piece.slug} favPieces={favPieces} />
            </StyledBtn>
          </StyledPreviewsContainer>
        ) : (
          ""
        )
      )}
    </>
  );
}
