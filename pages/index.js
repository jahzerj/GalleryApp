import FavBtn from "@/components/FavBtn";
import Spotlight from "@/components/Spotlight";

function RandomPiece(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomElement = array[randomIndex];
  return randomElement;
}

export default function HomePage({
  data,
  error,
  isLoading,
  toggleFavPieces,
  favPieces,
}) {
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  let displayedArt = RandomPiece(data);
  return (
    <>
      <h1> Art Gallery</h1>
      <Spotlight
        image={displayedArt.imageSource}
        artist={displayedArt.artist}
        pieceId={displayedArt.slug}
        isFavorite={favPieces.includes(displayedArt.slug)}
        toggleFavPieces={toggleFavPieces}
      />
    </>
  );
}
