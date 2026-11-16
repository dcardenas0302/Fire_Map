# Test Cases: [Jacobo R]

**Team number:** [8]
**My area:** [Risk Calculation]

<!--
HOW TO USE THIS FILE
1. Copy this file. Name the copy with your first name and last initial, like  maria-g.md
2. Leave TEMPLATE.md untouched for your teammates.
3. If a Part 6 test belongs to your area, upgrade it first and put it in the first block.
   Write at least 4 test cases using at least 3 test types. Include 1 Acceptance test that traces to your Stakeholder Goal.
   Run every test on the inherited system. Every Fail gets a GitHub Issue.
4. Copy the block between the lines for each new test case.
5. Test IDs: use your initials plus a number, like  MG-01, MG-02. This keeps IDs unique across your team.
   "Traces to" must name one of YOUR requirement IDs, like REQ-MG-02.
6. See docs/TESTING_FIELD_GUIDE.md for the sample test case TC-00.
-->

---

**Test ID:** JR-01
**From Part 6:** TC-1
**Written by:** Jacobo Ramos
**Title:** Calculate expected risk for known inputs
**Traces to:** REQ-JR-01, NFR-JR-01
**Test type:** Unit
**Preconditions:** Open Fire Map in a browser while risk.js is loaded
**Test data:** Temperature 30°C, humidity 50%, wind 10 m/s, days since rain 5.

**Steps:**
1. Open browser developer tools
2. Open Console tab
3. Enter "calculateRisk(30,50,10,5)" and press Enter.
4. Record that returned number
5. Enter `Array.from({ length: 100 }, () => calculateRisk(30, 50, 10, 5)).every(result => result === 45)` and press Enter.
6. Record whether the consistency check returns true or false.


**Expected result:** The initial call returns the number 45. All 100 repeated calls also return 45, so the consistency check returns true.
**Actual result:** The initial call returned 45. The consistency check returned true, confirming all 100 repeated calls returned 45.
**Status:** Pass
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** JR-02
**From Part 6:** New
**Written by:** Jacobo Ramos
**Title:** Risk score is capped at 100%
**Traces to:** REQ-JR-02
**Test type:** Boundary Value
**Preconditions:** Open Fire Map in a browser while risk.js is loaded
**Test data:** Temperature 30°C, humidity 100%, days since rain 0; wind speeds 66, 67, and 68 m/s.

**Steps:**
1. Open browser developer tools
2. Open Console tab
3. Run "calculateRisk(30,100,66,0)"
4. Run "calculateRisk(30,100,67,0)"
5. Run "calculateRisk(30,100,68,0)"

**Expected result:** The call returns 99, 100 and 100.
**Actual result:** The call returns 99, 100 and 100.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** JR-03
**From Part 6:** TC-4
**Written by:** Jacobo Ramos
**Title:** Temperature affects the calculated risk
**Traces to:** REQ-JR-03
**Test type:** Unit
**Preconditions:** Open Fire Map in a browser while risk.js is loaded
**Test data:** Temperature 5°C and 35°C, keep humidity at 50%, wind speed at 10 m/s, and days since rain at 5.

**Steps:**
1. Open browser developer tools
2. Open Console tab
3. Run "calculateRisk(5,50,10,5)"
4. Run "calculateRisk(35,50,10,5)"

**Expected result:** The two calculated risks differ, based on the intended temperature-sensitive behaivour.
**Actual result:** Both calls return 45 despite temperature changes.
**Status:** Fail
**Severity:** Major
**V or V:** Verification
**GitHub Issue:** #72
**Supporting Evidence:** The handoff, section 9.4 identifies "Modified Fosberg Fire Weather Inddex" as the intended model which uses temperature, but risk.js ignores the tempereature parameter.

---

**Test ID:** JR-04
**From Part 6:** New
**Written by:** Jacobo Ramos
**Title:** User can compare risk estimates for different results
**Traces to:** G-JR-01, REQ-JR-03
**Test type:** Acceptance
**Preconditions:** Fire Map is open in a browser
**Test data:** Temperature 5°C and 35°C, humidity 50%, wind 10 m/s, and days since rain 5 for both.

**Steps:**
1. Enter temperature 5, humidity 50, wind speed 10, and days since rain 5 into the webpage.
2. Click Submit and record the displayed result.
3. Change only temperature to 35.
4. Click Submit and record the displayed result.
5. Compare the results.

**Expected result:** User recieved different risk estimates for the two temperatures, consistent with the application's intended temperature senitive-model.
**Actual result:** Wildfire Risk 33% and Wildfire Risk 57%
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

