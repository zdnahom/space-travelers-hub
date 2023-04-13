import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import configureMockStore from "redux-mock-store";
import Missions from "../components/Missions";

const mockStore = configureMockStore();
const store = mockStore({
  missions: {
    missions: [
      {
        mission_id: "1",
        mission_name: "Go to Mars",
        description: "Mars is a great planet",
        reserved: false,
      },
      {
        mission_id: "2",
        mission_name: "Go to Jupiter",
        description: "Jupiter is a great planet",
        reserved: false,
      },
      {
        mission_id: "3",
        mission_name: "Go to Saturn",
        description: "Saturn is a great planet",
        reserved: false,
      },
    ],
    isFetched: true,
  },
});
afterEach(cleanup);

describe("Mission component test", () => {
  it("It renders the missions", () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );
    const mission = screen.getByText("Go to Mars");
    expect(mission).toBeInTheDocument()
  });
  it("render mission lists", () => {
    const {container} = render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );
    expect(container).toMatchSnapshot()
  });
});
