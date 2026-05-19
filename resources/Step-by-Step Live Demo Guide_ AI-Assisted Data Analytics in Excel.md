# Step-by-Step Live Demo Guide: AI-Assisted Data Analytics in Excel

**Presenter:** Dr. Ernesto Lee  
**Audience:** BankUnited employees  
**Workbook:** `BankUnited_Copilot_Excel_Masterclass_Demo_Workbook.xlsx`  
**Core Frame:** This is not a lesson about asking a chatbot to summarize a finished workbook. It is a demonstration of how a banker can use an expert Excel consultant and data analyst embedded inside Excel to **build**, verify, explain, and reuse an analytics workflow.

> **Important training-data notice:** The workbook data is synthetic training data created for this master class. It is not BankUnited customer data, employee data, account data, confidential data, or proprietary performance data.

## Demo Setup

Before presenting, save the workbook to OneDrive or SharePoint, open it in Microsoft Excel with AutoSave enabled, and confirm that Copilot appears in the Home tab. Microsoft states that Copilot in Excel works with modern Excel files such as `.xlsx`, `.xlsb`, or `.xlsm` saved to OneDrive or SharePoint with AutoSave on, and it performs best when data is formatted as a table or supported range.[1] [2]

The workbook now separates **live-build sheets** from **answer-key sheets**. During the demo, begin with the live-build sheets so the audience sees Copilot help construct the work. Use the finished sheets only if the live demo needs a reset or if the audience needs to compare the completed structure.

| Sheet | Purpose | Presenter Use |
|---|---|---|
| `README` | Explains the workbook and data notice. | Open first to frame responsible use. |
| `Branch_Monthly_Data` | Synthetic branch-level monthly banking data. | Use for quick banking analytics examples. |
| `Model_Assumptions` | Inputs for the financial model. | Source sheet for Demo 1. |
| `Scenario_Assumptions` | Downside, base, and upside case assumptions. | Source sheet for Demo 1. |
| `Financial_Model_Live_Build` | Blank model table with month and scenario rows prepared. | **Start Demo 1 here.** Build formulas and decision outputs live. |
| `Financial_Model` | Completed model with formulas. | Answer key/reset only; do not start here. |
| `Monte_Carlo_Inputs` | Distribution assumptions for uncertainty. | Source sheet for Demo 2. |
| `Monte_Carlo_Live_Build` | Blank simulation table with trial numbers prepared. | **Start Demo 2 here.** Build trial formulas and risk summary live. |
| `Monte_Carlo_Trials` | Completed simulation outcomes. | Answer key/reset only; do not start here. |
| `Monte_Carlo_Summary` | Completed summary metrics. | Answer key/reset only. |
| `Agent_Workflow_Blueprint` | Template for repeatable, shareable agent workflow design. | Use after both demos to show how the process becomes reusable. |
| `Copilot_Prompt_Library` | Ready-to-use prompts. | Use if the live demo needs a reset. |
| `Branch_Summary` | Branch-level contribution profit summary. | Optional quick win if time allows. |

## Demo 1: Build a Financial Model Live

The first demo should feel like watching a model take shape. The business story is simple: BankUnited is considering an analytics enablement initiative. The question is whether the benefits justify the investment after costs, adoption uncertainty, and risk adjustment.

> **Sound bite for the demo:** **We are not asking Copilot to admire a model. We are asking Copilot to help build one we can defend.**

### Step 1: Frame the business question before touching formulas

Open `Model_Assumptions` and `Scenario_Assumptions`. Say: “We are starting with assumptions, not with a finished model. This is the correct professional sequence. First define the decision, then build the model, then challenge the model.”

Use this Copilot prompt:

> Act as a banking finance analyst. Use the `Model_Assumptions` and `Scenario_Assumptions` sheets. Explain the business question we are trying to model, the key assumptions, and the decision metrics a bank executive would expect to see. Do not summarize a finished model. Prepare me to build the model.

