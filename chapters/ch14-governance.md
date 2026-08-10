---
title: "Chapter 14: Governance — Running the Machine Responsibly"
subtitle: "Committees, Controls, and the Metrics That Justify the Investment"
short_title: "Governance"
description: "What enterprise AI governance actually looks like inside a bank — the committee structure, the policies that matter, and the exact metrics and KPIs available in Microsoft 365 Admin Center and Copilot Analytics that executives need to measure adoption, demonstrate ROI, manage risk, and sustain board-level confidence in the investment."
label: ch-14-governance
tags: [governance, Microsoft 365 Admin, Copilot Analytics, AI committee, KPIs, adoption metrics, ROI, risk management, compliance, BankUnited, executive reporting, responsible AI, data classification, DLP]
---

```{admonition} Download this Chapter as PDF
:class: tip

[Download PDF](https://github.com/liquid-books/ai-copilot-bankunited/raw/main/pdfs/ch14-governance.pdf)
```

# Chapter 14: Governance — Running the Machine Responsibly

:::{figure} ../images/ch14-governance-infographic.png
:label: fig-ch14-infographic
:alt: Illustrated governance framework infographic for enterprise Microsoft Copilot deployment. Central hub labeled "AI Governance Committee" connects to five outer rings: Policy & Compliance, Adoption & ROI, Risk & Security, Training & Enablement, and Reporting & Escalation. Microsoft 365 Admin Center dashboard icons appear in the corners. Blue and dark teal color scheme with banking context throughout.
:width: 80%
:align: center

Governance is not overhead — it is the mechanism by which a technology investment becomes an institutional asset. The five pillars of Copilot governance at BankUnited: policy, adoption, risk, enablement, and reporting.
:::

> *"You can't manage what you can't measure. You can't sustain what you can't explain."*
> — adapted from Peter Drucker

Every significant technology deployment in the history of BankUnited has eventually generated the same question from the same room. It comes from the CFO, or the Chief Risk Officer, or a board member who has read something alarming in the Wall Street Journal about AI. The question is some version of: **"Are we in control of this? And can you prove it?"**

That question is not hostile. It is the right question. It is the question that distinguishes a bank that has deployed Copilot as a genuine institutional capability from a bank that has bought a license and hoped for the best.

This chapter is the answer. Not a philosophical answer about responsible AI — though responsibility matters — but a practical, operational answer. It covers exactly how to structure the governance function: who sits on the committee, what they actually do, how often they meet, and what they decide. It covers the specific metrics available in Microsoft 365 Admin Center and the Copilot Analytics dashboard — not a general list of things to consider, but the precise reports, the exact KPIs, and the analytical discipline required to turn data into the narrative your executives need to justify this investment quarter after quarter.

If you are the person responsible for making Copilot successful at BankUnited, this chapter is your operating manual.

---

## 1. Why Governance Is Not Optional in Banking

Most industries can treat AI governance as a best practice — something thoughtful organizations do because it produces better outcomes. Banking cannot.

BankUnited operates under a regulatory framework that has explicit expectations about model risk, data privacy, and the use of automated systems in customer-facing and back-office processes. The OCC, the FDIC, and state banking regulators have each published guidance — much of it in the last 18 months — that treats AI tools in the enterprise as a category of technology that requires documented controls, audit trails, and demonstrated oversight.

This is not a legal chapter. But it is important to state the regulatory context plainly at the outset: **the governance structure you build for Copilot is not just good management. For a federally regulated bank, it is a risk management requirement.**

Beyond compliance, there is a simpler business case for governance. The license cost for Microsoft 365 Copilot at enterprise pricing is material. Every unused seat is a line on a P&L that someone has to defend. Every accidental data exposure is a reputation risk. Every poorly trained employee using Copilot to generate client-facing materials without review is a quality risk. Governance is the mechanism by which the investment produces returns instead of liabilities.

:::{figure} ../images/ch14-why-governance-matters.png
:label: fig-ch14-why-governance
:alt: Three-panel infographic illustrating why AI governance is non-optional for banks. Left panel: Regulatory Pressure — icons for OCC, FDIC, model risk guidance. Center panel: Financial Accountability — license cost visualization, ROI tracking requirement. Right panel: Operational Risk — data exposure, quality control, employee readiness. Each panel shows the consequence of absence versus the benefit of governance structure. Blue and dark teal, banking context.
:width: 80%
:align: center

