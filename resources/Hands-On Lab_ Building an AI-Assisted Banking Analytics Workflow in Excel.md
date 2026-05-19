# Hands-On Lab: Building an AI-Assisted Banking Analytics Workflow in Excel

**Audience:** BankUnited employees  
**Estimated Time:** 75–100 minutes  
**Workbook:** `BankUnited_Copilot_Excel_Masterclass_Demo_Workbook.xlsx`  
**Instructor:** Dr. Ernesto Lee  
**Book:** [DRLEE.DEV](https://drlee.dev)

## Lab Purpose

This lab is designed to help you practice using Copilot in Excel as an embedded data analyst and Excel consultant. The objective is not to ask questions about a completed workbook. The objective is to learn a repeatable workflow: prepare the data, build the analysis, verify the output, convert the result into a decision, and document the workflow so another person can reuse it.

> **Sound bite:** **Do not use Copilot to avoid thinking; use Copilot to make disciplined thinking easier to repeat.**

## Training Data Notice

The workbook used in this lab contains synthetic training data created for learning purposes. It does not contain BankUnited customer information, confidential bank data, actual employee performance data, account-level records, or proprietary financial results. Treat the lab as practice for real workflows, but do not infer that the sample numbers represent BankUnited performance.

## Prerequisites

Before starting, open the workbook in Microsoft Excel and confirm that the file is saved in OneDrive or SharePoint with AutoSave enabled. Microsoft’s current guidance indicates that Copilot in Excel is designed for modern Excel workbooks and works best when data is structured in tables or supported ranges.[1] [2]

| Requirement | Why It Matters |
|---|---|
| Excel with Copilot access | Required to perform the AI-assisted steps. |
| Workbook saved to OneDrive or SharePoint | Supports Copilot in Microsoft 365 workflows. |
| AutoSave enabled | Helps Copilot work with the current workbook state. |
| Tables with clear headers | Improves Copilot’s ability to understand the data. |
| Human verification | Required because Copilot output may need correction or review. |

## Lab Part 1: Inspect the Workbook Like a Banker

Open the `README` sheet first. Notice that the workbook includes both **live-build sheets** and **answer-key sheets**. The live-build sheets are where you will construct the analysis. The answer-key sheets are there only for comparison or reset.

| Sheet Type | Sheets | How to Use Them |
|---|---|---|
| Source data | `Model_Assumptions`, `Scenario_Assumptions`, `Monte_Carlo_Inputs`, `Branch_Monthly_Data` | Use these as the raw material for analysis. |
| Live-build workspace | `Financial_Model_Live_Build`, `Monte_Carlo_Live_Build` | Build formulas, summaries, charts, and interpretations here. |
| Answer key/reset | `Financial_Model`, `Monte_Carlo_Trials`, `Monte_Carlo_Summary` | Use only after attempting the build or if the live session stalls. |
| Repeatable workflow design | `Agent_Workflow_Blueprint` | Turn the analysis into a shareable agent pattern. |

Use this prompt in Copilot:

> Act as a banking data analyst. Review the available sheets in this workbook. Identify which sheets are source inputs, which sheets are live-build workspaces, which sheets are completed answer keys, and which sheet helps design a repeatable agent workflow. Keep the answer practical for a bank employee.

After Copilot responds, answer the following questions in your own words.

| Reflection Question | Your Answer |
|---|---|
| Which sheets should you use to build the model live? |  |
| Which sheets should you avoid using as a starting point because they are answer keys? |  |
| What business decision could the workbook help support? |  |
| What must you verify before trusting any Copilot-supported output? |  |

## Lab Part 2: Prepare and Question Branch Performance Data

Open the `Branch_Monthly_Data` sheet. Confirm that the data has clear column headers and appears structured as a table. Your first job is to ask Copilot to convert spreadsheet rows into performance insight.

Use this prompt:

> Analyze `Branch_Monthly_Data`. Identify the three branches with the strongest average monthly contribution profit and the three branches that need investigation. Explain the likely drivers using deposits, loans, fee income, operating expense, credit loss provision, and digital adoption.

Review Copilot’s response carefully. Then complete the table below.

| Branch Finding | Evidence Copilot Used | What You Would Verify |
|---|---|---|
| Strongest branch or market |  |  |
| Branch needing investigation |  |  |
| Most important performance driver |  |  |
| Question for the branch leader |  |  |

Now ask Copilot for a visualization.

> Recommend a chart that would help a regional leader compare contribution profit by branch and explain why that chart is appropriate.

If Copilot offers to create the chart, allow it. If it does not, create the recommended chart manually. Then write one sentence explaining what the chart reveals.

## Lab Part 3: Build a Financial Model from Assumptions

This part is intentionally not a “talk to a finished model” exercise. You will begin with assumptions and a blank live-build table, then use Copilot to help create formulas and decision metrics.

Open `Model_Assumptions`, `Scenario_Assumptions`, and `Financial_Model_Live_Build`. Do not begin with `Financial_Model`; that sheet is the answer key.

Use this prompt:

> Act as a banking finance analyst. Use `Model_Assumptions` and `Scenario_Assumptions` to help me build the `Financial_Model_Live_Build` sheet. Explain the formula logic needed for Adoption Rate, Gross Benefit, Risk-Adjusted Benefit, Operating Cost, Net Monthly Benefit, Cumulative Net Benefit, Discount Factor, and Present Value. Then help me apply or paste the formulas into the live-build table.

As you build the model, complete the verification table below.

| Model Element | What Copilot Helped Build | How You Verified It |
|---|---|---|
| Adoption rate by scenario |  |  |
| Gross benefit calculation |  |  |
| Risk-adjusted benefit |  |  |
| Operating cost |  |  |
| Net monthly benefit |  |  |
| Cumulative net benefit |  |  |
| Discount factor |  |  |
| Present value |  |  |

Next, ask Copilot to produce an executive scenario summary from the model you just built.

> Create a concise executive summary table from `Financial_Model_Live_Build`. Include Downside, Base, and Upside scenarios; cumulative net benefit; total present value; break-even month if any; the assumption most likely to be challenged; and one leadership recommendation.

Now verify the output. Do not skip this step.

| Verification Step | Completed? | Notes |
|---|---:|---|
| Confirm Copilot referenced the live-build sheet, not only the answer key. |  |  |
| Confirm scenario names are correct. |  |  |
| Confirm formulas align with source assumptions. |  |  |
| Confirm the recommendation matches the model results. |  |  |
| Identify at least one assumption that could be wrong. |  |  |

Finally, ask Copilot to challenge the model.

> If you were the CFO, CRO, and business line leader reviewing this model, what would each person challenge first? Return the answer as a table with role, assumption challenged, reason, evidence needed, and verification step.

Write the most important challenge below.

> My most important model challenge is: ________________________________

## Lab Part 4: Build a Monte Carlo Risk Analysis

This part is also a build exercise. You are not merely asking Copilot to describe a completed simulation. You will start with uncertainty inputs and a blank trial table, then use Copilot to build the simulation logic.

Open `Monte_Carlo_Inputs` and `Monte_Carlo_Live_Build`. Do not begin with `Monte_Carlo_Trials` or `Monte_Carlo_Summary`; those sheets are answer keys.

Use this prompt:

> Act as a banking risk analyst. Use `Monte_Carlo_Inputs` to help me build a Monte Carlo simulation in `Monte_Carlo_Live_Build`. For each trial, help me create formulas for Adoption Rate, Benefit Multiplier, Monthly Cost, Risk Adjustment, Annual Growth Rate, 36-Month NPV, 36-Month Cumulative Benefit, and Break-Even Outcome. Explain the logic before applying the formulas.

If Copilot cannot insert all formulas directly, ask for formula-by-formula guidance and fill down the table manually.

> Give me the formulas column by column so I can paste the first formula into row 6 and fill it down through all trial rows.

Complete the build verification table.

| Simulation Element | What Copilot Helped Build | How You Verified It |
|---|---|---|
| Adoption rate randomization |  |  |
| Benefit multiplier randomization |  |  |
| Monthly cost randomization |  |  |
| Risk adjustment randomization |  |  |
| Annual growth rate randomization |  |  |
| 36-month NPV outcome |  |  |
| 36-month cumulative benefit |  |  |
| Break-even outcome |  |  |

Now ask Copilot to summarize the simulation you built.

> Analyze `Monte_Carlo_Live_Build`. Summarize the distribution of `36-Month NPV`, the probability of positive NPV, downside risk, and the most important assumptions leadership should manage.

Ask Copilot for a risk visualization.

> Recommend the best chart to show the distribution of `36-Month NPV`, including downside tail and upside range. If possible, create the chart. If not, explain how I should create the chart manually in Excel.

Complete the following table.

| Monte Carlo Question | Your Answer |
|---|---|
| What is the approximate probability of positive NPV? |  |
| What does the downside tail suggest? |  |
| Which variable appears most important to protect? |  |
| What action would improve the odds of success? |  |

Now use Copilot to produce a decision memo.

> Write a one-page executive decision memo based on the Monte Carlo simulation we just built. Include the probability of success, downside risk, assumptions that matter most, verification limitations, and the top three actions leaders should take.

Review the memo and highlight one sentence you would keep for an executive meeting.

## Lab Part 5: Convert the Analysis into a Repeatable Agent

Open `Agent_Workflow_Blueprint`. This is where the lab becomes enterprise-ready. A one-time analysis is useful, but a repeatable agent pattern can be shared, taught, governed, and improved.

Use this prompt:

> Use `Agent_Workflow_Blueprint`, `Financial_Model_Live_Build`, and `Monte_Carlo_Live_Build` to design a repeatable human-supervised analytics agent. The agent should specify trigger, required inputs, reusable prompt pattern, build steps, verification controls, output package, owner, and versioning. Keep the design practical for a bank team.

Complete the blueprint below.

| Agent Design Element | Your Draft |
|---|---|
| Trigger: When should the process run? |  |
| Inputs: Which sheets or data sources are required? |  |
| Prompt pattern: What reusable instruction should be saved? |  |
| Build steps: What should the agent help create every time? |  |
| Verification controls: What must a human check? |  |
| Output package: What should be shared with others? |  |
| Owner: Who maintains the workflow? |  |
| Versioning: How will changes be tracked? |  |

Now write the first version of your reusable agent prompt.

> My reusable agent prompt is: ______________________________________________________________________

## Lab Part 6: Create Your Own Banking Use Case

Choose one spreadsheet workflow from your own role. If you do not have one available, choose one from the list below.

| Workflow | Example Question |
|---|---|
| Branch performance review | Which branches are improving or declining, and why? |
| Deposit trend monitoring | Which markets show unusual balance movement? |
| Fee income review | Which products or branches are driving variance? |
| Exception management | Which exceptions should be prioritized first? |
| Relationship manager pipeline | Which opportunities are most likely to close? |
| Operating expense review | Where are expenses rising faster than activity? |

Write your selected workflow here:

> My selected workflow is: ________________________________

Now draft your own Copilot prompt using the pattern below.

| Prompt Component | Your Draft |
|---|---|
| Role | Act as a ________________________________. |
| Data | Use the ________________________________ table/sheet. |
| Task | Identify / compare / summarize / explain ________________________________. |
| Output | Return a chart / table / executive summary / memo ________________________________. |
| Verification | Include assumptions, limitations, and what I should verify. |

Your full prompt:

> ______________________________________________________________________

## Lab Part 7: Human Verification Checklist

Before using any Copilot-supported analysis in a real banking workflow, complete this checklist.

| Verification Question | Yes/No | Notes |
|---|---:|---|
| Did I use the correct workbook and table? |  |  |
| Are the column headers clear and meaningful? |  |  |
| Did Copilot reference the live-build sheet when building? |  |  |
| Did I verify formulas or calculations? |  |  |
| Did I check for missing, duplicated, or inconsistent data? |  |  |
| Did I challenge the assumptions? |  |  |
| Did I avoid confidential or inappropriate data exposure? |  |  |
| Did I document how the conclusion was reached? |  |  |
| Did I save the prompt pattern and workflow version? |  |  |
| Would I be comfortable explaining this analysis to my manager? |  |  |

## Final Reflection

Answer these three questions before leaving the lab.

| Reflection Question | Your Answer |
|---|---|
| What is one spreadsheet where Copilot could save you time? |  |
| What is one spreadsheet where Copilot could improve the quality of analysis? |  |
| What is one workflow you could convert into a repeatable agent pattern? |  |

## Closing Challenge

For the next 30 days, pick one recurring spreadsheet that matters. Prepare the data. Build the analysis. Verify the output. Save the prompt. Improve the template. Turn the workflow into a repeatable agent pattern. Teach one colleague.

> **Final sound bite:** **The goal is not to become less analytical. The goal is to make analytical excellence easier to repeat.**

## References

[1]: https://support.microsoft.com/en-us/office/get-started-with-copilot-in-excel-d7110502-0334-4b4f-a175-a73abdfc118a "Microsoft Support: Get started with Copilot in Excel"  
[2]: https://support.microsoft.com/en-us/office/frequently-asked-questions-about-copilot-in-excel-7a13758f-d61e-4a56-8440-f2c9a07802ec "Microsoft Support: Frequently asked questions about Copilot in Excel"  
[3]: https://support.microsoft.com/en-us/office/get-insights-about-numerical-data-with-copilot-in-excel-52d97339-86c0-431c-b46c-e7b07b2898dd "Microsoft Support: Get insights about numerical data with Copilot in Excel"  
[4]: https://support.microsoft.com/en-us/office/introduction-to-python-in-excel-55643c2e-ff56-4168-b1ce-9428c8308545 "Microsoft Support: Introduction to Python in Excel"
