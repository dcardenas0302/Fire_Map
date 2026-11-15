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
