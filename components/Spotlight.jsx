import Image from "next/image";
import FavBtn from "./FavBtn";

export default function Spotlight({
  artist,
  image,
  toggleFavPieces,
  pieceId,
  isFavorite,
}) {
  console.log("wordswordwords", toggleFavPieces);
  return (
    <>
      <Image src={image} height={80} width={80} alt="Alt" />
      <p>Artist: {artist}</p>
      <FavBtn
        pieceId={pieceId}
        toggleFavPieces={toggleFavPieces}
        isFavorite={isFavorite}
      />
    </>
  );
}
