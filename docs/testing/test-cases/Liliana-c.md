# Test Cases: [Liliana C]

**Team number:** [8]
**My area:** [Instructions and Usability]

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

**Test ID:** LC-01
**From Part 6:** New
**Written by:** Liliana Carrillo
**Title:** First-time user can complete a fire-risk calculation
**Traces to:** G-LC-01
**Test type:** Acceptance
**Preconditions:** The website is open.
**Test data:** Temperature = 30, Humidity = 20, Wind speed = 10, Days since rain = 5

**Steps:**
1. Read the instructions on the website.
2. Enter 30 for temperature, 20 for humidity, 10 for wind speed, and 5 for days since rain.
3. Select the button to calculate the fire risk.

**Expected result:** The user can identify the required information, complete the form, and receive a clearly displayed fire-risk result.
**Actual result:** Required information is made clear, and a clear fire-risk result is displayed.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** LC-02
**From Part 6:** New
**Written by:** Liliana Carrillo
**Title:** Input fields and instructions are clearly labeled
**Traces to:** REQ-LC-01
**Test type:** System
**Preconditions:** The website is open.
**Test data:** None

**Steps:**
1. Open the website.
2. Examine the instructions and form.
3. Check whether the fields for temperature, humidity, wind speed, and days since rain are clearly identified.

**Expected result:** The website clearly explains what information is needed, and each input field has an understandable label.
**Actual result:** The type of information needed and its units are specified. Labels stay present and clear throughout the process, post- and pre-calculation.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** LC-03
**From Part 6:** New
**Written by:** Liliana Carrillo
**Title:** Website responds clearly when a required input is blank.
**Traces to:** REQ-LC-02
**Test type:** Negative
**Preconditions:** The website is open.
**Test data:** Temperature = 30, Humidity = blank, Wind speed = 10, Days since rain = 5

**Steps:**
1. Enter 30 for temperature.
2. Leave humidity blank.
3. Enter 10 for wind speed and 5 for days since rain.
4. Select the button to calculate the fire risk.

**Expected result:** The website informs the user that humidity is required and does not display an incorrect risk result.
**Actual result:** The website displays "Wildfire Risk: NaN% ". It does not inform the user that information was missing or that they followed this instruction incorrectly.
**Status:** Fail
**Severity:** Major
**V or V:** Verification
**GitHub Issue:** #89

---

**Test ID:** LC-04
**From Part 6:** New
**Written by:** Liliana Carrillo
**Title:** Website handles boundary values clearly
**Traces to:** REQ-LC-03
**Test type:** Boundary Value
**Preconditions:** The website is open.
**Test data:** Temperature = 30, Humidity = 0, Wind speed = 10, Days since rain = 5. Test is repeated with Humidity = 100

**Steps:**
1. Enter valid values with humidity set to 0.
2. Calculate the fire risk.
3. Repeat the test with humidity set to 100.
4. Compare the results and any displayed messages.

**Expected result:** The website accepts the valid boundary values and displays a numerical risk result between 0 and 100.
**Actual result:** For humidity=0, the website displayed a valid fire risk value between 0 and 100. For humidity=100, it also displayed a valid fire risk value that was different.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---
