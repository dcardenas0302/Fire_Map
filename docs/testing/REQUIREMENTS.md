# Testable Requirements: [Project Name]

**Team number:** [XX]
**Inherited from:** Team [XX]

## Who Owns What

| Area of the system | Owner | ID prefix |
|---|---|---|
| [example: Accounts and login] | [name] | [initials, like MG] |
| Risk Calculation | Jacobo Ramos | JR |
| | | |
| | | |

<!--
RULES
- Only edit YOUR OWN section below. This keeps merge conflicts away.
- Categories: G = Stakeholder Goal, REQ = Functional, NFR = Non-Functional.
- "From Part 5": write the original CR ID and its text from SYSTEM_MAP.md. Write "New" if you added it this sprint.
- Status: Confirmed or Suspected bug. No Unconfirmed allowed. Every Suspected bug needs a GitHub Issue.
- The test: could a stranger write a Pass or Fail test without asking you a question?
-->

---

## Section: Risk Calculation - (Jacobo Ramos)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-JR-01 | Users of Fire Map | Users need a consistent Fire Risk estimate that responds to the weather conditions the application claims to consider |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-JR-01 |The system shall calculate a numeric wildfire risk percentage based on humidity, wind speed, and days since Rain. For temperature 30°C, humidity 50%, wind speed 10 m/s, and 5 days since rain, the calculated result shall be 45%. | Confirmed |  CR-1: The system shall calculate a wildfire risk percentage using humidity, wind speed, and days since rain. |
| REQ-JR-02 | The system shall limit calculated wildfire risk percentages to a maximum of 100% | Confirmed | CR-2: The system shall limit calculated wildfire risk percentages to a maximum of 100% |
| REQ-JR-03 | The system shall incorporate temperature into the wildfire risk calculation. |  Suspected bug ([#72](https://github.com/dcardenas0302/Fire_Map/issues/72)) | CR-5: The system shall incorporate temperature into the wildfire risk calculation |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-JR-01 | Given the same input, calculateRisk() shall return the same numeric value as a result across 100 consecutive calls. | Confirmed | New |

---

## Section: [Your Area] ([Your Name])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| | | |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |

---

## Section: Buttons and Results (Noam Garibi)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-NG-01 | A San Diego resident checking the fire risk where they live | The resident needs to click one button and clearly see the wildfire risk percentage for the numbers they typed. They need to be able to check again with new numbers. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-NG-01 | When the user enters numbers in all four fields and clicks the Submit button the system shall show the text "Wildfire Risk: N%". N is the value calculateRisk() returns for those inputs. | Confirmed | New. Comes from RQ-04 in our V&V doc: System shall display the calculated wildfire risk percentage to the user. |
| REQ-NG-02 | The system shall show the result in the output area below the Submit button. When the user clicks Submit again the new result shall replace the old one so only one "Wildfire Risk" line is on the page. | Confirmed | New. Based on TC-03 in our V&V doc which says the percentage appears in the designated output area. |
| REQ-NG-03 | The system shall show a Reset button. Clicking it shall empty all four input fields and the output area. | Suspected bug | New. Comes from RQ-05 in our V&V doc: The system shall allow users to reset input fields. |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-NG-01 | The result shall appear in under 1 second after the user clicks Submit. | Confirmed | New |
| NFR-NG-02 | The output area shall show text only. Elements shouldn't be added to the page and the result format stays consistent no matter the input | Confirmed | New |

No Part 5 requirement belongs to this area. CR-1 CR-2 CR-3 and CR-5 are about the calculation and CR-4 is about input checking. My requirements come from RQ-04 and RQ-05 in our V&V doc.

---

## Section: [Your Area] ([Your Name])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| | | |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
