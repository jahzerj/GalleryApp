import Preview from "@/components/Preview";
import { Fragment } from "react";
import Heart from "@/components/Heart";

export default function Favorites({ favPieces, data, toggleFavPieces }) {
  console.log("data:", data);

  return (
    <Fragment>
      {data.map((piece) =>
        favPieces.includes(piece.slug) ? (
          <>
            <Preview
              key={piece.slug}
              artist={piece.artist}
              pieceName={piece.name}
              image={piece.imageSource}
            />
            <button onClick={() => toggleFavPieces(piece.slug)}>
              <Heart fav={piece.slug} favPieces={favPieces} />
            </button>
          </>
        ) : (
          ""
        )
      )}
    </Fragment>
  );
}
