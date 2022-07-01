import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import CommentBox from "./CommentBox";

describe("<CommentBox>", () => {
  beforeEach(() => {
    cy.fixture("unauthSession.json").then((session: Session) => {
      cy.mount(
        <SessionProvider session={session}>
          <CommentBox onComment={() => null} tweetId="1" />
        </SessionProvider>
      );
    });
  });

  it("should contain the corrent placeholder text", () => {
    cy.get("[data-testid='input']").should(
      "have.attr",
      "placeholder",
      "Write a comment..."
    );
  });

  it("should allow the user to type", async () => {
    cy.get("[data-testid='input']").type("Example");
    cy.get("[data-testid='input']").should("have.value", "Example");
  });

  it("should have the button disabled when no text", () => {
    cy.get("[data-testid='button']").should("be.disabled");
  });
});
