import Link from "next/link";
import Image from "next/image";

export default function ArtDetails({ image, pieceName, artist, year, genre }) {
  return (
    <>
      <Link href="/art-pieces">BACK</Link>
      <Image src={image} height={80} width={80} alt="Alt" />
      <p>Title: {pieceName}</p>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </>
  );
}
