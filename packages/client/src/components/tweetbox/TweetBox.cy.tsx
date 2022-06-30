import { HomeIcon } from "@heroicons/react/outline";
import { SessionProvider } from "next-auth/react";
import TweetBoxIcon from "./components/Icon";
import TweetBox from "./TweetBox";

describe("<TweetBox>", () => {
  beforeEach(() => {
    cy.mount(
      <SessionProvider>
        <TweetBox />
      </SessionProvider>
    );
  });

  it("should render avatar", () => {
    cy.get("[data-testid=avatar]").should("exist");
  });

  it("should render image icon", () => {
    cy.get("[data-testid=imageIcon]").should("exist");
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
  });
});

describe("<TweetBoxIcon>", () => {
  beforeEach(() => {
    cy.mount(<TweetBoxIcon Icon={HomeIcon} />);
  });

  it("should display Icon props", () => {
    cy.get("[data-testid='icon']").should("be.visible");
  });
});
