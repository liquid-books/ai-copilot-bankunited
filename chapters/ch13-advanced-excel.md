---
title: "Chapter 13: Week 4, Session C — Advanced Copilot in Excel"
subtitle: "Automation, Anomaly Detection, and Scenario Modeling for Banking Analytics"
short_title: "Advanced Copilot in Excel"
description: "Moving beyond the basics — how BankUnited professionals use Copilot in Excel to build automated analytical workflows, detect anomalies in transaction and portfolio data, construct scenario models and sensitivity analyses, write complex formulas with natural language, and produce ALCO-ready financial dashboards. The shift from answering questions to building analytical systems."
label: ch-13-advanced-excel
tags: [Excel, Copilot, advanced analytics, anomaly detection, scenario modeling, sensitivity analysis, Python in Excel, financial dashboards, ALCO, risk analysis, BankUnited, banking analytics, formula generation, concentration risk]
---

```{admonition} Download this Chapter as PDF
:class: tip

[Download PDF](https://github.com/liquid-books/ai-copilot-bankunited/raw/main/pdfs/ch13-advanced-excel.pdf)
```

# Chapter 13: Week 4, Session C — Advanced Copilot in Excel

:::{figure} ../images/ch13-advanced-excel-infographic.png
:label: fig-ch13-infographic
:alt: Illustrated explainer infographic for Advanced Copilot in Excel — showing six capability pillars arranged as a hexagonal system diagram: Automated Workflows, Anomaly Detection, Scenario Modeling, Complex Formulas, Financial Dashboards, and Risk Analysis. Each pillar connects to a central hub labeled "Analytical Systems." Blue and orange color scheme with banking context examples in each segment.
:width: 80%
:align: center

The six pillars of advanced Copilot-in-Excel mastery — each one represents the shift from answering a question to building an analytical system. This chapter maps the journey from power user to institutional asset.
:::

> *"The purpose of a business is to create a customer. The purpose of analysis is to create a decision."*
> — adapted from Peter Drucker

There is a particular kind of frustration that experienced banking professionals recognize immediately. It is not the frustration of not knowing how to do something. It is the frustration of knowing exactly what needs to be done — building the stress-test model, running the concentration-risk analysis, constructing the branch performance dashboard — and watching hours evaporate in mechanical execution while the actual thinking waits.

Chapter 7 resolved one layer of that frustration. The basics of Copilot in Excel — formatting tables, generating formulas, creating charts, building Pivot Tables with natural-language prompts — eliminated a significant portion of the mechanical overhead that consumes analytical time. If you have worked through Chapter 7, you can now ask Copilot to "show me a chart of deposit trends by branch for the last six months" and have it built in seconds rather than minutes.

This chapter operates at a different level entirely.

The distinction between a casual Copilot user and a power user in Excel is not a matter of knowing more prompts. It is a fundamental shift in what you are building. A casual user asks Copilot questions. A power user uses Copilot to build **analytical systems** — templates that run the same rigorous analysis every month without rebuilding, anomaly detection workflows that flag unusual data before it surfaces as a problem, scenario models that answer "what happens to our NIM if rates move 200 basis points" in seconds rather than days.

That shift — from answering questions to building systems — is what this chapter teaches.

We will cover advanced anomaly detection, scenario modeling and sensitivity analysis, complex formula generation, Python in Excel, financial performance dashboards, and risk analysis workflows. We will be precise about what Copilot can and cannot do — the cost of overconfidence in analytical finance is real. And we will give you a verification discipline that scales with the complexity of the analysis: the more complex the model, the more rigorous the review before it touches a leadership conversation.

Every concept will land on a BankUnited example. This is not a generic Excel tutorial. It is a banking analytics master class built on the tools you have access to today.

---

## 1. From Questions to Systems — What Advanced Looks Like

The simplest way to understand the difference between basic and advanced Copilot usage in Excel is to consider two bankers handling the same request: a monthly branch performance review that their Regional Manager needs every first Monday of the month.

**The basic user** opens the data export, formats it as a table, asks Copilot to build a chart and a Pivot Table, adjusts the outputs manually, copies the results into a PowerPoint deck, and sends it. This takes 45 minutes to an hour. Next month, they do it again, from scratch.

**The advanced user** built the analysis template in the first month. They created a structured workbook with named input zones, pre-configured Copilot-assisted formulas that update automatically when new data is pasted in, a dashboard that populates from a single source table, and a documentation sheet explaining how any RM can run the review without analyst support. Each subsequent month takes eight minutes: paste the data, run the refresh, review the outputs, send.

The difference is not just efficiency — though the time savings are dramatic. The difference is institutional leverage. The advanced user's work compound over time. The template runs the same rigorous logic every month. Errors are caught in the design phase, not discovered in the fourth month of production. New team members can run the analysis on day one.

Copilot is not the hero of this story. The analytical design is. But Copilot dramatically accelerates the construction of that design — the formula logic, the outlier-detection rules, the scenario structure, the dashboard architecture — in ways that were previously available only to professionals with deep Excel expertise.

:::{figure} ../images/ch13-basic-vs-advanced-user.png
:label: fig-ch13-basic-vs-advanced
:alt: Side-by-side comparison infographic contrasting the Basic Copilot User workflow versus the Advanced Copilot User workflow. Left side shows a linear, manual monthly loop with icons for export, format, analyze, present — labeled "Rebuilt every month." Right side shows a hub-and-spoke system with a central template feeding automated outputs — labeled "Built once, runs every month." Blue and orange color scheme, textbook quality.
:width: 80%
:align: center

The basic user answers a question with Copilot. The advanced user uses Copilot to build a system that answers the same question every month — more reliably, faster, and with less cognitive overhead.
:::

**The three hallmarks of an advanced Copilot user in Excel:**

**Reproducibility.** Every analysis lives in a designed structure — not a one-time export. The logic is documented, the formulas are explained, and any qualified person can run it again.

