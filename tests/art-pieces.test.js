import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPiecesPage from "../pages/art-pieces"; // Adjust path if needed
import "@testing-library/jest-dom";

const mockData = [
  {
    slug: "guernica",
    name: "Guernica",
    artist: "Pablo Picasso",
    imageSource: "/guernica.jpg",
  },
  {
    slug: "starry-night",
    name: "Starry Night",
    artist: "Vincent Van Gogh",
    imageSource: "/starry-night.jpg",
  },
];

describe("Art Pieces Page", () => {
  test("renders all Preview components", () => {
    render(
      <ArtPiecesPage
        data={mockData}
        isLoading={false}
        error={null}
        favPieces={[]}
        toggleFavPieces={() => {}}
      />
    );

    // Ensure correct number of images (Previews)
    const previewImages = screen.getAllByRole("img");
    expect(previewImages.length).toBe(mockData.length);

    mockData.forEach((piece) => {
      expect(
        previewImages.some((img) => img.src.includes(piece.imageSource))
      ).toBe(true);
    });
  });
});
test("calls toggleFavPieces when favorite button is clicked", async () => {
  const mockToggleFavPieces = jest.fn();
  render(
    <ArtPiecesPage
      data={mockData}
      isLoading={false}
      error={null}
      favPieces={[]}
      toggleFavPieces={mockToggleFavPieces}
    />
  );

  const favButtons = screen.getAllByRole("button"); // Get all favorite buttons
  await userEvent.click(favButtons[0]); // Click the first favorite button

  expect(mockToggleFavPieces).toHaveBeenCalledTimes(1);
  expect(mockToggleFavPieces).toHaveBeenCalledWith("guernica"); // Ensure correct slug is passed
});
