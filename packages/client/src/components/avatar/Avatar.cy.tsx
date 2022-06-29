import Avatar from "./Avatar";

describe("<Avatar>", () => {
  beforeEach(() => {
    cy.mount(<Avatar />);
  });

  it("should display image", () => {
    cy.get("[data-testid='image']").should("be.visible");
  });
});
