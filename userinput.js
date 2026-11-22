const { isValidHumidity } = require("./risk");

const container = document.createElement("div");
document.body.appendChild(container);

function makeLabeledInput(labelText, placeholder) {
  const wrapper = document.createElement("div");
  const label = document.createElement("label");
  label.textContent = labelText;
  const input = document.createElement("input");
  input.placeholder = placeholder;
  wrapper.appendChild(label);
  wrapper.appendChild(input);
  container.appendChild(wrapper);
  return input;
}

const input1 = makeLabeledInput("Temperature (C): ");
const input2 = makeLabeledInput("Wind Speed (m/s): ");
const input3 = makeLabeledInput("Humidity (%): ");
input3.type = "number";
input3.min = 0;
input3. max = 100;
const input4 = makeLabeledInput("Days Since Rain: ");

const button = document.createElement("button");
button.textContent = "Submit";
document.body.appendChild(button);

const output = document.createElement("p");
output.id = "output";
document.body.appendChild(output);

button.addEventListener("click", () => {

  const temp = parseFloat(input1.value);
  const windSpeed = parseFloat(input2.value);
  const humidity = parseFloat(input3.value);
  const daysSinceRain = parseFloat(input4.value);

  if(!isValidHumidity(humidity)){
    output.textContent = "Humidity must be between 0 and 100%";
    return;
  }
  const risk = calculateRisk(temp, humidity, windSpeed, daysSinceRain);
  output.textContent = "Wildfire Risk: " + risk + "%";
});
