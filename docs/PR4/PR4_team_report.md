# PR4 Team Report

**Team number:**

**Names:** Noam Garibi, Jacobo Ramos Gracia, Liliana Carrillo, Ryder Garcia

## 1. Bug Triage Table

| Test name | Bucket | Issue link | Severity | Priority | Owner | Status |
|---|---|---|---|---|---|---|
| NG-03: Reset button clears the fields and the result | Code bug | [#94](https://github.com/dcardenas0302/Fire_Map/issues/94) | Low | Medium | Noam Garibi | Fixed on `noam-work`, PR pending |
| RG-02: Empty humidity field is rejected | Code bug | [#100](https://github.com/dcardenas0302/Fire_Map/issues/100) | High | High | Noam Garibi | Fixed on `noam-work`, PR pending |

## 2. Regression Log

No regression found, this project is quite simple so it makes sense. 

## 3. Final Test Run



## 4. Feature Decision

Feature name: Unit toggle (°F and mph, or °C and m/s)

Why we chose it: The page currently tells users to enter everything in metric system, but local weather apps show °F and mph. Those inputs will be converted to metric system before the existing wildfire risk calculation runs, so both settings give the same result and the formula does not change.

Owners:
Jacobo and Noam

Test cases:

1. Enter 86 in the temperature field with °F selected, then switch to metric. The field updates to 30.
2. Enter 86 °F and 22.4 mph, then 30 °C and 10 m/s, with the same humidity and days since rain. Both show the same wildfire risk percentage.

## 5. Board Snapshot



## 6. Sprint Summary

Good communication was key for this push, because we did not want any bug fix to affect existing features or to clash with code from another fresh bug fix. This sprint we fixed six bugs from our Part 6 tests: Jacobo fixed REQ-JR-03, temperature not being used in the formula (#72, PR #93), and REQ-RG-03, humidity above 100% being accepted (#84, PR #97); Noam added the missing Reset button for REQ-NG-03 (#94, PR #102) and made the form reject an empty humidity field for REQ-RG-02 (#100, PR #102); Liliana made the page tell the user which required inputs are blank for LC-03 (#89, PR #96); and Ryder made negative wind speed get rejected for REQ-RG-04 (#85, PR #98), plus negative days since rain, which he found along the way (#99, PR #101). Next sprint, we could look at issue #73 and #71, then build the unit toggle.
