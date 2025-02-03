import Image from "next/image";

export default function ArtDetails({ image, pieceName, artist, year, genre }) {
  return (
    <>
      <Image src={image} height={80} width={80} alt="Alt" />
      <p>Title: {pieceName}</p>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </>
  );
}
