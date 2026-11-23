PR4 Individual Bug Fix Report 
Ryder Garcia 
CS 250
Fire_Map
 https://github.com/dcardenas0302/Fire_Map
 Nov 22, 2026

 1 Overview
    For PR4, I worked on fixing two input validation bugs in Fire_Map. Both bugs involved the wildire risk calculator accepting negative weather values that should not be valid. Instead od rejected those values, the calculator automatically converted them to zero and continued calculating a wildfire risk percentage.
    My goal was to identify the problems and then write regression tests that demonstrate each bug. The implement fixes and then verify the fixes work without breaking the existing functionality.
    I followed the red green testing process for both bugs and submitted seperate pull requets. Both got reviewed, approved and merged.

2.  Bug Fix #1 Negative Wind Speed
    GitHub Issue: #85 – Negative wind speed is accepted
    Pull Request: #98 – Fix negative wind speed validation
    Regression Test : RG-04
    File Modified : risk.js

    Bug Description
    The wildife risk calcualtor accepted negative wind speed values instead of rejecting them.
    Steps to reproduce:
     Open Fire_Map
     Enter temp = 30, humidity - 50, wind speed = -10 , days since rain = 5
     submit weather inputs

    Expected Result: The calculator accepted the negative valye and silently converted it to zero before calculation.
    Actual Result: The calculator accepted the negative valye and silently converted it to zero before calcualtion.
    Severity : Medium
    Priority: High, incorrect validation should be fixed to prevent users from receiving results based on invalid weather data

    I added test RG-04
    test("RG-04: negative wind speed is rejected", () => {
  expect(() => {
    calculateRisk(30, 50, -10, 5);
  }).toThrow(RangeError);
});

Before implementation, there was reported 10 passing tests and 1 failing tests . 

Tests Evidence : https://github.com/dcardenas0302/Fire_Map/actions/runs/45075773961
Modified risk.js to : 
if (!Number.isFinite(wind) || wind < 0) {
  throw new RangeError("Wind speed must be 0 or greater");
}

also replaced wind-speed to const u = wind 

Classification: Verification Failue 

3. Bug Fix #2 - Negative Days Since Rain

   GitHub Issue: #99 – Negative Days Since Rain values are accepted
Pull Request: #101 – Fix negative days since rain validation
Regression Test: RG-05
File Modified: risk.js

Bug Description: 
The wildfire risk calculator also accepted negative values for the number of days since rain. 
Steps to reproduce :
  open Fire_Map
  enter temp=30, humidity -50, wind speed = 10 , days since rain = -5
  submit weather inputs 

Expected results: The calucaltor should reject negative days-since-rain values 
Actual result: The calculator silently converted negative days since rain to zero and continued calculating wildfire risk. 

Severity:Medium invalid weathe rcould produce misleading wildfire risk results 
Priority: Medium , the validation problme should be corrected before release. 

Failing Regression Test 
I added: 
test("RG-05: negative days since rain is rejected", () => {
  expect(() => {
    calculateRisk(30, 50, 10, -5);
  }).toThrow(RangeError);
});

Before implementation, Github reported 10 passing tests and 1 failing 

Implementation
I added validation 
if (!Number.isFinite(daysSinceRain) || daysSinceRain < 0) {
  throw new RangeError("days since rain must be 0 or greater");
}


also updated: const d = daysSinceRain;

Verification 
after implementing, Github reported 11 passing tests 

Green test Evidence
https://github.com/dcardenas0302/Fire_Map/actions/runs/45083177067

Classification : 
Verification Failure 


4. Merge Conflict and Regression Testing
   While merging Pull request 101, I encoutnered a merge conflict because both bg fixes modifies risk.js and test/risk.test.js.
   The conlfict I involved the wind speed validation form Pull Requests 98 and the days since rian validation from pull request 101
   I resolved the conlfict by preventing both validation checks and both regression tests
   After resolving the conflict, the finals rosk.js contianed seperate validation for humidity , windspeed, and days sinc rain
   The final test file also contained both:
   RG-04 — Negative wind speed is rejected.
   RG-05 — Negative days since rain is rejected.

Final regression evidence 
https://github.com/dcardenas0302/Fire_Map/actions/runs/45085992808


5. Verification and Validation
   These bugs demostrated the importance of distinguishing verification from validation
   In this project, rejecting negative weather inputs also imporves validation because users should not recieve wildfire risk calculations based on physically invalid weaterh data.
   However, passing the unit tests does not independently prove that the application's user interface displays a clear error message. That would require additional testing of the form's error-handling behavior.

6. Lessons Learned
   One important lesson from PR4 was that silently correcting invalid input can hide bugs. The original calculator used Math.max(0, value) to convert negative inputs to zero. Although this prevented negative numbers from entering parts of the calculation, it also allowed invalid weather data to be accepted without warning.
  Another lesson was the importance of writing a failing test before modifying the implementation. The red-green process provided evidence that the bugs existed and that the changes corrected the behavior being tested.
  I also learned how merge conflicts can introduce regression risks. Because both pull requests modified the same files, I had to preserve both fixes instead of choosing only one version.
  Finally, I learned that successful tests on individual branches are not enough. Running regression tests again after merging is necessary to confirm that the combined changes work correctly.

 7. Evidence and References
    Repository: https://github.com/dcardenas0302/Fire_Map
    Bug #1 — Negative Wind Speed
    Issue #85: https://github.com/dcardenas0302/Fire_Map/issues/85
    Pull Request #98: https://github.com/dcardenas0302/Fire_Map/pull/98
    Failing test: https://github.com/dcardenas0302/Fire_Map/actions/runs/45075773961

    Bug #2 — Negative Days Since Rain
    Issue #99: https://github.com/dcardenas0302/Fire_Map/issues/99
    Pull Request #101: https://github.com/dcardenas0302/Fire_Map/pull/101
    Failing test: https://github.com/dcardenas0302/Fire_Map/actions/runs/45082415785
    Passing test: https://github.com/dcardenas0302/Fire_Map/actions/runs/45083177067

Final Post Merge Regression Test
https://github.com/dcardenas0302/Fire_Map/actions/runs/45085992808


9 Conclusion 
During PR4, I indentified and corrected two input validation bugs in the inherited Fire_Map project. I created regression test, demonstrated the failures, implemented fixes, resolved a merge conflict and verfied both fixes were preserved after merging 
The fina; GitHub actions workflow passed which confirmed that the automated regression tests succeeded with both fixes integrated into the main branch.
This assignment helped me understadn the importance of regression testing, code review, input validation and careful integration when maintaining an inhertied software system. 




