import Preview from "@/components/Preview";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function artPieces({ data, error, isLoading }) {
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h1>Art Gallery</h1>
      <div className="dropdown">
        <label for="pieces">Available Art Pieces</label>
        <select id="pieces" name="pieces">
          <option>Select an Artpiece</option>
          {data.map((piece, index) => (
            <option key={index}>{piece.name}</option>
          ))}
        </select>
      </div>
      <ul>
        {data.map((piece) => (
          <Link key={nanoid()} href={`/art-pieces/${piece.slug}`}>
            <Preview
              image={piece.imageSource}
              pieceName={piece.name}
              artist={piece.artist}
            />
          </Link>
        ))}
      </ul>
    </>
  );
}
