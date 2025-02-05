import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation"; // Adjust path if needed
import "@testing-library/jest-dom";
import { within } from "@testing-library/react";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }) => <a href={href}>{children}</a>,
}));

describe("Navigation Component", () => {
  test("renders all navigation links correctly", () => {
    render(<Navigation />);

    // Get the navigation list
    const navList = screen.getByRole("list");

    // Ensure all expected links are present
    const links = within(navList).getAllByRole("link");

    expect(links.length).toBe(3); // Expecting 3 links

    expect(links[0]).toHaveTextContent("Spotlight");
    expect(links[0]).toHaveAttribute("href", "/");

    expect(links[1]).toHaveTextContent("Gallery");
    expect(links[1]).toHaveAttribute("href", "/art-pieces");

    expect(links[2]).toHaveTextContent("Favorites");
    expect(links[2]).toHaveAttribute("href", "/favorites");
  });
});