Expected teaching moment: Copilot should translate assumptions into a decision frame. If it jumps too quickly to interpretation, follow up with: “Stay at the model-design stage. What rows, columns, and formulas should we create?”

### Step 2: Build the model structure in the live-build sheet

Open `Financial_Model_Live_Build`. Point out that only `Month Number` and `Scenario` are populated. This is intentional. The model has a frame, but not the analytical logic.

Use this Copilot prompt:

> In `Financial_Model_Live_Build`, help me build a 36-month financial model by scenario using the assumptions in `Model_Assumptions` and `Scenario_Assumptions`. For each row, create or recommend formulas for Adoption Rate, Gross Benefit, Risk-Adjusted Benefit, Operating Cost, Net Monthly Benefit, Cumulative Net Benefit, Discount Factor, and Present Value. Explain the formula logic before applying it.

Expected teaching moment: The audience should see that the workbook starts as a skeleton and the model logic is being created live. If Copilot cannot directly write formulas into every cell, ask it to provide the formulas column by column and paste or fill them manually.

| Column | Logic to Build | Verification Question |
|---|---|---|
| Adoption Rate | Pull scenario-specific adoption from `Scenario_Assumptions`. | Does each scenario reference the correct row? |
| Gross Benefit | Monthly baseline benefit × adoption × benefit multiplier × growth effect. | Does benefit grow logically over time? |
| Risk-Adjusted Benefit | Gross benefit × risk adjustment. | Is risk treated as a reduction, not an add-on? |
| Operating Cost | Monthly cost × scenario cost multiplier. | Are recurring costs separated from initial investment? |
| Net Monthly Benefit | Risk-adjusted benefit minus operating cost, with initial investment recognized at start. | Does month one include the one-time investment treatment? |
| Cumulative Net Benefit | Running total of net monthly benefit. | Does each row accumulate only within the same scenario? |
| Discount Factor | Monthly discounting from annual discount rate. | Does the formula convert annual to monthly correctly? |
| Present Value | Net monthly benefit × discount factor. | Does PV decline appropriately over time? |

### Step 3: Create the executive decision metrics

Once formulas are populated, ask Copilot to create a concise scenario summary. If Copilot can add the summary on the same sheet, let it. If not, ask for a table you can paste below or to the right of the model.

Use this prompt:

> Create an executive summary table from `Financial_Model_Live_Build` with one row per scenario. Include total net benefit, total present value, break-even month if any, weakest assumption, and recommended executive interpretation.

Expected teaching moment: Copilot is no longer just producing formulas. It is moving from formulas to decision language. Remind the audience that the summary is a draft until formulas and assumptions are verified.

### Step 4: Ask Copilot to create or recommend the chart

Use this prompt:

> Create or recommend the best chart to compare net monthly benefit and cumulative net benefit across Downside, Base, and Upside. Explain why the chart would be useful for a bank executive audience.

If Copilot creates a chart, inspect the axis labels, scenario labels, and time scale. If it recommends a chart without creating it, create the chart manually from the live-build table.

Expected teaching moment: The chart is not decoration. It is the visual form of the decision. The human presenter must verify whether the visual tells the correct story.

### Step 5: Stress-test the model like a leadership team

Use this prompt:

> Now challenge the model. If you were the CFO, CRO, and business line leader reviewing this model, what would each person challenge first? Return a table with role, assumption challenged, why it matters, evidence needed, and how we would verify it in Excel.

Expected teaching moment: This is the banking posture. Copilot helps accelerate skepticism; it does not replace skepticism.

| Executive Role | Likely Challenge | Presenter Explanation |
|---|---|---|
| CFO | Benefit value, cost assumptions, and discount rate. | “Are we overestimating the economics?” |
| CRO | Risk adjustment, control readiness, and operational exposure. | “Are we treating implementation risk seriously?” |
| Business Line Leader | Adoption rate and workflow fit. | “Will employees actually use this in the work?” |

### Step 6: Close the financial model demo

End the demo with this exact line:

> **The real power is not that Copilot talks about a model. The real power is that Copilot helps us build, explain, and challenge the model before it influences a decision.**

