import Image from "next/image";

export default function Preview({ artist, pieceName, image }) {
  return (
    <>
      <Image src={image} height={80} width={80} alt="Alt" />
      <p>Title: {pieceName}</p>
      <p>Artist: {artist}</p>
    </>
  );
}