Three forces make governance non-negotiable for BankUnited: regulatory expectations around AI model risk, the financial accountability of a material technology investment, and the operational risks created by an unmanaged deployment.
:::

The governance structure described in this chapter addresses all three forces simultaneously. It is designed to be proportionate — rigorous enough to satisfy regulators and executives, streamlined enough to avoid creating organizational drag.

---

## 2. The AI Governance Committee — Structure and Mandate

### 2.1 Why a Committee?

AI governance at the enterprise level requires decisions that cross organizational boundaries. Copilot sits at the intersection of IT infrastructure, data privacy, HR policy, legal compliance, business operations, and executive strategy. No single function owns all of those dimensions simultaneously.

The governance committee exists to provide a standing forum where those functions are represented, where decisions can be made with full visibility into competing considerations, and where accountability is shared rather than siloed.

This is not a committee that manages Copilot day-to-day. It sets policy, reviews performance, makes escalation decisions, and reports to leadership. The day-to-day management sits in IT and with designated business unit champions. The committee provides oversight.

### 2.2 Committee Composition

The following roles represent the minimum viable committee for an institution of BankUnited's size and regulatory complexity. Some organizations may expand this list; very few should contract it.

**Executive Sponsor (Chair)**
Typically the Chief Information Officer or Chief Digital Officer. This is the person who owns the relationship with Microsoft, who has P&L accountability for the license investment, and who reports to the board on technology strategy. The executive sponsor does not run every meeting — but their presence at quarterly reviews signals that governance has organizational standing, not just administrative existence.

**Chief Risk Officer (or Deputy)**
The CRO's presence is not negotiable for a regulated financial institution. Copilot creates model risk, data risk, and vendor risk exposures. The CRO or a designated deputy needs visibility into those exposures and a formal role in establishing the risk appetite framework that governs how Copilot can and cannot be used.

**Chief Information Security Officer**
The CISO owns the data classification and data loss prevention posture that directly determines what information Copilot can access and surface. The CISO is also the person who will respond to any security incident involving Copilot. They need to be at the table from the beginning, not called in after a problem occurs.

**General Counsel or Chief Compliance Officer**
Legal and compliance provide the regulatory interpretation function. When a new OCC guidance document is published, or when a question arises about whether a specific Copilot use case creates fair lending exposure, the GC or CCO is the authoritative voice. They also own the policy documentation that auditors will review.

**Chief Human Resources Officer or VP of Learning & Development**
HR owns the change management function. They determine how training is structured, how performance expectations are communicated, and — critically — what the policy implications are when employees misuse the tool. They are also the right function to lead adoption measurement, since Copilot adoption is, at its core, a human behavior change problem.

**Business Unit Representatives (2–3 rotating seats)**
Governance cannot be purely an infrastructure and compliance exercise. Business units are the primary users, and they generate the most important feedback: where Copilot is creating genuine value, where it is falling short of expectations, and where policy constraints are creating friction that needs to be resolved. Rotating representation ensures that over time, the committee hears from every major business area.

**Microsoft Relationship Manager or Technical Account Manager**
Microsoft should have a standing invitation to governance meetings, at minimum quarterly. Their technical account team has visibility into the product roadmap, upcoming feature changes, and security advisories before they reach public channels. They are also the right escalation path when platform-level issues arise.

### 2.3 Meeting Cadence and Agenda Structure

**Monthly: Operations Review (60 minutes)**
Attendance: IT lead, CISO representative, business unit champions
Focus: Adoption metrics from the previous month, open support tickets, policy questions that have been escalated by business units, upcoming training events. This is an operational meeting, not a strategic one. The goal is to keep the deployment running smoothly and to surface issues early.

**Quarterly: Strategic Review (90 minutes)**
Attendance: Full committee
Focus: Aggregate ROI analysis, license utilization review, risk and compliance update, roadmap review with Microsoft TAM, policy decisions that require cross-functional sign-off, executive reporting preparation. This meeting produces the materials that the executive sponsor takes to the board or the operating committee.

