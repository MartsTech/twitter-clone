import { HomeIcon } from "@heroicons/react/outline";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import SidebarLogo from "./components/Logo";
import SidebarRow from "./components/Row";
import Sidebar from "./Sidebar";

describe("<Sidebar>", () => {
  beforeEach(() => {
    cy.fixture("unauthSession.json").then((session: Session) => {
      cy.mount(
        <SessionProvider session={session}>
          <Sidebar />
        </SessionProvider>
      );
    });
  });

  it("should render logo", () => {
    cy.get("[data-testid='logo']").should("exist");
  });

  it("should render all rows", () => {
    cy.get("[data-testid='home']").should("exist");
    cy.get("[data-testid='explore']").should("exist");
    cy.get("[data-testid='notifications']").should("exist");
    cy.get("[data-testid='messages']").should("exist");
    cy.get("[data-testid='bookmarks']").should("exist");
    cy.get("[data-testid='lists']").should("exist");
    cy.get("[data-testid='signIn']").should("exist");
    cy.get("[data-testid='more']").should("exist");
  });
});

describe("<Logo>", () => {
  beforeEach(() => {
    cy.mount(<SidebarLogo />);
  });

  it("should display image", () => {
    cy.get("[data-testid='image']").should("be.visible");
  });
});

describe("<Row>", () => {
  beforeEach(() => {
    cy.mount(<SidebarRow title="Home" Icon={HomeIcon} />);
  });

  it("should display title and Icon props", () => {
    cy.get("[data-testid='title']").contains("Home");
    cy.get("[data-testid='icon']").should("be.visible");
  });
});
