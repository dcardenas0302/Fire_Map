/**
 * @jest-environment jsdom
 */

describe("Missing input validation", () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = "";

    // Prevent the test from needing the real risk calculation
    global.calculateRisk = jest.fn(() => 50);

    require("../userinput.js");
  });

  test("RG-06: blank humidity identifies Humidity as missing", () => {
    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("button");

    inputs[0].value = "30"; // Temperature
    inputs[1].value = "10"; // Wind speed
    inputs[2].value = "";   // Humidity left blank
    inputs[3].value = "5";  // Days since rain

    button.click();

    const output = document.querySelector("#output");

    expect(output.textContent).toContain("Humidity");
  });
});
