import type { Comment as CommentType } from "types/comment";
import Comment from "./Comment";

describe("<Comment>", () => {
  beforeEach(() => {
    cy.fixture("comments.json").then((comments: CommentType[]) => {
      cy.mount(<Comment comment={comments[0]} />);
    });
  });

  it("should render avatar", () => {
    cy.get("[data-testid=avatar]").should("exist");
  });

  it("should render header", () => {
    cy.get("[data-testid=header]").should("exist");
  });

  it("should display body text", () => {
    cy.fixture("comments.json").then((comments: CommentType[]) => {
      cy.get("[data-testid=body]").should("contain", comments[0].body);
    });
  });
});
