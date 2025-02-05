import Link from "next/link";
import ArtDetails from "@/components/ArtDetail";
import { useRouter } from "next/router";
import Heart from "@/components/Heart";
import styled from "styled-components";
import CommentForm from "@/components/Comment";

const StyledDetailsContainer = styled.div`
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

export default function Details({
  data,
  error,
  isLoading,
  toggleFavPieces,
  favPieces,
}) {
  const router = useRouter();

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  const { slug } = router.query;

  const [currDetails] = data.filter((piece) => piece.slug === slug);

  return (
    <>
      <Link href="/art-pieces">BACK</Link>
      <StyledDetailsContainer>
        <ArtDetails
          image={currDetails.imageSource}
          currDetailsName={currDetails.name}
          artist={currDetails.artist}
          year={currDetails.year}
          genre={currDetails.genre}
        />
        <StyledBtn onClick={() => toggleFavPieces(currDetails.slug)}>
          <Heart fav={currDetails.slug} favPieces={favPieces} />
        </StyledBtn>
      </StyledDetailsContainer>
      {/* <CommentForm /> */}
    </>
  );
}
