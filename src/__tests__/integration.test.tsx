import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "../App";

describe("App", () => {
  it("should render the app", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText("GitHub User App")).toBeInTheDocument();
  });

  it("should fetch users", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const users = screen.findAllByDisplayValue("mojombo");
    expect(users).toBeTruthy();
  });

  it("should search users", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText(
      "Search by username"
    ) as HTMLInputElement;
    searchInput.value = "octocat";
    searchInput.dispatchEvent(new Event("submit"));

    const users = screen.getAllByDisplayValue("octocat");
    expect(users).toBeTruthy();
  });

  it("should fetch repos", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText(
      "Search by username"
    ) as HTMLInputElement;
    searchInput.value = "octocat";
    searchInput.dispatchEvent(new Event("submit"));

    const accordion = screen.getByDisplayValue("octocat");
    accordion.click();

    const repos = screen.getAllByDisplayValue("octocat");
    expect(repos).toBeTruthy();
  });
});
