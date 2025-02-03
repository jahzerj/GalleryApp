import useSWR from "swr";
import Image from "next/image";

export default function Spotlight({
  artist,
  pieceName,
  image,
  isLoading,
  error,
}) {
  //   if (error) return <div>Error</div>;
  //   if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Image src={image} height={80} width={80} alt="Alt" />
      <p>Artist: {artist}</p>
    </>
  );
}
