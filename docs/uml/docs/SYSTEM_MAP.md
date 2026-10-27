<img width="2266" height="880" alt="image" src="https://github.com/user-attachments/assets/c3f95d32-8690-483c-986d-b0673f677e3f" /># Trace the Click: System Map

**Date:** October 22, 2026  
**Team:** Group 8  
**Inherited project:** Fire Map

## Team and Roles

| Role | Owns | Specific task | Name |
|---|---|---|---|
| Product Analyst | Part 1 and questions in Part 4 | Runs the app, chooses the user action, writes the purpose sentence, and collects questions for the original team. | Ryder Garcia |
| Architect | Part 2 and mismatches in Part 4 | Draws the as-built diagram from the code, compares it with the handoff UML, and records mismatches. | Liliana Carrillo |
| Frontend Tracer | Part 3, client side | Traces the action from the button click to the request leaving the client. | Noam Garibi, Jacobo Ramos |
| Backend Tracer | Part 3, server side | Traces the API route to the database and back to the response. | N/A - backend not implemented |

## Part 1: Purpose

The system lets users input temperature, wind speed, humidity, and days since rain so that the chance of a fire in their area can be calculated.

**User action traced:** Inputting the temperature, wind speed, humidity, and days since rain.

## Part 2: As-Built Architecture Diagram

The code evidence in the trace shows a browser-only application. The trace does not show a backend server, API route, database, or external service.

![As-built architecture diagram](system-architecture-diagram.png)

The architecture diagram shows the components supported by the code evidence:

1. The user enters values in the webpage.
2. `index.html` loads the client-side JavaScript files.
3. `userinput.js` sends the input values to `calculateRisk()`.
4. `risk.js` calculates and returns the risk value to the webpage.

No HTTP request, SQL query, database, backend server, or external API was found in the trace.

## Part 3: Trace the Click

The traced action is entering temperature, wind speed, humidity, and days since rain. The frontend trace and backend trace do not meet at an API endpoint because backend code was not implemented in the inherited project.

| Step | Layer | File and function | Data in / data out | Notes or surprises |
|---:|---|---|---|---|
| 1 | Frontend | `./index.html` | Loads `risk.js` and `userinput.js`. | The working website uses these JavaScript files directly. |
| 2 | Frontend | `./userinput.js` | Reads the temperature, humidity, wind speed, and days-since-rain inputs. | The form asks for four inputs. |
| 3 | Frontend | `./userinput.js` -> `calculateRisk(temp, humidity, windSpeed, daysSinceRain)` | Sends the four input values to the calculation function. | The calculation occurs inside the browser. |
| 4 | Frontend | `./risk.js` -> `calculateRisk(temp, humidity, wind, daysSinceRain)` | Returns a numeric fire-risk value. | The function accepts `temp`, but the current formula does not use it. |
| 5 | Frontend | `./userinput.js` | Receives the numeric result from `calculateRisk()`. | The result is sent back to the client-side code. |
| 6 | Backend | Not implemented | No API request or server response. | No backend route was found. |
| 7 | Database | Not implemented | No database read or write. | No database was found. |

## Part 4: Reality Check and Open Questions

### Mismatches between the handoff documentation and the working code

1. The handoff describes separate classes such as `EstimatorPage`, `InputUI`, and `RiskCalculator`, but `index.html` loads `risk.js` and `userinput.js` directly instead of using the new class structure.
2. The website asks for temperature, but `calculateRisk()` does not use temperature in its formula. It only uses humidity, wind speed, and days since rain.
3. The project has no backend server or database implementation, even though the tracing activity expected a backend and database path.

### Questions for the original team

1. **Intent:** Was temperature left out of the wildfire-risk calculation on purpose, or was it supposed to affect the output?
2. **Design:** Why are the separate classes in the `src/` folder not connected to the working website?
3. **Intent/design:** Was the application intentionally designed to calculate wildfire risk entirely inside the browser without a separate database or backend?


PART 4: Reality Check - Ryder Garcia 
What the System Actually Does 
Fire_Map is a wildfire risk calcualtor that allows usre to enter specific weather conditions and recieve a wildfire risk percentage for exactly where they are. 
This application uses a JavaScript fucntion called calculateRisk() in risk.js to calculate the result. 
After running, testing and examining my code, we indentified several differences between the system;'s expected behavior and the actual implementation. 

Findings: 
1. Temperature does NOT affect the Risk Calculation
   Expected Behavior: Changing the temperarture should affect the wildfire risk percentage if it is intedned to be a part of the risk model.
   Actual Behavior: The calculateRisk() function accepts temperature as a paramter but doesnt include it in the calculation.
   Code Evidence: risk.js->calculateRisk(temp, wind, daysSinceRain, humidity)
   GitHub issue: Issue #72