## Demo 2: Build a Monte Carlo Analysis Live

The second demo must also begin before the finished output exists. Banking decisions should not pretend the future is one number. Monte Carlo analysis models uncertainty by creating many possible futures and then summarizing the distribution of outcomes.

> **Sound bite for the demo:** **Monte Carlo does not predict the future; it exposes the shape of uncertainty.**

### Step 1: Define the uncertainty, not the answer

Open `Monte_Carlo_Inputs`. Say: “Before we simulate anything, we have to define what is uncertain. In this workbook, adoption rate, benefit multiplier, monthly cost, risk adjustment, annual growth rate, discount rate, and initial investment are the variables that shape the result.”

Use this prompt:

> Act as a banking risk analyst. Use `Monte_Carlo_Inputs` to explain each uncertain variable in plain English. Then tell me what formula approach I should use to simulate each variable in Excel.

Expected teaching moment: Copilot should connect variables to operational reality, not just mathematical distribution language. If the answer is too technical, ask: “Translate this for a bank executive committee.”

### Step 2: Build the simulation trial table

Open `Monte_Carlo_Live_Build`. Point out that only the trial numbers are populated. The trial logic is intentionally blank.

Use this prompt:

> In `Monte_Carlo_Live_Build`, help me build a Monte Carlo simulation using `Monte_Carlo_Inputs`. For each trial, create or recommend formulas for Adoption Rate, Benefit Multiplier, Monthly Cost, Risk Adjustment, Annual Growth Rate, 36-Month NPV, 36-Month Cumulative Benefit, and Break-Even Outcome. Explain each formula in plain English before applying it.

If Copilot cannot insert all formulas automatically, ask it to provide formulas column by column. Fill the formulas down for all trials. The presenter can also use `Monte_Carlo_Trials` as a reset reference if the live build stalls.

| Simulation Field | Build Intention | Verification Question |
|---|---|---|
| Adoption Rate | Randomize within the stated range or distribution. | Are adoption values realistic and bounded? |
| Benefit Multiplier | Vary realized value around the most likely benefit estimate. | Are upside and downside values plausible? |
| Monthly Cost | Vary cost around the expected cost level. | Are costs positive and in the expected range? |
| Risk Adjustment | Reduce benefit for control, execution, or operational risk. | Is risk reducing the economics appropriately? |
| Annual Growth Rate | Allow benefits to change over the planning horizon. | Is growth reasonable and not explosive? |
| 36-Month NPV | Convert simulated monthly outcomes into present value. | Is discounting applied consistently? |
| Break-Even Outcome | Mark whether the trial produces positive NPV. | Does the TRUE/FALSE logic match NPV? |

### Step 3: Summarize probability and downside risk

After formulas are filled down, use this prompt:

> Analyze `Monte_Carlo_Live_Build`. Summarize the distribution of `36-Month NPV`, the probability of positive NPV, the approximate downside tail, and the conditions most associated with success. Explain the result as if I am presenting to a bank executive committee.

Expected teaching moment: The audience should see the shift from one forecast to a probability conversation. Copilot is helping the banker ask, “What are the odds, and what can management do to improve them?”

### Step 4: Create the risk visualization

Use this prompt:

> Create or recommend a chart that shows the risk profile of `36-Month NPV`. I want the audience to see the downside tail, the typical outcome, and the upside range. If you recommend a histogram, explain how to create it in Excel.

Expected teaching moment: A histogram or distribution-style chart is the right mental model. If Copilot suggests a poor chart type, use it as a teaching opportunity: “AI can suggest; humans must judge.”

### Step 5: Identify what drives success

Use this prompt:

> Compare successful trials against unsuccessful trials in `Monte_Carlo_Live_Build`. Which variables appear most associated with positive `36-Month NPV`? Return a table with variable, pattern observed, management implication, and verification step.

Expected teaching moment: This should surface adoption rate, benefit realization, cost control, and risk adjustment as decision levers. Monte Carlo turns assumptions into management priorities.

