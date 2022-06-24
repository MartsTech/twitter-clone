import "./commands";
import { mount } from "cypress/react";
import "tailwindcss/tailwind.css";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", mount);
