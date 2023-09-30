import { test, expect } from "@playwright/test";

// test("Going to the website", async ({ page }) => {
//   await page.goto("https://dummy.restapiexample.com/");
// });

test("Create a New User", async ({ request }) => {
  const response = await request.post(
    "https://dummy.restapiexample.com/api/v1/create",
    {
      data: { name: "test", salary: "123", age: "23" },
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(await response.json());
});
