
const calculateRisk = require("../risk.js");

const validRisk = (risk) =>
  Number.isFinite(risk) && risk >= 0 && risk <= 100;

describe("RQ-03: Wildfire Risk Calculation", () => {
  // TC-01
  test("normal inputs return a valid risk", () => {
    const risk = calculateRisk(30, 40, 10, 5);
    expect(validRisk(risk)).toBe(true);
  });

  // TC-02
  test("lower humidity increases risk", () => {
    const dry = calculateRisk(30, 20, 10, 5);
    const humid = calculateRisk(30, 80, 10, 5);
    expect(dry).toBeGreaterThan(humid);
  });

  // TC-03
  test("higher temperature increases risk", () => {
    const cold = calculateRisk(10, 40, 10, 5);
    const hot = calculateRisk(40, 40, 10, 5);
    expect(hot).toBeGreaterThan(cold);
  });

  // TC-04
  test("higher wind speed increases risk", () => {
    const calm = calculateRisk(30, 40, 2, 5);
    const windy = calculateRisk(30, 40, 20, 5);
    expect(windy).toBeGreaterThan(calm);
  });

  // TC-05
  test("more days without rain increases risk", () => {
    const recentRain = calculateRisk(30, 40, 10, 0);
    const drought = calculateRisk(30, 40, 10, 20);
    expect(drought).toBeGreaterThan(recentRain);
  });

  // TC-06
  test("low-risk conditions remain within range", () => {
    const risk = calculateRisk(5, 100, 0, 0);
    expect(validRisk(risk)).toBe(true);
  });

  // TC-07
  test("extreme conditions remain within range", () => {
    const risk = calculateRisk(45, 5, 30, 60);
    expect(validRisk(risk)).toBe(true);
  });

  // TC-08
  test("identical inputs produce identical results", () => {
    const first = calculateRisk(30, 40, 10, 5);
    const second = calculateRisk(30, 40, 10, 5);
    expect(first).toBe(second);
  });

  // TC-10
  test("decimal inputs return a valid result", () => {
    const risk = calculateRisk(28.5, 45.5, 7.2, 3.5);
    expect(validRisk(risk)).toBe(true);
  });

});

describe("Input Boundaries", () => {
  
  test("RG-03: empty humidity is rejected", () => {
    expect(() => {
      calculateRisk(20, NaN, 15, 2);
    }).toThrow(RangeError)
  })

  test("RG-03: humidity above 100% is rejected", () => {
    expect(() => {
      calculateRisk(30, 101, 10, 5);
    }).toThrow(RangeError);
  });

  test("RG-04: negative wind speed is rejected", () => {
    expect(() => {
      calculateRisk(30, 50, -10, 5);
    }).toThrow(RangeError);
  });
  
  test("RG-05: negative days since rain is rejected", () => {
    expect(() => {
      calculateRisk(30, 50, 10, -5);
    }).toThrow(RangeError);
  });

});
