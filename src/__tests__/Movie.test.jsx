import "@testing-library/jest-dom";
import routes from "../routes";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen, act } from "@testing-library/react";
const id = 1;
describe("Movie Page", () => {
  test("renders without any errors", () => {
    const errorSpy = vi.spyOn(global.console, "error");
    const router = createMemoryRouter(routes, {
      initialEntries: [`/movie/${id}`],
    });
      render(<RouterProvider router={router} />);
       expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });
  test("renders movie's title in an h1", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [`/movie/${id}`],
    });
       render(<RouterProvider router={router} />);
       const h1 = await screen.findByText(/Doctor Strange/i);
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
  });
  test("renders movie's time within a p tag", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [`/movie/${id}`],
    });

    render(<RouterProvider router={router} />);

    const p = await screen.findByText(/115/i);
    expect(p).toBeInTheDocument();
    expect(p.tagName).toBe("P");
  });

  test("renders a span for each genre", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [`/movie/${id}`],
    });

    render(<RouterProvider router={router} />);

    const genres = ["Action", "Adventure", "Fantasy"];

    for (const genre of genres) {
      const span = await screen.findByText(genre);
      expect(span).toBeInTheDocument();
      expect(span.tagName).toBe("SPAN");
    }
  });

  test("renders the <NavBar /> component", async () => {
    await act(async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/movies"],
      });
      render(<RouterProvider router={router} />);
    });
     const nav = await screen.findByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});