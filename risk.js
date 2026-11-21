function calculateRisk(temp, humidity, wind, daysSinceRain) {
  // Clamp inputs to safe physical bounds
  const h = Math.max(0, Math.min(100, humidity));
  const u = Math.max(0, wind);
  const d = Math.max(0, daysSinceRain);

  // Equilibrium Moisture Content (m)
  // h is in percentage (0-100), temp is in Celsius
  let m;
  if (h <= 10) {
    m = 0.03229 + 0.262577 * h - 0.0010404 * h * temp;
  } else if (h <= 50) {
    m = 1.75453 + 0.160107 * h - 0.026604 * temp;
  } else {
    m = 21.0606 + 0.005565 * h * h - 0.00063 * h * temp - 0.494399 * h;
  }

  // Moisture Damping Coefficient (eta)
  const mRatio = m / 30.0;
  const eta = 1.0 - 2.0 * mRatio + 1.5 * Math.pow(mRatio, 2) - 0.5 * Math.pow(mRatio, 3);

  // Standard FFWI (wind in m/s)
  const ffwi = (eta * Math.sqrt(1.0 + 5.0039 * u * u)) / 0.3002;

  // Simplified Fuel Availability Factor (k = 0.035)
  const faf = 1.28 * Math.pow(1.0 - Math.exp(-0.035 * d), 2) + 0.72;

  // Modified FFWI and 0-100% Risk Score
  const mffwi = Math.max(0, faf * ffwi);
  const riskPercentage = Math.min(100, (mffwi / 75.0) * 100.0);

  //return Math.min(100, Math.round((100 - humidity) * 0.4 + wind * 1.5 + daysSinceRain * 2)); // OLD FORMULA
  return Math.round(riskPercentage * 10) / 10; // Rounded to 1 decimal place
}

if (typeof module !== "undefined") {
  module.exports = calculateRisk;
}
