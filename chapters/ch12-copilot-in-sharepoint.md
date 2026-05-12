---
title: "Chapter 12: Week 4, Session B — Copilot in SharePoint"
subtitle: "Where Knowledge Lives — and How AI Makes It Findable"
short_title: "Copilot in SharePoint"
description: "SharePoint is Copilot's most important data source at BankUnited. This chapter covers the permission inheritance model, the oversharing risk that every bank must understand, content governance for Copilot readiness, and the practical workflows that make SharePoint — and therefore Copilot — genuinely useful for every BankUnited team."
label: ch-12-copilot-in-sharepoint
tags: [SharePoint, Microsoft Copilot, knowledge management, content governance, permissions, BankUnited, Microsoft Graph, oversharing, compliance, banking]
---

```{admonition} Download this Chapter as PDF
:class: tip

[Download PDF](https://github.com/liquid-books/ai-copilot-bankunited/raw/main/pdfs/ch12-copilot-in-sharepoint.pdf)
```

# Chapter 12: Copilot in SharePoint

:::{figure} ../images/ch12-sharepoint-copilot-infographic.png
:label: fig-ch12-infographic
:alt: Illustrated explainer infographic showing the relationship between SharePoint, Microsoft Graph, and Copilot — with permission flows, content governance layers, and BankUnited department sites arranged in a professional banking infographic layout
:width: 80%
:align: center

SharePoint is not just a file storage system. It is the organizational memory that Copilot draws from — which means how you organize, name, and govern your SharePoint content determines the quality of every Copilot response that touches BankUnited's knowledge base.
:::

> *"Information is not knowledge. Knowledge is not wisdom. Wisdom is not foresight. But you need them all."*
> — Arthur C. Clarke

There is a question that surfaces in almost every Copilot training session, usually around week three, once people have gotten comfortable with the basics: *"Why did Copilot not find that file?"*

The answer, almost every time, is not that Copilot failed. It is that the file was not where Copilot could find it — or that it was buried in a folder structure that made it invisible, or that the file name said nothing about its contents, or that the site had not been updated in two years and had been quietly excluded from active content.

The other answer — the one that makes compliance teams pause — is: *"Copilot found exactly what the user had permission to see. And it turns out they had permission to see more than anyone realized."*

Both of these answers point to the same root cause. **SharePoint governance is Copilot governance.** The quality of your Copilot experience is directly upstream of the quality of your SharePoint environment. That relationship is not metaphorical. It is architectural.

This chapter is about understanding that architecture — and using it strategically, at BankUnited.

---

## 1. Why SharePoint Is Copilot's Most Important Data Source at BankUnited

Microsoft 365 Copilot can access content from a wide range of sources: your emails in Exchange, your chat history in Teams, your calendar, your files in OneDrive. But for organizational knowledge — the policies, procedures, loan files, client documents, compliance frameworks, product guides, and institutional memory that define how BankUnited actually operates — the primary home is SharePoint.

:::{figure} ../images/ch12-copilot-data-sources.png
:label: fig-ch12-data-sources
:alt: Diagram showing Microsoft 365 Copilot's data sources — Exchange email, Teams chat, OneDrive files, and SharePoint — with SharePoint shown as the largest and most central source, connected via Microsoft Graph to the Copilot reasoning layer
:width: 80%
:align: center

Copilot draws from all of Microsoft 365, but SharePoint holds the organizational knowledge that matters most — the documents, policies, and institutional memory that define how BankUnited works.
:::

When a BankUnited relationship manager asks Copilot to summarize the current credit policy for commercial real estate lending, that answer does not come from an email or a Teams chat. It comes from the document library where Credit Policy lives. When a treasury analyst asks Copilot to pull up the most recent interest rate risk management framework, it comes from the Treasury SharePoint site. When a compliance officer asks Copilot what BankUnited's current BSA/AML procedure requires for beneficial ownership documentation, it comes from the Compliance site.

**SharePoint is the institutional brain. Copilot is the interface to it.**

This is a meaningful distinction from how most people use SharePoint today — which is primarily as a shared file drive, browsed manually, navigated through folder hierarchies, searched sporadically when you cannot remember where you put something. In the Copilot era, SharePoint stops being a place you navigate and becomes a knowledge base Copilot queries on your behalf, in natural language, in real time.

That transformation is only as powerful as the underlying content allows. A poorly organized, outdated, inconsistently named SharePoint environment produces poor Copilot answers. A well-governed, current, consistently structured SharePoint environment produces answers that surface exactly the right content at exactly the right moment.

The implication is clear: every investment BankUnited makes in SharePoint governance is also an investment in Copilot quality.

---

## 2. How Copilot Accesses SharePoint — The Permission Inheritance Model

Before we talk about organization and governance, we need to establish the foundational principle that governs everything Copilot can and cannot do with SharePoint content. This is the most important technical concept in this chapter — and for a bank, it is also a compliance requirement to understand.

