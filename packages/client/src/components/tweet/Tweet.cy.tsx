import type { Image, Tweet as TweetType } from "types/tweet";
import TweetHeader from "./components/Header";
import TweetImage from "./components/Image";
import Tweet from "./Tweet";

describe("<Tweet>", () => {
  beforeEach(() => {
    cy.fixture("tweet.json").then((tweet: TweetType) => {
      cy.mount(<Tweet tweet={tweet} />);
    });
  });

  it("should render avatar", () => {
    cy.get("[data-testid=avatar]").should("exist");
  });

  it("should render header", () => {
    cy.get("[data-testid=header]").should("exist");
  });

  it("should display body text", () => {
    cy.fixture("tweet.json").then((tweet: TweetType) => {
      cy.get("[data-testid=body]").should("contain", tweet.body);
    });
  });
});

describe("<TweetHeader>", () => {
  beforeEach(() => {
    cy.fixture("tweet.json").then((tweet: TweetType) => {
      cy.mount(
        <TweetHeader name={tweet.user.name} createdAt={tweet["_createdAt"]} />
      );
    });
  });

  it("should display name", () => {
    cy.fixture("tweet.json").then((tweet: TweetType) => {
      cy.get("[data-testid=name]").should("contain", tweet.user.name);
    });
  });
});

describe("<TweetImage>", () => {
  beforeEach(() => {
    cy.fixture("tweet.json").then((tweet: TweetType) => {
      cy.mount(<TweetImage image={tweet.image as Image} />);
    });
  });

  it("should display image", () => {
    cy.fixture("tweet.json").then((tweet: TweetType) => {
      cy.get("[data-testid=image]").should("be.visible");
    });
  });
});
