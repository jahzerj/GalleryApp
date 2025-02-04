import Link from "next/link";
import ArtDetails from "@/components/ArtDetail";
import { useRouter } from "next/router";
import Heart from "@/components/Heart";

export default function Details({
  data,
  error,
  isLoading,
  toggleFavPieces,
  favPieces,
}) {
  const router = useRouter();

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  const { slug } = router.query;

  const [currDetails] = data.filter((piece) => piece.slug === slug);

  return (
    <>
      <Link href="/art-pieces">BACK</Link>
      <br></br>
      <ArtDetails
        image={currDetails.imageSource}
        currDetailsName={currDetails.name}
        artist={currDetails.artist}
        year={currDetails.year}
        genre={currDetails.genre}
      />
      <button onClick={() => toggleFavPieces(currDetails.slug)}>
        <Heart fav={currDetails.slug} favPieces={favPieces} />
      </button>
    </>
  );
}

// {
//   "slug": "orange-red-and-green",
//   "artist": "Steve Johnson",
//   "name": "Orange Red and Green Abstract Painting",
//   "imageSource": "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
//   "year": "2018",
//   "genre": "Abstract Painting",
//   "colors": [
//     "#0f5855",
//     "#e6ba15",
//     "#b42011",
//     "#cec4c6",
//     "#d5561f"
//   ],
//   "dimensions": {
//     "height": 2432,
//     "width": 1920,
//     "type": "jpg"
//   }
// },
