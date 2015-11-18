import {Component, Input, Button, List} from "../../../node_modules/protractor-page-object/src/components";
import {defaults, field} from "../../../node_modules/protractor-page-object/src/components/ComponentAnnotations";

class TenElevenPage extends Component {

  @field(Component, {qa:"logo"})
  logo: Component;

}

describe("example", () => {
  it("should pass", () => {
    let tenElevenPage:TenElevenPage = new TenElevenPage();
    browser.get("http://localhost:3001")
    expect(tenElevenPage.logo.isVisible()).toBe(true);
  })

})
