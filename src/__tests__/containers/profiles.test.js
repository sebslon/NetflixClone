import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

import { SelectProfileContainer } from "../../containers/profiles";

describe("<Profiles />", () => {
  it("Renders the <Profiles />, allow to set user", () => {
    const user = { displayName: "Test", photoURL: "test.png" };
    const setProfile = jest.fn();
    const { getByTestId } = render(
      <Router>
        <SelectProfileContainer user={user} setProfile={setProfile} />
      </Router>
    );

    userEvent.click(getByTestId("user-profile"));
    expect(setProfile).toHaveBeenCalled();
  });
});
