import { HomeIcon } from "@heroicons/react/outline";
import SidebarLogo from "./components/Logo";
import SidebarRow from "./components/Row";
import Sidebar from "./Sidebar";

describe("<Sidebar>", () => {
  beforeEach(() => {
    cy.mount(<Sidebar />);
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

  it("should have visible image", () => {
    cy.get("[data-testid='logo']").should("be.visible");
  });
});

describe("<Row>", () => {
  beforeEach(() => {
    cy.mount(<SidebarRow title="Home" Icon={HomeIcon} />);
  });

  it("should render title and Icon props correctly", () => {
    cy.get("[data-testid='title']").contains("Home");
    cy.get("[data-testid='icon']").should("be.visible");
  });
});
