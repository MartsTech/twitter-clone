import { ChatAlt2Icon } from "@heroicons/react/outline";
import type { Comment } from "types/comment";
import type { Image } from "types/sanity";
import type { Tweet as TweetType } from "types/tweet";
import { urlFor } from "utils/sanity";
import TweetComments from "./components/Comments";
import TweetHeader from "./components/Header";
import TweetIcon from "./components/Icon";
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

  it("should render image", () => {
    cy.get("[data-testid=image]").should("exist");
  });

  it("should render comment icon", () => {
    cy.get("[data-testid=commentIcon]").should("exist");
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
      cy.mount(<TweetImage src={urlFor(tweet.image as Image).url()} />);
    });
  });

  it("should display image", () => {
    cy.get("[data-testid=image]").should("be.visible");
  });
});

describe("<TweetIcon>", () => {
  it("should display count and Icon props", () => {
    cy.mount(<TweetIcon Icon={ChatAlt2Icon} count={5} />);
    cy.get("[data-testid='count']").contains("5");
    cy.get("[data-testid='icon']").should("be.visible");
  });

  it("should not display count when not given", () => {
    cy.mount(<TweetIcon Icon={ChatAlt2Icon} />);
    cy.get("[data-testid='count']").should("not.exist");
  });
});

describe("<TweetComments>", () => {
  beforeEach(() => {
    cy.fixture("comments.json").then((comments: Comment[]) => {
      cy.mount(<TweetComments comments={comments} />);
    });
  });

  it("should display all comments", () => {
    cy.get("[data-testid='comment']").should("have.length", 5);
  });
});
