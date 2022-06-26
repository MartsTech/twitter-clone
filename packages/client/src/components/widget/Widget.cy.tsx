import WidgetSearch from "./components/Search";
import Widget from "./Widget";

describe("<Widget>", () => {
  beforeEach(() => {
    cy.mount(<Widget />);
  });

  it("should render search input", () => {
    cy.get("[data-testid='search']").should("exist");
  });
});

describe("<WidgetSearch>", () => {
  beforeEach(() => {
    cy.mount(<WidgetSearch />);
  });

  it("should contain the corrent placeholder text", () => {
    cy.get("[data-testid='input']").should(
      "have.attr",
      "placeholder",
      "Search Twitter"
    );
  });

  it("should contain the corrent icon", () => {
    cy.get("[data-testid='icon']").should("be.visible");
  });

  it("should allow the user to type", async () => {
    cy.get("[data-testid='input']").type("Example");
    cy.get("[data-testid='input']").should("have.value", "Example");
  });
});
