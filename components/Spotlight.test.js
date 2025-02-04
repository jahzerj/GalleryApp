import Image from "next/image";

export default function Spotlight({ artist, image, toggleFavPieces }) {
  console.log("wordswordwords", toggleFavPieces);
  return (
    <>
      <Image src={image} height={80} width={80} alt="Alt" />
      <p>Artist: {artist}</p>
    </>
  );
}
