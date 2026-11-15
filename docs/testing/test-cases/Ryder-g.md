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
GitHub Issue:#84 

**TEST ID** RG -04 NEgative Wind Speed is Rejected 
Test ID: RG -04 

From PArt 6: New

Written by: Ryder Garcia

Title: Negative wind speef is rejected

Traces To: G-RG-01, REQ-RG -03

Test Type: Acceptance

Preconditions: Fire_Map is open in browser

Test Data: Temperature = 30, Wind = -10, Humidity = 50, Days since Rain = 5

**STEPS**
1. Open Fire_Map
2. Enter four test values
3. Enter -10 for wind speed
4. Click Submit
5. Observe whether the application rejects the negative wind speed

Expected Result: The submission is rejected because wind speed cannot be negative
The system should prevent users from receiving misleading wildfire risk results 

Actual Result: The system accepts the negative wind speed and displays "Wildfire Risk: 15%"

Status: Fail 
Severity: Major
V or V: Validation 
GitHub issue: #85





