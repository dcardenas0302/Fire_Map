# Testable Requirements: [Fire Map]

**Team number:** [8]
**Inherited from:** Team [7]

## Who Owns What

| Area of the system | Owner | ID prefix |
|---|---|---|
| Risk Calculation | Jacobo Ramos | JR |
| Buttons and Results | Noam Garibi | NG |
| Input Checking | Ryder Garcia | RG |
| Instructions and Usability | Liliana Carrillo | LC |

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

## Section: Input Checking (Ryder Garcia)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-RG-01 | Fire_Map Users | Users need to enter valid weather conditions and receive wildfire risk results without missing or invalid inputs being accepted.|

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-RG-01 |The System shall accept a submission containing numeric values for temperature, humidity, wind speed and days since rain.| Confirmed | New |
| REQ-RG-02 |The system shall reject a submission when ay of the four weather input field is empty. | Suspected Bug| CR -4: The System shall reject submissions containing empty weatehr input fields |
| REQ-RG-03 |The system shall reject a submission when wind speed is less than 0 m/s | Suspected Bug| New |
| REQ-RG-04 | The system shall reject a submission when humidity is below 0% and above 100%. | Suspected Bug | New |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-RG-01 | The system shall display a visible error message identifying the invalid field after an invalid submission |Suspected Bug | New |

---

## Section: Instructions and Usability (Liliana Carrillo)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-LC-01 | Fire-Map Users | Users need clear instructions on how to get a wildfire risk percentage for their area, and the website should be intuitive and user-friendly. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-LC-01 | The website states in text what its purpose is, and what specific inputs it requires from the user. | confirmed | New |
| REQ-LC-02 | The website should provide a labeled area field for temperature, humidity, wind speed, and days since rain. | confirmed | New |
| REQ-LC-03 | The website should display an understandable error message when a user leaves a required input blank or enters an invalid value for it.| Suspected Bug | New |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-LC-01 | The website should be able to calculate the wildfire risk percentage and display it to the user in under 2 minutes. | Confirmed | New |
