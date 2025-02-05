import { render, screen } from "@testing-library/react";
import Preview from "../components/Preview";
import "@testing-library/jest-dom";

describe("Preview Component", () => {
  test("renders the image with correct props", () => {
    render(
      <Preview
        artist="Pablo Picasso"
        pieceName="Guernica"
        image="/test-image.jpg"
      />
    );

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();

    // checks if image path is inlcuded in image src
    expect(imageElement.src).toContain(encodeURIComponent("/test-image.jpg"));

    // checks alt text
    expect(imageElement).toHaveAttribute(
      "alt",
      "An art piece by Pablo Picasso"
    );
  });

  test("displays the correct title", () => {
    render(
      <Preview
        artist="Pablo Picasso"
        pieceName="Guernica"
        image="/test-image.jpg"
      />
    );

    const titleElement = screen.getByText(/Title: Guernica/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("displays the correct artist name", () => {
    render(
      <Preview
        artist="Pablo Picasso"
        pieceName="Guernica"
        image="/test-image.jpg"
      />
    );

    const artistElement = screen.getByText(/Artist: Pablo Picasso/i);
    expect(artistElement).toBeInTheDocument();
  });
});
