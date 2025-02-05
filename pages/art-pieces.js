import Preview from "@/components/Preview";
import Link from "next/link";
import Heart from "@/components/Heart";
import styled from "styled-components";

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

const StyledHeading = styled.h1`
  text-align: center;
  margin: 0 auto;
`;

export default function artPieces({
  data,
  error,
  isLoading,
  toggleFavPieces,
  favPieces,
}) {
  if (error) return <div>Error</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <StyledHeading>Art Gallery</StyledHeading>
      {/* <div className="dropdown">
        <label htmlFor="pieces">Available Art Pieces</label>
        <select id="pieces" name="pieces">
          <option>Select an Artpiece</option>
          {data.map((piece) => (
            <option key={piece.slug}>{piece.name}</option>
          ))}
        </select>
      </div> */}
      {data.map((piece) => (
        <StyledPreviewsContainer key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <Preview
              image={piece.imageSource}
              pieceName={piece.name}
              artist={piece.artist}
            />
          </Link>
          <StyledBtn onClick={() => toggleFavPieces(piece.slug)}>
            <Heart fav={piece.slug} favPieces={favPieces} />
          </StyledBtn>
        </StyledPreviewsContainer>
      ))}
    </>
  );
}
