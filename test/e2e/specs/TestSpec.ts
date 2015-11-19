import {Component, Input, Button, List, defaults, field} from "xenon";

@defaults({qa:"nav"})
class Nav extends Component {

  @field(Component, {qa:"nav--logo"})
  logo: Component;

  @field(Component, {qa:"nav--contact"})
  contactUs: Component;

}

class CaseStudy extends Component {

  @field(Component, {qa:"casestudy--link"})
  link: Component;

  name(name) {
    this.qa("casestudy--"+name);
  }
}

@defaults({qa:"case-study-view"})
class CaseStudyView extends Component {

  @field(Component, {qa:"back-button"})
  backButton: Button;

}

class TenElevenPage extends Component {

  @field(Nav)
  nav: Nav;

  @field(CaseStudy, {name:"opentable"})
  opentableCaseStudy:CaseStudy;

  @field(CaseStudyView)
  caseStudyView:CaseStudyView;

}

var tenElevenPage:TenElevenPage = null;

describe("example", () => {

  beforeEach(() => {
    tenElevenPage = new TenElevenPage();
    browser.get("http://localhost:3000");
  })

  it("should show logo", () => {
    expect(tenElevenPage.nav.isVisible(20000)).toBe(true);
    expect(tenElevenPage.nav.contactUs.getText()).toBe("contact us");
    expect(tenElevenPage.nav.logo.getText()).toBe("ten eleven");
  })

  it("should open opentable case study", () => {
    expect(tenElevenPage.opentableCaseStudy.link.isVisible()).toBe(true)
    tenElevenPage.opentableCaseStudy.link.click();
    expect(tenElevenPage.caseStudyView.isVisible());
    tenElevenPage.caseStudyView.backButton.click();
    expect(tenElevenPage.caseStudyView.isNotVisible());
  })

})
