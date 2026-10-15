# Fire_Map
Original Team:
Darrin Yun - Problem Framer

Dylan Fermo - Solution Framer

Jacob Black - Front End & Experience

Diego Cardenas - Back-End and verification

Fire Map is a webpage that informs the user about the damage wildfires cause. It will then prompt the user for input via textboxes with labels. After the user submits their data it will calculate the risk of a wildfire in the area they gathered data from.
The risk value will be assessed by the program, and explain how severe the risk is. 

How to run Fire_Map

Install these first:
Git (check with: git --version)
Node.js 20 or newer (check with: node --version)
Any web browser

Node is only needed for the tests. The site is plain HTML and JavaScript, so there is no build step and no server.

Live demo: https://dcardenas0302.github.io/Fire_Map/

To run it from a fresh clone:

Clone the repo:
git clone https://github.com/dcardenas0302/Fire_Map.git
Go into the folder:
cd Fire_Map
Open index.html in your browser (double-click it, or run “start index.html” on Windows or “open index.html” on Mac).

When it works, you will see the project title and summary at the top, four input fields (Humidity, Wind Speed, Temperature, KBDI), Calculate and Reset buttons, and an output area. Enter values and click Calculate, and a risk score from 0 to 100 appears. Reset clears the fields.

To run the tests:

Install dependencies (first time only):
npm install
Run the tests:
npm test

When it works, you will see “PASS tests/risk.test.js” and “Tests: 1 passed, 1 total”. The same test also runs automatically on every push and pull request through GitHub Actions.
