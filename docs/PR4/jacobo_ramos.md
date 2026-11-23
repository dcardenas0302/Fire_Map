Jacobo Ramos Gracia

### New Formula - Temperature input doesn't affect wildfire risk calculation issue
Issue: https://github.com/dcardenas0302/Fire_Map/issues/72
PR: https://github.com/dcardenas0302/Fire_Map/pull/93

#### Issue #72 — Before Fix
![Issue 72 - Before Fix](screenshots/jacobo_ramos_issue72_before.png)
#### Issue #72 — After Fix
![Issue 72 - After Fix](screenshots/jacobo_ramos_issue72_after.png)

This bug was discovered while manually reading the code and noticing that temp was not used on risk.js. Also in the project handoff it was mentioned that they had to yet implemenet the proper function of wildfire risk calculation.

### Humidity Values above 100% are accepted
Issue: https://github.com/dcardenas0302/Fire_Map/issues/84
PR: https://github.com/dcardenas0302/Fire_Map/pull/97

#### Issue #84 - Before Fix
![Issue 84 - Before Fix](jacobo_ramos_issue84_before.png)
#### Issue #84 - After Fix
![Issue-84 - After Fix](screenshots/jacobo_ramos_issue84_after.png)

Bug noticed while testing. This was one of the fields were we felt it is important to determine what values are the minimum and maximum. Percentages higher or lower than that could mess up the calculation.


AI Dislosure Note:
Used AI to simplify the mFFWI formula into a formula that only requires the 4 existing variables we accept. Usage of original formula would over complicate the original idea of the program