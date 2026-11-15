# Test Cases: Ryder Garcia 

**Team Number** 8 
**My Area:** Input Checking 

**Test ID:** RG -01
From Part 6: New 

Written by: Ryder Garcia 

Title: Valid Weather inputs are accepeted

Traces to: REQ-RG- 01

Test Type: System 

Preconditions: Fire_Map is open in a browser

Test Data: Temperature =30, Wind = 10, Humidity = 50, Days Since Rain = 5 

**Steps**
1. Open Fire_Map
2. Enter four test values
3. Click Submit
4. Observe the displayed result

**Exptected result:** The form accepts the values and displays "Wildfire risk: 45%"
Actual Result: Wildfire Risk: 45%
Status: Pass
Severity: N/A
V or V: N/A
GitHub Issue: N/A

**TEST ID:** RG -02 Empty Humidity Field 
Test ID RG - 02

From Part 6: New

Written by: Ryder Garcia 

Tittle: Empty humidity field is rejected

Traces to: REQ -RG -02

Test Type: Negative

Preconditions: Fire_Map is open in browser

Test Data: Temperature = 30, Wind = 10, Humidity = Empty, Days Since Rain= 5 

**Steps:** 
1. Open Fire_Map
2. Enter test values, leaving humidity empty
3. Click submit
4. Observe whetehr the form rejects the submission
Expected Result: The submission is rejected a dn no wildfire risk percentage is printed.

**Actual Result:** Wildfire Risk: Nan%
Status: Fail 
Severity: Major
V or V: Verification 
GitHub issue: #70


**TEST ID** RG -03 Humidity Above Maximum Boundayr 
Test ID: RG -03 

From Part 6: New 

Written by: Ryder Garcia 

Title: Humidity above 100% is rejected

Traces to: REQ -RG -04

Test Type: Boundary Value 

Precondition: Fire_Map is open in browser

Test Data: Temperature = 30, Wind = 10, Humidity = 101, Days since rain = 5

**Steps:** 
1. Open Fire_Map
2. Enter four test values
3. Click submit
4. Observe whetehr the invalid humidity is rejected
Expected Result: The submission is rejected because humidity exceeds 100%

**Actual Result:** Wildfire Risk: 25%
Status: Fail
Sevreity: Major 
V or V: Verification 
GitHub Issue: 




