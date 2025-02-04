import React from "react";
import Heart from "@/components/Heart";

export default function FavBtn({ toggleFavPieces }) {
  return <Heart onClick={() => toggleFavPieces(pieceId)} />;
}
