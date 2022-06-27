import TweetBox from "./TweetBox";

describe("<TweetBox>", () => {
  beforeEach(() => {
    cy.mount(<TweetBox />);
  });

  it("should contain the corrent placeholder text", () => {
    cy.get("[data-testid='input']").should(
      "have.attr",
      "placeholder",
      "What's happening?"
    );
  });

  it("should allow the user to type", async () => {
    cy.get("[data-testid='input']").type("Example");
    cy.get("[data-testid='input']").should("have.value", "Example");
  });

  it("should have the button disabled when no text", () => {
    cy.get("[data-testid='button']").should("be.disabled");

    cy.get("[data-testid='input']").type("Example");
    cy.get("[data-testid='button']").should("not.be.disabled");

    cy.get("[data-testid='input']").clear();
    cy.get("[data-testid='button']").should("be.disabled");
  });
});
