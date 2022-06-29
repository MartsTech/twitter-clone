import Avatar from "./Avatar";

describe("<Avatar>", () => {
  beforeEach(() => {
    cy.mount(<Avatar />);
  });

  it("should render image", () => {
    cy.get("[data-testid='image']").should("be.visible");
  });
});