**Annual: Policy and Investment Review (half-day)**
Attendance: Full committee plus CFO
Focus: License renewal decision, policy framework review and updates, training curriculum assessment, benchmark comparison against peer banks, strategic roadmap for the next 12 months. The annual review is where the governance committee makes its most consequential decisions — and where it produces the comprehensive ROI narrative that justifies continued investment.

### 2.4 Key Committee Decisions

The governance committee is the decision-making authority for the following categories:

**Use case approval.** When a business unit wants to use Copilot in a new context — particularly one involving customer data, credit decisions, or regulatory-facing work — the governance committee reviews and approves or restricts the use case before it goes into production.

**Data access policy.** Which SharePoint sites, OneDrive folders, and Teams channels can Copilot index? The CISO and compliance team propose; the committee approves. This is not a one-time decision — it is reviewed regularly as the business evolves.

**License allocation.** Who gets Copilot licenses? Priority sequencing, expansion decisions, and reallocation of unused licenses are committee decisions with CFO visibility.

**Incident response.** When a Copilot-related incident occurs — a data leak, an inappropriate output, a regulatory inquiry — the committee activates the response protocol and owns the documentation trail.

**Policy exceptions.** Individual business units will occasionally need to do something that sits at the edge of established policy. Exceptions require committee review, time-limited approval, and documentation.

---

## 3. The Policy Framework — What Actually Needs to Be Written Down

Before turning to metrics, it is worth being direct about documentation. Regulators do not audit adoption rates. They audit policies, procedures, and evidence that those policies are followed. The governance committee needs a small, well-maintained policy library — not an overwhelming bureaucracy, but a clear set of documented rules that any auditor can review.

### 3.1 Acceptable Use Policy

The Copilot Acceptable Use Policy answers one question with specificity: what can employees do with Copilot, what are they prohibited from doing, and what requires prior approval?

**Must-include provisions:**

- Copilot outputs must be reviewed and verified before use in any client-facing, regulatory, or financial document. Copilot does not produce authoritative content — it produces drafts that require human judgment.
- Employees may not use Copilot to process data that exceeds their own access permissions. If you cannot read a file, you cannot use Copilot to summarize it.
- Copilot may not be used to make or record credit decisions. It may be used to draft analysis that supports a human credit decision, with review.
- Prompts containing sensitive customer information — Social Security numbers, account numbers, loan details — must follow the same handling protocols as the underlying data.
- Personal use of Copilot on corporate accounts is prohibited. The tool is licensed for business purposes.

### 3.2 Data Classification and Access Control Policy

Microsoft Purview sensitivity labels determine what Copilot can and cannot surface in responses. The governance committee, in partnership with the CISO, needs to establish and document:

- Which sensitivity labels exist in the BankUnited environment (e.g., Public, Internal, Confidential, Highly Confidential, Restricted)
- Which label tiers Copilot is permitted to reference in its responses
- How documents in shared channels are labeled by default
- The review cycle for label assignments on high-value repositories

This policy interacts directly with Data Loss Prevention rules in Microsoft Purview, which can block Copilot from surfacing specific content types regardless of sensitivity label.

### 3.3 Incident Classification and Response Policy

Not every Copilot incident is a breach. The governance committee needs a tiered classification system:

**Tier 1 — Operational anomaly:** Copilot produced an incorrect or unexpected output with no data exposure. Logged, reviewed by IT, addressed in next training cycle. No escalation required unless pattern emerges.

**Tier 2 — Policy deviation:** An employee used Copilot in a way that violated acceptable use policy. HR and compliance are notified. The employee receives remedial training. Incident is documented for audit trail.

**Tier 3 — Data exposure event:** Copilot surfaced or transmitted data in a way that may constitute a data privacy or regulatory incident. CISO, GC, and CRO are immediately notified. Incident response protocol activates. Regulatory notification timeline assessment begins within 24 hours.

---

## 4. Microsoft Admin Center — What You Can Actually See

Here is where this chapter becomes most directly actionable for the people running Copilot at BankUnited. The Microsoft 365 Admin Center and the Copilot Analytics dashboard inside it contain a substantial set of metrics and reports. Not all of them are equally useful. The following is a precise guide to what exists, where to find it, and why it matters.

### 4.1 Navigating to the Right Reports

