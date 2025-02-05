import { render, screen } from "@testing-library/react";
import ArtDetails from "../components/ArtDetail"; // Adjust path if needed
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />, // Mock next/image as a regular img tag
}));

describe("ArtDetails Component", () => {
  const mockProps = {
    image: "/test-art.jpg",
    pieceName: "Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    genre: "Post-Impressionism",
  };

  test("renders the image correctly", () => {
    render(<ArtDetails {...mockProps} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockProps.image);
    expect(imageElement).toHaveAttribute("alt", "Alt");
  });

  test("displays the correct art details", () => {
    render(<ArtDetails {...mockProps} />);

    expect(
      screen.getByText(`Title: ${mockProps.pieceName}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Artist: ${mockProps.artist}`)).toBeInTheDocument();
    expect(screen.getByText(`Year: ${mockProps.year}`)).toBeInTheDocument();
    expect(screen.getByText(`Genre: ${mockProps.genre}`)).toBeInTheDocument();
  });
});