:::{figure} ../images/ch12-permission-model.png
:label: fig-ch12-permissions
:alt: Diagram illustrating the Microsoft 365 Copilot permission inheritance model — showing a signed-in user on the left, Microsoft Graph in the center as the gatekeeper, and SharePoint content on the right — with clear labels showing that Copilot can only access content the user already has permission to see
:width: 80%
:align: center

The permission inheritance model: Copilot accesses Microsoft 365 content through Microsoft Graph, and Microsoft Graph enforces the same permissions as SharePoint itself. Copilot cannot see what you cannot see. But it can see everything you can see.
:::

**The principle:** Copilot accesses SharePoint content through Microsoft Graph, the same API that underlies all Microsoft 365 services. Microsoft Graph enforces existing SharePoint permissions, sharing settings, and policies. There is no separate Copilot permission layer — Copilot inherits exactly the permissions of the signed-in user.

This means two things that banking professionals need to internalize:

**First, Copilot cannot surface content the user does not already have permission to access.** If a commercial lending associate does not have access to the Executive Leadership SharePoint site, Copilot will not pull content from that site for them — not because Copilot is blocked from it, but because Microsoft Graph enforces the permission boundary before any content is returned. The AI respects the permission model. It is not a backdoor.

**Second — and this is the one that matters for compliance — Copilot can surface everything the user does have permission to see.** Every site they can browse. Every library they can read. Every folder they have been granted access to, whether explicitly or through a broad sharing link.

This is where the risk lives.

Most SharePoint environments at organizations BankUnited's size have accumulated years of sharing decisions that seemed reasonable at the time — "I'll just give the whole team read access," "Let me add everyone in the department," "I'll just use the organization-wide sharing link for this one document" — that have resulted in a permission landscape that no single person fully understands. Content that was intended to be accessible to a small group is now readable by hundreds of people, because a sharing link was set to "Anyone in the organization."

Under the old model, this was a latent risk. People had to know the content existed and navigate to it deliberately.

Under the Copilot model, it is an active risk. A user who asks Copilot a broad question — "What does BankUnited have on commercial real estate exposure in South Florida?" — will get back content from every SharePoint location they have permission to read, regardless of whether they knew that content existed or would have sought it out manually.

**Permission governance is Copilot governance. At a bank, this is not optional.**

:::{admonition} The Banking-Specific Stakes
:class: warning

Under OCC and FFIEC guidance, financial institutions are expected to manage information access controls in a way that reflects need-to-know principles. If Copilot's responses surface non-public information — customer data, credit committee deliberations, regulatory examination findings — to personnel who would not have been given that information in a traditional workflow, that is a governance failure regardless of whether a human or an AI was the vehicle.

BankUnited IT and compliance have the tools to audit and remediate oversharing. But every individual employee also has a role: if you find yourself reading content in a Copilot response that you would not normally see and probably should not see, report it. That is not a Copilot failure. That is a permission configuration that needs attention.
:::

---

## 3. The Oversharing Problem — Why What's in SharePoint Matters as Much as What Copilot Can Do

"Oversharing" is the term Microsoft uses for a specific problem in SharePoint environments: content that has been shared more broadly than the content's sensitivity warrants. At BankUnited, oversharing is a real risk — and Copilot makes it visible in ways that may surprise people.

:::{figure} ../images/ch12-oversharing-risk.png
:label: fig-ch12-oversharing
:alt: Risk diagram showing the oversharing problem in SharePoint — illustrating how a document shared broadly via an organization-wide link becomes accessible to Copilot responses for users who should not have access to it, with a risk meter showing escalating compliance concern levels
:width: 80%
:align: center

The oversharing amplification effect: what was a latent permission gap in the manual-navigation era becomes an active information disclosure risk in the Copilot era. Content that people had access to but rarely found is now findable by AI in seconds.
:::

Consider a common scenario at any bank this size: A team working on a sensitive merger-related analysis creates a SharePoint site and shares it with their team — but inadvertently uses a sharing setting that extends access to the entire finance division. In the manual world, nobody outside the immediate team knows the site exists or thinks to look for it. The content is effectively hidden by obscurity.

In the Copilot world, a finance division employee who asks Copilot to summarize any recent M&A analysis might get back a summary of that sensitive content — because Copilot has no concept of "this exists but you weren't meant to find it." If the permission says readable, Copilot reads it.

This is not a Copilot bug. It is a permissions problem that Copilot makes impossible to ignore.

**Three categories of SharePoint oversharing at BankUnited:**

**Organizational sharing links.** Documents shared via "Anyone in BankUnited" links are accessible to every Copilot user in the organization. This is appropriate for genuinely organization-wide content (the holiday schedule, the cafeteria menu) and profoundly inappropriate for anything with customer data, financial projections, or internal governance content.

**Broad department access.** Sites where entire divisions have been granted access "because it's easier," even when specific sub-groups within that division have need-to-know considerations. In commercial banking, for example, not every relationship manager needs access to every credit committee deliberation.

