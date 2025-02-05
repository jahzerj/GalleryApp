// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }) => children, // Mock Link component
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />, // Mock Image component
}));
