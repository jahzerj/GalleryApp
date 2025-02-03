import useSWR from "swr";
import Image from "next/image";

export default function Preview({
  artist,
  pieceName,
  image,
  isLoading,
  error,
}) {
  //   if (error) return <div>Error</div>;
  //   if (isLoading) return <div>Loading...</div>;
  return (
    <li>
      <Image src={image} height={80} width={80} alt="Alt" />
      <p>Artist: {artist}</p>
      <p>Title: {pieceName}</p>
    </li>
  );
}
