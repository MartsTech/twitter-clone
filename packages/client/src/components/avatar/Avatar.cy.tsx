import Avatar from "./Avatar";

describe("<Avatar>", () => {
  it("should display image", () => {
    cy.mount(<Avatar />);
    cy.get("[data-testid='image']").should("be.visible");
  });

  it("should display image with small size", () => {
    cy.mount(<Avatar size="small" />);
    cy.get("[data-testid='avatar']").should("have.class", "h-7 w-7");
  });

  it("should display image with normal size", () => {
    cy.mount(<Avatar />);
    cy.get("[data-testid='avatar']").should("have.class", "h-10 w-10");
  });

  it("should display image with large size", () => {
    cy.mount(<Avatar size="large" />);
    cy.get("[data-testid='avatar']").should("have.class", "h-14 w-14");
  });
});
