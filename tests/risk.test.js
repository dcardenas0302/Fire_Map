const calculateRisk = require("../risk.js");

test("RQ-03: risk stays between 0 and 100", () => {
  const risk = calculateRisk(30, 20, 10, 5);

  expect(risk).toBeGreaterThanOrEqual(0);
  expect(risk).toBeLessThanOrEqual(100);
});

test("RQ-03: changing humidity changes the risk", () => {
  const lowHumidityRisk = calculateRisk(30, 20, 10, 5);
  const highHumidityRisk = calculateRisk(30, 80, 10, 5);

  expect(lowHumidityRisk).not.toBe(highHumidityRisk);
});

test("RQ-03: changing wind speed changes the risk", () => {
  const lowWindRisk = calculateRisk(30, 20, 5, 5);
  const highWindRisk = calculateRisk(30, 20, 20, 5);

  expect(lowWindRisk).not.toBe(highWindRisk);
});

test("RQ-03: changing temperature changes the risk", () => {
  const lowTempRisk = calculateRisk(10, 20, 10, 5);
  const highTempRisk = calculateRisk(40, 20, 10, 5);

  expect(lowTempRisk).not.toBe(highTempRisk);
});