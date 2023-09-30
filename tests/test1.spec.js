import { test, expect } from "@playwright/test";

test("Google", async ({ page }) => {
  await page.goto("https://www.google.com/");
  // Locate Search Box
  await page.locator("id=APjFqb");

  // Entering the input
  await page.locator("id=APjFqb").fill("Aryan Shrivastava RGPV"); // Can use type too

  // Hitting Enter after searching
  await page.keyboard.press("Enter");
  await page.waitForSelector("#result-stats", {
    state: "visible",
  });

  const resultTexts = await page.evaluate(() => {
    const results = Array.from(
      document.querySelectorAll("h3")
    );
    return results.slice(0, 10).map((item) => item.textContent);
  });

  console.log(`Text content of the first 10 results:`, resultTexts);
});