Everything described in this section lives inside the Microsoft 365 Admin Center at **admin.microsoft.com**. You will need a global admin, reports reader, or usage summary reports reader role to access the reports described here.

The primary navigation path is:

**Admin Center → Reports → Usage → Microsoft 365 Copilot**

Within that section, you will find several sub-reports. The Viva Insights integration (if your organization has enabled it) provides deeper behavioral analytics. The Microsoft Purview compliance portal provides the data governance and DLP metrics.

### 4.2 Adoption and Activity Metrics

**Active Users (Last 7, 30, 90 Days)**

*What it shows:* The number of users who have generated at least one Copilot interaction within the selected time window. This is the single most important adoption metric because it distinguishes licensed users who are actually using the tool from those who have a license and have done nothing with it.

*Why it matters:* License ROI begins with utilization. If BankUnited has deployed 500 Copilot licenses and only 200 users are active in a given 30-day period, 300 seats are generating zero return. The governance committee needs this number every month. When it is below target, the response is a training intervention or a license reallocation decision — not an assumption that the tool is not valuable.

*Target benchmark:* Microsoft's published adoption research suggests that organizations with strong enablement programs achieve 60–70% active-user rates within six months of deployment. Rates below 40% at six months indicate an enablement gap, not a product gap.

---

**Copilot Activity by Application**

*What it shows:* A breakdown of Copilot interactions by Microsoft 365 app — Word, Excel, PowerPoint, Teams, Outlook, OneNote, SharePoint, and others.

*Why it matters:* This report reveals where employees are finding value and where they are not. If Copilot in Teams (meeting transcription and summaries) has very high engagement but Copilot in Excel has very low engagement, that tells you something specific: employees are comfortable with the low-friction use cases but have not yet been trained on the higher-effort, higher-value analytical use cases. The governance committee can use this breakdown to focus the next training cycle rather than delivering generic refreshers.

*BankUnited-specific interpretation:* For a financial institution, high engagement in Outlook (email drafting) with low engagement in Excel (financial analysis) may indicate that employees do not yet trust Copilot for analytical work, or that they have not received adequate training. Both are addressable. Neither shows up without this report.

---

**Recommended Content Activity**

*What it shows:* How frequently Copilot's recommended files and content suggestions are being clicked and used versus ignored.

*Why it matters:* Low click rates on recommended content may indicate that Copilot's index of organizational content is not well-organized, that employees do not understand how to use recommended content workflows, or that sensitivity labels are blocking legitimate content from surfacing. This metric is a leading indicator of whether BankUnited's knowledge management infrastructure is supporting Copilot's capabilities.

---

**Meeting Transcription and Summary Usage**

*What it shows:* The number of meetings where Copilot generated a transcript or summary, the number of users who accessed those summaries, and the rate at which follow-up actions from Copilot summaries were assigned or acknowledged.

*Why it matters:* Meeting summaries are one of the highest-satisfaction Copilot use cases in enterprise deployments. When this metric is low despite active Teams usage, it typically means employees do not know the feature exists or do not trust the summaries. Both are training problems. When this metric is high, it validates the meeting efficiency ROI case — a metric you will use in executive reporting.

---

**Prompt Volume and Session Depth**

*What it shows:* The number of prompts submitted per active user per day (session depth), and the total prompt volume across the organization.

*Why it matters:* A user who submits two prompts per month is treating Copilot as a curiosity. A user who submits 15–20 prompts per day is deeply integrated. The governance committee needs the distribution, not just the average — a high average can mask a bimodal population of heavy users and non-users that requires different interventions.

---

### 4.3 Enablement and Readiness Metrics

**Training Completion Rates**