### Step 6: Produce a decision memo

Use this prompt:

> Write a concise executive decision memo based on the Monte Carlo results we just built. Include probability of positive NPV, key downside risk, what must be true for the initiative to work, and the top three management actions to improve the odds.

Expected teaching moment: The memo is the bridge from analytics to leadership communication. Copilot helps the banker move from calculation to recommendation.

### Step 7: Close the Monte Carlo demo

End the demo with this exact line:

> **A single forecast asks people to believe. A Monte Carlo analysis asks leaders to manage the odds.**

## Demo 3: Turn the Workflow into a Repeatable Agent

After the two live-build demos, open `Agent_Workflow_Blueprint`. This sheet exists because the most important enterprise question is not, “Can one person run a clever demo?” The question is, “Can this process be repeated, governed, and shared by a team?”

Use this prompt:

> Use `Agent_Workflow_Blueprint` and the live-build sheets to design a repeatable human-supervised analytics agent for this workbook. The agent should specify the trigger, required inputs, prompt pattern, build steps, verification controls, output package, owner, and versioning approach. Keep the design practical for a bank team.

Expected teaching moment: The agent is not an unsupervised robot making decisions. It is a documented, repeatable workflow that can be rerun, checked, improved, and taught.

| Agent Element | What It Makes Repeatable |
|---|---|
| Trigger | When the analysis should run. |
| Inputs | Which sheets and assumptions must be present. |
| Prompt pattern | How the analytical task is assigned consistently. |
| Build steps | Which formulas, summaries, charts, and memos are created. |
| Verification controls | What the human must check before sharing. |
| Output package | What colleagues receive. |
| Owner and versioning | Who maintains the workflow and how changes are tracked. |

Close this section with this line:

> **A demo impresses people once. An agent makes excellence repeatable.**

## Optional Quick Demo: Branch Performance Analytics

If time remains, open the `Branch_Monthly_Data` sheet and use this prompt:

> Analyze `Branch_Monthly_Data`. Identify the three branches with the strongest average monthly contribution profit, the three branches that need investigation, and the likely drivers based on deposits, loans, operating expense, credit loss provision, fee income, and digital adoption.

This optional demo helps employees see that the same workflow applies to everyday banking analytics, not only formal financial models.

## Presenter Reset Prompts

If Copilot gives an answer that is too generic, use one of these reset prompts.

| Problem | Reset Prompt |
|---|---|
| Copilot is too vague. | “Be more specific. Use the table and column names in this workbook.” |
| Copilot explains the finished model instead of helping build. | “Do not summarize the answer-key sheet. Work only from the live-build sheet and source assumption sheets.” |
| Copilot ignores the banking context. | “Rewrite this as advice for a bank executive or branch leader.” |
| Copilot gives too much detail. | “Summarize this in five executive bullets and one recommended action.” |
| Copilot creates an answer without enough evidence. | “Show which columns support your conclusion and what I should verify.” |
| Copilot sounds overconfident. | “Add limitations, assumptions, and verification steps.” |
| The live demo stalls. | “Give me the formulas column by column so I can paste and fill them manually.” |

## References

[1]: https://support.microsoft.com/en-us/office/get-started-with-copilot-in-excel-d7110502-0334-4b4f-a175-a73abdfc118a "Microsoft Support: Get started with Copilot in Excel"  
[2]: https://support.microsoft.com/en-us/office/frequently-asked-questions-about-copilot-in-excel-7a13758f-d61e-4a56-8440-f2c9a07802ec "Microsoft Support: Frequently asked questions about Copilot in Excel"  
[3]: https://support.microsoft.com/en-us/office/get-insights-about-numerical-data-with-copilot-in-excel-52d97339-86c0-431c-b46c-e7b07b2898dd "Microsoft Support: Get insights about numerical data with Copilot in Excel"  
[4]: https://support.microsoft.com/en-us/office/introduction-to-python-in-excel-55643c2e-ff56-4168-b1ce-9428c8308545 "Microsoft Support: Introduction to Python in Excel"
