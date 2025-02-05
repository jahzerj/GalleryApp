import { render, screen } from "@testing-library/react";
import Spotlight from "../components/Spotlight";
import "@testing-library/jest-dom";

describe("Spotlight Component", () => {
  test("renders the image with correct props", () => {
    render(<Spotlight artist="Van Gogh" image="/test-image.jpg" />);

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();

    // checks if image path is inlcuded in image src
    expect(imageElement.src).toContain(encodeURIComponent("/test-image.jpg"));

    // checks alt text
    expect(imageElement).toHaveAttribute("alt", "An art piece by Van Gogh");
  });

  test("displays the correct artist name", () => {
    render(<Spotlight artist="Van Gogh" image="/test-image.jpg" />);

    const artistElement = screen.getByText(/Van Gogh/i);
    expect(artistElement).toBeInTheDocument();
  });
});
