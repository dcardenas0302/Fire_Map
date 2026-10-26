PART 1: Purpose

PART 2: Architecture Diagram 

PART 3: Trace Table 

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

   


PART 5: Candiate Requirements

PART 6: Unit Test Cases 
