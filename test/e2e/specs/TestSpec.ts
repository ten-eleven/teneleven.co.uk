import {Component, Input, Button, List, defaults, field} from "protractor-page-object";

class TenElevenPage extends Component {

  @field(Component, {qa:"logo"})
  logo: Component;

}

describe("example", () => {
  it("should pass", () => {
    let tenElevenPage:TenElevenPage = new TenElevenPage();
    browser.get("http://localhost:3000")
    expect(tenElevenPage.logo.isVisible(20000)).toBe(true);
  })

})
