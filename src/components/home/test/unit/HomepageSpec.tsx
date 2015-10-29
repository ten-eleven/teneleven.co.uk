import * as React from "react/addons";
const testUtils:any = React.addons.TestUtils;
import Home from "./../../src/Home.tsx";

// Check here what's avaiable in TestUtils: https://facebook.github.io/react/docs/test-utils.html
describe("ContentPage tests", () => {
  beforeEach(() => {
    this.component = testUtils.renderIntoDocument(
        <Home />
    );
  });

  describe("render tests", () => {
    it("renders logo", () => {
      const logoElement: Element = testUtils.findRenderedDOMComponentWithClass(this.component, "nav--logo");
      expect(logoElement.textContent).toBe("ten eleven");
    });

  });
});
