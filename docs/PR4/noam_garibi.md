Noam Garibi

### No Reset button on the page
Issue: https://github.com/dcardenas0302/Fire_Map/issues/94
PR: none yet

#### Issue #94 — Before Fix
[Issue 94 - Before Fix](screenshots/noam_garibi_issue94_before.png)
#### Issue #94 — After Fix
[Issue 94 - After Fix](screenshots/noam_garibi_issue94_after.png)

This was a code bug. Test NG-03 follows REQ-NG-03 and the README, which both say a Reset button exists, so the test was right and the code was missing it.

### Empty humidity field is accepted
Issue: https://github.com/dcardenas0302/Fire_Map/issues/100
PR: none yet

#### Issue #100 — Before Fix
[Issue 100 - Before Fix](screenshots/noam_garibi_issue100_before.png)
#### Issue #100 — After Fix
[Issue 100 - After Fix](screenshots/noam_garibi_issue100_after.png)

This was a code bug. Test RG-02 follows REQ-RG-02, which says a submission with an empty humidity field is rejected, so the test was right and the code was wrong to show "Wildfire Risk: NaN%".


AI Disclosure Note:
Used Claude Code to understand the assignment steps, draft a template for this MD, after testing I asked it to review my code as well. I wrote the fix in userinput.js myself.