**Stale access grants.** Former employees, former role-holders, and former project team members who retain SharePoint access after their involvement ended. In the Copilot era, stale access means stale access to Copilot queries.

The solution is not to restrict Copilot. The solution is to fix the permissions — and that process starts with understanding what is overshared.

---

## 4. Content Governance for Copilot Readiness — The Content Management Assessment

Microsoft has published specific guidance for preparing SharePoint environments for Copilot, centered on a governance framework that BankUnited's IT and SharePoint administrators should implement. Understanding this framework is useful for every employee — not because you will be running it, but because you will be living with its outputs.

:::{figure} ../images/ch12-governance-framework.png
:label: fig-ch12-governance
:alt: Four-panel governance framework diagram showing the Content Management Assessment hub, site lifecycle management, archiving workflow, and SharePoint Advanced Management features — arranged as a connected cycle with arrows showing how each component feeds the next
:width: 80%
:align: center

The four pillars of SharePoint Copilot readiness: assessment, lifecycle management, archiving, and ongoing governance — a continuous cycle, not a one-time project.
:::

**The Content Management Assessment Hub**

Microsoft's SharePoint Advanced Management (SAM) includes a Content Management Assessment hub that gives administrators actionable insight into the state of a SharePoint environment. The Assessment hub:

- Identifies overshared content — sites and libraries where sharing settings are broader than appropriate
- Finds inactive or ownerless sites — content that is no longer actively maintained and may be outdated
- Defines Copilot readiness — a scoring view of how prepared the environment is for high-quality AI responses
- Ensures compliance — surfacing sites or content that may violate information governance policies
- Tracks progress with recurring assessments — Microsoft recommends running assessments every 30 days to monitor the environment and catch new oversharing as it occurs

This is the governance instrument. Think of it as the audit report for your SharePoint environment, run automatically and surfaced to administrators who can act on it.

**Site Lifecycle Management**

Not all SharePoint sites are created equal. Some sites are actively maintained by engaged owners who keep content current. Others were created for a project that ended two years ago and have not been touched since — but still show up in Copilot searches because they contain documents with relevant keywords.

Site lifecycle management policies allow administrators to manage the health of the site inventory. When a site is inactive for a defined period, administrators can be notified, site owners can be prompted to review, and sites can be archived or decommissioned rather than left as stale content in the environment.

For Copilot quality, this matters enormously. **Copilot is only as current as the content it can access.** A SharePoint environment full of outdated policy documents, superseded procedures, and abandoned project sites will produce Copilot responses that mix current and stale information — which in banking is worse than no answer at all. A credit officer asking about current commercial lending underwriting standards should not be receiving content from a 2019 procedure that has since been revised.

**Archiving**

Archiving allows administrators to move inactive content out of Copilot's active search scope without deleting it. Archived content is preserved — it can be restored and made available again if needed — but it is not surfaced in Copilot's responses by default. This keeps Copilot's knowledge base current and relevant.

The principle Microsoft articulates for SharePoint and Copilot readiness is straightforward: *"Copilot and agents work best when content is up to date and well governed."* This is not a marketing statement. It is an architectural truth.

