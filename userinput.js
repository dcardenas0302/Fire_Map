
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


// Check whether any field was left blank
  const missingFields = [];

  if (input1.value.trim() === "") {
    missingFields.push("Temperature");
  }

  if (input2.value.trim() === "") {
    missingFields.push("Wind Speed");
  }

  if (input3.value.trim() === "") {
    missingFields.push("Humidity");
  }

  if (input4.value.trim() === "") {
    missingFields.push("Days Since Rain");
  }

  if (missingFields.length > 0) {
    output.textContent =
      "Error: Missing input(s): " + missingFields.join(", ");
    output.style.color = "red";
    return;
  }
  
  try {
  const risk = calculateRisk(temp, humidity, windSpeed, daysSinceRain);
  output.style.color = "black";
  output.textContent = "Wildfire Risk: " + risk + "%";
  } catch (error) {
    output.textContent = "Error: " + error.message;
    output.style.color = "red";
  }
});
