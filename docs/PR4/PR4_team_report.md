# PR4 Team Report

**Team number:**

**Names:** Noam Garibi, Jacobo Ramos Gracia, Liliana Carrillo, Ryder Garcia

## 1. Bug Triage Table

| Test name | Bucket | Issue link | Severity | Priority | Owner | Status |
|---|---|---|---|---|---|---|
| NG-03: Reset button clears the fields and the result | Code bug | [#94](https://github.com/dcardenas0302/Fire_Map/issues/94) | Low | Medium | Noam Garibi | Fixed on `noam-work`, PR pending |
| RG-02: Empty humidity field is rejected | Code bug | [#100](https://github.com/dcardenas0302/Fire_Map/issues/100) | High | High | Noam Garibi | Fixed on `noam-work`, PR pending |

| RG-04: Negative wind speed is rejected | Code bug | [#85](https://github.com/dcardenas0302/Fire_Map/issues/85) | Medium | High | Ryder Garcia | Fixed, PR [#98](https://github.com/dcardenas0302/Fire_Map/pull/98) merged into `main` |
| RG-05: Negative days since rain is rejected | Code bug | [#99](https://github.com/dcardenas0302/Fire_Map/issues/99) | Medium | Medium | Ryder Garcia | Fixed, PR [#101](https://github.com/dcardenas0302/Fire_Map/pull/101) merged into `main` |


## 2. Regression Log
2. Regression Log

Test ID

Bug

Red test result

Green test result

Final status

RG-04

Negative wind speed accepted

Failed as expected — Run #124

Passed after validation fix

Merged

RG-05

Negative days since rain accepted

Failed as expected — Run #128

Passed — Run #129

Merged

Both regression tests were written to demonstrate the original bugs before the code was fixed. Each test expects the calculator to throw a RangeError when an invalid negative value is provided.

After implementing the fixes, both tests passed. A merge conflict between the two changes was resolved, preserving both validation checks and both regression tests.
## 3. Final Test Run
3. Final Test Run

The team ran the automated test workflow after merging the input-validation fixes.

Final verified run: GitHub Actions Run #137

Branch: main

Workflow: Tests

Trigger: Merge of Pull Request #101

Status: Completed

Conclusion: Success

The final version of tests/risk.test.js contains the RG-04 and RG-05 regression tests. The successful workflow demonstrates that the automated test job passed after both fixes were integrated.

Final team-wide evidence: Update this section with a newer successful workflow if additional teammates' changes are merged afterward.




## 4. Feature Decision

## 5. Board Snapshot



## 6. Sprint Summary
