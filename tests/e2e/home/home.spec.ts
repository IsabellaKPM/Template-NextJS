import { test, expect } from "@playwright/test";
import { ROUTES } from "../../../src/shared/lib/routes";

test.describe("Home Page", () => {
  test("should render global layout (Header, Content and Footer)", async ({
    page,
  }) => {
    await page.goto(ROUTES.home);

    const headerLogo = page.locator("header");
    await expect(headerLogo).toBeVisible();

    const mainTitle = page.locator("h1");
    await expect(mainTitle).toBeVisible();

    const currentYear = new Date().getFullYear().toString();
    const footerText = page.locator("footer");
    await expect(footerText).toContainText(currentYear);
  });
});