*What it shows:* If BankUnited is using Viva Learning (Microsoft's training delivery platform integrated with Microsoft 365) or has assigned Copilot training modules through the Admin Center, completion rates are trackable at the individual and department level.

*Why it matters:* The correlation between training completion and active usage is well-documented. Employees who complete structured Copilot training use the tool at 2–3x the rate of those who receive no formal onboarding. The governance committee should treat training completion as a leading indicator of future adoption metrics — not a compliance checkbox.

*Practical note:* If BankUnited is not using Viva Learning for training delivery, completion tracking requires a separate system (an LMS, a SharePoint tracking list, or manual reporting by HR). The governance committee should establish how this will be measured before training programs launch, not after.

---

**Copilot Adoption Score (Microsoft Viva Insights)**

*What it shows:* Microsoft calculates an adoption score that aggregates active usage, feature breadth, and session depth into a single composite metric. It benchmarks against Microsoft's anonymized peer data from organizations of similar size and industry.

*Why it matters:* This score gives the executive sponsor something concrete to present to the board: "We are at the 62nd percentile of adoption for financial services organizations of our size, up from the 44th percentile last quarter." That framing transforms an abstract technology deployment into a competitive positioning narrative.

*Access note:* Full Viva Insights adoption scores require a Viva Insights license in addition to the Copilot license. The governance committee should verify whether this has been enabled.

---

### 4.4 Risk and Compliance Metrics

These metrics live primarily in the **Microsoft Purview Compliance Portal** rather than the Admin Center's usage reports. Access requires a compliance administrator or compliance data administrator role.

---

**Data Loss Prevention (DLP) Policy Match Volume**

*What it shows:* The number of Copilot interactions that triggered a Data Loss Prevention policy — meaning the prompt or the response contained content flagged by DLP rules (credit card numbers, Social Security numbers, account numbers, regulated data categories, etc.).

*Why it matters:* This is the risk metric that the CISO and CRO will care about most. A DLP match does not mean a breach occurred — depending on DLP configuration, the action may have been blocked, warned, or audited without blocking. But the volume and trend of DLP matches tells you how often employees are attempting (whether intentionally or accidentally) to use Copilot in ways that touch sensitive data.

*What to watch for:* A sharp increase in DLP matches following a new feature launch or a training event is often a sign that employees are experimenting with capabilities they have not been trained to use safely. The response is targeted communication and additional training, not necessarily policy restriction.

---

**Sensitivity Label Activity on Copilot-Referenced Content**

*What it shows:* The distribution of sensitivity labels on content that Copilot referenced in generating responses — breaking down how much of Copilot's source material was Public, Internal, Confidential, or Highly Confidential.

*Why it matters:* This metric directly informs the data access policy discussion. If a significant percentage of Copilot's referenced content is labeled Highly Confidential, the governance committee needs to examine whether those access patterns reflect intended policy or unintended indexing. For a bank, the sensitivity label distribution of Copilot's source material will be an audit finding if it has not been actively reviewed and documented.

---

**Communication Compliance Alerts**

*What it shows:* Microsoft Purview Communication Compliance can be configured to monitor Copilot outputs for specific content categories — regulatory communication violations, inappropriate content, competitive intelligence handling. When a flagged output is reviewed, the outcome (no action, policy violation, escalation) is logged.

*Why it matters:* Communication compliance monitoring is not surveillance for its own sake. For a federally regulated bank, it is the documented evidence that BankUnited has controls in place to detect and respond to AI outputs that could create regulatory exposure. Auditors will ask whether this monitoring exists. The answer needs to be yes, with reports to prove it.

---

**Privileged Access and Admin Activity Log**

*What it shows:* Changes to Copilot configuration, policy settings, sensitivity label assignments, and DLP rules in the Admin Center — logged with timestamps and attributed to specific admin accounts.

*Why it matters:* Configuration integrity is a basic control requirement. The governance committee should review admin activity logs at least quarterly to verify that no unauthorized configuration changes have been made. In a bank environment, this log is also part of the change management record that supports SOX and operational risk compliance.

---

### 4.5 Financial and ROI Metrics

These metrics do not come directly from a Microsoft dashboard. They require the governance committee to build and maintain a calculation model that connects usage data from Admin Center to business value estimates. The following framework is how that model should be constructed.

---

**Time Saved Per Active User**

*The calculation:* Microsoft publishes research data showing average time savings by Copilot feature and job role — for example, that Copilot in Outlook saves an average of 11 minutes per day on email for active users, or that meeting summaries reduce meeting follow-up time by an average of 8 minutes per meeting. These averages are benchmarks, not guarantees, but they provide the multiplier for a conservative ROI estimate.

The formula: *Active Users × Average Daily Time Saved (minutes) × Working Days per Quarter ÷ 60 = Hours Saved per Quarter*

At a loaded labor rate appropriate to BankUnited's average fully burdened cost per employee hour, this produces a dollar figure for the quarterly ROI from time savings alone.

*What to present to the CFO:* A conservative calculation (using the low end of Microsoft's published benchmarks) alongside a moderate calculation (using midpoint benchmarks). Never use the high-end benchmarks without independent internal validation. CFOs who have been burned by technology ROI projections that used optimistic assumptions remember it. Be conservative, be right, and let actual results beat projections rather than fall short of them.

---

**Copilot-Attributed Output Quality Events**

*What it tracks:* Specific, documented instances where Copilot contributed to a measurable business outcome — a proposal that was submitted faster, a compliance document that was drafted in one session rather than three, a meeting summary that led to a tracked action item being completed that would otherwise have been missed.

*Why it matters:* Time savings tell the efficiency story. Output quality events tell the effectiveness story. Both are necessary for a complete ROI narrative. The governance committee should establish a lightweight mechanism for business units to submit these instances — not a bureaucratic reporting system, but a simple channel (a Teams form, a shared Planner board) where champions can log notable Copilot contributions.

*Executive framing:* "Last quarter, we documented 47 Copilot-attributed efficiency events across Credit, Operations, and Compliance. Three involved regulatory documentation that was completed ahead of deadline for the first time in two years." That is a board-level narrative. It requires the data infrastructure described here.

---

**License Utilization Rate and Cost-Per-Active-User**

*The calculation:* Total monthly license cost ÷ Number of active users (30-day) = Cost per active user per month.

As adoption increases, cost per active user decreases. This metric makes the efficiency argument for continued or expanded investment visible in a format that finance and the board understand immediately.

*Target:* At 100% utilization (every licensed user is active every month), the cost per active user equals the license price. At 50% utilization, the effective cost doubles. The governance committee should track this metric monthly and use it to drive both adoption interventions and license right-sizing decisions.

---

## 5. The Executive Reporting Narrative

Governance metrics are only valuable if they are synthesized into a coherent narrative that reaches the right people. The following describes the reporting structure the governance committee should maintain.

### 5.1 The Monthly Operations Scorecard

A single-page (or single-slide) document distributed to the executive sponsor and CIO after each monthly operations review. Contents:

| Metric | This Month | Last Month | Target | Status |
|--------|-----------|-----------|--------|--------|
| Active Users (30-day) | — | — | — | 🟢 / 🟡 / 🔴 |
| License Utilization Rate | — | — | — | 🟢 / 🟡 / 🔴 |
| DLP Policy Match Volume | — | — | — | 🟢 / 🟡 / 🔴 |
| Top Copilot App by Usage | — | — | — | — |
| Training Completion (YTD) | — | — | — | 🟢 / 🟡 / 🔴 |
| Open Incidents | — | — | — | 🟢 / 🟡 / 🔴 |
| Copilot-Attributed Events Logged | — | — | — | — |

The color coding (green/yellow/red) is relative to targets the governance committee has set, not to absolute thresholds. The executive sponsor receives this document and decides whether to escalate any items to the broader committee before the next quarterly review.

### 5.2 The Quarterly Board Brief

A three-to-five slide or memo package distributed to the board technology committee (or the full board, depending on BankUnited's governance structure) after each quarterly strategic review. Contents:

**Slide 1 — Investment Summary:** License count, total quarterly cost, active user count, cost-per-active-user, comparison to prior quarter.

**Slide 2 — Adoption Progress:** Active user trend (rolling 12 months if available, at least 3 months), adoption score benchmark versus peers, top three use cases by engagement volume.

**Slide 3 — Value Delivered:** Time saved estimate (conservative calculation), Copilot-attributed output quality events (with 2–3 specific examples), any measurable process improvements directly linked to Copilot usage.

**Slide 4 — Risk and Compliance Posture:** DLP match volume and trend, sensitivity label distribution on Copilot-referenced content, open policy exceptions, incident log summary (count and tier classification only — no details in board-level materials).

**Slide 5 — Decisions Required:** Any items requiring board-level input — license expansion, policy framework update, budget reallocation, Microsoft contract renewal.

### 5.3 The Annual ROI Report

Once per year, the governance committee produces a comprehensive ROI report for the CFO and board. This is the document that either justifies renewal and potential expansion, or flags that the investment is underperforming and proposes a remediation plan.

The annual report contains:

- Full-year utilization and adoption data
- Conservative, moderate, and (if warranted) optimistic ROI calculations using actual time-saved data
- Comparison to the prior year and to initial deployment projections
- Benchmark comparison to peer financial institutions (Microsoft TAM provides anonymized peer data)
- Policy framework review — what changed, why, and whether current policy is adequate
- Training program assessment — what worked, what did not, and what the next-year curriculum will look like
- License right-sizing recommendation — the exact number of licenses that can be justified based on utilization data

The annual ROI report is the most important document the governance committee produces. It is the answer to the board's question: "Are we getting value from this? Should we continue?"

---

## 6. Common Governance Failures — What to Avoid

### 6.1 Governance Theater

The most common failure mode: the governance committee meets, produces documents, and files them away — without making decisions, enforcing policies, or acting on the data. Regulators call this "governance theater," and they recognize it immediately. If the DLP match volume is increasing month over month and the governance committee's response is to note it and move on, the committee is not functioning.

Every quarterly meeting should end with at least one decision that changes how Copilot is deployed, trained, or governed. If there is nothing to decide, the metrics are either not being collected or not being interpreted correctly.

### 6.2 Treating Governance as an IT Function

Copilot governance is not an IT infrastructure problem. IT can provide the metrics. IT can enforce the technical controls. But the policy decisions, the ROI narrative, the human behavior change program, and the regulatory communication are not IT problems — they are cross-functional leadership problems. When IT owns governance alone, it produces technically rigorous but organizationally irrelevant output. The governance committee structure described in this chapter exists specifically to prevent this.

### 6.3 Setting Policies Without Reviewing Them

The data classification policy written in month one of a Copilot deployment is almost certainly wrong by month twelve. The organization has changed — new business units, new data types, new regulatory guidance, new Copilot capabilities that the original policy did not contemplate. The governance committee needs a standing annual policy review, and a mechanism for off-cycle reviews when a significant change occurs.

### 6.4 Ignoring the Employee Experience

Governance that employees experience as obstruction generates shadow behavior — employees finding workarounds, using personal devices, or avoiding the tool entirely to escape the friction. The governance committee needs a feedback loop from the business unit champions: where is policy creating friction that is disproportionate to the risk it is managing? Some friction is appropriate. Friction that prevents legitimate, high-value use cases is a governance failure, not a feature.

---

## 7. BankUnited's Governance Starting Point — A Practical Checklist

The following checklist is not a compliance framework. It is a practical starting point for BankUnited's governance team to assess where the deployment currently stands and what needs to be built.

**Committee Infrastructure**
- [ ] Governance committee is formally chartered with documented membership and meeting cadence
- [ ] Executive sponsor is identified and has committed to quarterly attendance
- [ ] Business unit champions are identified in each major department
- [ ] Microsoft TAM has standing invitation to quarterly reviews

**Policy Documentation**
- [ ] Acceptable Use Policy is drafted, reviewed by GC, and distributed to all licensed users
- [ ] Data Classification and Access Control Policy is documented and reviewed by CISO
- [ ] Incident Classification and Response Policy is documented and tested
- [ ] Policies are stored in a location auditors can access

**Metrics and Reporting**
- [ ] Admin Center access is configured for governance lead (reports reader role minimum)
- [ ] Microsoft Purview Compliance Portal access is configured for CISO representative
- [ ] Monthly Operations Scorecard template is built and assigned to an owner
- [ ] Quarterly Board Brief template is built and reviewed by executive sponsor
- [ ] Copilot-attributed events tracking channel is operational

**Training and Enablement**
- [ ] Initial onboarding training has been delivered to all licensed users
- [ ] Training completion is being tracked (LMS or equivalent)
- [ ] Advanced training curriculum is planned for high-utilization roles
- [ ] Remedial training protocol is documented for policy deviation incidents

**Risk Controls**
- [ ] DLP policies in Microsoft Purview have been reviewed and updated for Copilot
- [ ] Sensitivity labels have been applied to high-priority SharePoint repositories
- [ ] Communication Compliance monitoring is configured for Copilot outputs
- [ ] Admin activity logging is enabled and reviewed quarterly

---

## 8. The Governance Posture That Earns Trust

There is a version of governance that views itself as a brake — a function that slows down deployment to reduce risk. That version is expensive, frustrating, and ultimately counterproductive.

The governance posture that serves BankUnited is different. It views itself as the **institutional trust-building mechanism** for a powerful new capability. Every well-documented policy, every clean audit trail, every quarterly board brief with honest ROI data, every DLP alert that was caught and addressed — these are the deposits in the account of institutional confidence that makes it possible for the organization to expand Copilot's role over time, rather than contract it at the first sign of difficulty.

The goal is not perfect control. The goal is demonstrated, documented, competent oversight. Regulators do not expect perfection. They expect evidence that BankUnited is paying attention — that the humans responsible for this technology know what it is doing, are measuring what matters, and are making rational decisions in response to what they find.

The committee structure, the policies, the Admin Center metrics, and the reporting cadence described in this chapter deliver exactly that evidence. They are, collectively, BankUnited's answer to the question that will come from every board room, every examiner visit, and every leadership transition:

**"Are we in control of this? And can you prove it?"**

With this governance framework in place, the answer is yes.

---

## Chapter Summary

Governance is the mechanism that transforms a technology deployment into a sustainable institutional capability. For BankUnited, the governance framework for Microsoft Copilot rests on four foundations:

**Structure:** An AI Governance Committee with cross-functional representation — CIO, CRO, CISO, GC, and CHRO — meeting monthly at the operational level and quarterly at the strategic level, with an annual investment review that includes the CFO.

**Policy:** Three core documents — Acceptable Use, Data Classification and Access Control, and Incident Response — that are documented, distributed, maintained, and available to auditors.

**Metrics:** Specific, actionable data from Microsoft 365 Admin Center and Microsoft Purview — active users, application engagement, license utilization, DLP match volume, sensitivity label distribution, and training completion — synthesized into monthly and quarterly reports that enable decisions, not just observations.

**Narrative:** A reporting cadence — Monthly Operations Scorecard, Quarterly Board Brief, Annual ROI Report — that translates operational data into the executive language of cost, value, and risk.

The governance committee that operates with discipline on these four foundations will not just protect BankUnited from the risks of Copilot deployment. It will build the institutional confidence that allows BankUnited to expand, deepen, and ultimately multiply the return on what is already a material technology investment.

That is the final lesson of this course: **the teams that govern AI well are the teams that get to do more with it.**

---

```{admonition} Key Terms
:class: note

**AI Governance Committee** — A standing cross-functional committee responsible for policy, oversight, risk management, and ROI reporting for enterprise AI deployments.

**Data Loss Prevention (DLP)** — Microsoft Purview rules that detect and block (or audit) transmission of sensitive data categories through Copilot and other Microsoft 365 channels.

**Sensitivity Labels** — Classifications applied to Microsoft 365 content (files, emails, sites) that control how Copilot can reference and surface that content in responses.

**Active Users (30-day)** — The count of users who generated at least one Copilot interaction in the trailing 30 days; the primary measure of license utilization.

**Adoption Score** — Microsoft's composite metric combining active usage, feature breadth, and session depth, benchmarked against peer organizations.

**License Utilization Rate** — Active users divided by total licensed users; the primary financial efficiency metric for Copilot governance.

**Communication Compliance** — Microsoft Purview capability that monitors Copilot outputs for policy violations, regulatory exposure, and inappropriate content.

**Copilot-Attributed Event** — A documented business outcome to which Copilot contributed, used to build the qualitative ROI narrative alongside quantitative time-savings calculations.
```

```{admonition} Governance Quick Reference — Admin Center Reports
:class: tip

| Report | Location | Update Frequency |
|--------|----------|-----------------|
| Active Users | Admin → Reports → Usage → Copilot | Daily |
| Activity by App | Admin → Reports → Usage → Copilot | Daily |
| Adoption Score | Viva Insights Admin | Weekly |
| DLP Policy Matches | Purview → Reports → DLP | Near real-time |
| Sensitivity Label Activity | Purview → Information Protection | Daily |
| Communication Compliance | Purview → Communication Compliance | Daily |
| Admin Activity Log | Admin → Security → Audit | Real-time |
| Training Completion | Viva Learning Admin / LMS | Per completion |
```