**Scalability.** The template does not just work for one branch. It works for all branches. It does not just cover this month. It covers every month. The work scales horizontally across the organization and vertically across time.

**Auditability.** Every formula Copilot generates is reviewed, understood, and validated before it produces numbers that inform decisions. The human is always the last check before output becomes input to a decision.

The rest of this chapter builds each of these capabilities systematically.

---

## 2. Building Automated Analytical Workflows

The most powerful thing you can do with Copilot in Excel is not ask it a question. It is use Copilot to help you design a **repeatable analytical template** — a structured workbook that produces the same rigorous output every time, regardless of who runs it.

Consider the Monthly Branch Performance Review. Every Regional Manager at BankUnited needs to understand how their branches are performing on deposit growth, loan production, DDA account acquisition, and service fees. Historically, producing this review required either a dedicated analyst or a RM who knew Excel well enough to build Pivot Tables and formula chains under deadline.

Copilot changes the construction cost of the template — not the template's existence.

:::{figure} ../images/ch13-workflow-template-design.png
:label: fig-ch13-workflow-template
:alt: Flowchart infographic showing the five-stage design process for an automated analytical workflow in Excel. Stage 1: Data Input Zone (raw export pasted here). Stage 2: Validation Layer (Copilot-assisted error checks). Stage 3: Calculation Engine (formulas built with Copilot). Stage 4: Dashboard Output (auto-populating charts and tables). Stage 5: Documentation Sheet (instructions for any user). Blue and orange, connected by arrows, white background.
:width: 80%
:align: center

A well-designed analytical template separates concerns across five layers. Copilot accelerates construction of Stages 2, 3, and 4 — the validation logic, formula chains, and dashboard architecture that previously required deep Excel expertise.
:::

### Designing the Template Architecture

**Step 1 — Define the input zone.** Every template starts with a single, clean input sheet. This is where the raw data lands — typically a CSV or Excel export from your core banking system. Nothing else lives on this sheet. Column headers must be consistent across every monthly export.

**Step 2 — Use Copilot to build the validation layer.** Ask Copilot:

> *"My input table has columns for Branch, Month, DDA Balance, Loan Balance, New DDA Accounts, and Service Fees. What formulas should I add to verify that no branch is missing, no values are blank, and the totals match my expected range? Explain each formula before generating it."*

Copilot will suggest formulas using `COUNTA`, `SUMIF`, `ISBLANK`, and conditional logic. The "explain before generating" instruction ensures you understand each formula before accepting it — a discipline that matters when the output informs a leadership conversation.

**Step 3 — Build the calculation engine.** With validated input data, use Copilot to construct the derived metrics your review requires. For a branch performance review:

> *"In my Branch Performance table, I need to calculate month-over-month DDA balance change as a percentage, flag any branch where new DDA accounts are more than 20% below the prior month, and rank branches by total deposit growth. Generate the formulas for each and explain the logic."*

Each formula Copilot generates should be reviewed and understood. This is not distrust of Copilot — it is professional rigor that mirrors how you would review an analyst's work.

**Step 4 — Create the dashboard.** Ask Copilot to suggest visualization structures:

> *"Based on my Branch Performance table with these columns [list them], what charts and summary visuals would give a Regional Manager the clearest picture of branch health in under 60 seconds? Suggest the chart types and data ranges."*

Copilot will suggest specific chart types — waterfall charts for balance changes, bar charts for branch ranking, line charts for trend lines — and can generate them from natural language: "Create a bar chart comparing DDA balance growth by branch for this month versus last month."

**Step 5 — Document the template.** Add a Documentation sheet that explains what data to paste, where, and in what format. Use Copilot in Word or directly in a text cell to draft this documentation from a description of the process. A template that only you can run is a productivity tool. A template that any RM can run is an institutional asset.

### The Role of Scheduled Refresh

One common question is whether Copilot can automatically pull new data and run the analysis on a schedule. It is important to be precise here. **Copilot in Excel does not autonomously schedule or run reports.** What it can do is dramatically reduce the time required when a human initiates the refresh — from hours to minutes. The workflow remains human-initiated: a person opens the workbook, pastes the new monthly data, and the pre-built formula chains and Copilot-assisted queries update the dashboard automatically.

For organizations needing true scheduled automation, that requires Power Automate, Power BI dataflows, or IT-configured scheduled refreshes — tools that integrate with but are separate from Copilot in Excel. Understanding this distinction prevents the operational error of expecting Copilot to deliver outputs without human engagement.

---

## 3. Advanced Anomaly Detection

One of Copilot's confirmed and significant capabilities is identifying outliers — data points that deviate meaningfully from expected patterns. In banking analytics, this capability is not a convenience. It is a risk management tool.

The stakes are higher in banking than in most industries. An anomalous spike in DDA withdrawals from a single branch might indicate fraud, operational error, or a macroeconomic event affecting a specific geography. An anomalous pattern in loan performance across a commercial real estate concentration could be an early signal of portfolio stress. Catching these signals early — before they surface as regulatory findings or credit losses — is the analytical work that protects the institution.

Copilot can identify these anomalies in seconds. But what Copilot cannot do is validate them, investigate them, or determine whether they represent real risk or data error. That is the human's job. Understanding this division clearly is essential to using anomaly detection safely in a banking context.

:::{figure} ../images/ch13-anomaly-detection-workflow.png
:label: fig-ch13-anomaly-detection
:alt: Three-panel infographic showing the Anomaly Detection workflow. Panel 1 (Detect): Copilot flags outliers in a transaction dataset — colored markers highlight unusual rows. Panel 2 (Validate): Human analyst cross-references flagged data against source systems — magnifying glass icon over data. Panel 3 (Investigate): Root cause analysis determines whether anomaly is data error, operational event, or genuine risk signal — branching decision tree. Blue and orange color scheme.
:width: 80%
:align: center

