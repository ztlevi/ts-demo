console.info("This is index.ts");

import { MDCDrawer } from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer")!);

const listEl = document.querySelector(".mdc-drawer .mdc-list") as HTMLElement;
const mainContentEl = document.querySelector(".main-content") as HTMLElement;

listEl.addEventListener("click", () => {
  drawer.open = false;
});

document.body.addEventListener("MDCDrawer:closed", () => {
  const button = mainContentEl.querySelector("input, button") as HTMLElement;
  button.focus();
});

const nav_button = document.querySelector("#navigation-button");
nav_button?.addEventListener("click", () => {
  drawer.open = !drawer.open;
});
