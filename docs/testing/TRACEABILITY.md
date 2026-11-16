# Traceability Matrix

**Team number:** 8
**Filled in by :** Liliana Carrillo

Fill this in **after** everyone's work is merged. One row per requirement.

## Requirements to Tests

| Requirement ID | From Part 5 | Owner | Test case IDs | Result | GitHub Issue # |
|---|---|---|---|---|---|
| REQ-RG-01 | New | Ryder Garcia | RG-01| 1 Pass |  |
| REQ-RG-02 | CR-04 | Ryder Garcia| RG-02 | 1 Fail | #70 |
| REQ-RG-03 | New | Ryder Garcia | RG-04 | 1 Fail | #85 |
| REQ-RG-04 | New | Ryder Garcia | RG-03 | 1 Fail | #84 |
| REQ-JR-01 | CR-01 | Jacobo Ramos | JR-01 | Pass | |
| REQ-JR-02 | CR-02 | Jacobo Ramos | JR-02 | Pass | |
| REQ-JR-03 | CR-05 | Jacobo Ramos | JR-03, JR-04 | 1 Fail, 1 Pass | #72 |
| REQ-NG-01 | RQ-04 | Noam Garibi | NG-01, NG-05 | 2 Pass| |
| REQ-NG-02 | TC-03 | Noam Garibi | NG-02 | Pass| |
| REQ-NG-03 | RQ-05 | Noam Garibi | NG-03 | Fail | #80 |
| REQ-LC-01 | New | Liliana Carrillo | LC-02 | Pass | |
| REQ-LC-02 | New | Liliana Carrillo | LC-03 | Fail | #89 |
| REQ-LC-03 | New | Liliana Carrillo | LC-04 | Pass | |


## Gaps

List any requirement with no test, any test with no requirement, and any Part 5 requirement or Part 6 test that nobody brought over. Write "None" if there are none.

-CR-03
-TC-02


## Test Type Coverage

Put a Test ID next to each type. Team minimum: all 7.

| Test type | Test ID |
|---|---|
| Unit | JR-01 |
| Integration | NG-01 |
| System (E2E) | RG-01 |
| Acceptance | RG-04 |
| Boundary Value | RG-03 |
| Negative | RG-02 |
| Security | NG-07 |

## Validation Findings

A Validation finding means the system does what the requirement says, but the requirement does not serve the Stakeholder Goal. Remember the alphabetical leaderboard.

| Requirement ID | Goal it fails | Why | Issue # |
|---|---|---|---|
| | | | |

**If you found none,** explain in 2 to 3 sentences why every requirement truly serves its Goal:

> Every requirement supports its stakeholder goal because the Risk Calculation requirements ensure that users receive a consistent wildfire-risk estimate based on the weather conditions they input. The Buttons and Results requirements ensure that users can submit their information, clearly see the result, reset the form, and receive the result quickly and consistently. The Input Checking and Instructions and Usability requirements help users enter valid information, understand what the website requires, correct mistakes, and complete a wildfire-risk calculation without confusion.

## Summary

| | Count |
|---|---|
| Part 5 requirements carried over | 4 |
| New requirements added | 9 |
| Part 6 tests upgraded (out of 3) | 2 |
| Total requirements | 13 |
| Total test cases | 19 |
| Passed | 13 |
| Failed | 6 |
| Issues opened | 5 |
| Critical issues | 0 |

**In one sentence, would you ship this system today? Why or why not?**

> I would not ship this system today because it does not calculate and use user inputs correctly, and there are no error messages explaining why.