Anomaly detection is a three-stage process. Copilot handles Stage 1 with speed and consistency. Stages 2 and 3 — validation and investigation — require human judgment that Copilot cannot replace.
:::

### What Questions to Ask

The quality of Copilot's anomaly detection depends directly on the quality of the questions you ask. Vague questions produce vague results. Specific, contextually grounded questions produce actionable flagging.

**For DDA activity analysis:**

> *"Look at the DDA Balance column. Flag any branch where the month-over-month change is more than two standard deviations from the branch's own 12-month average change. Highlight those rows and explain why each was flagged."*

This question is specific because it defines the comparison baseline (the branch's own history), the threshold (two standard deviations), and the output format (highlighted rows with explanations). Copilot can execute this query and present the results as a sorted table or a chart showing branches on a normal distribution with flagged outliers marked.

**For loan performance monitoring:**

> *"In the Loan Performance table, identify any loans where the current balance has increased month-over-month for three consecutive months without a corresponding new origination. Flag the loan IDs, show the balance trajectory, and note the deviation from the portfolio average."*

**For concentration risk identification:**

> *"Analyze the CRE Loan table. Identify any property type, geography, or borrower where loans represent more than 15% of the total portfolio balance. Show the concentration as both a dollar amount and a percentage of total."*

**For branch performance outliers:**

> *"Compare each branch's DDA growth rate against the portfolio-wide average. Show me the top three over-performers and the bottom three under-performers, and flag any branch where performance has declined for two or more consecutive periods."*

### How to Validate What Copilot Flags

Every anomaly Copilot identifies must pass a two-part validation before it is treated as significant:

**Data validation.** Is the flagged pattern real, or is it an artifact of the data? Before acting on an anomaly, verify that the underlying data is accurate. Pull the same figures from your core banking system. Compare against the branch's own records. A data entry error or export format inconsistency produces false positives that can trigger unnecessary investigation.

**Business validation.** If the data is accurate, is the pattern explainable? A branch showing a spike in DDA outflows in a given month may be explained by a large commercial account that moved — a business event, not a risk event. Understanding the context before escalating prevents the credibility cost of flagging issues that turn out to have obvious explanations.

::::{admonition} 🔑 The Anomaly Investigation Protocol
:class: tip

When Copilot flags an anomaly in banking data, apply this four-step check before treating it as significant:

1. **Verify the data source.** Pull the same metric from your core banking system. Does the number match?
2. **Check for known events.** Did anything happen in that branch, that account, or that market segment in the flagged period?
3. **Apply the peer comparison.** Is this branch the only one showing the pattern, or is it market-wide?
4. **Escalate or close.** If the pattern is unexplained and verified, escalate per your institution's protocol. If explained, document the explanation and close.

Copilot provides the flag. The protocol provides the judgment.
::::

---

## 4. Scenario Modeling and Sensitivity Analysis

If there is a single advanced capability in Excel that has historically required either specialized software or a very senior analyst, it is scenario modeling. The question "what happens to our net interest margin if the Fed moves 200 basis points" sounds simple. Building the model that answers it — with defensible assumptions, consistent logic, and clear visual output — is laborious.

Copilot substantially reduces the construction time without reducing the rigor — provided you bring the right assumptions and apply the right verification discipline.

:::{figure} ../images/ch13-scenario-modeling-framework.png
:label: fig-ch13-scenario-modeling
:alt: Infographic showing a three-scenario stress test framework in Excel. Three columns labeled Scenario 1 (+100bps), Scenario 2 (+200bps), Scenario 3 (-50bps). Row labels show NIM Impact, Deposit Cost Change, Loan Yield Change, Net Income Impact, and Capital Ratio Effect. Color-coded cells: green for favorable, yellow for neutral, red for stress. A line chart below shows the three scenario trajectories. Blue and orange color scheme.
:width: 80%
:align: center

A well-structured scenario model presents three clear alternatives with consistent assumptions across each. Copilot helps build the formula structure and visualization — the assumptions themselves must come from your institution's ALCO framework.
:::

### Step-by-Step Scenario Modeling Workflow

**Step 1 — Define your scenarios precisely.** Before opening Excel, define what each scenario means in terms of your specific portfolio. A "+200bps" scenario is not meaningful until you have specified: over what time horizon? With what repricing assumptions for fixed versus floating rate instruments? With what deposit beta? These are ALCO-level questions with institution-specific answers. Copilot cannot supply them. You bring them.

**Step 2 — Build the input table.** Create a structured table with rows for each key variable (loan yield, deposit cost, repricing lag, fixed rate proportion) and columns for each scenario. This is the model's assumption layer — all scenario logic flows from it.

Ask Copilot:

> *"I have an input table with these columns: Scenario Name, Parallel Shift (bps), Loan Yield Change, Deposit Beta, Fixed Rate Loan Proportion, Floating Rate Loan Proportion, Repricing Lag (months). I need formulas that calculate NIM impact for each scenario based on these inputs. Generate the formula structure and explain each component."*

**Step 3 — Construct the sensitivity table.** A sensitivity analysis goes deeper than a scenario comparison — it systematically shows how the output changes as a single input varies across a range. For a loan portfolio NIM analysis, you might vary deposit beta from 20% to 80% in 10% increments and show the resulting NIM impact for each.

> *"Build a sensitivity table that shows NIM impact as deposit beta varies from 20% to 80% in 10% increments, holding rate shift at +200bps constant. Use Excel's data table functionality and explain how to set it up."*

**Step 4 — Create the visualization.** Ask Copilot to generate charts that make the scenario comparison immediately interpretable:

> *"Create a grouped bar chart comparing NIM impact across the three rate scenarios. Add a data label showing the absolute dollar impact for each scenario. Use a secondary axis if needed to show both percentage and dollar impacts."*

**Step 5 — Draft the ALCO commentary.** This is where Copilot's language capability becomes a complement to the analytical output. After reviewing and validating the model:

> *"Based on this scenario model, draft a one-paragraph ALCO summary that presents the three scenarios, the key NIM driver in each, and the most significant risk flag for the board. Write in formal financial prose, not bullet points."*

Review every word of the draft. The numbers must come from your validated model. The language can be shaped by Copilot, but the accuracy is your professional responsibility.

### Deposit Sensitivity Analysis

A complementary analysis for any rate environment is deposit sensitivity — how does your deposit base respond to rate changes? Which depositor segments are most rate-sensitive? Where is the concentration of rate-sensitive versus rate-insensitive deposits?

> *"In my Deposit Composition table with columns for Depositor Type, Balance, Rate, Rate Sensitivity Classification, and Maturity, calculate the total balance and percentage for each sensitivity classification. Flag any single classification that represents more than 30% of total deposits. Create a pie chart showing the composition breakdown."*

### CRE Deal Stress Testing

For commercial real estate lenders, Copilot can accelerate the construction of individual deal stress tests:

> *"I have a CRE deal with these current financials: [NOI, Cap Rate, LTV, Debt Service Coverage Ratio, Loan Amount]. Build a stress test table showing DSCR and LTV at three stress levels: 10% NOI decline, 20% NOI decline, and 30% NOI decline combined with a 50bps cap rate expansion. Explain the formula structure for each."*

::::{admonition} ⚠️ Scenario Modeling Assumptions Are Yours
:class: warning

Copilot can build any scenario model you design. It cannot source your institution's specific assumptions — deposit betas, repricing curves, prepayment speeds, or credit loss expectations. These must come from your ALCO framework, your treasury team, and your approved modeling parameters. Feeding Copilot incorrect assumptions produces mathematically precise models built on wrong foundations. The formula structure is Copilot's contribution. The assumptions are yours.
::::

---

## 5. Python in Excel — The Expanding Frontier

Excel has long been the most widely used data analysis tool in the world. Python is arguably the most powerful. For years, they lived in separate worlds — professionals who needed Python's analytical depth had to leave Excel, and professionals who needed Excel's accessibility could not access Python's capabilities.

That separation is ending. **Python in Excel** is a real, rolling Microsoft feature that brings Python computation directly into Excel worksheets. Instead of writing a formula, you write Python code in a cell — and it executes with access to popular Python libraries including pandas, matplotlib, seaborn, and scikit-learn.

This is not a minor addition. Python in Excel means that the full power of data science is available inside the spreadsheet environment that banking professionals already live in.

:::{figure} ../images/ch13-python-in-excel-overview.png
:label: fig-ch13-python-excel
:alt: Split-screen infographic showing Python in Excel integration. Left panel shows traditional Excel formula bar with standard syntax. Right panel shows a Python code cell in Excel with a pandas DataFrame operation and matplotlib chart output appearing directly in the worksheet. Labels highlight the Python editor, the output cell, and the connection to external libraries. Blue and orange, modern design.
:width: 80%
:align: center

Python in Excel eliminates the separation between spreadsheet analysis and data science computation. Python code executes directly in the worksheet, with outputs rendered as values, charts, or tables that integrate with the rest of the workbook.
:::

### Current Status (Important Clarity)

**Python in Excel is a real Microsoft feature**, available in Microsoft 365 and rolling out to commercial subscribers. The Python code runs in a secure Microsoft cloud environment — not on your local machine — which means it meets enterprise security standards.

**Copilot's ability to write Python code inside Excel is expanding but not universally available as a generally available feature** as of this writing. Microsoft is actively developing Copilot assistance for Python in Excel — in some Microsoft 365 configurations, you can ask Copilot to suggest or generate Python code for Excel cells. Check your specific Microsoft 365 subscription and update status to see what is available in your BankUnited environment.

What IS confirmed and available: You can use Copilot in Excel alongside Python in Excel — Copilot to assist with formula design and data exploration, Python cells for advanced computation where needed.

### What Python in Excel Enables for Banking Analytics

Even without Copilot-generated Python, the availability of Python in Excel opens significant analytical capabilities for banking professionals who have Python familiarity:

**Advanced statistical analysis.** Python's `scipy.stats` library provides statistical tests — correlation analysis, regression, distribution fitting — that are cumbersome or impossible in native Excel formulas.

**Portfolio analytics.** `pandas` DataFrames make multi-table joins, time-series alignment, and rolling calculations dramatically easier than equivalent Excel formula approaches.

**Machine learning for classification.** `scikit-learn` enables loan classification models, credit risk scoring, and anomaly detection algorithms to run directly in an Excel worksheet — making the models accessible to people who can interpret Excel but not necessarily write Python.

**Visualization quality.** `matplotlib` and `seaborn` produce publication-quality charts with fine-grained control over styling, labeling, and annotation that native Excel charts cannot match.

For BankUnited professionals who are not Python developers: Python in Excel is a feature to be aware of and potentially leverage in collaboration with your analytics or IT teams. For those with Python background: it eliminates the round-trip between your analytical environment and the reporting environment your leadership uses.

---

## 6. Natural Language to Complex Formula

Chapter 7 covered Copilot's formula generation at a foundational level — using SUMIF, AVERAGEIF, VLOOKUP, basic nested logic. Advanced banking analytics requires more complex formula construction, and Copilot scales well to that complexity when you provide specific, well-structured prompts.

The key insight is this: **Copilot does not just generate formulas. It explains them.** This matters more for complex formulas than for simple ones. When Copilot generates a nested IF chain with seven conditions, the explanation tells you whether the logic is correct for your specific situation — something you cannot assess from the formula syntax alone if you are not a formula expert.

:::{figure} ../images/ch13-complex-formula-examples.png
:label: fig-ch13-complex-formulas
:alt: Infographic showing five advanced Excel formula examples for banking analytics. Each formula is shown in a code-style box with a plain-language explanation below. Formulas include: Nested IF for loan classification, XLOOKUP for portfolio cross-referencing, SUMPRODUCT for weighted average rate calculation, Dynamic Array for multi-branch reporting, and LET function for readable formula structure. Blue and orange accent colors, clean typography.
:width: 80%
:align: center

Five advanced Excel formulas that Copilot can generate for banking analytics — each one representing analytical complexity that previously required dedicated formula expertise to build correctly.
:::

### Nested IFs for Loan Classification

Loan classification requires applying regulatory category rules — Pass, Special Mention, Substandard, Doubtful, Loss — based on combinations of days past due, DSCR thresholds, and credit review outcomes. This logic, written as a nested IF chain, is both important and error-prone to build manually.

> *"I need a formula that classifies each loan in my table. The rules are: if Days Past Due is 0-29 AND DSCR is greater than 1.25, classify as 'Pass.' If Days Past Due is 30-89 OR DSCR is between 1.0 and 1.25, classify as 'Special Mention.' If Days Past Due is 90-179 OR DSCR is below 1.0, classify as 'Substandard.' If Days Past Due is 180 or more, classify as 'Doubtful.' Generate the formula, explain each IF layer, and note any edge cases I should verify."*

Copilot will generate the formula — typically using nested IFs or the more readable `IFS` function — and explain each logical layer. **Verify the edge cases explicitly.** Ask: "What happens if a loan is 45 days past due but has a DSCR of 1.30?" The edge cases are where classification errors occur.

### XLOOKUP for Portfolio Cross-Referencing

Cross-referencing across multiple tables — matching loan IDs to borrower records, matching branch codes to regional assignments, matching product codes to rate schedules — is a constant task in portfolio analytics.

> *"I have two tables: a Loan Portfolio table with columns [Loan ID, Branch Code, Balance, Rate, Origination Date] and a Branch Reference table with columns [Branch Code, Region, RM Name, Market]. I need an XLOOKUP formula that pulls the Region and RM Name from the Branch Reference table into the Loan Portfolio table, matching on Branch Code. Handle cases where the Branch Code in the Loan Portfolio table does not exist in the Branch Reference table by returning 'Unmapped.' Explain the formula."*

### Dynamic Arrays for Multi-Branch Reporting

Excel's dynamic array functions — `FILTER`, `SORT`, `SORTBY`, `UNIQUE`, `SEQUENCE` — enable formulas that automatically expand to the correct size as data changes. For multi-branch reporting, these eliminate the need to manually adjust formula ranges each month.

> *"I need a formula that automatically extracts and sorts all loans for a specific branch from my master portfolio table, showing only loans where the balance is above \$500,000. The branch name will be entered in a reference cell. The output should automatically resize as loans are added or removed. Generate the formula using dynamic array functions and explain how it handles size changes automatically."*

### The LET Function for Readable Logic

For complex calculations with multiple intermediate steps, the `LET` function allows naming intermediate results — making formulas dramatically more readable and easier to audit.

> *"I need to calculate a Loan Risk Score that combines three factors: Days Past Due (weighted 40%), DSCR deviation from 1.25 (weighted 35%), and LTV above 80% flag (weighted 25%). Use the LET function to create named intermediate calculations for each factor, then combine them into a final score. Show the formula with the named variables so I can understand what each component contributes."*

::::{admonition} 🔑 The Formula Explanation Rule
:class: tip

Never accept a Copilot-generated formula without reading its explanation. For every formula, ask Copilot: "Explain what each component does and identify any assumptions the formula makes that I should verify." A formula that is logically correct but built on a wrong assumption is more dangerous than a formula that fails visibly — because it produces plausible-looking wrong answers.
::::

---

## 7. Building Financial Performance Dashboards

A financial performance dashboard is not a collection of charts. It is a curated information experience — organized so that the most important signals surface immediately, the supporting context is accessible one layer deeper, and the viewer leaves with a clear picture of where performance stands and where attention is needed.

Building a dashboard that achieves this requires both analytical design and business judgment. Copilot accelerates the construction. The design and judgment are yours.

:::{figure} ../images/ch13-dashboard-architecture.png
:label: fig-ch13-dashboard
:alt: Dashboard architecture infographic showing a three-layer structure. Layer 1 (Executive View): Four KPI summary cards at the top — Total Deposits, NIM, Loan Growth, Efficiency Ratio — with trend indicators. Layer 2 (Operational View): Two side-by-side charts — branch performance bar chart and deposit composition pie chart. Layer 3 (Detail View): Filterable data table with branch-level metrics. Each layer labeled with its purpose and audience. Blue and orange color scheme.
:width: 80%
:align: center

A three-layer dashboard architecture separates the executive summary from operational detail from raw data — each layer serving a different audience and analytical depth. Copilot helps build all three layers; the curation of what belongs in each layer requires business judgment.
:::

### What Copilot Can Do

**Suggest the dashboard structure.** Ask Copilot:

> *"I am building a monthly branch performance dashboard for Regional Managers at a commercial bank. The data includes: branch name, total deposits, DDA balance, new DDA accounts, commercial loan balance, new loan originations, and service fee income. What KPIs should appear in a summary view, and what supporting visuals would most efficiently communicate branch health? Organize the suggestions by executive summary, operational view, and detail layer."*

Copilot will provide a structured suggestion for dashboard architecture — which metrics belong at the executive level (total deposits, NIM, efficiency ratio), which belong in the operational view (branch-by-branch comparisons, trend charts), and what detail layer supports investigation.

**Generate the charts.** For each chart in the dashboard, use natural-language chart creation:

> *"Create a clustered bar chart comparing DDA balance growth by branch, with this month in blue and last month in orange. Add a horizontal reference line at the portfolio average growth rate. Sort branches from highest to lowest growth."*

**Identify KPIs to track.** Ask Copilot to suggest metrics relevant to your specific business objectives:

> *"What metrics should a branch-level dashboard include if the primary strategic objectives are DDA growth, commercial loan production, and deepening existing relationships?"*

### What Humans Must Do

**Validate every number.** Every figure in a dashboard that informs a leadership conversation must be verified against your core banking system. A dashboard built from an export with a formula error propagates that error to every chart, card, and summary figure it displays.

**Curate ruthlessly.** Copilot will suggest more than you need. A dashboard with 14 charts does not communicate — it overwhelms. The most important skill in dashboard design is deciding what to exclude. This is a judgment call that requires understanding your audience, their decision context, and what absence of a particular metric means for the viewer.

**Interpret and present.** A dashboard shows what. A professional explains why, so what, and now what. The numbers are the beginning of a conversation, not the conclusion. Copilot can draft commentary around the dashboard figures, but the interpretation that answers "what does this mean for our strategy" is yours.

---

## 8. Risk Analysis Workflows

Banking analytics exists to support risk-informed decision-making. The most sophisticated Copilot-in-Excel workflows in a banking context are risk analysis workflows — processes that aggregate data from multiple sources, apply analytical logic, and produce outputs that support credit, operational, market, and compliance decisions.

:::{figure} ../images/ch13-risk-analysis-workflow.png
:label: fig-ch13-risk-workflow
:alt: Circular workflow infographic showing the four-stage Risk Analysis cycle. Stage 1: Data Aggregation — pulling from multiple source tables. Stage 2: Copilot-Assisted Analysis — anomaly detection, formula generation, concentration calculation. Stage 3: Human Validation — cross-referencing, assumption review, judgment application. Stage 4: Output Production — ALCO-ready tables, leadership summaries, board exhibits. Connected by arrows in a continuous loop. Blue and orange color scheme.
:width: 80%
:align: center

Risk analysis is a cycle, not a one-time task. Copilot accelerates Stages 1 and 2. The quality of Stages 3 and 4 — human validation and output production — determines whether the analysis is actually safe to act on.
:::

### Concentration Risk Analysis

Concentration risk — the exposure created when loans, deposits, or counterparties cluster in a single segment — is a core focus of both internal credit policy and regulatory examination. Identifying concentrations requires aggregating the portfolio across multiple dimensions simultaneously.

> *"In my Commercial Loan table, calculate concentration metrics across three dimensions: Property Type (what percentage of total CRE loans falls into each type?), Geography (what percentage is concentrated in each MSA?), and Borrower (what is the single largest borrower exposure as a percentage of total capital?). Flag any concentration that exceeds 25% of total portfolio. Create a summary table and a chart for each dimension."*

The output of this analysis supports your Concentration Risk Report — a document that ALCO and the board receive on a regular cadence. Copilot accelerates construction of the underlying analysis. The policy interpretation — whether a 27% concentration in multifamily is acceptable given current market conditions — is an ALCO-level judgment.

### Deposit Composition Analysis

Understanding the stability and composition of your deposit base is essential for both asset-liability management and regulatory compliance. A well-constructed deposit composition analysis segments deposits by type, customer relationship, rate sensitivity, and maturity.

> *"In my Deposit table with columns [Account Type, Customer Segment, Balance, Rate, Rate Sensitivity (High/Medium/Low), Maturity Band], calculate: (1) total balance and percentage for each Account Type, (2) average rate by Rate Sensitivity classification, (3) total balance by Maturity Band, and (4) the percentage of total deposits that are rate-sensitive (High). Highlight any maturity band where more than 30% of total deposits mature within 90 days."*

This output feeds directly into the interest rate risk section of your ALCO package — a monthly or quarterly document that regulators examine closely.

### ALCO-Ready Outputs

The measure of an advanced Excel workflow is not whether the analysis is sophisticated. It is whether the output is usable — formatted, labeled, and organized in a way that a senior executive or examiner can read without needing a tour.

Ask Copilot to assist with output formatting:

> *"Format this Branch Performance Summary table for inclusion in an ALCO packet. The table should have a clean header, alternating row shading, bold totals row, percentage columns formatted to one decimal place, dollar columns formatted with commas and no cents, and a color indicator (green/yellow/red) in the Performance Rating column based on the values. Suggest the exact formatting steps."*

---

## 9. The Verification Discipline in Advanced Analytics

In Chapter 7, the verification discipline was introduced as a professional safeguard — a habit of reviewing Copilot's outputs before using them. At the basic level, this means checking formulas and spot-checking chart data.

At the advanced level, the stakes are different. A scenario model that feeds an ALCO presentation shapes how the board understands the institution's interest rate risk. A concentration risk analysis that identifies a threshold breach triggers a policy conversation. An anomaly detection report that flags unusual DDA activity influences an investigation. The complexity of the analysis raises the consequences of error — and therefore demands a correspondingly rigorous verification discipline.

:::{figure} ../images/ch13-five-step-review-protocol.png
:label: fig-ch13-review-protocol
:alt: Five-step verification protocol infographic presented as a vertical checklist with numbered steps. Step 1: Logic Review — does the formula do what I think it does? Step 2: Assumption Audit — did Copilot make any assumptions I did not specify? Step 3: Boundary Test — what happens at the edges? Step 4: Cross-System Verification — does this match what the core system shows? Step 5: Peer Review — can a qualified colleague validate the key outputs? Each step has an icon and a brief sub-description. Blue and orange color scheme.
:width: 80%
:align: center

The Five-Step Review Protocol scales to any complexity level. Apply all five steps to any Copilot-assisted model before it informs a leadership decision.
:::

### The Five-Step Review Protocol

**Step 1 — Logic Review.**
Read every formula Copilot generated and ask: "Does this formula do exactly what I intended?" For complex formulas with multiple nested conditions, trace through the logic manually using a single example row. Verify that the formula handles the edge cases you know exist in your data.

**Step 2 — Assumption Audit.**
Copilot sometimes makes assumptions that were not explicitly specified. Ask: "What assumptions did Copilot make in building this model that I did not specify?" Common implicit assumptions include: how ties are handled in rankings, what happens when a required lookup value is missing, whether percentage calculations use absolute or relative denominators. Every implicit assumption is a potential source of error.

**Step 3 — Boundary Test.**
Test the model's behavior at the edges. What does the loan classification formula output for a loan with exactly 90 days past due — the boundary between "Special Mention" and "Substandard"? What does the scenario model produce if deposit beta is zero? What does the concentration analysis show if you add a hypothetical loan that creates a new threshold breach? Boundary behavior reveals whether the logic is correct for all inputs, not just typical ones.

**Step 4 — Cross-System Verification.**
For any analysis that will inform a decision or be shared with leadership, verify at least three key output figures against your core banking system. Pull the same metrics from your institution's reporting environment and compare. If there is a discrepancy — even a small one — investigate before proceeding. The formula might be wrong. The data might have an export error. Either way, you need to know.

**Step 5 — Peer Review.**
For any model going to ALCO, the board, or an examiner, have a qualified colleague review the methodology and key outputs before distribution. This is not a reflection of your competence — it is the institutional standard for any analysis that drives material decisions. Copilot makes building models faster. It does not eliminate the professional responsibility to have high-stakes analysis reviewed.

::::{admonition} ⚠️ The Complexity-Verification Relationship
:class: warning

There is a counterintuitive risk in advanced analytical tools: as building becomes easier, the temptation to skip verification grows. A scenario model that took two days to build received scrutiny at every step. A scenario model that Copilot helped build in two hours may feel "done" before it has been properly reviewed. The speed of construction does not reduce the obligation to verify. It increases the importance of making verification a deliberate, non-negotiable step — not something you do when you have time, but something you do before the analysis leaves your hands.
::::

---

## 10. Building a BankUnited Analytics Playbook

Individual capability is valuable. Institutional capability is transformational. The difference between a single analyst who is excellent at Copilot-assisted Excel and a BankUnited analytics culture is documentation — the capture of workflows, templates, prompts, and protocols that allow any qualified professional to operate at the level that currently requires expertise.

The analytics playbook is that documentation.

:::{figure} ../images/ch13-analytics-playbook-structure.png
:label: fig-ch13-playbook
:alt: Infographic showing the structure of a BankUnited Analytics Playbook. Five sections arranged as notebook tabs: (1) Standard Templates — monthly, quarterly, ad-hoc. (2) Proven Prompt Library — categorized by analysis type. (3) Verification Protocols — by analysis stakes level. (4) Data Standards — column naming, table formats, source requirements. (5) Escalation Guidelines — what to flag, who to notify. Blue and orange color scheme, clean professional design.
:width: 80%
:align: center

A well-structured analytics playbook converts individual expertise into institutional capability. Each section addresses a different failure mode — missing templates, poor prompts, skipped verification, data inconsistency, and unclear escalation paths.
:::

### What the Playbook Contains

**Standard Templates.** A library of pre-built, validated Excel workbooks for the analyses that run on a regular cadence: monthly branch performance review, quarterly concentration risk report, annual deposit sensitivity analysis, ad-hoc CRE deal stress test. Each template includes documentation explaining how to use it, what data to input, and what the outputs mean.

**Proven Prompt Library.** A curated collection of Copilot prompts that have produced reliable, validated outputs for specific analytical tasks. Organized by analysis type — anomaly detection, formula generation, scenario modeling, dashboard building. Each prompt includes the context it assumes, the output it produces, and any known limitations.

**Verification Protocols by Stakes Level.** Three tiers of verification — lightweight (internal use only), standard (shared with management), rigorous (ALCO/board/examiner) — with specific steps required at each tier. This prevents both under-verification (high-stakes outputs reviewed casually) and over-verification (internal analysis slowed by unnecessary rigor).

**Data Standards.** A clear specification for how data should be formatted before it enters any analytical template. Column naming conventions, required table structure, source system documentation, and known data quality issues in common exports. Data standards prevent the class of error where the formula is correct but the input is wrong.

**Escalation Guidelines.** Clear protocols for what Copilot-flagged anomalies or analytical findings require escalation, to whom, and through what channel. Prevents both under-escalation (significant findings treated as routine) and over-escalation (routine data variations creating unnecessary management attention).

### How to Build It

The playbook is not built in a day — it is built in the course of doing the work. The discipline is documentation: each time you build a template or refine a prompt, record it. Each time you validate a model and find an implicit assumption, add it to the verification checklist. Each time a flagged anomaly turns out to be a data artifact versus a real risk signal, document the distinguishing factors.

Ask Copilot to help:

> *"I have just built and validated a monthly branch performance review template in Excel. Help me write a one-page documentation brief that describes: (1) what the template does and what it produces, (2) what data needs to be input and in what format, (3) what the key outputs mean, (4) what verification steps the user should run, and (5) who to contact if the outputs look unexpected. Write in plain professional language that an RM with strong Excel skills but no analytical background can follow."*

The playbook, once built, is the institutional return on every hour invested in advanced Copilot-in-Excel capability. It means the analysis does not live in one person's head or one person's laptop. It lives in the organization.

---

## Try This: Portfolio Stress-Test Model

Build a portfolio stress-test model in Excel using Copilot across all four stages. Apply the full review protocol before using the output.

**Setup:** Create a new Excel workbook saved to your OneDrive for Business. Format a table with the following columns: Loan ID, Loan Type (Fixed/Floating), Current Balance, Current Rate, Maturity (years), Repricing Frequency (months).

Add ten sample commercial loans with realistic BankUnited data — a mix of fixed and floating rate, varying maturities, balances ranging from \$2 million to \$25 million.

**Step 1 — Scenario Definition.** Define three rate scenarios in a separate input table: Scenario A (+100bps), Scenario B (+200bps), Scenario C (-50bps). Add columns for Expected Portfolio Yield Change and Deposit Cost Change for each scenario, using your institution's approved assumptions.

Ask Copilot: *"I have a commercial loan table and a scenario input table. Suggest the formula structure for calculating the interest income impact of each rate scenario, accounting for fixed versus floating rate loan types and the repricing frequency. Explain each formula component before generating it."*

**Step 2 — Sensitivity Table.** Ask Copilot: *"Build a sensitivity table that shows total portfolio interest income impact as deposit beta varies from 25% to 75% in 10% increments, holding rate shift at +200bps. Set up the data table structure and explain how it works."*

Review the formula structure Copilot provides. Apply Steps 1-3 of the review protocol (Logic Review, Assumption Audit, Boundary Test) before populating with your real assumptions.

**Step 3 — Visualization.** Ask Copilot: *"Create a clustered bar chart comparing interest income impact across the three rate scenarios. Add a second line chart showing how NIM changes as deposit beta varies in the +200bps scenario. Label all axes clearly and add a title appropriate for an ALCO packet."*

**Step 4 — ALCO Commentary.** After completing Steps 1-3 of the review protocol and verifying the model outputs against your institution's own scenario analysis, ask Copilot: *"Draft a one-paragraph ALCO commentary presenting these three rate scenarios, the key driver of NIM sensitivity, and the most important risk management implication. Write in formal financial prose."*

Apply all five steps of the review protocol before this output is used in any leadership context. The goal is not speed — it is a validated, presentation-ready model that you understand completely and can defend under examination.

---

## Glossary

```{glossary}
Anomaly Detection
  The process of identifying data points that deviate significantly from expected patterns. In banking analytics, used to flag unusual transaction activity, atypical portfolio performance, or concentration risk signals.

Concentration Risk
  The risk arising from excessive exposure to a single borrower, sector, geography, or counterparty. Monitored through Concentration Risk Reports reviewed by ALCO and the board.

DSCR (Debt Service Coverage Ratio)
  A measure of a borrower's ability to service debt, calculated as Net Operating Income divided by Total Debt Service. Used in CRE loan classification and stress testing.

Dynamic Arrays
  Excel functions (FILTER, SORT, SORTBY, UNIQUE, SEQUENCE) that automatically expand to fill the result size, eliminating manual range adjustments in reporting formulas.

LET Function
  An Excel function that allows naming intermediate calculations within a formula, making complex formulas more readable and auditable.

NIM (Net Interest Margin)
  The difference between interest income earned on assets and interest paid on liabilities, expressed as a percentage of average earning assets. A primary profitability metric for banks.

Python in Excel
  A Microsoft 365 feature that allows Python code to execute directly within Excel worksheets, accessing Python data science libraries including pandas, matplotlib, and scikit-learn.

Scenario Modeling
  An analytical technique that evaluates outcomes under multiple defined future states (scenarios), used in banking for rate sensitivity analysis, credit stress testing, and strategic planning.

Sensitivity Analysis
  A technique that shows how an output changes as a single input variable is systematically varied across a range, revealing which assumptions have the greatest impact on results.

XLOOKUP
  An Excel function that searches a range or array and returns a corresponding value, with more flexibility than VLOOKUP including reverse search, multiple match modes, and missing-value handling.

Deposit Beta
  The proportion of a rate change that passes through to deposit rates. A deposit beta of 50% means that when market rates rise 100bps, deposit rates rise 50bps.

ALCO (Asset-Liability Committee)
  The committee responsible for managing a bank's balance sheet risk, including interest rate risk, liquidity risk, and capital management. Reviews scenario analyses and concentration reports regularly.

Data Table (Excel)
  An Excel feature that runs a formula across a range of input values, creating a grid of results for sensitivity analysis. Distinct from a formatted Excel table.

Repricing Risk
  The risk arising from differences in the timing of rate changes on assets and liabilities. Fixed-rate assets and floating-rate liabilities create asymmetric repricing exposure in rising rate environments.

Analytical Template
  A pre-built, validated workbook designed to produce consistent analytical output when given new input data, allowing any qualified user to run the same rigorous analysis without rebuilding from scratch.
```

---

## Discussion

The shift from using Copilot as a question-answering tool to using it as a system-building accelerator represents a meaningful change in how analytics creates value in a banking organization. Rather than producing one-off analyses that live in individual inboxes, advanced Copilot workflows enable institutions to build analytical infrastructure that scales.

Consider the verification discipline in the context of your own work. What analyses do you produce regularly that currently rely entirely on your own review before distribution? What would a peer-review step for those analyses look like, and what errors might it catch?

::::{admonition} 📝 Discussion Guidelines
:class: note

Post your reflection in the course discussion forum before the next session. Your response should:

- Reference at least one specific BankUnited scenario where Copilot-assisted Excel would reduce analytical risk or improve consistency
- Address the relationship between analytical speed (which Copilot increases) and verification rigor (which must not decrease) in your specific role
- Respond to at least **two peers** with substantive feedback — not just agreement, but engagement with their specific examples and reasoning. Build on their ideas or respectfully challenge their assumptions.
- Include at least one citation from a credible source (regulatory guidance, industry research, or Microsoft documentation) supporting a claim in your response.

Minimum 300 words for your main post.
::::

---

## Leader's Takeaway

Advanced Copilot in Excel shifts the role of the analytics function in a banking organization. When building a rigorous scenario model takes two hours instead of two days, the question is no longer whether to do the analysis — it is whether the culture has the discipline to do it well.

The leaders who extract the most value from this capability will be those who invest equally in two things: the technical workflows (templates, prompts, verification protocols) and the professional culture (the habit of rigorous review, the expectation that analytical outputs are validated before they become decisions).

Copilot makes the analytical systems easier to build. The verification discipline, the institutional playbook, and the professional judgment that interprets outputs and acts on findings — those remain irreducibly human. The leaders who understand this distinction will build teams that are both faster and more trustworthy. Speed without rigor is acceleration toward error. Rigor enabled by speed is competitive advantage.

The goal, as always, is not to automate judgment. It is to give judgment better raw material to work with — and more time to actually exercise it.
