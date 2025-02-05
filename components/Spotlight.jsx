import Image from "next/image";

export default function Spotlight({ artist, image }) {
  return (
    <>
      <Image
        src={image}
        height={80}
        width={80}
        alt={`An art piece by ${artist}`}
      />
      <p>Artist: {artist}</p>
    </>
  );
}
