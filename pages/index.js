import FavBtn from "@/components/FavBtn";
import Heart from "@/components/Heart";
import Spotlight from "@/components/Spotlight";
import { useEffect, useState } from "react";

// function RandomPiece(array) {
//   let randomIndex = Math.floor(Math.random() * array.length);
//   let randomElement = array[randomIndex];
//   return randomElement;

//   setRandomPiece();
// }

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
      <h1> Art Gallery</h1>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        pieceId={randomPiece.slug}
        isFavorite={favPieces.includes(randomPiece.slug)}
      />

      <button onClick={() => toggleFavPieces(randomPiece.slug)}>
        <Heart fav={randomPiece.slug} favPieces={favPieces} />
      </button>
    </>
  );
}
