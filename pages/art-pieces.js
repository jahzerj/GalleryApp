import Preview from "@/components/Preview";
import Link from "next/link";
import Heart from "@/components/Heart";
import { Fragment } from "react";

import "./styles/art-pieces.css";

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
      <h1 clas>Art Gallery</h1>
      <div className="dropdown">
        <label htmlFor="pieces">Available Art Pieces</label>
        <select id="pieces" name="pieces">
          <option>Select an Artpiece</option>
          {data.map((piece) => (
            <option key={piece.slug}>{piece.name}</option>
          ))}
        </select>
      </div>
      {data.map((piece) => (
        <Fragment key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <Preview
              image={piece.imageSource}
              pieceName={piece.name}
              artist={piece.artist}
            />
          </Link>
          <button onClick={() => toggleFavPieces(piece.slug)}>
            <Heart fav={piece.slug} favPieces={favPieces} />
          </button>
        </Fragment>
      ))}
    </>
  );
}
