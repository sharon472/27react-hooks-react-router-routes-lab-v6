import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Directors from "../pages/Directors";
import { BrowserRouter } from "react-router-dom";

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { name: "Christopher Nolan", movies: ["Inception", "Dunkirk"] },
        { name: "Sam Raimi", movies: ["Doctor Strange"] },
      ]),
  })
);
  render(
    <BrowserRouter>
      <Directors />
    </BrowserRouter>
  );
  await waitFor(() => {
    expect(screen.getByText("Christopher Nolan")).toBeInTheDocument();
    expect(screen.getByText("Sam Raimi")).toBeInTheDocument();
  });
test("renders a <li /> for each movie", async () => {

  await waitFor(() => {
    const inception = screen.getByText("Inception");
    const dunkirk = screen.getByText("Dunkirk");
    const drStrange = screen.getByText("Doctor Strange");

    expect(inception.tagName).toBe("LI");
    expect(dunkirk.tagName).toBe("LI");
    expect(drStrange.tagName).toBe("LI");
  });})