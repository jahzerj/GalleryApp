import React from "react";
import Heart from "@/components/Heart";

export default function FavBtn({ toggleFavPieces, pieceId, isFavorite }) {
  return (
    <button
      onClick={() => {
        console.log(`Toggling favorite for: ${pieceId}`); // ✅ Debugging Log
        toggleFavPieces(pieceId);
      }}
    >
      <Heart style={{ fill: isFavorite ? "red" : "none", stroke: "black" }} />
    </button>
  );
}
