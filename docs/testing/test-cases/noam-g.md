# Test Cases: Noam G

**Team number:** 08
**My area:** Buttons and Results

---

**Test ID:** NG-01
**From Part 6:** New
**Written by:** Noam Garibi
**Title:** Submit sends the four fields to calculateRisk() and shows what it returns
**Traces to:** REQ-NG-01
**Test type:** Integration
**Preconditions:** index.html is open, all four fields are empty. The output area is empty.
**Test data:** Set temperature 30, wind speed 5, humidity 20, days since rain 10. calculateRisk(30, 20, 5, 10) returns 60.

**Steps:**
1. Type 30 in Temperature (C)
2. Type 5 in Wind Speed (m/s)
3. Type 20 in Humidity (%)
4. Type 10 in Days Since Rain
5. Click Submit
6. Read the text that appears

**Expected result:** The page shows Wildfire Risk: 60%.
**Actual result:** The page showed Wildfire Risk: 60%. The button passed the fields to calculateRisk() in the right order.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** NG-02
**From Part 6:** New
**Written by:** Noam Garibi
**Title:** The result shows in the output area and a second Submit replaces it
**Traces to:** REQ-NG-02
**Test type:** System
**Preconditions:** index.html is open and four fields are empty.
**Test data:** First set temperature 30, wind speed 5, humidity 20, days since rain 10. Second run, change humidity to 80.

**Steps:**
1. Type the first run values in the four fields
2. Click Submit
3. Read the output area below the Submit button
4. Change Humidity (%) to 80
5. Click Submit again
6. Read the output area and count how many Wildfire Risk lines are on the page

**Expected result:** The first click shows Wildfire Risk: 60% below the Submit button. The second click shows Wildfire Risk: 36% in the same spot. Only one Wildfire Risk line is on the page.
**Actual result:** The first click showed Wildfire Risk: 60% below the Submit button. The second click showed Wildfire Risk: 36% in the same spot. Only one Wildfire Risk line was on the page.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** NG-03
**From Part 6:** New
**Written by:** Noam Garibi
**Title:** Reset button clears the fields and the result
**Traces to:** REQ-NG-03
**Test type:** System
**Preconditions:** index.html is open and a result is already showing
**Test data:** Set temperature 30, wind speed 5, humidity 80, days since rain 10. Output shows Wildfire Risk: 36%.

**Steps:**
1. Look for a button labeled Reset on the page
2. Click Reset
3. Read the four fields and the output area

**Expected result:** A Reset button is on the page. After clicking it all four fields are empty and the output area is empty.
**Actual result:** There is no Reset button. The only button on the page is Submit. The fields still held 30 and 5 and 80 and 10 and the output still showed Wildfire Risk: 36%. The only way to clear the page is to reload it.
**Status:** Fail
**Severity:** Minor
**V or V:** Verification
**GitHub Issue:** #TBD

---

**Test ID:** NG-04
**From Part 6:** New
**Written by:** Noam Garibi
**Title:** A resident can check multiple different days at once and see each result.
**Traces to:** G-NG-01
**Test type:** Acceptance
**Preconditions:** index.html is open all four fields are empty. The page is not reloaded between checks.
**Test data:** Calm day set temperature 20, wind speed 0, humidity 90, days since rain 0. Normal day set temperature 30, wind speed 5, humidity 20, days since rain 10. Extreme day set temperature 40, wind speed 20, humidity 5, days since rain 30.

**Steps:**
1. Type the calm day values and click Submit
2. Check result
3. Type the normal day values over the old ones and click Submit
4. Check result
5. Type the extreme day values over the old ones and click Submit
6. Check result

**Expected result:** Each check takes one click. The results are Wildfire Risk: 4% then Wildfire Risk: 60% then Wildfire Risk: 100%.
**Actual result:** Each check took one click. The results were Wildfire Risk: 4% then Wildfire Risk: 60% then Wildfire Risk: 100%. The resident can check again by typing over the old numbers.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** NG-05
**From Part 6:** New
**Written by:** Noam Garibi
**Title:** The result shows correctly at the edges of 0% and 100%
**Traces to:** REQ-NG-01
**Test type:** Boundary Value
**Preconditions:**index.html is open and all four fields are empty.
**Test data:** Temperature is 30 in every run. Run A set wind speed 0, humidity 100, days since rain 0. Run B set wind speed 0, humidity 100, days since rain 0.5. Run C set wind speed 20, humidity 0, days since rain 14.5. Run D set wind speed 20, humidity 0, days since rain 15. Run E set wind speed 50, humidity 0, days since rain 30.

**Steps:**
1. Type the Run A values and click Submit then read the output area
2. Repeat step 1 for Run B
3. Repeat step 1 for Run C
4. Repeat step 1 for Run D
5. Repeat step 1 for Run E

**Expected result:** Run A shows Wildfire Risk: 0%. Run B shows Wildfire Risk: 1%. Run C shows Wildfire Risk: 99%. Run D shows Wildfire Risk: 100%. Run E shows Wildfire Risk: 100% because the risk is capped.
**Actual result:** Run A showed Wildfire Risk: 0%. Run B showed Wildfire Risk: 1%. Run C showed Wildfire Risk: 99%. Run D showed Wildfire Risk: 100%. Run E showed Wildfire Risk: 100%.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** NG-06
**From Part 6:** New
**Written by:** Noam Garibi
**Title:** The result appears in under 1 second
**Traces to:** NFR-NG-01
**Test type:** System
**Preconditions:** index.html is open and the output area is empty.
**Test data:** Set temperature 30, wind speed 5, humidity 20. Days since rain do each value from 0 to 9 and click enter for each so we have 10 test cases.

**Steps:**
1. Type the test data with Days Since Rain set to 0
2. Start a timer and click Submit
3. Stop the timer when the result is drawn on the screen
4. Repeat steps 1 to 3 for Days Since Rain 1 through 9

**Expected result:** Every one of the 10 results appears in under a second.
**Actual result:** All 10 results appeared in under a second.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** NG-07
**From Part 6:** New
**Written by:** Noam Garibi
**Title:** Enter HTML code or just random inputs in general
**Traces to:** NFR-NG-02
**Test type:** Security
**Preconditions:** index.html is open and all four fields are empty.
**Test data:** Type this exact text in all four fields: `alert("popup")`, <p> What is up<p> or just any awkward inputs that have letters

**Steps:**
1. Put the test data into all four fields
2. Click Submit
3. Watch for any popups, new elements, or awkward results

**Expected result:** No alert popup opens. No element is added to the page. The output area shows result only in usual format.
**Actual result:** No alert popup opened. No new element appeared on the page. The output area showed the plain text Wildfire Risk: NaN%.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---
