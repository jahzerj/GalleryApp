import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { nanoid } from "nanoid";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [favPieces, setFavPieces] = useState([]);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  function toggleFavPieces(pieceId) {
    console.log("toggle");
    if (favPieces.includes(pieceId)) {
      const updateFavPieces = favPieces.filter(
        (piece) => piece.slug !== pieceId
      );
      setFavPieces(updateFavPieces);
    } else {
      const updateFavPieces = [...favPieces, pieceId];
      setFavPieces(updateFavPieces);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        error={error}
        isLoading={isLoading}
        data={data}
        toggleFavPieces={toggleFavPieces}
      />

      <Navigation />
    </>
  );
}