2. Empty Inputs Producen Invalid Results
   Expected Behavior: Our application should reject missing weather inputs but instead it displays an invlaid risk percentage
   Actual Behavior: During our manual testing, when leaving an input field empty and clicking submit, the application displayed the error code: NaN%
   Evidence: manual Testing
   GitHub Issue: Issue #70
3. Risk Percentages Can Become Negative
   Expected Behavior: The wildifire risk percentage should remain between 0-100%
   Actual Behavior: The calculation uses Math.min(100, ...) which enforces a maximum of 100% but it does NOT enfore the minimum of 0%.
   Code evidence: risk.js -> calcualteRisk()
   Github Issue: Issue #71

Reality Check Summary 
Our exisying Fire_Map applicated can accept weatehr inputs and then calculate a wildfire risk percentage. But, through our examniation of testing and the code, we discovered gaps in input validation and the risk calculation. Temperarture is not included in the formula and empty field can produce invalid results. 
Our fidning show that the system's current implementation does not completely match its expected behavior. 

## Part 5: Candidate requirements
| ID | Candidate Requirement | Type | Source / Code Evidence | Status | Acceptance Criterion |
|---|---|---|---|---|---|
| CR-1 | The system shall calculate a wildfire risk percentage using humidity, wind speed, and days since rain. | Functional | risk.js -> calculateRisk(); Part 3 Step 4 Currently implemented | Confirmed | Calling calculateRisk(30, 50, 10, 5) returns 45 | 
| CR-2 | The system shall limit calculated wildfire risk percentages to a maximum of 100% | Functional | risk.js -> Math.min(100, ...); Part 3 Step 4/ Currently implemeneted | Confirmed | Calling calculateRisk(30, 0, 50, 30) returns 100. |
| CR-3 | The system shall prevent calculated wildfire risk percentages from falling below 0% | Functional | risk.js -> calculateRisk() does mot enforce a minimum value; GitHub issue #71. Not implemented | Suspected bug | Calling calculateRisk(30, 100, -10, 0) returns 0 rather than -15 |
| CR-4 | The system shall rejetc submissions containing empty weather input fields | Functional | unserinput.js -> Submit button event listner uses parseFloat() without checking for missing values. GitHub Issue #70 Not Implemented | Suspected Bug | LEaving the humidity field empty and clicking submit displays a error sinetad of "Wildfire Risk: NaN%." |
| CR-5 | The system shall incorporate temperature into the wildire risk calculation. | Functional | risk.js -> calculateRisk() accepts twmp but doesnt use it; Part 3 Step 4; GitHub Issue #72 Not Implemented. | Unconfirmed | With humindity 50, wind speed 10, and days since rain 5, changing the temp from 5 to 35 degree celcius produces different risk percentages, if temp is confirmed as part of the intended risk model. |



## Part 6: Three unit test cases
#### A unit test checks one function on its own, with no browser, server, or database involved. Your three test cases are your verification strategy in miniature: each one proves, or disproves, one of your candidate requirements.

Every test case must:

1. Trace to a candidate requirement by its ID (CR-1, CR-2, and so on).
2. Name the unit under test: one file and one function.
3. Give an exact input and an exact expected output. “It should work” is not an expected output.
4.Cover three different kinds of test across your set of three:
    - Positive: valid input is accepted.
    - Negative: invalid input is rejected.
    - Boundary: input right at the edge of a limit.
5. Predict pass or fail against the current code. A test you expect to fail is not a mistake. It documents a gap, and it becomes a backlog item.

You only need to write the test cases, not run them. If your team writes real test code, that is a bonus.
   
## Part 6: Unit Test Cases

| ID | Requirement | Kind | Unit under test | Input | Expected output | Predicted result today |
|---|---|---|---|---|---|---|
| TC-1 | CR-1 | Positive | `risk.js` - `calculateRisk()` | `calculateRisk(30, 50, 10, 5)` | `45` | Pass: the current formula returns `45`. |
| TC-2 | CR-4 | Negative | `userinput.js` - submit button event listener | Humidity field is empty; user clicks Submit | An error message is displayed, and the page does not display `Wildfire Risk: NaN%`. | Fail: `parseFloat()` produces `NaN`, and the current code displays an invalid result. |
| TC-3 | CR-3 | Boundary | `risk.js` - `calculateRisk()` | `calculateRisk(30, 100, -10, 0)` | `0` | Fail: the current formula returns `-15`, which is below the allowed minimum. |

