import Link from "next/link";
import ArtDetails from "@/components/ArtDetail";
import { useRouter } from "next/router";
// need to use slug and routing from NextJS hard coded 'details' page to test if component works

export default function Details({ data, error, isLoading }) {
  let piece = data[1];
  //need to remove hard code ^HERE^
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  const router = useRouter();
  const { slug } = router.query;
  // dont know which property of router we will need (probably slug)

  // based on the SLUG we will name the page as well as map over the data object (i think)
  return (
    <>
      <Link href="/art-pieces">BACK</Link>
      <br></br>
      {/* added ^HERE^ because of formatting */}
      <ArtDetails
        image={piece.imageSource}
        pieceName={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
      />
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
