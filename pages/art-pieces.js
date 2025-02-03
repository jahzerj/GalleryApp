import Navigation from "@/components/Navigation";
import Preview from "@/components/Preview";
import { nanoid } from "nanoid";

export default function artPieces({ data, error, isLoading }) {
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log("Data1:", data);

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
          <>
            <Preview
              key={nanoid()}
              image={piece.imageSource}
              pieceName={piece.name}
              artist={piece.artist}
            />
          </>
        ))}
      </ul>
    </>
  );
}