:::{note}
**What Restricted SharePoint Search does (and doesn't do)**

During early Copilot rollouts, administrators have the option to enable Restricted SharePoint Search — a feature that limits Copilot's search to a defined list of curated SharePoint sites, rather than the full environment. This is designed as a rollout tool, not a permanent governance solution. It lets administrators gradually expand Copilot's reach as they confirm each site's governance readiness. BankUnited administrators should be aware that this option exists as a staged rollout tool, separate from the long-term permission governance work described in this chapter.
:::

---

## 5. Organizing SharePoint for BankUnited Teams

For Copilot to be genuinely useful, SharePoint needs to be organized for findability — not just for human navigation, but for AI search. These are related but not identical requirements. Folder hierarchies help humans browse; clear naming, consistent metadata, and logical site structure help Copilot retrieve.

:::{figure} ../images/ch12-site-structure.png
:label: fig-ch12-structure
:alt: Department site structure diagram for BankUnited — showing six department SharePoint sites (Commercial Banking, Treasury, Retail Banking, Operations, Compliance, Internal Audit) each with standardized sub-library structure — Policies, Procedures, Templates, Reports, and Reference — connected to a central IT and Governance hub
:width: 80%
:align: center

The BankUnited SharePoint department site model — six primary department sites with standardized internal library structures. Standardization is what makes Copilot search consistent and reliable across the organization.
:::

**The BankUnited Department Site Model**

Every major BankUnited function should have a dedicated SharePoint site that follows a consistent structural pattern. Here is the recommended model for BankUnited's core departments:

::::{tab-set}
:::{tab-item} Commercial Banking
**Site name:** BankUnited Commercial Banking  
**Owner:** Commercial Banking Division Head  
**Libraries:**
- Policies & Credit Standards
- Loan Procedures & Workflows
- Client Templates (CIM templates, term sheet templates, commitment letter templates)
- Portfolio Reports (monthly by region/RM)
- Reference & Market Data

**Governance note:** Credit committee materials and deal-specific files should be in permissioned sub-sites or libraries with explicit access control — not in the division-wide site.
:::
:::{tab-item} Treasury
**Site name:** BankUnited Treasury & ALM  
**Owner:** Chief Financial Officer / Treasury Director  
**Libraries:**
- Interest Rate Risk Management
- Liquidity Risk Frameworks
- Investment Portfolio Documentation
- Regulatory Reporting (DFAST, FR Y-9C supporting docs)
- ALM Model Documentation

**Governance note:** Treasury content is among the most sensitive in any bank. This site should use explicit, individually-assigned permissions — no organization-wide links.
:::
:::{tab-item} Compliance & BSA
**Site name:** BankUnited Compliance & BSA/AML  
**Owner:** Chief Compliance Officer  
**Libraries:**
- BSA/AML Policies & Procedures
- CIP/KYC Documentation Standards
- Regulatory Examination Prep Materials
- Training & Certification Records
- SAR / CTR Procedural Guides (non-case-specific)

**Governance note:** Examination findings, SAR filings, and case-specific materials should NEVER be in a broadly-shared SharePoint site. These require separate, tightly-permissioned repositories.
:::
:::{tab-item} Internal Audit
**Site name:** BankUnited Internal Audit  
**Owner:** Chief Audit Executive  
**Libraries:**
- Audit Charter & Methodology
- Annual Audit Plan
- Completed Audit Reports (accessible to appropriate leaders)
- Corrective Action Tracking
- Regulatory Correspondence

**Governance note:** Audit workpapers and in-progress audit content should be in a separate, restricted site — not the general Internal Audit site.
:::
:::{tab-item} Operations
**Site name:** BankUnited Operations  
**Owner:** Chief Operating Officer / Operations Director  
**Libraries:**
- Core Banking Procedures
- Branch Operations Standards
- Wire & Payment Processing Procedures
- Vendor Management Documentation
- BCP / Disaster Recovery Procedures

**Governance note:** Vendor contracts with pricing terms may warrant separate permissioned access.
:::
:::{tab-item} Retail Banking
**Site name:** BankUnited Retail Banking  
**Owner:** Retail Division Head  
**Libraries:**
- Product Guides & Rate Sheets
- Sales Scripts & Client Communication Templates
- Branch Policies & Procedures
- Training & Onboarding Materials
- Customer Service Standards

**Governance note:** Rate sheets that change frequently should be clearly dated and superseded versions archived — not deleted — so Copilot retrieves the current version.
:::
::::

**The BankUnited File Naming Convention**

Copilot finds content based on what documents say and what they are named. Consistent naming is one of the highest-leverage improvements any team can make.

```
[Department]-[DocumentType]-[Topic]-[YYYY-MM].docx

Examples:
Commercial-Policy-CREUnderwritingStandards-2026-01.docx
Compliance-Procedure-BeneficialOwnershipDocumentation-2025-11.docx
Treasury-Report-IRRSensitivityAnalysis-2026-Q1.xlsx
Retail-Template-ClientWelcomeLetter-2025-08.docx
```

This naming convention does two things: it makes documents findable by Copilot through meaningful keywords in the filename, and it makes version currency immediately visible — a 2024 document and a 2026 document with the same topic are distinguishable at a glance.

---

## 6. SharePoint Search + Copilot — How Well-Organized Content Surfaces Better

There is a direct relationship between SharePoint organization quality and Copilot response quality. Understanding that relationship helps you understand why investing time in your SharePoint environment produces immediate Copilot dividends.

:::{figure} ../images/ch12-search-quality.png
:label: fig-ch12-search
:alt: Side-by-side comparison diagram showing poor SharePoint organization (left) — unnamed folders, generic file names, outdated content — producing a vague Copilot response, versus well-organized SharePoint (right) — consistent naming, current content, clear metadata — producing a precise, source-cited Copilot response
:width: 80%
:align: center

The organization-quality-to-response-quality pipeline: Copilot's answers are only as specific and accurate as the content it can find. Well-named, well-organized, current content produces precise answers with clear attribution. Disorganized content produces vague generalities.
:::

**How Copilot searches SharePoint**

When you ask Copilot a question that requires organizational knowledge, it queries Microsoft Graph for content you have permission to access that is semantically relevant to your question. This search is not keyword-matching — it is semantic matching, which means Copilot looks for content that is contextually related to your question, not just documents that contain your exact search terms.

This is powerful. But it means that documents with no meaningful title ("Final_v3_REVISED_USE THIS ONE.docx"), no descriptive content in the first page, and no metadata will rank poorly in semantic search — even if they contain exactly the information the user needs.

**The three things that make content Copilot-findable:**

**1. Meaningful file names.** As described in the naming convention above — department, document type, topic, and date. Copilot's semantic search reads file names as context.

**2. Strong document openings.** The first paragraph of a document is disproportionately influential in how Copilot understands its content. Documents that open with a clear statement of purpose — "This procedure governs the beneficial ownership documentation requirements for BankUnited's commercial deposit accounts, effective November 2025" — are dramatically more findable than documents that open with a table of contents or a corporate letterhead.

**3. Current content.** Copilot gives recency weight to content. An outdated 2021 procedure will be deprioritized behind a 2025 procedure on the same topic — which is the right behavior. But if your 2025 procedure is in a site that has not been updated recently, it may be caught in site lifecycle management's "inactive" flag. Keeping sites active — even just reviewing and touching them periodically — keeps them in Copilot's active content pool.

---

## 7. The File Sharing + Summary Workflow — A New Way to Communicate

Microsoft 365 Copilot adds a capability to the SharePoint file sharing workflow that changes how BankUnited professionals can communicate around documents. As of May 2026, this is a generally available feature — not a preview, not an experimental capability, but a standard part of how SharePoint sharing works.

:::{figure} ../images/ch12-share-summary-workflow.png
:label: fig-ch12-sharing
:alt: Step-by-step workflow diagram showing the Copilot-powered file sharing process — a user selects a SharePoint file, clicks Share, chooses to generate a Copilot summary, and sends the file along with the AI-generated summary to the recipient — with sample summary text shown
:width: 80%
:align: center

The Copilot share-with-summary workflow: share a file and an AI-generated summary in a single action. The recipient gets context immediately — no need to open and scan the document before understanding what they are looking at.
:::

**How it works:**

When sharing a file from SharePoint, users now have the option to generate a Copilot summary as part of the sharing action. The workflow: choose Share, then select the option to generate a Copilot summary, and send the file along with the summary to the recipient.

The recipient receives the file and a concise AI-generated summary of its contents — key points, purpose, and main takeaways — delivered alongside the document itself.

**BankUnited applications:**

- **Credit memo distribution.** When sending a credit memo to a credit officer for review, include a Copilot summary that highlights the borrower name, loan amount, purpose, credit grade, and key risks. The reviewer can immediately orient to the document before reading in depth.

- **Regulatory update distribution.** When sharing new regulatory guidance from the OCC or CFPB with compliance staff, include a Copilot summary of the key changes. This replaces the email that someone would normally write to explain what the attachment is about.

- **Board package preparation.** When distributing pre-read materials to board members ahead of a meeting, each document can be sent with a Copilot summary that helps board members quickly identify the documents requiring their close attention versus those that are informational.

- **Client deliverables.** When sending a financial analysis or market update to a commercial banking client, a summary provides immediate value and context — demonstrating that BankUnited is not just delivering a file, but curating intelligence.

:::{tip}
**The summary replaces the forwarding email.** In current workflows, someone attaches a document and writes a paragraph explaining what it is and why the recipient should read it. The Copilot summary generates that paragraph from the document itself — consistently, accurately, and instantly. The human's job becomes reviewing and approving the summary, not writing it from scratch.
:::

---

## 8. Building Department Knowledge Bases — The Structure That Makes Copilot Useful

The gap between a SharePoint site that makes Copilot useful and one that does not comes down to one concept: **intended findability.** When a document is created and stored, is it created with the intention that someone — or an AI — will need to find and understand it later?

:::{figure} ../images/ch12-knowledge-base-structure.png
:label: fig-ch12-knowledge-base
:alt: Knowledge base architecture diagram for BankUnited department SharePoint sites — showing a three-tier structure of foundational documents (policies, procedures), working documents (templates, reports, analyses), and reference materials (guides, training, market data) — with Copilot retrieval arrows pointing into each tier
:width: 80%
:align: center

The three-tier knowledge base structure — foundational, working, and reference layers — with Copilot retrieval illustrated at each layer. The structure makes it possible for Copilot to surface the right type of content for the right type of question.
:::

**The Three-Tier Knowledge Base Structure**

Every BankUnited department site should organize content into three functional tiers:

**Tier 1: Foundational Documents**  
Policies, procedures, regulatory frameworks, standards, and governance documents. These are the authoritative sources — the things that define how work is supposed to be done. They are updated infrequently (quarterly or annually) but must always reflect the current, approved version. These documents should be clearly named, clearly dated, and version-controlled. Old versions should be archived, not deleted — Copilot should always surface the current version, but the history should be preserved.

**Tier 2: Working Documents**  
Templates, active reports, in-progress analyses, and working files. These are the tools and outputs of day-to-day work. They should follow the BankUnited naming convention and be stored in consistent, predictable library locations. When a report becomes a final deliverable, it should move from a working folder to an appropriate final repository and be clearly marked as final.

**Tier 3: Reference Materials**  
Market data, regulatory guidance, external publications, training materials, and reference guides that support the team's work but are not BankUnited's own policy. This tier is important for Copilot because it provides the context that allows AI to connect internal BankUnited policy with external frameworks and standards.

**The knowledge base discipline:** Every time a team creates a significant document, they should ask: *Where does this live so someone — or Copilot — can find it six months from now?* That question is the habit that separates teams that build functional knowledge bases from those that build digital landfills.

---

## 9. SharePoint + Teams + Copilot — The Integrated Pattern for Team Intelligence

SharePoint does not operate in isolation in the Microsoft 365 ecosystem. Every Microsoft Teams channel has an associated SharePoint library where its files are stored. Every file shared in a Teams channel lives in SharePoint. Every Teams meeting recording is stored in SharePoint. This integration is intentional — and it is what makes the SharePoint-Teams-Copilot combination the most powerful pattern for team knowledge management at BankUnited.

:::{figure} ../images/ch12-teams-sharepoint-integration.png
:label: fig-ch12-integration
:alt: Integration architecture diagram showing the SharePoint-Teams-Copilot triangle — Teams channels connected to SharePoint document libraries, meeting recordings stored in SharePoint, and Copilot accessing both for natural language queries — with arrows showing bidirectional data flow and a user interface panel showing a sample query
:width: 80%
:align: center

The SharePoint-Teams-Copilot integration triangle: Teams is the workspace, SharePoint is the knowledge store, and Copilot is the intelligence layer that connects them. When all three are well-configured, team knowledge becomes instantly accessible through conversation.
:::

**How the integration works:**

When a Teams channel is created, SharePoint automatically creates a corresponding document library. Files uploaded to the channel, shared in chats, or attached to meetings live in that SharePoint library — which means they are instantly accessible to Copilot queries.

Meeting recordings stored in SharePoint can be summarized, searched, and referenced by Copilot — which means a relationship manager who missed the weekly credit committee call can ask Copilot to summarize what was discussed and what decisions were made, rather than waiting for meeting minutes or listening to a recording.

Files that a team discusses in Teams are already in SharePoint. When Copilot is asked "What did we decide about the rate structure on the Hernandez deal?", it can search across both the Teams conversation history and the SharePoint documents associated with that channel — giving a unified answer that draws from the full record of the team's work.

**The practical implication for BankUnited teams:**

The file discipline that benefits SharePoint also benefits Teams. Every file shared in a Teams channel lands in a SharePoint library. If that file is named "Final_USETHIS.docx", it will be harder for Copilot to find and harder for teammates to identify later. If it is named "Commercial-Analysis-HernandezPortfolio-2026-04.docx", it is immediately findable and immediately understandable.

The investment in naming discipline compounds across the whole ecosystem.

---

## 10. What BankUnited IT and Compliance Need to Know — The Admin Side in Plain Language

Most of this chapter has been written for individual employees — the people doing the day-to-day work who interact with SharePoint through the user interface. But the governance layer is administered by IT and overseen by Compliance, and those teams need to understand what Copilot changes about their SharePoint responsibilities.

:::{figure} ../images/ch12-admin-governance-overview.png
:label: fig-ch12-admin
:alt: Administrative governance overview diagram for BankUnited SharePoint + Copilot — showing three governance tracks (IT Administration, Compliance Oversight, and Employee Responsibility) with responsibilities mapped at each level and connections to the Content Management Assessment hub, permission audit tools, and Copilot access controls
:width: 80%
:align: center

The three governance tracks for BankUnited's SharePoint Copilot readiness — IT Administration, Compliance Oversight, and Employee Responsibility — with distinct but interconnected roles at each level.
:::

**For BankUnited IT Administration:**

The Content Management Assessment hub, available through SharePoint Advanced Management (SAM), should be run on a regular basis — Microsoft recommends every 30 days. The assessment surfaces oversharing risks, inactive sites, and ownerless content that creates both Copilot quality problems and compliance risks.

SharePoint Advanced Management (SAM) is a licensed add-on to Microsoft 365 that provides these governance features. If BankUnited is deploying Copilot enterprise-wide, SAM should be part of the deployment package — it provides the tooling that makes Copilot safe and effective at enterprise scale.

Key administrative actions before and during Copilot rollout:
- Audit organization-wide sharing links and convert appropriate ones to more targeted permissions
- Identify and contact owners of inactive sites for review and potential archiving
- Establish a site request and approval process so new sites are created with appropriate governance from the start
- Configure site lifecycle management policies that trigger review prompts after defined inactivity periods
- Establish a recurring assessment schedule and assign accountability for acting on findings

**For BankUnited Compliance:**

The regulatory implications of Copilot in SharePoint are real but manageable. The key compliance principles:

Copilot is not a new data system — it is a new interface to data that already exists in Microsoft 365. The same regulatory requirements that govern information access in manual workflows apply to Copilot-mediated access. If a BankUnited employee should not have access to certain information, they should not have it in SharePoint — and Copilot will then not surface that information to them.

Data privacy regulations (GLBA, state-level requirements) that govern customer data in BankUnited's systems apply to customer data in SharePoint. Customer information should not be stored in broadly-shared SharePoint libraries — it belongs in permissioned systems with appropriate access controls.

Examination-related content — findings, responses, corrective action materials — should be in restricted-access SharePoint sites or, where regulators require it, in separate systems. The broad accessibility that makes SharePoint useful for general knowledge management makes it inappropriate for sensitive examination correspondence.

**For BankUnited employees:**

You have three responsibilities in this governance framework:
1. Follow the naming and organization conventions established by your department.
2. Maintain appropriate permissions on content you own or manage — do not use broad organizational links for anything sensitive.
3. Report to IT if Copilot surfaces content that you believe you should not have access to. That is valuable governance signal, not an embarrassing discovery.

---

## 11. The Governance Discipline — What Individuals Can Do to Improve Their Copilot Experience

Governance is not only an IT function. Individual employees own SharePoint libraries, manage permissions on files they share, and create documents that either make Copilot smarter or contribute to the noise that makes Copilot less useful. This section is about what you can do, today, without waiting for an IT project.

:::{figure} ../images/ch12-individual-governance.png
:label: fig-ch12-individual
:alt: Individual employee SharePoint governance action guide — a four-step circular process showing Audit (review your libraries), Organize (apply naming conventions), Govern (check and fix permissions), and Maintain (keep content current) — with practical examples of each step in a banking context
:width: 80%
:align: center

The individual governance cycle for BankUnited employees — a four-step process that every employee can perform on SharePoint libraries they own, without waiting for an IT project. Small actions compound into dramatically better Copilot experiences.
:::

**Step 1: Audit your libraries**

Identify every SharePoint library or site where you are an owner or major contributor. Review the content: How much of it is current? How much is outdated? Are the files clearly named? Are there documents from projects that ended years ago?

This audit does not have to be exhaustive to be useful. Even spending 30 minutes reviewing one library you own will identify issues that, if fixed, will improve Copilot's ability to find and surface that content accurately.

**Step 2: Apply the naming convention**

Rename the files that matter most — the current policies, the active templates, the regularly-referenced procedures — using the BankUnited naming convention. You do not need to rename everything. Start with the documents that Copilot is most likely to be asked about, and get those right.

Before:
- `Final FINAL credit memo revised (3).docx`
- `BSA procedure - UPDATED use this.docx`
- `Rate Sheet April.xlsx`

After:
- `Commercial-CreditMemo-PhoenixProperties-2026-04.docx`
- `Compliance-Procedure-BSABeneficialOwnership-2025-11.docx`
- `Retail-RateSheet-DepositProducts-2026-04.xlsx`

**Step 3: Review and fix permissions**

For every major document you own, ask: who has access to this, and is that appropriate? In SharePoint, you can check sharing settings on any file or folder you own. If you have used "Anyone in BankUnited" links for sensitive documents, convert them to specific individual or group sharing.

If you are unsure how to check permissions on a file or library, contact BankUnited IT — this is exactly the kind of governance review they should be supporting.

**Step 4: Archive or delete outdated content**

For documents that are no longer current, take explicit action. Either archive them (move to an "Archive" subfolder clearly marked with the archival date) or, if the content has no continuing value, delete it. The goal is a library where a reasonable person — or an AI — would not be confused about which version is current and authoritative.

:::{admonition} Try This
:class: tip

Pick one underused SharePoint library you own — a project site from last year, a departmental resource library that has gotten disorganized, or a team document store that you know is a mess. Spend 45 minutes on it:

1. Review the folder structure, file names, and sharing permissions
2. Apply the BankUnited naming convention to the 5–10 most important files
3. Convert any broad sharing links to specific group or individual sharing
4. Archive any content that is clearly outdated

Then test Copilot. Ask it a specific question about content that lives in that library. Compare what you get before and after the cleanup.

The difference is usually immediate and striking. When you have experienced it once, the governance discipline becomes self-reinforcing — because you have directly seen how organization quality translates to AI quality.
:::

---

## Bringing It Together — SharePoint as a Strategic Asset

There is a temptation, when thinking about SharePoint governance, to see it as maintenance — the unglamorous work of cleaning up folder structures and fixing file names while the exciting AI features happen somewhere else. That framing misunderstands the relationship.

**SharePoint is where BankUnited's institutional knowledge lives.** The policies that govern how credit is underwritten. The procedures that define how compliance is maintained. The analyses that inform how decisions are made. The templates and tools that define how client work gets done. All of it lives in SharePoint.

Copilot is the interface that makes that knowledge accessible — not just to the people who know where to look and remember what folder they put things in, but to anyone who knows how to ask a clear question. That is a profound democratization of organizational knowledge. A new relationship manager can ask Copilot to explain BankUnited's commercial real estate underwriting standards and get an authoritative answer in 30 seconds. A compliance officer can ask Copilot to compare BankUnited's BSA procedures against the most recent FFIEC guidance and immediately see the relevant sections side by side.

But that only works when the knowledge base is ready. When SharePoint is well-organized, well-governed, and current, Copilot becomes a genuine intelligence multiplier for BankUnited. When it is not, Copilot becomes a well-intentioned AI that sometimes finds the right thing and sometimes surfaces something outdated and confusing.

The governance discipline this chapter describes is not optional for organizations serious about Copilot. It is the prerequisite.

BankUnited has always been a bank that takes its information seriously — that is implicit in its compliance culture, its risk management standards, and its approach to client confidentiality. Applying that same discipline to SharePoint governance is not a new organizational muscle. It is the existing muscle applied to a new domain.

Start with one library. Fix one naming convention. Review one set of permissions. That is how the larger transformation happens — not in a single IT project, but in hundreds of individual decisions made by people who understand what is at stake.

---

## Glossary

:::{glossary}
Microsoft Graph
: The unified API that underlies all Microsoft 365 services, including SharePoint and Copilot. Microsoft Graph enforces permissions, retrieves content, and provides the data layer that Copilot queries when answering user questions.

Permission inheritance
: The principle that Copilot can only access content that the signed-in user already has permission to see through Microsoft 365. Copilot does not have its own permissions — it operates within the user's existing access rights as enforced by Microsoft Graph.

Oversharing
: The condition in which SharePoint content has been shared more broadly than its sensitivity warrants — via organization-wide links, excessively broad group access, or stale access grants that were not revoked when people changed roles.

Content Management Assessment hub
: A SharePoint Advanced Management (SAM) feature that provides administrators with actionable insights into the state of a SharePoint environment — identifying overshared content, inactive sites, and ownerless resources that affect both compliance and Copilot quality.

SharePoint Advanced Management (SAM)
: A licensed Microsoft add-on to Microsoft 365 that provides enhanced governance tools for SharePoint, including the Content Management Assessment hub, site lifecycle management policies, and archiving capabilities relevant to Copilot readiness.

Site lifecycle management
: Administrative policies that manage the health of SharePoint sites over time — triggering reviews when sites become inactive, prompting owners to confirm relevance, and enabling archiving or decommissioning of outdated content.

Restricted SharePoint Search
: A rollout feature that limits Copilot's SharePoint search to a defined list of administrator-curated sites during the initial deployment phase. Designed as a staged rollout tool, not a permanent governance solution.

Semantic search
: The AI-powered search capability that Copilot uses to find relevant content based on meaning and context rather than exact keyword matching. Well-organized, clearly-named, and contextually rich documents perform better in semantic search.

Archiving
: The process of moving inactive SharePoint content out of the active content pool accessible to Copilot, without permanently deleting it. Archived content is preserved for future reference but is not surfaced in Copilot's responses by default.

Copilot-generated summary
: An AI-generated summary of a document's contents that can be included when sharing a SharePoint file. As of May 2026, this is a generally available feature — users choose Share, then generate a Copilot summary, and send the summary alongside the document.

Knowledge base
: A structured, intentionally-organized collection of documents in SharePoint designed for consistent retrieval by humans and AI. Distinguished from general file storage by consistent naming, clear version control, and active curation.

Information governance
: The policies, processes, and controls that manage how information is created, stored, accessed, shared, and retired within an organization. In banking, information governance is a regulatory expectation as well as an operational discipline.

Need-to-know principle
: The security and compliance principle that access to information should be limited to personnel who require that information to perform their job responsibilities. Relevant to SharePoint permission management and Copilot access controls.

BankUnited naming convention
: The standardized file naming format recommended for BankUnited SharePoint content: [Department]-[DocumentType]-[Topic]-[YYYY-MM].extension. Improves both human findability and Copilot semantic search accuracy.

Site owner
: The individual designated as responsible for a SharePoint site — responsible for content currency, permission management, and governance compliance. Site owners are the first line of defense against oversharing and content staleness.
:::

---

## Leader's Takeaway

SharePoint governance is Copilot governance. The organizations that will get the most from Microsoft Copilot are not the ones with the most sophisticated prompting skills — they are the ones with the cleanest, most current, best-governed knowledge bases. For BankUnited, this means:

1. **Permission discipline is non-negotiable.** Copilot surfaces exactly what users have permission to see — no more, no less. Oversharing in SharePoint means oversharing in Copilot. Every banking leader should ensure their team's SharePoint content is permissioned appropriately.

2. **Content currency directly affects AI quality.** Outdated SharePoint content produces outdated Copilot responses. The investment in keeping departmental knowledge bases current is an investment in AI quality.

3. **Naming and organization have strategic value.** The BankUnited naming convention is not bureaucratic overhead. It is the infrastructure that makes knowledge findable — by humans and by AI.

4. **The SharePoint-Teams-Copilot integration is the pattern.** Files in Teams channels live in SharePoint. Meeting recordings live in SharePoint. When the SharePoint environment is well-governed, the entire Microsoft 365 ecosystem benefits from that governance through Copilot.

5. **Governance is everyone's job.** IT administers the tools. Compliance sets the standards. But every employee who owns a SharePoint library has the power to make it better — or worse — for every Copilot user who needs that content.
