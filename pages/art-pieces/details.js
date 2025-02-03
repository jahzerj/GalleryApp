import Link from "next/link";
import ArtDetails from "@/components/ArtDetail";
import Router from "next/router";
// need to use slug and routing from NextJS hard coded 'details' page to test if component works

export default function Details({ data, error, isLoading }) {
  let piece = data[1];
  //need to remove hard code ^HERE^
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Link href="/art-pieces">BACK</Link>
      <br></br>
      {/* added ^HERE^ because of formatting */}
      <ArtDetails
        image={piece.imageSource}
        pieceName={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
      />
    </>
  );
}
