# AI and Virtual Agent Laws, Court Cases and Compliance Standards

**Version:** 1.5 (November 11, 2026). Adds Section 3.11 (IRS rules, Publication 1075 and other federal and state data regulations). Version 1.4 added penalty tables (1.1 to 1.7) and Section 1.10 (worldwide); earlier versions added Sections 1.9, 2.11, 3.9 and 3.10
**Scope:** Laws and regulations (US local, state and federal; EU and EU member states; UK; and other countries worldwide), with maximum penalties that govern the use of AI or virtual agents; US and international court cases and enforcement decisions in which AI was part of the case; and PCI, HIPAA and other organizational compliance standards that address AI and virtual agents.
**Companion file:** *Virtual Agent Corner-Case Test Catalog* turns many of these requirements into test cases (category M and others).

> **Not legal advice.** This is a research compendium built from law-firm, regulator, court and news sources as of early November 2026. It is comprehensive for the topics a customer-facing virtual agent is likely to touch, but no list of AI law can be complete: US states alone introduced more than 1,500 AI bills in 2026. Status labels and dates change quickly, and several sources conflicted. Items marked **(verify)** rest on a single secondary source or on background knowledge; Part 4 lists the open items. Have counsel confirm applicability before relying on any entry.

**Status labels used throughout**

| Label | Meaning |
|---|---|
| **In force** | Currently applies |
| **Enacted, not yet effective** | Signed or adopted, with a future effective or application date |
| **Pending** | Bill or proposal moving through a legislature, or a proposed rule |
| **Guidance** | Regulator guidance, policy statement or voluntary code; not binding law but used in enforcement |
| **Stayed / contested** | Enforcement paused or under legal challenge |

---

## Contents

- [Part 1. Laws and regulations](#part-1-laws-and-regulations)
  - [1.1 US local laws](#11-us-local-laws)
  - [1.2 US state laws](#12-us-state-laws)
  - [1.3 US laws that cut across many states](#13-us-laws-that-cut-across-many-states)
  - [1.4 US federal laws, regulations and executive actions](#14-us-federal-laws-regulations-and-executive-actions)
  - [1.5 European Union](#15-european-union)
  - [1.6 EU member-state laws](#16-eu-member-state-laws)
  - [1.7 United Kingdom](#17-united-kingdom)
  - [1.8 International treaty](#18-international-treaty)
  - [1.9 Proposed laws and rules likely in the next 12 to 18 months](#19-proposed-laws-and-rules-likely-in-the-next-12-to-18-months)
  - [1.10 Worldwide AI laws and regulations (outside the US, EU and UK)](#110-worldwide-ai-laws-and-regulations-outside-the-us-eu-and-uk)
- [Part 2. Court cases and enforcement decisions involving AI](#part-2-court-cases-and-enforcement-decisions-involving-ai)
  - [2.11 Reported consumer harms from AI and automated decisions (2024 to 2026)](#211-reported-consumer-harms-from-ai-and-automated-decisions-2024-to-2026)
- [Part 3. Compliance standards for AI and virtual agents](#part-3-compliance-standards-for-ai-and-virtual-agents)
  - [3.9 ISO/IEC and SOC standards in AI regulation](#39-isoiec-and-soc-standards-in-ai-regulation)
  - [3.10 Government and public-sector AI compliance (FedRAMP and related)](#310-government-and-public-sector-ai-compliance-fedramp-and-related)
  - [3.11 IRS rules, Publication 1075 and other federal and state data regulations](#311-irs-rules-publication-1075-and-other-federal-and-state-data-regulations)
- [Part 4. Open items to verify](#part-4-open-items-to-verify)
- [Part 5. Sources](#part-5-sources)

---

# Part 1. Laws and regulations

## 1.1 US local laws

City and county rules are few but can carry their own enforcement. Most local AI activity is internal government policy (procurement rules, AI registers) rather than law that binds private virtual agents.

| Jurisdiction and law | Status | What it requires | Relevance to virtual agents |
|---|---|---|---|
| **New York City Local Law 144 (automated employment decision tools)** | In force since July 5, 2023 | Employers and agencies using automated tools to screen candidates or employees for NYC jobs must obtain an annual independent bias audit, publish a summary and give notice to candidates; enforcement by the city's consumer protection department (DCWP); no private right of action. A December 2025 New York State Comptroller audit found enforcement ineffective (for example, most related 311 calls were misrouted and the Comptroller found 17 potential violations where DCWP found one); DCWP committed to more proactive enforcement | Recruiting and HR virtual agents that screen, rank or schedule candidates |
| **New York City DCWP proposed rule on automated customer service** | Pending (proposed October 20, 2026; see 1.9.3) | Disclosure at the start, in the language used, that the consumer is dealing with an automated system; one-touch access to a human; reported three-year machine-readable interaction logs | Every chatbot and phone voice-response system serving NYC consumers (federally regulated sectors such as airlines and national banks excluded) |
| **New York City biometric identifier law (NYC Admin. Code 22-1201 and following)** | In force since 2021 (verify) | Commercial establishments that collect biometric identifiers must post notice and may not sell them; private right of action | Voice or face identification used at physical locations, kiosks or drive-throughs |
| **Portland, Oregon ban on private-entity facial recognition in places of public accommodation** | In force since 2021 (verify) | Prohibits private businesses from using face recognition in places open to the public | Kiosk, retail and drive-through agents with cameras |
| **City and county bans on government facial recognition (for example San Francisco, Boston, King County)** | In force (verify each) | Restrict government use; do not bind private businesses | Government virtual agents and public-sector deployments |
| **Municipal AI policies (for example Seattle, San Jose, Boston, New York City)** | Guidance | Procurement, transparency and AI-register requirements for city use | Vendors selling virtual agents to cities must meet them by contract |

### Penalties: US local laws

| Law | Maximum penalties | Notes |
|---|---|---|
| NYC Local Law 144 | USD 500 for a first violation; USD 500 to 1,500 for each later violation; each day an unaudited tool is used can count separately | Enforced by DCWP; no private right of action |
| NYC biometric identifier law | Private damages per violation (reported USD 500, or USD 5,000 for intentional sale violations; verify) | Private right of action |
| Portland facial recognition ban | Private damages per day of violation (amount verify) | Private right of action |
| NYC proposed automated customer-service rule | Penalties under the NYC Consumer Protection Law once adopted (amounts verify) | Pending |

## 1.2 US state laws

The table lists enacted laws and significant pending bills that bear directly on AI or virtual agents. Section 1.3 lists categories that exist in many states (privacy, recording, biometrics, insurance, deepfakes).

| State | Law | Status | What it requires |
|---|---|---|---|
| **California** | BOT Act (SB 1001, Bus. & Prof. Code 17940 and following) | In force since 2019 | Disclose a bot used to incentivize a sale or influence a vote, where a person could be misled |
| California | SB 243 (companion chatbots) | In force January 1, 2026 | Disclosure that a companion chatbot is AI; self-harm and suicide protocols; protections for minors |
| California | **AB 1609, Right to Human Customer Service Act** | Enacted (signed September 28, 2026), effective January 1, 2027 | For businesses with more than USD 500 million in annual revenue: may not present a customer-service chatbot as a person; disclose it is artificial in the same medium; offer a simple way to reach a human on every customer-service platform during business hours; connect within 15 minutes or schedule a callback within one business day; limit phone holds after reaching an agent to 15 minutes each and one hour cumulatively; public-prosecutor enforcement, USD 5,000 first violation and USD 10,000 per later violation (secondary sources; verify text) |
| California | AI Transparency Act (SB 942 as amended by AB 853) | In force August 2, 2026; added duties for large platforms January 1, 2027 | Covered generative-AI providers must offer detection tools and provenance disclosures |
| California | CCPA regulations on automated decision-making, risk assessments and cybersecurity audits | In force January 1, 2026; ADMT compliance from January 1, 2027 | Pre-use notice, opt-out and access rights for significant automated decisions; risk assessments (existing activities by December 31, 2027); audits phased by revenue |
| California | SB 53 (Transparency in Frontier AI Act); AB 2013 (training-data transparency) | In force January 1, 2026 | Frontier developers publish safety frameworks and report incidents; generative-AI developers document training data |
| California | 2026 session: SB 947 (automated decision systems in employment, reported to bar AI-only firing decisions) and other bills on companion and customer-service chatbots, health-care AI (AB 1979, SB 503) and digital replicas; vetoes reported for AB 2575 and SB 903 | Enacted (effective dates verify; sources conflict) | Workplace, health-care and customer-service obligations |
| California | Invasion of Privacy Act (CIPA), Penal Code 631 and 632 | In force | All-party consent to record or eavesdrop; USD 5,000 statutory damages per violation; used against AI chat and call-analytics vendors (Part 2.3) |
| California | SB 1120 (physicians make medical-necessity decisions in utilization review) | In force January 1, 2025 | AI may support but not replace clinician review of coverage denials |
| **Colorado** | Colorado AI Act (SB 24-205) | Stayed / contested: enforcement stayed by a federal court on April 27, 2026 in litigation brought by xAI, with DOJ intervening; repeal-and-replace also reported | Original high-risk AI duties (developer and deployer care, impact assessments) |
| Colorado | SB 26-189 (automated decision-making transparency) | Enacted, effective January 1, 2027 (verify) | Transparency for consequential automated decisions |
| Colorado | Chatbot Safety Act (HB 26-1263) | Enacted (signed May 29, 2026), effective January 1, 2027 | Clear disclosure that a user is interacting with AI |
| **Connecticut** | 2026 chatbot-safety law (verify bill number); broader ADMT bill (SB 2) did not pass | Enacted (verify) | Chatbot safety and disclosure |
| **Florida** | Telephone Solicitation Act (FTSA) and Security of Communications Act | In force | Mini-TCPA rules for automated calls and texts; all-party consent to record |
| **Georgia** | SB 540 (2026 chatbot law) | Enacted (verify) | Chatbot safety provisions |
| **Hawaii** | SB 3001, Act 248 (Artificial Intelligence Disclosure and Safety Act) | In force (signed July 14, 2026, effective immediately; single source, verify) | AI companion operators must give clear notice that the companion is AI where a reasonable person could think it is human: a persistent visible disclaimer, or notice at the start of each session and at least once an hour; added protections for minors |
| **Idaho** | S 1297 (2026 chatbot law) | Enacted (verify) | Chatbot safety provisions |
| **Illinois** | Biometric Information Privacy Act (BIPA) | In force | Written notice and consent before collecting voiceprints or face geometry; retention schedule; private right of action (2024 amendment limits damages to one recovery per person, verify) |
| Illinois | HB 3773 (Human Rights Act amendment on AI in employment) | In force January 1, 2026 | No discriminatory AI use in employment decisions; notice when AI is used |
| Illinois | Artificial Intelligence Video Interview Act | In force since 2020 | Notice, explanation and consent before AI analysis of video interviews; deletion on request |
| Illinois | Wellness and Oversight for Psychological Resources Act (AI therapy limits) | In force 2025 (verify) | Restricts AI from providing therapy or presenting as a licensed therapist |
| Illinois | Frontier AI safety law (third state after California and New York) | Enacted (effective date verify) | Frontier developer duties |
| Illinois | HB 2435 (bot disclosure) | Pending (passed House April 2025) | Bot disclosure |
| **Iowa** | SF 2417 (2026 chatbot law) | Enacted (verify) | Chatbot safety provisions |
| **Louisiana** | HB 686 (disclosure at the start of AI-made calls); HB 639 (AI in political calls) | Pending (status unclear) | AI-voice call disclosure |
| **Maine** | LD 1727 (AI chatbots in trade) | In force 2025 (verify) | Unfair trade practice to use an AI chatbot that could mislead a consumer into thinking they are dealing with a human, unless disclosed |
| **Maryland** | Mini-TCPA amendments (2024); facial-recognition-in-interviews law (2020); Wiretap Act | In force | Automated-call rules; consent before facial recognition in job interviews; all-party consent to record |
| **Maryland** | Protection From Predatory Pricing Act (HB 895) | In force October 1, 2026 | Grocery stores of at least 15,000 square feet and grocery delivery apps may not charge individualized or localized prices based on personal data; attorney-general enforcement, up to USD 10,000 for a first violation |
| **Michigan** | SB 760 (chatbot safety) | Pending (passed Senate May 2026) | Chatbot safety |
| **Nebraska** | LB 525 (2026 chatbot law) | Enacted (verify) | Chatbot safety provisions |
| **Nevada** | Limits on AI in mental-health care (2025) | In force (verify) | Restricts AI representing itself as a mental-health provider |
| **New Jersey** | Mini-TCPA law (2024) | In force | Automated-call and text rules |
| **New York** | S9051-B / A10379-C (unsafe companion features for minors), General Business Law Article 48 | Enacted (signed October 28, 2026), reported effective January 1, 2027 (verify) | Bars 12 categories of unsafe companion features for minors, including pretending to be human, encouraging self-harm and sexual content; age assurance required before such features stay on; up to USD 25,000 per violation; attorney general may add features |
| New York | AI companion safeguards law (2025) | In force (verify date) | Crisis-detection protocols and periodic disclosure for AI companions |
| New York | RAISE Act (frontier models) | Enacted, effective January 1, 2027 (verify) | Frontier developer safety frameworks and incident reporting; DFS oversight |
| New York | Algorithmic pricing disclosure; synthetic performer disclosure in advertising | In force (verify dates) | Disclose personalized algorithmic pricing; disclose synthetic performers in ads |
| New York | AB 2593 (consent for artificial or prerecorded voice robocalls) | Pending (introduced 2025) | AI-voice call consent |
| **Oklahoma** | Telephone Solicitation Act | In force | Mini-TCPA rules |
| **Oregon** | HB 3865 (telephone solicitation) | In force January 1, 2026 | Covers texts; opt-out mechanisms and disclosures for automatic dialing and artificial-voice calls; reported limit of 3 solicitation calls per 24 hours (verify enacted text) |
| Oregon | SB 1546 (companion chatbots); HB 2748 (AI may not use nursing titles) | Enacted 2026 / in force January 1, 2026 (verify) | Companion-chatbot safety; no AI posing as a nurse |
| **Pennsylvania** | SB 1090 / HB 2006 (companion chatbots) | Pending (each passed one chamber) | Companion-chatbot safety |
| **Rhode Island** | 2026 chatbot law | Enacted (verify) | Chatbot safety provisions |
| **Tennessee** | ELVIS Act (2024); 2026 chatbot law | In force / enacted (verify) | Protects voice and likeness against unauthorized AI cloning; chatbot safety |
| **Texas** | Responsible AI Governance Act (TRAIGA, HB 149) | In force January 1, 2026 | Bans AI intended to manipulate people toward self-harm or crime, unlawful intentional discrimination and certain sexual deepfakes; disclosure for government and some health-care AI; AG-only enforcement with 60-day cure; NIST AI RMF alignment helps as a defense |
| Texas | Capture or Use of Biometric Identifier Act (CUBI) | In force | Consent before capturing biometric identifiers; AG enforcement (Part 2.3 for settlements) |
| Texas | SB 140 (telephone solicitation expansion) | In force | Broader solicitation rules and penalties, including texts |
| **Utah** | AI Policy Act as amended (SB 226, SB 332, HB 452, 2025) | In force; sunset extended to July 2027 | Disclose generative AI when a consumer clearly asks, and proactively in "high-risk" interactions (health, financial, legal advice, sensitive data); safe harbor for clear disclosure at the start and throughout; mental-health chatbot rules |
| **Virginia** | SB 796 (companion chatbots) | Pending (passed one chamber; session outcome verify); a 2025 high-risk AI bill (HB 2094) was vetoed (verify) | Companion-chatbot safety |
| **Washington** | SB 5395 (prior authorization) | Enacted (signed March 2026) | Health plans may use AI to approve prior-authorization requests, but a licensed provider must review any denial based on medical necessity |
| **Washington** | HB 2225 (companion chatbots) | Enacted (signed March 24, 2026), effective January 1, 2027 | Clear disclosure that the bot is not human at the start of each interaction and periodically; disclosure that it is not a medical professional when medical advice is sought; may not claim to be human; self-harm safeguards; annual public reporting; stronger protections for minors; enforced under the Consumer Protection Act with a private right of action (business-operations bots reported exempt; verify scope) |
| Washington | Biometric identifiers law (RCW 19.375); My Health My Data Act | In force | Biometric notice and consent; consumer health data consent with a private right of action |

**Volume indicator:** trackers reported 1,561 AI-related bills in 45 states by March 2026 and laws passed or enacted in 30 states between January 1 and October 15, 2026, including 14 chatbot-safety laws in the first half of the year.

### Penalties: US state laws

Amounts are statutory maximums unless noted; many are counted per violation, per consumer or per day, so exposure scales with volume.

| State and law | Maximum penalties | Who enforces |
|---|---|---|
| California CCPA and ADMT regulations | USD 2,663 per violation; USD 7,988 per intentional violation or violation involving consumers under 16 (amounts in effect since January 1, 2025; next inflation adjustment January 1, 2027) | CPPA and Attorney General |
| California BOT Act | Civil penalties under the Unfair Competition Law (background: up to USD 2,500 per violation; verify) | Attorney General, district attorneys |
| California SB 243 (companion chatbots) | Private action for injunctive relief, damages (reported as the greater of actual damages or USD 1,000 per violation; sources describe this differently) and attorney's fees | Private plaintiffs |
| California AB 1609 (human customer service) | USD 5,000 for a first violation; USD 10,000 for each later violation | Public prosecutors |
| California AI Transparency Act (SB 942) | USD 5,000 per violation; each day of noncompliance can be a separate violation | Attorney General, city attorneys, county counsel |
| California SB 53 (frontier AI) | Up to USD 1 million per violation (background; verify) | Attorney General |
| California Invasion of Privacy Act | USD 5,000 per violation or three times actual damages | Private plaintiffs |
| Colorado AI Act (stayed) and Colorado consumer protection | Up to USD 20,000 per violation, counted for each affected consumer or transaction | Attorney General |
| Colorado HB 26-1263 (chatbots) and SB 26-189 (ADMT) | Consumer-protection penalties (amounts verify) | Attorney General |
| Illinois BIPA | USD 1,000 per negligent violation or USD 5,000 per intentional or reckless violation (or actual damages if greater); since 2024, one recovery per person rather than per scan (verify) | Private plaintiffs |
| Illinois HB 3773 (AI in employment) | Human Rights Act remedies: actual damages, back pay, attorney's fees and civil penalties | Department of Human Rights, courts |
| Maine LD 1727 | Unfair Trade Practices Act remedies (background: civil penalties up to USD 10,000 per violation; verify) | Attorney General |
| Maryland HB 895 (surveillance pricing) | Up to USD 10,000 for a first violation | Attorney General |
| New York S9051-B (companion features for minors) | Up to USD 25,000 per violation | Attorney General |
| New York RAISE Act | Up to USD 1 million for a first violation; up to USD 3 million for later violations | Attorney General |
| Texas TRAIGA | USD 10,000 to 12,000 per curable violation; USD 80,000 to 200,000 per uncurable violation; USD 2,000 to 40,000 per day for continuing violations; 60-day cure period | Attorney General only |
| Texas CUBI (biometrics) | Up to USD 25,000 per violation (background; verify) | Attorney General |
| Utah AI Policy Act | Up to USD 2,500 per violation; up to USD 5,000 per violation of an administrative or court order | Division of Consumer Protection, courts |
| Washington HB 2225 (companion chatbots) | Consumer Protection Act: actual damages, discretionary trebling capped at USD 25,000, injunctions, attorney's fees (one source says no statutory damages; verify); Attorney General civil penalties under the Consumer Protection Act | Private plaintiffs and Attorney General |
| Florida Telephone Solicitation Act | USD 500 per violation, up to USD 1,500 if willful (background; verify) | Private plaintiffs |
| Other mini-TCPA laws (for example Oklahoma, Maryland, New Jersey, Texas) | Statutory damages per call or text, often USD 500 to 1,500, plus civil penalties (verify each) | Private plaintiffs, attorneys general |
| Comprehensive state privacy laws | Commonly up to USD 7,500 per violation (varies by state; verify) | Attorneys general |
| Hawaii Act 248 (AI companions) | Not confirmed | Verify |

## 1.3 US laws that cut across many states

| Category | States (verify current list) | What it means for virtual agents |
|---|---|---|
| **Comprehensive consumer privacy laws** (opt-outs from profiling for significant decisions, sensitive-data consent, data-protection assessments) | California, Colorado, Connecticut, Delaware, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, Virginia | Notice, opt-out of profiling, assessments for high-risk processing, rights requests that reach transcripts and recordings |
| **All-party consent to record calls** | California, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Pennsylvania, Washington, and others in some circumstances (for example Connecticut, Delaware, Nevada) | Notice and consent before recording or AI analysis; apply the stricter rule on interstate calls |
| **Biometric privacy laws** | Illinois (BIPA), Texas (CUBI), Washington; biometric provisions in several comprehensive privacy laws | Consent before voiceprints or face data; retention and deletion |
| **State "mini-TCPA" and telemarketing laws** | Florida, Oklahoma, Maryland, New Jersey, Oregon, Texas, Utah and others | Stricter calling hours, consent, frequency caps, registration and private rights of action |
| **State Do-Not-Call lists** | Many states | Scrub per state in addition to the national registry |
| **NAIC Model Bulletin on insurers' use of AI** (adopted as state bulletins) | About 24 to 25 states plus D.C. (NAIC map as of May 1, 2026) | Governance program, risk management, vendor oversight and documentation for insurer AI |
| **AI in health-insurance utilization review** | Several states (for example California SB 1120) | Licensed clinicians must make adverse medical-necessity decisions |
| **Election deepfake laws** | A majority of states | Disclosure or bans on deceptive AI election content near elections |
| **Non-consensual intimate deepfakes** | Nearly all states | Criminal and civil liability for AI sexual imagery |
| **Voice and likeness (right of publicity)** | Tennessee (ELVIS Act), California, New York and others | Consent before cloning a real person's voice or likeness |

## 1.4 US federal laws, regulations and executive actions

| Law, rule or action | Status | Relevance to virtual agents |
|---|---|---|
| **Telephone Consumer Protection Act (TCPA) and FCC Declaratory Ruling FCC 24-17 (February 2024)** | In force | AI-generated voices count as "artificial or prerecorded voice"; prior express consent for calls to wireless numbers, prior express written consent for telemarketing; 8 a.m. to 9 p.m. calling hours; Do-Not-Call; opt-out mechanism; USD 500 per violation, up to USD 1,500 if willful |
| FCC TCPA consent-revocation order (adopted September 30, 2026) | Enacted, not yet effective (effective 30 days after Federal Register publication; date not confirmed); "revoke all" deferred to January 31, 2027 | Category-specific revocation for informational calls; revoke-all for telemarketing |
| FCC one-to-one consent rule (2023) | Vacated by the Eleventh Circuit (January 2025) and later repealed | Pre-2023 written-consent standard governs |
| FCC AI-generated call NPRM (August 2024) | Pending; no adopted rule found | Would define AI-generated calls and require AI disclosure |
| STIR/SHAKEN caller-ID authentication rules | In force | Accurate, authenticated caller ID for outbound agents |
| **FTC Act Section 5** (unfair or deceptive practices) | In force | Deceptive bot claims, undisclosed AI, unsubstantiated "AI" marketing (Part 2.7) |
| FTC Government and Business Impersonation Rule | In force since April 2024; extension to individuals proposed | Bots may not impersonate governments, businesses or (if extended) individuals |
| Telemarketing Sales Rule | In force | Disclosures, misrepresentation bans, recordkeeping |
| **Children's Online Privacy Protection Act (COPPA) and amended Rule** | In force; amended Rule effective June 23, 2025, compliance by April 22, 2026; FTC policy statement of February 25, 2026 limits enforcement for data collected solely for age verification | Verifiable parental consent, retention limits and security program for child-directed agents |
| FTC proposed enforcement policy statement on personalized pricing | Proposed August 19, 2026 (comments closed September 25, 2026) | Undisclosed personalized pricing likely deceptive or unfair where shoppers expect a posted price; not a ban. New Jersey (grocery, from August 1, 2027) and Connecticut have related state laws (verify) |
| **TAKE IT DOWN Act (2025)** | In force; FTC enforcement of platform duties from May 19, 2026 | Covered platforms must remove non-consensual intimate images, including AI-generated ones, within 48 hours of a valid request; penalties reported up to USD 53,088 per violation |
| CAN-SPAM Act | In force | Commercial email sent by agents |
| **Equal Credit Opportunity Act and Regulation B; Fair Credit Reporting Act** | In force | Specific adverse-action reasons even when AI is used (CFPB Circulars 2022-03 and 2023-03; current status after the CFPB's 2025 guidance review verify) |
| Gramm-Leach-Bliley Act and FTC Safeguards Rule | In force | Security program for customer financial data |
| Fair Housing Act; Title VII; ADEA; ADA | In force | Discrimination through algorithms (Part 2.5); EEOC withdrew its AI technical assistance in January 2025 (verify), but the statutes still apply |
| **HIPAA Privacy, Security and Breach Notification Rules** | In force; Security Rule overhaul proposed January 2025, final status not confirmed | Business associate agreements, minimum necessary, safeguards, breach notice (Part 3.2) |
| **Section 1557 nondiscrimination rule, 45 CFR 92.210** | In force; compliance reported due May 1, 2025 | Reasonable efforts to identify and mitigate discrimination risk from patient-care decision-support tools |
| ONC HTI-1 rule, 45 CFR 170.315(b)(11) | In force | Certified health IT must support source attributes and risk management for evidence-based and predictive decision-support interventions |
| CMS Medicare Advantage rule (CMS-4201-F) and February 6, 2024 FAQ | In force | Algorithms may assist but coverage decisions must reflect individual circumstances; predictions alone cannot end post-acute care |
| FDA clinical decision support and general wellness guidance (January 2026) | Guidance | Which AI health functions are regulated devices |
| 42 CFR Part 2 | In force | Substance-use treatment records |
| Americans with Disabilities Act; DOJ Title II web rule | In force; Title II compliance dates extended (large public entities April 26, 2027) at WCAG 2.1 AA | Accessible chat and voice channels |
| Section 508 of the Rehabilitation Act | In force | Accessibility for federal agencies and their vendors |
| **Executive Orders 14148 and 14179 (January 2025)** and **Executive Order 14365 (December 11, 2025)** | In force | EO 14148 revoked the 2023 AI executive order (EO 14110) and EO 14179 set a new pro-innovation AI policy (verify); EO 14365 directs a DOJ AI Litigation Task Force to challenge "onerous" state AI laws and ties some BEAD funding to state AI policy (Commerce's list not published as of October 27, 2026) |
| OMB memoranda M-25-21 and M-25-22 (April 2025) | In force for federal agencies (verify) | AI use and procurement rules for agencies buying virtual agents |
| Copyright Act; Copyright Office AI reports (2025) | In force / guidance | Human authorship required (Part 2.8); training-data questions |
| **Pending federal bills** | Pending | GUARD Act (S.3062, passed Senate Judiciary 22-0 on April 30, 2026; would bar AI companions for minors and require non-human disclosure); House companion H.R.8623; FRONTIER Act (July 2026) and other preemption proposals; no preemption statute as of October 27, 2026 |

### Penalties: US federal laws

| Law | Maximum penalties | Notes |
|---|---|---|
| TCPA | USD 500 per call or text; up to USD 1,500 if willful or knowing (private actions, no aggregate cap); FCC forfeitures assessed per call (for example USD 1,000 per call in the 2024 AI-voice robocall order) | Class actions drive exposure |
| FTC rules (Impersonation Rule, Telemarketing Sales Rule, COPPA, CAN-SPAM, TAKE IT DOWN Act notice-and-removal duties) | Up to USD 53,088 per violation (2025 level; the FTC kept it unchanged for 2026); each day of a continuing violation can count separately | Section 5 deception without a rule violation generally brings injunctions and redress rather than first-violation fines |
| HIPAA (amounts effective January 28, 2026) | Tier 1 (did not know): USD 145 to 73,011 per violation; Tier 2 (reasonable cause): USD 1,461 to 73,011; Tier 3 (willful neglect, corrected): USD 14,602 to 73,011; Tier 4 (willful neglect, not corrected): USD 73,011 to 2,190,294; calendar-year cap of USD 2,190,294 per identical provision (OCR's 2019 enforcement discretion applies lower caps to Tiers 1 to 3); criminal penalties also possible | Inflation-adjusted annually |
| ECOA / Regulation B | Actual damages; punitive damages up to USD 10,000 in individual actions and the lesser of USD 500,000 or 1% of net worth in class actions (background; verify) | Plus CFPB and prudential regulator enforcement |
| FCRA | USD 100 to 1,000 statutory damages per willful violation plus punitive damages (background; verify) | |
| Consumer Financial Protection Act (UDAAP) | Tiered daily civil penalties, inflation-adjusted (verify current amounts) | CFPB and state attorneys general |
| ADA | Injunctive relief in private suits; DOJ civil penalties for public accommodations (inflation-adjusted; verify) | |
| SEC (AI washing) | Case-by-case penalties (for example USD 400,000 total in the 2024 Delphia and Global Predictions orders) | |

## 1.5 European Union

| Instrument | Status | Relevance to virtual agents |
|---|---|---|
| **AI Act (Regulation (EU) 2024/1689)** | In force in stages: prohibitions and AI literacy from February 2, 2025; general-purpose AI duties from August 2, 2025; **Article 50 transparency from August 2, 2026** | Tell users they are interacting with AI unless obvious; mark synthetic audio, images, video and text; label deepfakes; prohibited manipulative and exploitative practices; high-risk duties for uses such as credit, employment and essential services. Fines up to EUR 35 million or 7% of turnover for prohibited practices |
| Digital Omnibus on AI (Regulation (EU) 2026/1744) | In force July 27, 2026 | Moves stand-alone high-risk obligations (reported December 2, 2027; conflicting sources) and product-embedded high-risk to August 2, 2028; marking transition for existing systems to December 2, 2026 |
| Code of Practice on marking and labelling AI-generated content | Guidance (final June 10, 2026; voluntary) | Practical route to Article 50 compliance |
| **GDPR (Regulation (EU) 2016/679)** | In force | Lawful basis, transparency, Article 22 automated decisions, DPIAs, data-subject rights, transfers, processor contracts; CJEU case law on automated scoring and explanations (Part 2.3) |
| Digital Omnibus on data (GDPR, ePrivacy and Data Act changes), procedure 2025/0360(COD) | Pending (Council mandate October 21, 2026; Parliament vote expected 2027) | Reported 96-hour breach notification and cookie changes |
| **ePrivacy Directive (2002/58/EC)** | In force | Consent for automated marketing calls and for cookies or SDKs in chat widgets |
| **Digital Services Act** | In force | Duties for platforms that host or recommend content, including generative features |
| **Consumer law: Unfair Commercial Practices Directive, Consumer Rights Directive** | In force | Misleading bot statements, dark patterns, cancellation friction |
| Digital Fairness Act | Pending (Commission proposal expected November 2026) | Dark patterns, addictive design, exploitative personalization, minors |
| **Consumer Credit Directive (EU) 2023/2225** | Applies from November 20, 2026 (transposition was due November 20, 2025; several states late) | Right to human intervention, explanation and review when creditworthiness assessment uses automated processing |
| **Distance Financial Services Directive (EU) 2023/2673** (folded into the Consumer Rights Directive) | Applies since June 19, 2026 | When robo-advice or chatbots are used to sell financial services at a distance, consumers can request and receive human intervention before the contract and, where justified, afterwards; withdrawal button for online contracts |
| **Platform Work Directive (EU) 2024/2831** | Transposition due December 2, 2026 | Transparency, human oversight and data limits for algorithmic management of platform workers |
| **European Accessibility Act (Directive (EU) 2019/882)** | Applies since June 28, 2025 | Accessible customer-service channels, including chatbots |
| **Product Liability Directive (EU) 2024/2853** | Transposition due December 9, 2026 | Software and AI are products; strict liability for defects, including missing security updates |
| AI Liability Directive | Withdrawn by the Commission in 2025 (verify) | No separate AI fault-liability regime |
| **Cyber Resilience Act (Regulation (EU) 2024/2847)** | Reporting obligations from September 11, 2026; most obligations from December 11, 2027 | Report actively exploited vulnerabilities and severe incidents through ENISA's Single Reporting Platform; fines up to EUR 15 million or 2.5% |
| **NIS2 Directive** | In force; national transposition continuing | Security and incident reporting for in-scope entities and suppliers |
| **DORA (Regulation (EU) 2022/2554)** | In force since January 17, 2025 | ICT risk and third-party oversight for financial entities using AI vendors |
| Data Act | In force since September 12, 2025 | Data access and cloud-switching terms |
| Copyright in the Digital Single Market Directive, Article 4 | In force | Text-and-data-mining opt-outs relevant to training and retrieval content |
| Medical Device and In Vitro Diagnostic Regulations | In force | AI that diagnoses or treats |

### Penalties: EU laws

| Instrument | Maximum fines | Notes |
|---|---|---|
| AI Act | Prohibited practices: EUR 35 million or 7% of worldwide annual turnover; most other obligations (including Article 50 transparency): EUR 15 million or 3%; supplying incorrect information: EUR 7.5 million or 1%; general-purpose AI model providers: EUR 15 million or 3% (imposed by the Commission) | Higher of the two amounts; for SMEs and start-ups the lower |
| GDPR | EUR 20 million or 4% of worldwide annual turnover; EUR 10 million or 2% for lesser infringements | Higher of the two |
| Digital Services Act | Up to 6% of worldwide annual turnover; periodic penalties up to 5% of average daily turnover | Commission for very large platforms; national coordinators otherwise |
| Digital Markets Act | Up to 10% of worldwide turnover, 20% for repeat infringements (background) | Gatekeepers only |
| Cyber Resilience Act | Essential requirements and reporting: EUR 15 million or 2.5%; other obligations: EUR 10 million or 2%; incorrect information: EUR 5 million or 1% (lower tiers background; verify) | Higher of the two |
| NIS2 Directive | Essential entities: at least EUR 10 million or 2%; important entities: at least EUR 7 million or 1.4% | Minimum maximums; member states may set higher |
| DORA | Set by member states; critical ICT third-party providers face Commission-level periodic penalties of up to 1% of average daily worldwide turnover (background; verify) | Financial sector |
| Consumer law (UCPD and Consumer Rights Directive, as amended by the Omnibus Directive) | For widespread infringements, at least 4% of annual turnover in the member states concerned, or EUR 2 million where turnover data is unavailable (background; verify) | Coordinated enforcement under the CPC Regulation |
| Consumer Credit Directive 2; Distance Financial Services Directive; European Accessibility Act; Data Act | Effective, proportionate and dissuasive penalties set by member states | National amounts vary |
| Product Liability Directive | No fines; strict liability for compensation | Damages claims |

## 1.6 EU member-state laws

| Member state | Law | Status | Notes |
|---|---|---|---|
| **Italy** | Law 132/2025 (national AI law) | In force October 10, 2025 | National principles alongside the AI Act; personality-rights protection for image, voice and likeness; criminal offenses for harmful deepfakes; implementing decrees due within 12 months |
| **Germany** | Barrierefreiheitsstärkungsgesetz (BFSG, accessibility); national AI Act implementation law | BFSG in force June 28, 2025; AI implementation law status verify | Accessible customer service; national AI supervisory structure; strict all-party consent for call recording under the Criminal Code |
| **Ireland** | European Union (Distance Contracts for Financial Services) Regulations 2026; Artificial Intelligence Companion Services (Protection of Children) Bill 2026 (Bill 93 of 2026) | Regulations signed mid-2026 (reported as June 30 or July 3); Bill introduced September 29, 2026 | Right to speak to a person instead of a chatbot when buying financial products online or by phone, enforced by the CCPC and the Central Bank; proposed design and disclosure rules for AI companions used by children |
| **Netherlands** | Draft Platform Work Act (published June 29, 2026) | Pending | Implements the Platform Work Directive |
| **Denmark** | Amendment giving people rights over their own face and voice (deepfakes) | Reported enacted (year and status verify) | Consent before AI imitation of a person |
| **Spain** | Draft AI law with labeling sanctions and the AESIA supervisor | Pending (verify) | Labeling of AI-generated content |
| **All member states** | National call-recording, telemarketing-register, employee-monitoring and works-council rules; national transposition of the CCD2, PWD, PLD and NIS2 | Varies | Check each country of operation |

### Penalties: EU member-state laws

| Member state | Penalties | Notes |
|---|---|---|
| Italy (Law 132/2025) | Criminal offense for unlawful dissemination of harmful AI deepfakes (reported 1 to 5 years' imprisonment; verify); aggravating circumstances for crimes committed with AI | National AI law |
| Germany | Accessibility (BFSG) fines up to EUR 100,000 (background; verify); unauthorized recording of private speech is a criminal offense (up to 3 years under StGB section 201, background) | |
| Ireland | Offences under the distance financial services regulations prosecuted by the CCPC or Central Bank (amounts verify) | |
| All member states | GDPR, AI Act, NIS2 and consumer-law fines enforced by national authorities | National authorities designated under the AI Act |

## 1.7 United Kingdom

| Law or regime | Status | Relevance to virtual agents |
|---|---|---|
| **UK GDPR and Data Protection Act 2018, as amended by the Data (Use and Access) Act 2025** | Main provisions in force February 5, 2026; complaints-procedure duty from June 19, 2026 | Articles 22A to 22D on automated decisions (safeguards: information, representations, human intervention, contest); lawful basis; DPIAs; data-subject rights |
| **Privacy and Electronic Communications Regulations (PECR)**, as amended | In force; fines now up to GBP 17.5 million or 4% of turnover | Prior consent for automated marketing calls; TPS and Corporate TPS screening for live calls; caller identification; consent for cookies and SDKs (certain low-risk cookies exempt) |
| **Online Safety Act 2023** | In force in phases | Chatbots in scope where they enable user-to-user sharing, search or pornographic content (Ofcom guidance, December 2025); highly effective age assurance where required; government pledged on February 15, 2026 to bring all AI chatbots in scope (pending) |
| **Digital Markets, Competition and Consumers Act 2024** | Consumer-enforcement regime in force since April 2025 | Misleading AI statements, subscription traps and dark patterns; CMA fines reported up to 10% of global turnover (verify) |
| Consumer Rights Act 2015 | In force | Services must be provided with reasonable care; statements bind the trader |
| **Equality Act 2010** | In force | No discrimination; anticipatory duty to make reasonable adjustments (for example text alternatives to voice bots) |
| Public Sector Bodies Accessibility Regulations 2018 | In force | Accessible public-sector websites and apps (WCAG 2.2 AA under current guidance, verify) |
| **FCA rules (Consumer Duty, SM&CR, Principles)** | In force; FCA said on June 2, 2026 it will not add AI-specific rules | Good outcomes, vulnerable-customer support and access to human help for regulated firms |
| Ofcom General Conditions and persistent-misuse policy | In force | Valid caller ID; limits on silent and abandoned calls (background: about 3% abandoned calls per campaign per 24 hours, verify) |
| Sector cold-calling bans | In force (pensions, claims management; verify list) | Outbound AI calls may be prohibited for these products |
| Copyright, Designs and Patents Act 1988 | In force; government report of March 18, 2026 ruled out a broad training exception | Licences needed for training content unless an exception applies |
| NIS Regulations 2018; Cyber Security and Resilience Bill | In force / pending (introduced November 12, 2025) | Incident reporting and supplier security |
| Regulating for Growth Bill | Pending (announced May 13, 2026) | AI sandboxes; no standalone AI Act |
| CMA guidance on complying with consumer law when using AI agents | Guidance (2026) | Consumer-law expectations for agentic AI, including customer-service agents; the CMA can now fine up to 10% of global turnover |
| AI Cyber Security Code of Practice (January 31, 2025) | Guidance | 13 principles for secure AI; basis for ETSI TS 104 223 (Part 3.4) |

### Penalties: UK laws

| Law | Maximum penalties | Notes |
|---|---|---|
| UK GDPR and Data Protection Act 2018 | GBP 17.5 million or 4% of worldwide annual turnover; GBP 8.7 million or 2% for lesser infringements | Higher of the two |
| PECR (as amended by the DUAA) | GBP 17.5 million or 4% of worldwide annual turnover | Aligned with UK GDPR levels in 2026 |
| Online Safety Act 2023 | GBP 18 million or 10% of qualifying worldwide revenue, whichever is greater; business disruption orders; criminal liability for senior managers in some cases | Ofcom |
| Digital Markets, Competition and Consumers Act 2024 | Consumer-law fines up to 10% of global turnover; additional daily penalties (verify) | CMA direct enforcement |
| Equality Act 2010 | Uncapped compensation set by courts and tribunals | |
| FCA regime | Unlimited fines; redress schemes | Regulated firms |
| Communications Act (Ofcom persistent misuse and General Conditions) | Persistent misuse penalties up to GBP 2 million; General Conditions breaches up to 10% of relevant turnover (background; verify) | Silent and abandoned calls |
| NIS Regulations 2018 | Up to GBP 17 million | |

## 1.8 International treaty

| Instrument | Status | Notes |
|---|---|---|
| **Council of Europe Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law** | Opened for signature September 5, 2024; signed by the EU, UK and US among others (ratification status verify) | Principles on transparency, oversight, accountability and remedies for AI systems |

## 1.9 Proposed laws and rules likely in the next 12 to 18 months

This section covers proposals that would add new obligations for virtual agents between now (November 2026) and mid-2028, led by "right to a human" measures like California's AB 1609. It also lists obligations that are already enacted and dated within that window, because they are certain.

### 1.9.1 How to read the outlook ratings

The outlook is a judgment based on each proposal's stage, sponsorship, the legislative calendar and comparable laws. It is not a prediction of the outcome.

| Rating | Meaning |
|---|---|
| **Certain** | Enacted or adopted; only the effective date is in the future |
| **High** | Agency rule in final stages, government bill with priority, or a bill that has passed one chamber with broad support |
| **Medium** | Introduced with a credible path (committee action, carry-over, governor or agency support, or copies elsewhere) |
| **Low** | Introduced only, opposed, or facing a session deadline; likely to need reintroduction |

**Calendar facts that drive the ratings (verify dates):** the 119th US Congress ends January 3, 2027, so federal bills not passed by then die and must be reintroduced; California's and Pennsylvania's 2025 to 2026 sessions end November 30, 2026; Michigan's and New York's sessions end December 31, 2026; New Jersey's 2026 to 2027 session continues into 2028; Illinois's 104th General Assembly ends in January 2027; Texas's next regular session starts January 12, 2027 (bill prefiling from November 9, 2026); Virginia's 2027 session starts in January 2027.

### 1.9.2 Dated obligations already scheduled (certain)

| Date | Obligation | Jurisdiction |
|---|---|---|
| November 20, 2026 | Consumer Credit Directive 2: right to human intervention in automated creditworthiness assessments | EU |
| December 2, 2026 | AI Act Article 50(2) marking deadline for systems already on the market; Platform Work Directive transposition deadline | EU |
| December 9, 2026 | Product Liability Directive transposition deadline (software and AI as products) | EU |
| January 1, 2027 | **California AB 1609** (human customer service within 15 minutes or callback within one business day); California CCPA ADMT compliance; Colorado HB 26-1263 and SB 26-189; Washington HB 2225; New York S9051-B (reported); New York RAISE Act | US states |
| January 31, 2027 | FCC "revoke all" consent-revocation requirement (current deferral) | US federal |
| April 26, 2027 | DOJ ADA Title II web-accessibility compliance for large public entities | US federal |
| July 2027 | Utah AI Policy Act sunset unless extended | Utah |
| August 2, 2027 | AI Act obligations for general-purpose models placed on the market before August 2025 | EU |
| December 2, 2027 (unconfirmed) | AI Act stand-alone high-risk obligations under the Digital Omnibus | EU |
| December 11, 2027 | Cyber Resilience Act main obligations | EU |

### 1.9.3 Right-to-a-human and customer-service AI proposals

| Proposal | Jurisdiction | Stage (November 2026) | What it would require | Outlook |
|---|---|---|---|---|
| **NYC Department of Consumer and Worker Protection rule on automated customer service ("doom loops")** | New York City | Proposed October 20, 2026; public hearing and written comments due November 19, 2026 (verify); effective date not set | Clear and conspicuous disclosure at the start of an automated interaction, in the language being used, that the consumer is dealing with an automated system; easy access to a human representative, including a one-touch option; applies to chatbots and phone voice-response systems; reported duty to keep a machine-readable log of every automated interaction for at least three years; excludes businesses under exclusive federal jurisdiction such as airlines and national banks | **High** (agency rule; likely adopted with changes in 2027) |
| **Illinois HB 3653** | Illinois | Introduced (104th General Assembly); no reported movement | Amend the Consumer Fraud Act so businesses using automated phone or text systems offer a human-representative option at the start of the interaction during business hours | **Low to medium** (likely reintroduced in 2027 if it lapses) |
| **New Jersey S965 and A3663** | New Jersey | Introduced in the 2026 to 2027 session | Callers to state and local government entities may press zero to reach a live operator or leave a message during business hours (government only); a resolution (SR60) urges health insurers and pharmacy providers to do the same | **Medium** for government lines; private-sector mandate not yet proposed |
| **New York A8762 and A10796** | New York State | In committee | State-agency phone lines must offer a live-representative option before other menu prompts and may not rely exclusively on automated systems (government only) | **Low to medium** (session ends December 31, 2026; reintroduction likely) |
| **Keep Call Centers in America Act (S.2495; H.R.4954)** | US federal | Introduced July and August 2025; referred to committee | Disclose at the start that AI is in use; on request, transfer immediately to a human agent located in the United States; FTC enforcement with annual compliance certification; 120 days' notice to the Department of Labor before moving call-center work overseas | **Low** (dies January 3, 2027 unless passed; likely reintroduced) |
| **People-First Chatbot Act (H.R. 9619)** | US federal | Introduced July 9, 2026 (Reps. Foushee and Casar) | Based on model legislation from Fairplay, Consumer Federation of America and EPIC: regular disclosure that chatbots are not people; limits on training with minors' data and consent for adults' data; safety assessments; private right of action; trade press reports a disclosure and human-transfer duty for customer service (verify bill text) | **Low** (likely reintroduced) |
| **EU Digital Fairness Act** | EU | Commission proposal expected November 11, 2026 | Expected to target dark patterns, addictive design, subscription traps and exploitative personalization; commentators expect it may add a right to contact a human when chatbots handle complaints and enquiries (not confirmed). The Commission's fitness check reported that 44% of consumers struggled to resolve issues because they could only use chatbots | **Proposal certain; adoption within 18 months unlikely** (EU legislation usually takes 18 to 30 months). Gartner predicts an EU right to talk to a human by 2028 |
| **UK "right to talk to a human"** | UK | Citizens Advice campaign (September 22, 2026) for energy, banking, telecoms and internet providers; Parliament petition 776511 for a working phone line to a human at every company; no government commitment found | Guaranteed human contact for essential services | **Low** for legislation within 18 months; **medium** for regulator guidance (Ofcom is reviewing AI in telecoms; see 1.9.4) |

### 1.9.4 Other pending proposals that affect virtual agents

| Proposal | Jurisdiction | Stage | What it would require | Outlook |
|---|---|---|---|---|
| **GUARD Act (S.3062; H.R.8623)** | US federal | Passed Senate Judiciary 22-0 on April 30, 2026 | Ban AI companions for minors; require non-human disclosure; criminal penalties for sexual content with minors or soliciting self-harm | **Low to medium** (strongest committee support of the federal chatbot bills, but the session is ending) |
| **Senior Chatbot Protection Act (S.5117)** | US federal | Introduced July 23, 2026 (Sens. Kelly and Justice); bipartisan; supported by the AMA | Clear disclosures from AI chatbot and voice-assistant companies, protection for sensitive conversations, ban on deceptive design; NIST voluntary guidance for older adults; excludes narrow scripted bots | **Low** (likely reintroduced) |
| **CHATBOT Act (H.R. 7985, Rep. Mullin; separate Senate bill S.4407, Sen. Cruz)** | US federal | House bill introduced March 18, 2026; Senate bill April 28, 2026; both in committee | House bill: no chatbot output or marketing that misrepresents professional qualifications; FTC enforcement and guidance within 12 months. Senate bill provisions not confirmed | **Low** |
| **Voluntary Consumer AI Disclosure Pilot Act (H.R. 9439)** | US federal | Introduced June 24, 2026 (Rep. Lofgren) | NIST pilot and voluntary standards for disclosing AI use to consumers | **Low** |
| **Federal preemption of state AI laws** (FRONTIER Act and others) | US federal | No floor votes | Would preempt some state AI duties, mainly for frontier developers | **Low to medium**; deployer-facing state laws would likely survive |
| **FCC AI-generated call rules (2024 NPRM)** | US federal | Pending since August 2024 | Define AI-generated calls; disclose AI use at consent and at call start | **Low to medium** |
| **New York A222 (chatbot liability)** | New York State | Referred to Consumer Affairs committee | Proprietors liable for misleading, incorrect, contradictory or harmful chatbot information that causes financial loss or other harm when the bot is used instead of a human representative; bot must give information consistent with formal policies and terms | **Medium** in 2027 (reintroduction likely; mirrors the Air Canada principle) |
| **New York S7263, S10675 and A6545 (chatbots posing as licensed professionals)** | New York State | S7263 reported advanced in the Senate (another source says tabled); others in committee | No impersonation of lawyers, doctors, engineers and other licensed professionals; liability that a "you're talking to a bot" notice cannot avoid | **Medium** |
| **Virginia HB 635 and SB 796 (companion chatbots)** | Virginia | HB 635 carried over to the 2027 session; SB 796 passed one chamber | Companion-chatbot disclosure and safety | **Medium** |
| **Michigan SB 760** | Michigan | Passed Senate 20-17 (May 2026); in the House | Chatbot safety | **Low** (session ends December 31, 2026) |
| **Pennsylvania SB 1090 and HB 2006** | Pennsylvania | Each passed one chamber | Companion-chatbot safety | **Low** (session ends November 30, 2026) |
| **Louisiana HB 686** | Louisiana | 2026 session ended without confirmed passage | Disclosure at the start of any AI-made call | **Low**; refiling in 2027 possible |
| **California automated decision systems bill (AB 1018 and successors)** | California | AB 1018 held on the inactive file; the 2025 to 2026 session ends November 30, 2026 | Notice, opt-out and appeal for consequential automated decisions | **Medium** for a reintroduced bill in 2027 under a new governor |
| **Texas 2027 session** | Texas | Prefiling from November 9, 2026 | TRAIGA amendments and new chatbot, minors and AI-call bills expected (verify when filed) | **Medium to high** that some AI chatbot measure passes by June 2027 |
| **Further state chatbot and kids' safety bills** | Many states | Model bills offered for 2027 (for example by the Transparency Coalition); Center for Democracy and Technology expects chatbot regulation to stay a top focus | Disclosure, age assurance, crisis protocols, independent audits | **High** that several more states enact chatbot laws in 2027 |
| **Agentic commerce (AI agents buying on consumers' behalf)** | US states and federal | No dedicated statute; a 42-state attorney-general group is using existing consumer-protection law; Regulation E does not clearly cover agent-authorized payments | Liability and consent rules for agent purchases | **Low** for statutes; **medium** for enforcement actions |
| **EU Digital Omnibus on data (GDPR, ePrivacy, Data Act)** | EU | Council mandate October 21, 2026; Parliament position expected 2027 | Reported 96-hour breach notification and cookie changes | **Medium** for adoption by late 2027 |
| **EU AI Act harmonised standards** | EU | In development | Presumption of conformity for high-risk duties | **Medium** |
| **Ireland Artificial Intelligence Companion Services (Protection of Children) Bill 2026 (Bill 93 of 2026)** | Ireland | Introduced September 29, 2026 | Design requirements and disclosure for AI companion services used by children | **Low to medium** |
| **UK Online Safety Act amendment for all AI chatbots** | UK | Government pledged February 15, 2026; no bill text found | Illegal-content and child-safety duties for chatbots without user-to-user features | **Medium** |
| **UK Cyber Security and Resilience Bill** | UK | Introduced November 12, 2025; carried over with priority in May 2026 | Expanded NIS regime and incident reporting, including managed service providers | **High** |
| **UK Regulating for Growth Bill** | UK | Announced May 13, 2026 | Cross-economy AI sandboxes | **Medium** |
| **Ofcom review of AI in telecoms customer service** | UK | Call for views closed March 10, 2026; discussion paper September 25, 2026 said current rules allow innovation while protecting consumers | Possible guidance; Which? asked Ofcom to follow the CMA's agentic-AI consumer-law guidance | **Medium** for guidance; **low** for new rules |

### 1.9.5 Common obligations in the proposals, and what to build now

| Likely obligation | Proposals that contain it | Build or test now (corner-case catalog IDs) |
|---|---|---|
| Disclose AI at the start of every interaction, in the language and medium used | NYC rule, Keep Call Centers Act, People-First Chatbot Act, Senior Chatbot Protection Act, GUARD Act, Louisiana HB 686, FCC NPRM | Disclosure engine outside the model (M1, G1) |
| Human option on request, one-touch, on every channel | NYC rule, Illinois HB 3653, Keep Call Centers Act, EU DFA (expected), UK campaigns | Universal "agent" and "0" handling (F1, F2) |
| Time limits for reaching a human | California AB 1609 (15 minutes or callback) | Measure time-to-human (F6); callback scheduling (F3) |
| Human located in the United States | Keep Call Centers Act; People-First Chatbot Act (reported) | Routing able to select agents by location; record agent location per transfer |
| Interaction logs kept for years | NYC rule (three years, machine-readable, reported) | Retention policy for transcripts and decisions that also respects privacy deletion duties |
| Liability for inaccurate bot information | New York A222 (and the Air Canada principle) | Ground answers in authoritative policy (A1 to A8) |
| No impersonation of humans or licensed professionals | New York S7263 / S10675 / A6545, CHATBOT Act, state laws | G1, G2; scope limits for medical, legal and financial advice (A7) |
| Protections for minors and older adults | GUARD Act, Senior Chatbot Protection Act, Virginia, Ireland Bill 93, UK OSA amendment, state model bills | H1 to H3, H6; age assurance |
| Disclosure and consent for AI-made calls | Louisiana HB 686, FCC NPRM, Keep Call Centers Act | M3, E6 |
| Human intervention in automated financial decisions | EU CCD2 and Distance Financial Services Directive (now in force); California ADMT | M5 |

### 1.9.6 Watch calendar

| Date (verify) | Event |
|---|---|
| November 9, 2026 | Texas bill prefiling opens |
| November 11, 2026 | Expected EU Digital Fairness Act proposal |
| November 19, 2026 | NYC hearing and comment deadline on the automated customer-service rule |
| November 30, 2026 | California and Pennsylvania sessions end; pending bills lapse |
| December 31, 2026 | Michigan and New York sessions end |
| January 3, 2027 | 119th Congress ends; pending federal bills lapse |
| January 2027 | New state sessions begin (including Texas, Virginia, New York, Illinois's 105th General Assembly); new California governor |
| 2027 | European Parliament position on the Digital Omnibus on data; Ofcom and CMA guidance updates |

## 1.10 Worldwide AI laws and regulations (outside the US, EU and UK)

Most countries still regulate AI through existing privacy, consumer, online-safety and sector laws. A smaller group now has binding AI statutes (for example South Korea, Vietnam, Kazakhstan, China's measures and Russia's foundation-model law), and several have principle-based "basic acts" without penalties (Japan, Taiwan). Counts of "countries with AI laws" differ widely by definition; the IAPP tracker covers about two dozen jurisdictions in depth. Status and penalty entries below come largely from law-firm and news sources and should be confirmed locally.

### 1.10.1 Americas

| Country | Law or instrument | Status | Relevance to virtual agents | Maximum penalties |
|---|---|---|---|---|
| **Canada (federal)** | No AI act (AIDA died January 2025); national strategy "AI for All" (June 2026); Bill C-36 (privacy, with duties for automated decision-making) and Bill C-34 (Safe Social Media Act, covering platforms and AI chatbot services) | Bills at second reading (October 2026) | Automated-decision notices; chatbot safety duties if C-34 passes | PIPEDA fines up to CAD 100,000 (background); CASL administrative penalties up to CAD 10 million per violation for businesses (background; verify) |
| Canada (Quebec) | Law 25 (private-sector privacy) | In force | Notice of decisions based solely on automated processing; right to know factors and to submit observations; privacy impact assessments | Administrative penalties up to the greater of CAD 10 million or 2% of worldwide turnover; penal fines up to the greater of CAD 25 million or 4% (doubled for repeat offenses) |
| Canada (provinces) | Ontario Bill 194 (public-sector AI, 2024); Manitoba Public Sector AI and Cybersecurity Governance Act (June 2026); Ontario AI disclosure in job postings (reported effective January 1, 2026; verify) | In force | Public-sector agents; recruiting agents | Varies |
| **Brazil** | LGPD (data protection); AI bill PL 2338/2023 | LGPD in force; PL 2338 passed the Senate (December 2024) and awaits the Chamber special committee; 2026 elections make a 2027 vote likely | Review of automated decisions (LGPD); risk-based AI duties and rights to explanation and human review (bill) | LGPD: 2% of Brazilian revenue, up to BRL 50 million per infraction; PL 2338 proposes the same ceiling |
| **Mexico** | Federal AI bills; one source reports 2026 amendments creating binding obligations | Conflicting sources (verify) | | |
| **Peru** | Law 31814 (2023) and implementing regulation | In force | Risk-based AI obligations; the only enacted AI statute in Latin America per one tracker | Verify |
| **Chile** | AI bill (Boletín 16821-19); new personal data protection law (Law 21.719, reported in force December 2026; verify) | AI bill pending | Risk-based AI duties (bill); data-protection duties | Data law: fines reported up to about 4% of annual revenue for large companies (verify) |
| **Colombia** | CONPES 4144 (2025) AI policy; ethical framework (2021); bills | Policy | Guidance | Data protection law penalties |
| **Argentina** | Recommendations for reliable AI (2023); data protection and consumer laws | Guidance | Existing law applies | Existing-law penalties |

### 1.10.2 Asia-Pacific

| Country | Law or instrument | Status | Relevance to virtual agents | Maximum penalties |
|---|---|---|---|---|
| **China** | Interim Measures for Generative AI Services (2023); deep synthesis and algorithm recommendation rules; AI content labeling measures and standard GB 45438-2025 (September 1, 2025); amended Cybersecurity Law with AI provisions (January 1, 2026); **Interim Measures for Anthropomorphic AI Interaction Services** (adopted April 10, 2026, in force July 15, 2026) | In force | Registration and security assessment for public generative AI; explicit and implicit labels on AI content; for human-like companion services: disclosure that users are talking to AI, human takeover when users raise suicide or self-harm, tiered supervision and protections for minors | Cybersecurity Law: general cap reported at RMB 10 million for critical operators and RMB 1 million for others, individuals up to RMB 1 million (sources vary); PIPL: up to RMB 50 million or 5% of prior-year turnover for serious violations (background; verify); suspension of services |
| **South Korea** | AI Basic Act and Enforcement Decree | In force January 22, 2026; fines deferred for at least one year except serious harm | High-impact AI duties (risk management, human oversight, explanation); notice and labeling for generative AI; domestic representative for foreign providers; MSIT can still investigate and order corrections | Administrative fines up to KRW 30 million |
| **Japan** | AI Promotion Act (2025); Basic AI Plan (reported approved about April 2026; verify) | In force (principle-based) | Effort-based duties to cooperate with government; existing privacy and consumer law applies | No AI-specific penalties; APPI penalties apply to personal data |
| **Taiwan** | AI Basic Act | In force January 14, 2026 | Principles; sector regulators to issue detailed rules based on a risk framework from the digital ministry | No penalties yet |
| **Vietnam** | Law on Artificial Intelligence (No. 134/2025/QH15); Decree 142/2026/ND-CP (May 1, 2026); high-risk AI list (effective August 15, 2026) | In force March 1, 2026; 18-month transition for legacy systems in health, education and finance | Three-tier risk classification; machine-readable labels on AI audio, images and video; local point of contact for foreign high-risk providers | Administrative penalties, criminal liability for serious cases and civil compensation; revenue-based penalties removed from the final law |
| **India** | IT Rules amendment on synthetically generated information (notified February 10, 2026, in force February 20, 2026); Digital Personal Data Protection Act 2023 and Rules 2025 (phased, full obligations about May 2027); non-binding AI governance guidelines (background) | In force / phasing in | Prominent labels and embedded provenance metadata for AI content; verification duties for large platforms; consent, notice and children's data rules | DPDP: up to INR 250 crore for security-safeguard failures, up to INR 200 crore for breach-notification failures, INR 150 to 200 crore for children's-data violations (sources vary); IT Rules: loss of safe harbor in some cases |
| **Australia** | No AI act; National AI Plan (December 2, 2025; mandatory guardrails dropped); Privacy Act automated-decision transparency (from December 10, 2026); eSafety Age-Restricted Material Codes covering AI companion chatbots; social media minimum age (December 10, 2025); AI Safety Institute (2026) | In force / phasing in | Companion chatbots able to produce sexual, violent or self-harm material must confirm users are 18 or older; privacy-policy disclosure of automated decisions | Privacy Act serious interference: greater of AUD 50 million, three times the benefit, or 30% of adjusted turnover; Online Safety Act penalties (background: up to about AUD 49.5 million; verify) |
| **New Zealand** | No AI-specific law; Algorithm Charter (public sector); Privacy Act 2020 | Guidance | Existing law applies | Privacy Act penalties (low) |
| **Singapore** | No binding AI law; Model AI Governance Framework for Agentic AI (January 22, 2026); PDPA | Guidance plus PDPA | Agent-governance expectations; data protection | PDPA: up to 10% of annual Singapore turnover (for turnover above SGD 10 million) or SGD 1 million (verify which applies) |
| **Malaysia** | Online Safety Act 2025 (in force January 1, 2026); AI Governance Bill | AI bill to be tabled (2026) | Online-safety duties; future AI governance | PDPA penalties (verify) |
| **Thailand** | Draft Act on Artificial Intelligence (new version July 2, 2026) | Pending | Risk-based duties, extraterritorial reach | PDPA penalties (background: up to THB 5 million; verify) |
| **Indonesia** | Presidential regulation on AI (expected); Personal Data Protection Law | AI rule pending | Data protection | PDP Law administrative fines (background: up to 2% of annual revenue; verify) |
| **Philippines** | Domestic AI bill; proposal for an ASEAN AI framework as 2026 chair; Data Privacy Act | Pending | | Data Privacy Act penalties |
| **Hong Kong** | Voluntary AI guidance; Personal Data (Privacy) Ordinance | Guidance | | PDPO penalties |
| **Kazakhstan** | Law on Artificial Intelligence (No. 230-VIII) | Signed November 17, 2025; in force January 18, 2026 | Risk-based classification; high-risk systems treated as critical digital infrastructure | Verify |

### 1.10.3 Middle East

| Country | Law or instrument | Status | Relevance | Maximum penalties |
|---|---|---|---|---|
| **United Arab Emirates** | Federal PDPL (Decree-Law 45/2021); UAE Charter for AI (2024); Central Bank AI and machine-learning guidance (February 2026); DIFC rules on autonomous systems (background) | PDPL in force; Charter voluntary (one source expects it to become binding by end of 2026) | Data protection; financial-sector AI guidance | PDPL administrative fines under executive regulations (verify) |
| **Saudi Arabia** | PDPL (in force since September 2023); SDAIA AI ethics principles; AI law | AI law status conflicting (draft versus in force; verify); MENA AI harmonisation initiative with the UAE, Qatar and Oman (April 16, 2026) | Data protection; transfer limits | PDPL: up to SAR 5 million (up to SAR 10 million for repeat offenses); disclosing sensitive data with intent to harm or for gain: up to two years' imprisonment or SAR 3 million |
| **Qatar** | Central bank AI guidelines for banks (reported enforceable since late 2024); national AI ethics code (reported) | Sources conflict | Banking AI | Verify |
| **Bahrain** | Standalone AI bill (proposed April 2024); Personal Data Protection Law 30/2018 | Pending | | Data law penalties |
| **Israel** | No comprehensive AI statute; signed the Council of Europe AI Convention; privacy law and sector regulators | Guidance | Existing law applies | Privacy law penalties |
| **Turkey** | National AI Strategy; personal data law (KVKK) | No AI law found | Existing law applies | KVKK penalties |

### 1.10.4 Africa

| Country | Law or instrument | Status | Relevance | Maximum penalties |
|---|---|---|---|---|
| **Kenya** | Artificial Intelligence Bill 2026 (Senate) | Tabled March 2026; pending | AI Commissioner, risk classes, human-review rights | Bill reported at KES 5 million; Data Protection Act penalties apply now |
| **Nigeria** | AI bill (reported); Nigeria Data Protection Act 2023 | AI bill expected but passage not confirmed | Comprehensive AI framework (bill) | Bill reported at up to NGN 10 million or 2% of annual gross revenue; NDPA penalties of similar scale |
| **Ethiopia** | Legislative process toward an AI law | Reported launched | | |
| **South Africa** | POPIA; AI policy work | No AI law | Data protection | POPIA penalties |
| **African Union** | Continental AI Strategy (2024) | Policy | Regional direction | |

### 1.10.5 Europe outside the EU and UK

| Country | Law or instrument | Status | Relevance | Maximum penalties |
|---|---|---|---|---|
| **Switzerland** | Signed the Council of Europe AI Convention (March 27, 2025); draft bill implementing it and consultation planned by end of 2026; sector-specific approach; revised Federal Act on Data Protection | Pending | Implementation of the convention; data protection | FADP criminal fines up to CHF 250,000 on responsible individuals (background) |
| **Norway** | National AI Act incorporating the EU AI Act through the EEA | Scheduled for mid-2026 (entry into force unconfirmed) | EU AI Act duties | EU AI Act levels once in force |
| **Russia** | Federal Law No. 243-FZ on large (foundation) AI models | Adopted July 26, 2026; main provisions from September 1, 2026; developer obligations from March 1, 2027 | "Sovereign" and "national" model categories; data localisation and security requirements; labeling provisions disputed | Verify |

### 1.10.6 Proposed laws worldwide (next 12 to 18 months)

| Proposal | Country | Stage | Outlook |
|---|---|---|---|
| PL 2338/2023 AI framework | Brazil | Chamber special committee | Medium for 2027 |
| Bills C-36 (privacy and automated decisions) and C-34 (online safety, including AI chatbots) | Canada | Second reading | Medium |
| AI Governance Bill | Malaysia | To be tabled | Medium |
| Draft Act on Artificial Intelligence | Thailand | Public hearing (July 2026) | Medium |
| Presidential regulation on AI | Indonesia | Expected | Medium |
| AI bill and ASEAN framework | Philippines | Pending | Low to medium |
| AI Bill 2026 | Kenya | Senate | Medium |
| AI bill | Nigeria | Expected | Medium |
| Convention implementation bill | Switzerland | Draft due end of 2026 | High for a draft; law later |
| National AI Act | Norway | Scheduled mid-2026 | High |
| AI law | Saudi Arabia | Draft (status conflicting) | Medium |
| AI Charter becoming binding | UAE | Vendor-reported | Low to medium |
| AI bill | Chile | Pending | Medium |
| AI bills | Mexico | Conflicting reports | Verify |
| Implementing rules and decrees | Vietnam, South Korea, Taiwan, Kazakhstan, China | Ongoing | High |

### 1.10.7 Global patterns for virtual agents

1. **AI disclosure and labeling** are near-universal: China, South Korea, Vietnam, India and the EU require labels or notices for AI interactions or content.
2. **Companion-style and human-like chatbots** face specific rules in China (human takeover on self-harm cues), Australia (age confirmation) and several US states.
3. **Data-protection laws carry the largest penalties** in most countries (turnover-based fines in China, Brazil, Quebec, Australia, India's fixed high caps).
4. **Local representation** is required for foreign providers in South Korea and Vietnam.
5. **Principle-based "basic acts"** (Japan, Taiwan) set direction without penalties; sector regulators supply the detail.

---
# Part 2. Court cases and enforcement decisions involving AI

Cases are grouped by the issue AI raised. Each entry gives the forum, date, what happened, the reported outcome or status, and why it matters for a virtual agent. Allegations in pending cases are unproven. No large jury verdict awarding damages against a virtual-agent operator was found; most monetary outcomes are tribunal awards, settlements, regulator penalties and sanctions.

## 2.1 What a bot says: misstatements, liability and defamation

| Case | Forum and date | What happened | Outcome or status | Lesson for virtual agents |
|---|---|---|---|---|
| **Moffatt v. Air Canada** | British Columbia Civil Resolution Tribunal, February 2024 | Chatbot told a passenger he could claim a bereavement fare after travel, contrary to policy | Airline liable for negligent misrepresentation; the "separate legal entity" argument rejected; award of about CAD 650.88 plus interest and fees (about CAD 812 total) | The company owns what its bot says; ground answers in authoritative policy |
| **Clinic chatbot decision** | Higher Regional Court of Hamm, Germany, May 2026 (reported) | A clinic's website chatbot gave invented medical specialist titles | Companies can be liable for misleading chatbot statements; appeal to the Federal Court of Justice reportedly allowed | Professional claims need verified data and hard limits |
| **Publishers v. Google (AI Overviews)** | Munich Regional Court, Germany, May or June 2026 (dates differ) | AI summaries repeated false claims about two publishers | Google treated as author of the summaries; injunction granted | Generated statements about named businesses can be unlawful |
| **Walters v. OpenAI** | Superior Court of Gwinnett County, Georgia, May 2025 | ChatGPT produced a false summary accusing a radio host of embezzlement | Summary judgment for OpenAI (no proof of harm or fault; warnings and accuracy efforts considered) | Disclaimers and accuracy controls matter, but do not rely on them alone |
| **Wolf River Electric (LTL LED) v. Google** | Minnesota (federal, then reportedly remanded to state court January 2026) | AI Overview falsely said a solar company faced an attorney-general lawsuit; damages claimed of USD 110 to 210 million | Pending | False statements about businesses can cause measurable losses |
| **Starbuck v. Meta** | Delaware Superior Court, 2025 | AI chatbot made false statements about an activist | Settled August 2025 (terms undisclosed; Starbuck reportedly hired as an adviser) | Early settlement pressure in AI defamation |
| **Starbuck v. Google** | Delaware Superior Court, filed October 2025 | Similar allegations | Pending (motion to dismiss filed) | |
| **Chevrolet dealer and DPD incidents** | Not litigated (2023, 2024) | Bot "agreed" to a USD 1 car; delivery bot swore at a customer | No damages; reputational harm; bots withdrawn | Commitment and tone controls |

## 2.2 Safety, minors and wrongful death

| Case | Forum and date | What happened | Outcome or status | Lesson |
|---|---|---|---|---|
| **Garcia v. Character Technologies and Google** | US District Court, Middle District of Florida, filed 2024 | Mother alleged a companion chatbot contributed to her son's suicide | Court declined to dismiss on First Amendment grounds (2025); confidential settlement covering this and four related family suits (New York, Colorado, Texas), case terminated January 7, 2026 | Minors, companion personas and long emotional sessions need hard safety controls |
| **Raine v. OpenAI** and related suits | California state and federal courts, 2025 to 2026 | Families allege chatbot conversations contributed to suicides | Pending; a federal court reportedly ruled OpenAI must defend a related wrongful-death suit | Long-conversation safety degradation is a litigation risk |
| **Other Character.AI claims** | Including a separate Colorado wrongful-death case | Similar allegations | Pending (verify) | |

## 2.3 Privacy, recording, biometrics and automated decisions

| Case or decision | Forum and date | What happened | Outcome or status | Lesson |
|---|---|---|---|---|
| **Ambriz v. Google** | US District Court, Northern District of California, February 10, 2025 | Callers alleged Google's Contact Center AI listened to and analyzed customer-service calls | Motion to dismiss denied: Google's capability to use call data for its own purposes was enough to state a CIPA wiretap claim | AI call-analytics vendors can be third-party "eavesdroppers"; get consent before recording or analysis |
| **Popa v. Microsoft** | US Court of Appeals, Ninth Circuit, August 2025 | Website session-replay case | Narrowed Article III standing in privacy cases; commentators see it weakening the "capability" theory | Standing defenses are developing, but consent remains the safe design |
| **In re Otter.ai Privacy Litigation** | US District Court, Northern District of California (No. 5:25-cv-06911), consolidated 2025 | AI notetaker joined meetings and recorded participants who had not consented | Core wiretap, CIPA and Illinois biometric claims reported to survive; other claims dismissed; further rulings pending (sources conflict on timing) | Meeting and call assistants need all-party notice and consent |
| **Dialpad CIPA case** | San Francisco Superior Court | AI features in a phone platform | Dismissed: telephone-provider immunity | Provider status can matter |
| **Website chat wiretap appeal** | US Court of Appeals, Ninth Circuit (citation verify) | Chat-widget recording | No "telephone wire" connection under CIPA section 631(a) | Chat and voice are treated differently under CIPA |
| **Lisota v. Heartland Dental** | US District Court, Northern District of Illinois, January 13, 2026 | AI voice and call-analytics claims | Reported win for the vendor and deployer | Outcomes vary by statute and facts |
| **Texas v. Meta (CUBI)** | Texas state court, settled July 2024 | Facial-recognition data collected without consent | USD 1.4 billion settlement | Biometric consent failures are very expensive |
| **Texas v. Google** | Texas state court, settled May 2025 | Data collection claims including biometrics | About USD 1.4 billion settlement | Same |
| **Clearview AI BIPA class action** | US District Court, Northern District of Illinois, 2024 to 2025 | Scraped face images | Settlement giving the class a share of the company (about 23%); approval details verify | |
| **Information Commissioner v. Clearview AI** | UK Upper Tribunal, [2025] UKUT 319 (AAC), October 6, 2025 | GBP 7.5 million ICO fine for face scraping | ICO's jurisdiction upheld and case remitted; Clearview given permission to appeal to the Court of Appeal (December 19, 2025); outcome pending | Foreign AI providers can fall under UK GDPR through behavioral monitoring |
| **Dutch Data Protection Authority v. Clearview AI** | Netherlands, 2024 | Face scraping | EUR 30.5 million fine (verify) | |
| **OQ v. Land Hessen (SCHUFA), C-634/21** | Court of Justice of the EU, December 7, 2023 | Credit score used by lenders | A score that plays a decisive role in a third party's decision can itself be an automated decision under GDPR Article 22 (background; verify) | Scoring and triage by AI can trigger Article 22 duties |
| **CK v. Dun & Bradstreet Austria, C-203/22** | Court of Justice of the EU, February 27, 2025 | Phone contract refused after automated credit check | Data subjects are entitled to a clear explanation of how the decision was reached (not necessarily the full algorithm); trade secrets handled through court review | Be able to explain each automated decision in plain terms |
| **Italian Garante v. Luka Inc. (Replika)** | Italy, April 10, 2025 | Companion chatbot: lawful basis, age verification, transparency | EUR 5 million fine | Companion bots need age assurance and a lawful basis |
| **Italian Garante v. OpenAI** | Italy, 2024; Rome court, March 18, 2026 | EUR 15 million fine for ChatGPT data processing | Fine annulled on procedural (one-stop-shop) grounds; Irish DPC scrutiny continues | Annulment is not clearance |
| **Uber and Ola drivers (automated decisions)** | Amsterdam District Court and Court of Appeal, 2021 and 2023 | Drivers challenged automated deactivations | Courts ordered transparency and found some decisions solely automated (background; verify) | Automated account suspensions need human review |
| **NJCM v. Netherlands (SyRI)** | District Court of The Hague, February 2020 | Government welfare-fraud risk scoring | System struck down under the European Convention on Human Rights (background; verify) | Opaque risk scoring of individuals is high-risk |

## 2.4 Telemarketing and AI voice

| Case or action | Forum and date | What happened | Outcome or status | Lesson |
|---|---|---|---|---|
| **FCC v. Steve Kramer** | FCC forfeiture order, September 2024 | AI-cloned President Biden voice in New Hampshire primary robocalls with spoofed caller ID | USD 6 million fine (USD 1,000 per call for 3,000 calls, doubled); acquitted of state criminal charges June 2025; collection status unknown | Voice cloning plus spoofing brings regulatory penalties even without a conviction |
| **FCC v. Lingo Telecom** | FCC consent decree, August 2024 | Carrier transmitted the spoofed calls | USD 1 million settlement and STIR/SHAKEN compliance plan | Carriers and vendors share exposure |
| **TCPA class settlements (prerecorded or artificial voice)** | Various federal courts, 2026 | Calls without consent or after stop requests | Aidvantage USD 3 million; Concora Credit about USD 9.375 million (fairness hearing November 24, 2026); Gen Digital USD 9.95 million; The Money Source USD 1.5 million | AI voices are in the same legal category; per-call damages scale fast |
| **AI-voice marketing class action under the TCPA and Texas law** | Federal court (pending) | AI-voice marketing calls | Pending | State law adds exposure |

## 2.5 Employment and automated screening

| Case | Forum and date | What happened | Outcome or status | Lesson |
|---|---|---|---|---|
| **EEOC v. iTutorGroup** | US District Court, Eastern District of New York; consent decree approved September 8, 2023 | Recruiting software automatically rejected older applicants | USD 365,000 settlement; bans on requesting birth dates and age screening | First EEOC AI-hiring settlement |
| **Mobley v. Workday** | US District Court, Northern District of California (No. 3:23-cv-00770) | Applicant alleges AI screening discriminated by age, race and disability | Age claims allowed to proceed as a collective action (May 2025); notice issued with an opt-in deadline of March 7, 2026; further motions to dismiss largely denied in 2026; no merits ruling | Vendors can face direct liability as an employer's agent |
| **Harper v. Sirius XM Radio** | US District Court, Eastern District of Michigan (No. 2:25-cv-12403), filed August 4, 2025 | Alleged AI screening discriminated against Black applicants | Dismissed in 2025 (sources differ on whether by summary judgment or on the pleadings without prejudice; verify) | Plaintiffs must show the tool was used and caused harm |
| **ACLU complaint against Intuit and HireVue** | Colorado Civil Rights Division and EEOC, March 19, 2025 | Deaf, Indigenous employee alleged an AI video interview could not fairly assess her speech | Pending complaint | Speech-recognition bias is a disability and race issue |

## 2.6 Health and insurance algorithms

| Case | Forum and date | What happened | Outcome or status | Lesson |
|---|---|---|---|---|
| **Estate of Lokken v. UnitedHealth Group (nH Predict)** | US District Court, District of Minnesota | Medicare Advantage members allege an algorithm cut off post-acute care | Contract and good-faith claims proceed; other claims dismissed as preempted; broad discovery ordered (March 2026 order, verify year) | Algorithmic denials face discovery into how tools are used |
| **Kisting-Leung v. Cigna (PxDx)** | US District Court, Eastern District of California, filed July 2023 | Alleged bulk denials without individual physician review | Pending (current status verify) | Human review must be real |
| **Barrows v. Humana** | US District Court, Western District of Kentucky, filed 2023 | Similar post-acute care algorithm claims | Pending (verify) | |

## 2.7 Consumer protection and "AI washing" enforcement

| Matter | Forum and date | What happened | Outcome | Lesson |
|---|---|---|---|---|
| **FTC v. DoNotPay** | FTC final order, February 2025 | "Robot lawyer" claims not substantiated | USD 193,000 in refunds and consumer notice | Substantiate what the bot can do |
| **FTC v. Rite Aid** | FTC order, December 2023 (background; verify) | Facial recognition in stores produced false matches | Five-year ban on facial-recognition use | Biometric AI needs accuracy testing and oversight |
| **FTC v. Air AI** | FTC settlement, 2026 | Deceptive claims about AI agents and business opportunities | Ban on marketing business opportunities; monetary judgment reported at USD 18 million (verify) | AI-agent marketing claims are scrutinized |
| **FTC "active listening" orders (Cox Media Group, MindSift, 1010 Digital Works)** | FTC proposed consent orders, May 2026 | Claims about listening to conversations for ad targeting | Nearly USD 1 million; not final as of late May 2026 | Claims about AI listening must be accurate |
| **FTC v. Rytr** | FTC, 2024; walked back 2025 to 2026 | AI review-writing tool | Earlier action reversed under new leadership | Federal posture has narrowed; states remain active |
| **SEC v. Delphia and Global Predictions** | SEC settled orders, March 2024 | Investment advisers overstated AI use | USD 400,000 total penalties | "AI washing" is securities fraud |
| **SEC v. Presto Automation** | SEC, January 2025 | Drive-through ordering product described as AI-driven while relying on a third party's speech recognition | First AI-washing action against a public company (penalty reports differ; verify) | Describe AI capabilities and vendors accurately |
| **SEC AI-claim actions (August to September 2026)** | SEC | Three actions over AI claims (reported) | Verify | |
| **Texas v. Pieces Technologies** | Texas Attorney General, 2024 | Health-care generative AI accuracy claims | Settlement without money; five years of disclosure and monitoring | State attorneys general enforce AI accuracy claims |

## 2.8 Copyright, voice and likeness

| Case | Forum and date | What happened | Outcome or status | Lesson |
|---|---|---|---|---|
| **Bartz v. Anthropic** | US District Court, Northern District of California | Authors challenged use of pirated books in training | USD 1.5 billion class settlement; final approval July 20, 2026 | Provenance of training and retrieval content matters |
| **Kadrey v. Meta** | US District Court, Northern District of California, June 25, 2025 | Authors challenged training on their books | Summary judgment for Meta on fair use for those plaintiffs, expressly not a ruling that such training is lawful; interlocutory appeal certification reportedly refused (July 2026) | Fair use is fact-specific |
| **Thomson Reuters v. Ross Intelligence** | US District Court, District of Delaware (February 2025); Third Circuit (reported affirmance September 29, 2026, verify) | Legal research AI trained on Westlaw headnotes | Not fair use; headnotes copyrightable | Copying from a competitor's data to build a non-generative tool lost |
| **New York Times v. Microsoft and OpenAI (MDL 1:25-md-03143)** | US District Court, Southern District of New York | Newspapers challenge training and outputs | Summary-judgment briefing under way (autumn 2026) | Pending; outputs that reproduce content are a risk |
| **Getty Images v. Stability AI** | High Court of England and Wales, [2025] EWHC 2863 (Ch), November 4, 2025 | Image model trained on Getty content | Stability largely won: the model was not an infringing copy; Getty won narrow trademark points on watermarks | UK secondary-infringement theory failed for model weights |
| **GEMA v. OpenAI** | Munich Regional Court, November 11, 2025 (reported) | Song lyrics memorized and reproduced | Memorization and outputs found infringing; appeal reported (verify) | Regurgitation of protected text is a risk |
| **Thaler v. Perlmutter** | US Court of Appeals, D.C. Circuit, 130 F.4th 1039 (March 2025); Supreme Court cert denied March 2, 2026 | AI listed as sole author | Human authorship required for copyright | Purely AI-generated output is not copyrightable in the US |
| **Lehrman and Sage v. Lovo** | US District Court, Southern District of New York, July 10, 2025 | Voice actors' voices cloned for an AI voice product | Most federal trademark and copyright claims dismissed; New York right-of-publicity and consumer-protection claims proceed | Voice cloning needs consent; state law is the main remedy |

## 2.9 Courts and AI-generated errors (sanctions)

| Case | Forum and date | What happened | Outcome |
|---|---|---|---|
| **Mata v. Avianca** | US District Court, Southern District of New York, June 2023 | Lawyers filed ChatGPT-invented cases | USD 5,000 sanction (landmark) |
| **Oregon matter (two lawyers)** | US District Court, District of Oregon, 2026 (reported) | Three briefs with fabricated cases and quotes | About USD 110,000, the largest reported US AI sanction (verify) |
| **Sixth Circuit consolidated appeals** | US Court of Appeals, Sixth Circuit, 2026 | Fabricated citations | Sanctions reported at USD 15,000 to 30,000 (sources conflict) |
| **Lnu v. Blanche** | US Court of Appeals, Ninth Circuit, June 2026 (reported) | Unauthorized AI use in filings | USD 2,500 each and six-month suspension from the court |
| **Ayinde v. London Borough of Haringey; Al-Haroun v. Qatar National Bank** | High Court of England and Wales, [2025] EWHC 1040 (Admin) and Divisional Court [2025] EWHC 1383 (Admin), 2025 | Fictitious authorities, some from public AI tools | Wasted costs; no contempt proceedings on the facts; strong warning that lawyers must verify AI research |
| **Zhang v. Chen** | Supreme Court of British Columbia, February 20, 2024 | ChatGPT-invented cases | Lawyer ordered to bear the opposing side's extra costs; special costs refused |
| **Law Society of Ontario tribunal matter** | Ontario, 2026 (reported) | AI-fabricated citations | CAD 31,150 costs, reported as the largest in Canada |
| **Hussein v. Canada, 2025 FC 1138; Lloyd's Register Canada v. Choi, 2025 FC 1233** | Federal Court of Canada, 2025 | Fabricated citations | Personal costs against counsel; motion record removed |
| **Scale** | Global | A researcher's database counted more than 1,600 AI-hallucination cases worldwide by June 2026 | |

## 2.10 Patterns across the case law

1. **Companies are responsible for their bots' statements** (Air Canada, Hamm, Munich).
2. **Recording and analysis without consent is the most common privacy theory** against AI customer-service tools (Ambriz, Otter.ai), with damages per violation.
3. **Biometric consent failures produce the largest settlements** (Texas v. Meta and Google, Clearview).
4. **Automated decisions must be explainable and reviewable by a person** (Dun & Bradstreet, SCHUFA, CMS guidance in the health cases).
5. **Vendors are not shielded** (Workday as agent, Google as possible eavesdropper, Lingo Telecom).
6. **Marketing claims about AI are enforced** by the FTC, SEC and state attorneys general.
7. **Harm to minors and vulnerable users drives the highest-severity litigation** (Character.AI, OpenAI suits).
8. **Fabricated content is sanctionable** wherever AI output is used in formal proceedings.

## 2.11 Reported consumer harms from AI and automated decisions (2024 to 2026)

These are investigations, regulator records, news reports and surveys rather than court rulings. They show where automated decisions have hurt people and where regulators and litigators are likely to look next. Figures from vendor-sponsored surveys and secondary outlets are flagged; check the original report before citing any number.

| Area | Report and date | What was reported | Response or status | Lesson for virtual agents (catalog IDs) |
|---|---|---|---|---|
| **Health coverage: Medicare's WISeR AI prior-authorization pilot** | CMS records obtained under FOIA (Fierce Healthcare), spring 2026; Healthcare Dive, April 24, 2026 | Thousands of requests exceeded the pilot's three-day turnaround goal and several hundred were still unanswered at the end of March 2026 (one 83 days old); system downtime; provider complaints about a vendor in Ohio; approval times of four to eight weeks reported in Washington; one contractor reportedly denied 53% of the requests it decided in Washington in the first quarter (secondhand figure, verify) | Senate Democrats filed a resolution to repeal the pilot (May 2026; outcome not found); the Electronic Frontier Foundation sued CMS for information on the algorithm; pilot runs in six states through 2031 | Automated decisions need human review, deadline tracking and escalation (F7, I7, M5, N2) |
| **Health coverage: Medicare Advantage denials** | Senate Permanent Subcommittee on Investigations staff report, October 2024; follow-up letter to UnitedHealthcare, October 9, 2025 | Prior-authorization denial rates rose as automated processes were adopted (UnitedHealthcare); insurers disputed the findings | States are requiring licensed clinicians to make AI-assisted denials (for example Washington SB 5395, 2026); NAIC piloting an AI Systems Evaluation Tool in about 12 states (2026) | Human decision-makers for adverse outcomes; record the AI's role |
| **Retail facial recognition (UK)** | Guardian, Retail Gazette and BBC reporting, February to August 2026 | Shoppers wrongly ejected or banned after Facewatch alerts at Sainsbury's (two cases in 2026, including Dulwich in August), Home Bargains and B&M; Facewatch reported almost 300,000 alerts to retailers in the first half of 2026; people struggle to clear their names | Sainsbury's paused cameras at the Dulwich store and blamed human error; Facewatch said its technology was not at fault; Big Brother Watch called for an end to the system | An AI alert is not a decision; staff need verification steps and a fast redress route (B5, F7, N6) |
| **Welfare fraud scoring (UK)** | Guardian freedom-of-information investigation, 2024 | A DWP housing-benefit tool wrongly flagged more than 200,000 people for investigation; about two-thirds of "high risk" flags in three years were legitimate claims. The tool is rules-based, not machine learning. Separate reporting describes council risk scoring of about 540,000 applicants (secondary source) | Ongoing criticism; allegations of discrimination against single mothers and disabled people (unproven) | Measure false-positive rates and their effect on real people, not just detection rates |
| **Welfare fraud scoring (France)** | Coalition litigation before the Conseil d'État (filed October 2024; 25 organisations by January 2026) | The CNAF family-benefits risk score reportedly raises suspicion for low income, unemployment, minimum-income and disability benefits; a 2025 internal study reportedly recognized discriminatory effects | Défenseur des Droits found serious discrimination (opinion, October 2025); CNAF published the current algorithm's source code on January 15, 2026; case pending | Social-scoring-like risk models face AI Act prohibitions and discrimination claims |
| **Tenant screening** | *Louis v. SafeRent Solutions* (D. Mass.) | Scores allegedly denied housing to Black and Hispanic applicants using vouchers; one plaintiff had 16 years of positive rental history | Settlement of about USD 2.3 million (approved 2024, date verify); SafeRent stopped scoring voucher holders for five years; DOJ and HUD filed a statement of interest on the Fair Housing Act | Automated eligibility tools need disparate-impact testing (M5) |
| **Surveillance and personalized pricing** | Consumer Reports investigation of Instacart's AI pricing experiments (2025); House Oversight inquiry to Uber, Lyft, Expedia, Booking.com and Instacart (March 2026); Senate Judiciary subcommittee hearing (August 4, 2026) | Prices that vary by person based on personal data | FTC investigation of Instacart (late 2025); FTC proposed enforcement policy statement on personalized pricing (August 19, 2026; comments closed September 25); California Attorney General investigative sweep (2026); Maryland ban for large grocers and delivery apps from October 1, 2026; New Jersey grocery ban from August 1, 2027; Connecticut law reported to cover all retailers (verify); class actions against JetBlue (April and May 2026) | Agents that quote prices must use the posted or system-of-record price and disclose any personalization (A8) |
| **Account freezes and closures** | CFPB finding that fraud false positives often froze accounts for weeks (2024); 2026 news reports of rising freezes; AlgorithmWatch "False Positives" reporting (Europe) | Automated fraud and anti-money-laundering systems froze cards, blocked transfers and closed accounts, often without explanation | No single 2026 regulator report found | Agents handling locked accounts need clear explanations, escalation and status tracking (A6, F7, H3) |
| **Chatbot financial advice** | NerdWallet survey (September 2026); Pearl.com survey (2025) | Nearly a third of Americans who followed AI chatbot financial advice said it hurt their finances; about one in four Americans has asked a chatbot a financial question; 19% said they lost more than USD 100 following chatbot advice (Pearl.com) | Survey findings, not adjudicated harm | Scope limits on financial advice; disclaimers; human escalation (A7, A8) |
| **AI customer service** | Qualtrics 2026 CX Trends; Glance 2026; AnswerConnect (May 2026; 6,000 consumers in the US, UK and Canada); Citizens Advice (UK, September 2026); EU Digital Fairness fitness check | About one in five consumers who used AI for service saw no benefit, with reports of loops, deflection and denied refunds (Qualtrics); nearly nine in ten said losing human support reduced loyalty (Glance); frustration with AI agents rose from 54% to 59% (AnswerConnect); 14% of people who struggled to reach a human gave up (Citizens Advice); 44% of EU consumers struggled to resolve issues with chatbot-only service | Drives the right-to-a-human proposals in Section 1.9; most surveys are vendor-sponsored | Measure outcomes, not containment; guaranteed human path (F1 to F8, N1) |
| **General-purpose chatbots** | Axios, October 15, 2026 | FTC civil subpoenas to OpenAI and Anthropic in a consumer-protection probe covering security incidents, safeguarding practices and privacy policies | Investigation; no findings | Vendor due diligence on model providers' safety and incident practices |

---
# Part 3. Compliance standards for AI and virtual agents

Standards and frameworks are not laws, but contracts, auditors, card brands, regulators and insurers rely on them. This part covers what each says about AI and virtual agents and what an organization must show.

## 3.1 Payment Card Industry (PCI)

| Standard or document | Status | What it says about AI and virtual agents |
|---|---|---|
| **PCI DSS v4.0.1** | Current (published June 2024; future-dated v4.0 requirements mandatory since March 31, 2025) | Technology-neutral: any chatbot, voice agent, model, transcript store, log pipeline or analytics tool that stores, processes or transmits cardholder data, or can affect the cardholder data environment, is in scope |
| **Integrating Artificial Intelligence in PCI Assessments Guidelines** (v1.0) | Published March 2025 | Assessors may use AI only to support, not replace, human assessors; governs AI use in the assessment process itself |
| **AI Principles: Securing the Use of AI in Payment Environments** | Published 2025 (September per most sources) | High-level principles: AI systems in payment environments must be deployed and managed in line with PCI requirements |
| **Additional guidance on securing AI in payment environments ("Security Considerations for AI Systems")** | Reported October 2026 (single source; verify) | Protecting data given to AI systems, defending against AI-assisted attacks, and human approval of AI agent actions involving cardholder data |
| **Information Supplement: Protecting Telephone-Based Payment Card Data** | Current version verify | Telephone payments, DTMF masking and suppression, scope reduction, "DTMF bleed" |

**Key PCI DSS requirements applied to virtual agents**

| Requirement | Application |
|---|---|
| Req. 3: never store sensitive authentication data after authorization; render stored PAN unreadable; mask display (first six and last four at most) | No card security code in recordings, transcripts, prompts, vector stores, logs or vendor copies; redact card numbers before they reach the model |
| Req. 4: strong cryptography in transit | TLS for chat, APIs, webhooks and model calls; SRTP for voice; no card data by SMS or email |
| Req. 6: secure development and change control | Prompt, flow and model changes under change control; testing of the bot and plugins; protections for public-facing web apps |
| Req. 7 and 8: least privilege and MFA | Bot service accounts and human agents limited; MFA into the cardholder data environment |
| Req. 10: logging and monitoring | Tool calls and access logged; logs themselves free of card data |
| Req. 11: testing | Penetration testing including AI-specific attacks on in-scope components |
| Req. 12.8 and 12.9: third-party service providers | Written responsibility split with model, telephony, speech and analytics vendors; their attestations reviewed |
| Scope reduction (common practice) | Hand payment to a validated payment page or IVR with DTMF masking so the agent never hears or sees card data; confirm with a QSA |

## 3.2 HIPAA and health-care AI

| Standard or rule | Status | What it requires for virtual agents |
|---|---|---|
| **HIPAA Privacy Rule** (45 CFR Part 164 Subpart E) | In force | Minimum necessary; identity verification before disclosure; patient authorization for marketing; rules for family members and personal representatives |
| **HIPAA Security Rule** (Subpart C) | In force; overhaul proposed January 6, 2025 (mandatory encryption and MFA, removal of "addressable" specifications, annual risk analysis including AI); final status not confirmed | Risk analysis covering the bot; access control; audit logs; integrity; encryption; contingency plans |
| **Breach Notification Rule** (Subpart D) | In force | Notice to individuals and HHS within 60 days; misdirected messages are a test scenario |
| **Business associate agreements** | In force | A BAA with every vendor that creates, receives, maintains or transmits PHI for the agent (model, speech, telephony, orchestration, analytics, logging, vector database); consumer AI products are usually not covered |
| OCR guidance on online tracking technologies | Guidance; the "Proscribed Combination" portion was vacated in *American Hospital Association v. Becerra* (N.D. Tex., June 2024), HHS withdrew its appeal in August 2024, and the rest remains | Chat widgets must not send PHI to ad or analytics vendors without a BAA or authorization |
| **Section 1557, 45 CFR 92.210** | In force (compliance reported due May 1, 2025) | Identify and mitigate discrimination risk from patient-care decision-support tools, including vendor tools |
| **ONC HTI-1, 45 CFR 170.315(b)(11)** | In force | Certified health IT must support decision-support interventions with source attributes (expanded for predictive interventions trained on data) and risk-management information |
| **CMS Medicare Advantage rule (CMS-4201-F) and February 6, 2024 FAQ** | In force | AI may assist coverage decisions but must consider individual circumstances; length-of-stay predictions alone cannot end post-acute care; no criteria beyond CMS rules; guard against bias |
| **FDA clinical decision support and general wellness guidance** | Final guidance January 2026 | Determines when AI health software is a regulated device |
| 42 CFR Part 2 | In force | Substance-use treatment records |
| State health-data laws (for example Washington My Health My Data Act; California CMIA; state AI-in-utilization-review laws) | In force | Consent and use limits beyond HIPAA, sometimes with private rights of action |
| **HITRUST AI Security Assessment and Certification** | Available since late 2024 (month varies by source) | Up to 44 AI-specific security controls; can be paired with e1, i1 or r2 assessments (whether it can stand alone is described inconsistently; verify); separate AI Risk Management Assessment |
| Joint Commission and Coalition for Health AI guidance on responsible AI use | Guidance (2025; verify) | Governance, monitoring and transparency for hospital AI |

## 3.3 Financial services and insurance

| Standard or rule | Status | What it requires |
|---|---|---|
| **Interagency model risk guidance (SR 26-2; OCC Bulletin 2026-13; FDIC FIL-15-2026)** | Issued April 17, 2026, superseding SR 11-7 | Principles-based model risk management; reported to place generative AI and agents outside its scope, with an AI request for information planned; inventories, validation and monitoring remain good practice |
| Interagency third-party risk management guidance (2023) | In force; principles-based replacement proposed September 2026 (OCC Bulletin 2026-46, verify) | Due diligence, contracts, monitoring and exit plans for AI vendors |
| **ECOA / Regulation B adverse-action notices; CFPB Circulars 2022-03 and 2023-03** | Statute and regulation in force; circulars' status after the CFPB guidance review verify | Specific, accurate reasons for adverse credit decisions, even when AI is used |
| CFPB issue spotlight "Chatbots in Consumer Finance" | Guidance (June 2023) | Chatbots must not trap consumers, give inaccurate information or miss disputes; liability under federal consumer financial law |
| UDAAP; FCRA; GLBA Safeguards Rule | In force | Fair and accurate communications; consumer-report accuracy; security program |
| FINRA Regulatory Notice 24-09 (generative AI) | Guidance (verify current text) | Supervision, communications and recordkeeping duties apply to AI tools |
| SEC books-and-records and marketing rules | In force; the SEC withdrew its predictive data analytics proposal on June 12, 2025 | Retain and supervise bot communications; substantiate AI claims |
| **NYDFS Part 500 (cybersecurity) and October 2024 industry letter on AI cybersecurity risks** | Regulation in force; letter is guidance (verify) | AI-enabled social engineering, AI vendor risk and data protection within the cybersecurity program |
| **NAIC Model Bulletin on insurers' use of AI** | Adopted by about 24 to 25 states plus D.C. | AI governance program, risk management, vendor oversight, documentation on request |
| NYDFS Insurance Circular Letter No. 7 (2024) on AI and external data | Guidance (verify) | Fairness testing and governance for insurers' AI and external data |
| EU DORA; EBA and EIOPA guidance; Consumer Credit Directive 2 | In force or applying (CCD2 from November 20, 2026) | ICT risk, third-party oversight, human review of automated credit assessments |
| UK FCA Consumer Duty and SM&CR | In force | Good outcomes and senior-manager accountability for AI |

## 3.4 Security, privacy and AI management standards

| Standard or framework | Type | What it covers for virtual agents |
|---|---|---|
| **ISO/IEC 42001** (AI management system) | Certifiable standard | AI policy, roles, risk and impact assessment, lifecycle controls, supplier oversight; maps to ISO/IEC 27001 and 27701 |
| ISO/IEC 23894 (AI risk management) | Guidance standard | Risk-management process for AI |
| ISO/IEC 42005 (AI system impact assessment) | Guidance standard (published May 2025; see 3.9) | Assessing impacts on individuals and society |
| ISO/IEC 27001, 27701, 27017, 27018 | Certifiable / guidance | Information security, privacy and cloud controls for the bot platform |
| **SOC 2** (AICPA Trust Services Criteria) | Attestation | Security, availability, confidentiality, processing integrity and privacy, increasingly interpreted to cover AI controls |
| **NIST AI Risk Management Framework and AI 600-1 Generative AI Profile** | Voluntary framework | Govern, map, measure, manage; generative-AI risks and actions including red teaming; referenced as a defense in some state laws (Texas, Colorado) |
| NIST AI 100-2 (adversarial machine-learning taxonomy) | Guidance | Attack taxonomy, including prompt injection |
| NIST control overlays for securing AI systems (SP 800-53 based) | In development (verify) | AI-specific security controls |
| NIST AI Agent Standards Initiative (February 2026) | Initiative (verify) | Agent identity, authorization and security standards |
| **OWASP Top 10 for LLM Applications (2025)** and **Top 10 for Agentic Applications (2026)** | Community standards | Prompt injection, sensitive-data disclosure, excessive agency, unbounded consumption, memory poisoning, agent supply chain |
| MITRE ATLAS | Threat matrix | Adversary tactics against AI systems |
| **UK AI Cyber Security Code of Practice (January 31, 2025)** and **ETSI TS 104 223 / TR 104 128** | Voluntary code and technical standard | 13 principles for secure design, development, deployment, maintenance and end-of-life of AI |
| Cloud Security Alliance AI Controls Matrix | Control framework (verify current version) | Cloud and AI control catalog |
| EU AI Act harmonised standards (CEN-CENELEC JTC 21) | In development | Will give presumption of conformity for high-risk duties |
| Singapore Model AI Governance Framework for Agentic AI (January 22, 2026) | Voluntary | Bounding agent risks, human accountability, technical controls, human approval at irreversible steps |

## 3.5 Telecom and messaging

| Standard or rule | What it requires for virtual agents |
|---|---|
| STIR/SHAKEN (FCC) | Authenticated caller ID for outbound calls |
| CTIA Messaging Principles and Best Practices | Opt-in, STOP and HELP handling, content limits for business texting |
| 10DLC / A2P registration (The Campaign Registry) | Brand and campaign registration; reported 2026 checks on EIN age and opt-in URLs; privacy-policy and terms URLs required by some carriers' platforms from June 30, 2026 |
| Reassigned Numbers Database (FCC) | Check before calling to avoid calling a number's new owner |
| UK Ofcom General Conditions and persistent-misuse policy; TPS and CTPS | Valid caller ID, silent and abandoned call limits, preference-service screening |

## 3.6 Accessibility

| Standard | Status | Application |
|---|---|---|
| WCAG 2.2 AA | Current W3C recommendation; WCAG 2.1 AA is the legal baseline for the DOJ Title II rule | Chat widgets, streaming replies, keyboard and screen-reader support |
| EN 301 549 | EU and UK public procurement standard | ICT accessibility including two-way voice communication |
| Section 508 | US federal | Federal agencies and their vendors |
| European Accessibility Act | Applies since June 28, 2025 | Accessible customer-service channels |

## 3.7 Content provenance

| Standard | Status | Application |
|---|---|---|
| C2PA / Content Credentials | Industry standard; adoption uneven, audio validation emerging (2026) | Machine-readable provenance for generated media; metadata stripping is a known weakness |
| EU Code of Practice on marking and labelling AI-generated content | Voluntary (June 2026) | Route to EU AI Act Article 50 compliance |
| California AI Transparency Act | In force August 2, 2026 | Detection tools and provenance for covered providers |

## 3.8 Crosswalk: control areas and the standards that require them

| Control area | PCI DSS | HIPAA | Financial | ISO/IEC 42001 and 27001 | NIST AI RMF | OWASP | Laws in Part 1 |
|---|---|---|---|---|---|---|---|
| Keep regulated data out of the model path | Req. 3, scope reduction | Minimum necessary; BAA scope | GLBA | Data controls | Map, Manage | LLM02 | GDPR, state privacy laws |
| Vendor and model-provider oversight | Req. 12.8, 12.9 | BAAs | Third-party guidance, DORA | Supplier controls | Govern | Supply chain | AI Act deployer duties |
| Access control and least privilege for agents | Req. 7, 8 | Security Rule | Part 500 | Access control | Manage | Excessive agency | |
| Logging and auditability | Req. 10 | Audit controls | Books and records | Logging | Measure | | AI Act logging, ADMT rules |
| Testing and red teaming | Req. 6, 11 | Risk analysis | Model validation | Verification | Measure | All | TRAIGA defense, AI Act |
| Human oversight and review | PCI AI guidance on agent actions | CMS, Section 1557 | ECOA, CCD2 | Human oversight | Govern | Excessive agency | GDPR Art. 22, UK 22A to 22D, CA AB 1609 |
| Transparency and disclosure | | | UDAAP | Transparency | Govern | | AI Act Art. 50, state bot laws |
| Incident response and reporting | Incident response | Breach notification | Part 500 notice | Incident management | Manage | | GDPR, CRA, state breach laws |
| Fairness and non-discrimination | | Section 1557 | ECOA, NAIC | Impact assessment | Measure | | NYC LL 144, Illinois, Colorado |
| Accessibility | | | | | | | ADA, EAA, Equality Act |

## 3.9 ISO/IEC and SOC standards in AI regulation

Standards matter legally in five ways: they can create a **presumption of conformity** with a law, support an **affirmative defense or safe harbor**, serve as **evidence of reasonable care** in enforcement and litigation, appear as **contract and procurement requirements**, and determine **who may certify or attest**. Certification is not compliance: no regulator was found that formally accepts an ISO/IEC 42001 certificate or a SOC 2 report as proof of compliance with an AI law, except where the EU cites a harmonised standard.

### 3.9.1 How regulations use standards

| Mechanism | Example | Status | What it means for virtual-agent programs |
|---|---|---|---|
| **Presumption of conformity (harmonised standards)** | EU AI Act Article 40: **EN 18286:2026**, quality management system for providers of high-risk AI (Article 17) | Published July 2026; reported cited in the Official Journal through Implementing Decision (EU) 2026/2274 on October 14, 2026 (verify on EUR-Lex). JTC 21 wrote it separately because ISO/IEC 42001's goals and definitions did not match the Act. Risk management (prEN 18228) and logging (prEN 18229-1) drafts were still in approval or comment resolution (one source says some were rejected at enquiry in summer 2026) | High-risk providers can use EN 18286 to presume Article 17 conformity; ISO/IEC 42001 alone does not give that presumption |
| **Affirmative defense** | Texas TRAIGA: substantial compliance with the NIST AI RMF or another nationally recognized AI risk framework | In force January 1, 2026 | ISO/IEC 42001 conformance is likely to support the defense as a recognized framework (verify); keep dated evidence |
| **Rebuttable presumption of reasonable care** | Colorado SB 24-205 (NIST AI RMF or ISO/IEC 42001) | Stayed; the replacement SB 26-189 is reported not to name a framework (verify) | Do not rely on the original presumption |
| **Recommended framework** | Washington AI Task Force (NIST AI RMF, ISO/IEC 42001); HB 2157 (high-risk AI) | HB 2157 not enacted (in committee as of February 2026) | Watch for 2027 reintroduction |
| **Disclosure safe harbor (not a standard)** | Utah AI Policy Act | In force | Clear disclosure at the start and throughout, rather than certification |
| **Evidence in sector rules** | HIPAA risk analysis, NYDFS Part 500 vendor oversight, DORA third-party risk, PCI DSS service-provider oversight, CCPA cybersecurity audits | In force | ISO/IEC 27001 certificates and SOC 2 Type II reports are the usual vendor evidence; they do not replace PCI DSS assessments, HIPAA risk analyses or AI-specific testing |
| **Procurement and contracts** | Enterprise RFPs increasingly ask for ISO/IEC 42001 alongside SOC 2 (vendor-reported trend; a cited Gartner figure that 83% of Fortune 500 procurement teams will require 42001 alignment by 2027 is unverified) | Market practice | Expect customers to ask virtual-agent vendors for both |
| **Who may certify or attest** | ISO/IEC 42006:2025 (requirements for bodies certifying ISO/IEC 42001); AICPA standards for SOC reports | 42006 published July 2025 | Accept only accredited certificates; check scope and accreditation |

### 3.9.2 ISO/IEC standards relevant to AI and virtual agents

| Standard | Type | Status | Use |
|---|---|---|---|
| **ISO/IEC 42001:2023** | AI management system (certifiable) | Published; accredited certification available (for example Schellman through ANAB from September 2024; BSI through UKAS and RvA from November 2025 and ANAB from March 2026); IAF CertSearch lists accredited certificates | Governance, risk and impact assessment, lifecycle and supplier controls for AI |
| **ISO/IEC 42005:2025** | AI system impact assessment (guidance) | Published May 2025 | Structure for impact assessments required by the EU AI Act (fundamental-rights assessments), Colorado and CCPA risk assessments |
| **ISO/IEC 42006:2025** | Requirements for audit and certification bodies | Published July 2025 | Confirms a 42001 certifier's competence; now part of ANAB accreditation requirements |
| ISO/IEC 23894:2023 | AI risk management (guidance) | Published | Risk process aligned with ISO 31000 |
| ISO/IEC 22989:2022; ISO/IEC 23053:2022 | Concepts, terminology; machine-learning framework | Published | Shared vocabulary for contracts and policies |
| ISO/IEC 5338:2023 | AI system lifecycle processes | Published | Development and change control |
| ISO/IEC 25059:2023; ISO/IEC TS 25058:2024 | Quality model and quality evaluation for AI systems | Published | Defining and measuring accuracy, robustness and other quality attributes |
| ISO/IEC TR 24027:2021; ISO/IEC TR 24028:2020 | Bias; trustworthiness (technical reports) | Published | Bias testing methods supporting NYC Local Law 144 and fairness tests |
| ISO/IEC TS 6254:2025 | Explainability and interpretability | Published | Explanations for automated decisions (GDPR, CCD2, ECOA) |
| ISO/IEC 5259 series (including 5259-5:2025) | Data quality for analytics and machine learning | Published in parts | Training and retrieval data governance |
| ISO/IEC 12792 | Transparency taxonomy for AI systems | Status conflicting (listed as 2025 by one source; draft with comments to November 3, 2026 by another) | Disclosure and documentation |
| **ISO/IEC 27090** | Guidance on AI-specific security threats | Reported published October 2026; ISO's page still showed it in development (verify) | Prompt injection, poisoning and other AI threats; supports EU AI Act Article 15 and CRA evidence |
| ISO/IEC 27091 | AI privacy guidance | Draft International Standard; publication expected 2026 | Privacy risks in AI and machine-learning systems |
| **ISO/IEC 27001:2022** | Information security management system (certifiable) | Published; transition from the 2013 edition closed in October 2025 (background) | Baseline platform security for virtual-agent infrastructure |
| **ISO/IEC 27701:2025** | Privacy information management system (now standalone and separately certifiable) | Published October 14, 2025; 2019-edition certificates reported to transition by October 2028 | GDPR, UK GDPR and state privacy-law evidence |
| ISO/IEC 27017, 27018 | Cloud security and cloud privacy controls | Published | Cloud-hosted agents |
| ISO/IEC 38507:2022 | Governance implications of AI for boards | Published (background) | Board-level oversight |

### 3.9.3 SOC reports and AI

| Report | Scope | AI status |
|---|---|---|
| **SOC 1** | Controls relevant to customers' financial reporting | Relevant when an agent affects billing, refunds or financial records |
| **SOC 2 Type I and Type II** | Security, availability, processing integrity, confidentiality and privacy (2017 Trust Services Criteria with 2022 points of focus) | No AI-specific criteria in force. AICPA technical Q&A section 9561 (September 11, 2026) explains how AI use affects SOC 1 and SOC 2 examinations without new criteria. On October 28, 2026 the AICPA issued exposure drafts for **2027 Trust Services Criteria** that add AI-related points of focus (reported on 17 criteria, 12 of them common criteria) covering AI governance, model monitoring, prompt manipulation and data poisoning; comments close January 15, 2027; proposed effective date for engagements beginning on or after December 31, 2027, early adoption permitted. A companion Description Criteria draft was reported but not confirmed as posted. A Cloud Security Alliance note (August 2026) said auditors have been improvising AI coverage |
| **SOC 2+** | SOC 2 plus additional frameworks (for example HIPAA, ISO/IEC 42001, NIST AI RMF) | Common way to report AI controls before the 2027 criteria (background) |
| SOC 3; SOC for Cybersecurity | Public summary; entity-wide cybersecurity program | No AI-specific criteria |

### 3.9.4 Regulation-to-standard map

| Regulation or requirement | Standards that provide the strongest evidence |
|---|---|
| EU AI Act Article 17 (quality management, providers of high-risk AI) | **EN 18286:2026** (presumption of conformity once cited); ISO/IEC 42001 as supporting evidence |
| EU AI Act Article 9 (risk management) and Article 27 (fundamental-rights impact assessment) | prEN 18228 (pending); ISO/IEC 23894; ISO/IEC 42005 |
| EU AI Act Articles 12 and 15 (logging, accuracy, robustness, cybersecurity) | prEN 18229 (pending); ISO/IEC 27090; ISO/IEC 27001 |
| EU AI Act Article 50 (transparency) | Code of Practice on marking and labelling; C2PA; ISO/IEC 12792 (when final) |
| GDPR and UK GDPR | ISO/IEC 27701:2025; ISO/IEC 27001; ISO/IEC 27091 (when final) |
| Texas TRAIGA defense; Colorado (original Act) | NIST AI RMF; ISO/IEC 42001 |
| NYC Local Law 144 and other bias-audit rules | Independent bias audit; ISO/IEC TR 24027 methods |
| CCPA risk assessments and cybersecurity audits | ISO/IEC 42005; ISO/IEC 27001; SOC 2 Type II |
| HIPAA Security Rule | HIPAA risk analysis; HITRUST (including the AI Security Assessment); ISO/IEC 27001; SOC 2+ with HIPAA |
| PCI DSS | PCI DSS assessment and service-provider AOC (ISO and SOC reports do not substitute) |
| NYDFS Part 500; DORA; interagency third-party guidance | ISO/IEC 27001; SOC 2 Type II; ISO/IEC 42001 for AI vendors |
| Cyber Resilience Act; NIS2 | ISO/IEC 27001; forthcoming CRA harmonised standards; ISO/IEC 27090 |
| UK AI Cyber Security Code of Practice | ETSI TS 104 223; ISO/IEC 27090 |
| NAIC Model Bulletin (insurers) | NIST AI RMF; ISO/IEC 42001 |

### 3.9.5 Recommendations for virtual-agent programs

1. **Vendors of virtual-agent platforms:** maintain ISO/IEC 27001 and a SOC 2 Type II report; add ISO/IEC 42001 certification from an accredited body; plan early adoption of the 2027 SOC 2 AI points of focus; transition privacy certificates to ISO/IEC 27701:2025.
2. **Deployers:** require vendors' certificates and reports, check that the scope covers the actual agent product and regions, confirm the certifier's accreditation (IAF CertSearch, ANAB, UKAS), and request bridge letters between report periods.
3. **High-risk uses in the EU:** build the quality management system to EN 18286:2026 and track the pending risk-management and logging standards.
4. **Document impact assessments** using ISO/IEC 42005 so one assessment can serve the EU AI Act, Colorado, CCPA and internal governance.
5. **Do not treat certificates as test results.** Standards prove that a management system exists; the corner-case catalog and red-team results prove the agent behaves safely.

## 3.10 Government and public-sector AI compliance (FedRAMP and related)

Virtual agents sold to, or operated by, government organizations face cloud-authorization regimes (FedRAMP, GovRAMP, DoD impact levels), agency AI-use and AI-acquisition policy, and data-specific rules (CJIS, IRS Publication 1075). These apply in addition to the laws in Part 1. FedRAMP does not have a separate AI baseline: an AI service is authorized like any other cloud service, and agencies add AI-specific requirements through policy and contracts.

### 3.10.1 FedRAMP and AI

| Item | Status (verify on fedramp.gov) | What it means for virtual agents |
|---|---|---|
| **FedRAMP Rev5 baselines** (NIST SP 800-53 Rev. 5; Low, Moderate, High, LI-SaaS) | In force; machine-readable authorization packages required for all Rev5 providers (RFC-0024, January 13, 2026); one source says Rev5 retires at the end of 2027 (verify) | The whole agent boundary must be authorized: orchestration, model endpoints, speech-to-text and text-to-speech, telephony, vector stores, logging and analytics. Leveraged services (for example the model provider) must hold an authorization at the same or a higher impact level |
| **FedRAMP 20x** | Consolidated Rules for 2026 finalized June 25, 2026; Class A pipeline opened August 3, 2026, Class B and C on August 31, 2026; annual independent assessment of all applicable Key Security Indicators (KSI counts vary by source, for example 56 Low and 61 Moderate); "FedRAMP Ready" retired July 28, 2026 | Evidence is automated and continuous rather than document-based; AI-specific monitoring (model versions, jailbreak and incident rates) fits naturally into KSI evidence |
| **Emerging Technology Prioritization Framework** | Final June 27, 2024 | First priorities were generative AI chat interfaces, code generation and image generation, plus their general-purpose APIs |
| **AI Prioritization** (GSA and FedRAMP, August 25, 2025, at the CIO Council's request) | Active | Prioritizes conversational AI engines for 20x authorization. Reported criteria: enterprise single sign-on, SCIM identity management, role-based access control and real-time analytics; data protection, including that training on customer data does not leave the customer environment without authorization; demand from five CFO Act agencies or a CIO Council recommendation; availability on the GSA Multiple Award Schedule; ability to meet 20x requirements within two months (sources give five or six criteria) |
| Prioritized and authorized AI services | Prioritized list included ChatGPT Enterprise and API, Gemini for Government and Perplexity Enterprise Pro for Government (20x Low targeted for January 2026); vendor sources report further authorizations, including Claude through AWS GovCloud and Google Vertex AI at High (verify on the FedRAMP Marketplace); one June 2026 roundup counted 526 authorized services, 28 under 20x | Check the Marketplace listing, impact level and scope for every model and component the agent uses |
| **Significant change** | Rev5 significant change notification categories (Routine Recurring, Transformative, Adaptive); no explicit FedRAMP rule found on whether a model or version swap is a significant change | Treat model, model-version and major prompt or tool changes as significant changes until the authorizing official agrees otherwise; re-run the agent's safety regression suite before notification |
| Agency authorization to operate (ATO) | Required for each agency | FedRAMP authorization is the reusable baseline; each agency adds AI-specific conditions from OMB policy, its own AI policy and its risk acceptance |

### 3.10.2 Federal AI policy on top of FedRAMP

| Policy | Status | Requirements relevant to virtual agents |
|---|---|---|
| **OMB M-25-21** (federal AI use, April 3, 2025) | In force; deadline for minimum practices on high-impact AI was April 3, 2026, and several agencies reportedly missed it or reclassified use cases | For high-impact AI (for example agents that affect benefits, rights or safety): pre-deployment testing, AI impact assessment, ongoing monitoring for performance and adverse impacts, human oversight and remedies; AI use-case inventories; Chief AI Officers |
| **OMB M-25-22** (AI acquisition, April 3, 2025) | Applies to contracts from about October 1, 2025 (sources differ on the trigger date) | Contract terms on performance monitoring, data rights and intellectual property, privacy, avoiding vendor lock-in, and a preference for American AI |
| **Executive Order 14319** (July 23, 2025) and **OMB M-26-04** (December 11, 2025) | In force; agency policies were due by March 11, 2026; M-26-04 expires December 11, 2027; national security systems exempt but encouraged to comply | LLMs bought by agencies must follow the "Unbiased AI Principles" (truth-seeking and ideological neutrality); vendors must supply acceptable-use policies, model or system cards and a way for users to report outputs that violate the principles; new LLM solicitations must include compliance terms, and vendors can bear termination costs for noncompliance. DoD issued procurement templates in October 2026 |
| **GSA draft AI clause, GSAR 552.239-7001** | Draft released March 6, 2026; comments extended to April 3, 2026; rollout through a Multiple Award Schedule refresh delayed; final status unknown (verify) | Would control over vendors' commercial terms, grant broad intellectual-property and irrevocable license rights, include an "American AI" restriction and flow down to service providers |
| **GSA OneGov agreements and USAi** | Agreements with OpenAI, Anthropic and Google extended; first small-business OneGov deal with (US)AI (October 2026, FedRAMP High); CORAS agentic platform agreement through September 30, 2027 (FedRAMP High); GSA planning USAi fees from fiscal year 2027 (reported) | Common route for agencies to buy model access; check that the virtual agent's model endpoint matches an authorized offering |
| **NIST SP 800-53 control overlays for securing AI systems (COSAIS)** | Concept paper August 2025 (overlays for generative AI, predictive AI, single-agent and multi-agent systems, and AI development); first public draft planned in fiscal year 2026, not found published | Expected to become the AI control supplement for FedRAMP and agency ATOs; plan for it |
| NIST Cyber AI Profile | Draft; comments closed January 30, 2026 | Maps the Cybersecurity Framework to AI |
| NIST SP 800-218A (secure development of generative AI) | Published 2024 (background) | Secure software development evidence for model and agent builders |
| NIST AI RMF and AI 600-1 | Voluntary | Basis for agency impact assessments and risk management |
| Privacy Act, privacy impact assessments, systems-of-records notices; Federal Records Act | In force | Agents that collect personal data need privacy documentation; transcripts can be federal records |
| Section 508 | In force | Accessible chat and voice channels |

### 3.10.3 Defense

| Item | Status | What it means |
|---|---|---|
| **DISA Cloud Computing Security Requirements Guide impact levels** (IL2, IL4, IL5, IL6) | In force | Controlled unclassified information generally needs IL4 or IL5; classified needs IL6 |
| **GenAI.mil and DoD AI authorizations** | OpenAI's ChatGPT Mil added August 31, 2026 at IL5; Ask Sage IL5 provisional authorization; Salesforce Agentforce 360 IL5 (reported August 2026); May 2026 agreements to bring several providers' AI into IL6 and IL7 environments; DoD designated Anthropic's Claude a "supply chain risk" in March 2026 (contested; injunction reported, verify) | Confirm the impact level and current DoD status of every model the agent depends on |
| **CMMC** (DFARS rule effective November 10, 2025) | Phase 1 (self-assessments) in effect; Phase 2 (Level 2 third-party assessments) was scheduled for November 10, 2026 but was reported paused on July 13, 2026 (verify); Phases 3 and 4 scheduled for November 10, 2027 and 2028 | Contractor AI tools that process controlled unclassified information are in scope; cloud services handling it generally need FedRAMP Moderate equivalence under DFARS 252.204-7012 (background) |
| DoD "unbiased AI" procurement templates (October 2026) | Guidance; compliance with EO 14319 and M-26-04 mandatory | Model cards, acceptable-use policies and reporting mechanisms in DoD LLM contracts |

### 3.10.4 Criminal justice and tax data

| Regime | Status | What it means for virtual agents |
|---|---|---|
| **FBI CJIS Security Policy** (version 6.1, effective June 2026) | In force; no AI-specific section | Any agent, model or log that touches criminal justice information must meet all CJIS controls (multi-factor authentication, encryption, audit logging, personnel screening, state CJIS Systems Agency approval); there is no AI exemption |
| **IRS Publication 1075** (federal tax information) | In force (Rev. 11-2021); a Rev. 12-2026 draft adds an AI definition and a new AI section (see Section 3.11.1) | Applies to federal, state and local agencies and contractors that receive federal tax information. Treat prompts, transcripts, retrieval stores, logs and outputs containing such information as covered (vendor interpretation; confirm with the IRS Office of Safeguards and update the Safeguard Security Report). The IRS's own generative AI policy (February 2026) bars entering sensitive taxpayer data into generative AI tools |

### 3.10.5 State and local government

| Item | Status | What it means |
|---|---|---|
| **GovRAMP** (formerly StateRAMP) | AI Security Task Force in its 2026 implementation phase: AI to be treated as a significant change notification, an AI addendum for self-reporting, AI flags on the authorized-product list, and draft procurement guidance for AI-enabled products (planned first half of 2026, verify) | Disclose AI features and model changes to GovRAMP and state customers |
| State adoption of GovRAMP | Georgia: GovRAMP-aligned assessments for new cloud contracts from October 1, 2026 and verification from July 1, 2027; Arizona: renewals must include GovRAMP- or FedRAMP-aligned assessments from July 1, 2026 | Plan GovRAMP status for state sales |
| TX-RAMP (Texas) and other state programs | In force; AI-specific requirements not found | Check Texas DIR and each state's program |
| State AI laws for government use | For example Texas TRAIGA disclosure duties for government AI interactions; state and city government phone-line bills (Section 1.9.3) | Disclosure and human-option requirements for public-sector agents |

### 3.10.6 UK and EU public sector

| Item | Status | What it means |
|---|---|---|
| **UK Algorithmic Transparency Recording Standard (ATRS)** | Mandatory for central government departments (scope and exemptions policy December 17, 2024); encouraged for the wider public sector | Government bodies must publish a transparency record for algorithmic tools, including virtual agents, that affect the public |
| **UK AI Playbook for Government** (February 2025) | Guidance (10 principles; not legislation) | Expectations for safe, lawful and transparent AI in public services |
| UK G-Cloud, Technology Code of Practice, NCSC Cloud Security Principles (background) | In force for central-government buying | Security and procurement evidence for agent vendors |
| **EU Model Contractual Clauses for AI procurement (MCC-AI)** | Updated March 5, 2025 (high-risk and non-high-risk versions); voluntary | Standard contract terms public buyers use to pass AI Act duties to vendors |
| EU AI Act duties for public bodies | Applying in stages | Public authorities deploying high-risk AI must complete fundamental-rights impact assessments and register use in the EU database |

### 3.10.7 Checklist for virtual agents in government

| Requirement | Source | Evidence or test (catalog IDs) |
|---|---|---|
| Authorization boundary covers every component, including the model provider at the same or a higher impact level | FedRAMP, DISA SRG, GovRAMP | Boundary diagram; Marketplace listings |
| No training on agency data without authorization; data stays in the authorized environment and region | FedRAMP AI Prioritization criteria; M-25-22 | Contract terms; zero-retention settings verified (K8) |
| Model, version, prompt and tool changes handled as significant changes | FedRAMP significant change notifications; GovRAMP AI notification | Change log; safety regression before each change (K3) |
| AI-specific continuous monitoring | FedRAMP 20x KSIs; M-25-21 ongoing monitoring | Drift, jailbreak, refusal and incident metrics (N2) |
| Pre-deployment testing and impact assessment for high-impact uses | M-25-21 | Corner-case catalog results; ISO/IEC 42005-style assessment |
| Human oversight, remedy and appeal for adverse outcomes | M-25-21 | F7, M5 |
| Unbiased AI documentation: acceptable-use policy, model or system card, user reporting of problematic outputs | EO 14319; M-26-04 | A working "report this answer" path that reaches the vendor and agency |
| Enterprise identity: single sign-on, SCIM, role-based access | FedRAMP AI Prioritization | K5 |
| Accessibility | Section 508; ADA Title II | O1 to O5 |
| Privacy documentation and records retention | Privacy Act; Federal Records Act | L5; retention schedule for transcripts |
| Criminal-justice and tax data never sent to unapproved model endpoints | CJIS; IRS Publication 1075 | Data-flow tests modeled on L1 to L4 |
| Public AI disclosure and transparency records | ATRS (UK); state laws; agency policy | M1; published transparency record |
| Incident reporting to the agency and FedRAMP | FedRAMP incident communications procedures | Incident drill |

## 3.11 IRS rules, Publication 1075 and other federal and state data regulations

Virtual agents that answer tax, benefits, child-support, health-exchange, student or insurance questions often handle data covered by regimes that predate AI but apply fully to it. None of these regimes exempts AI: prompts, retrieval stores, transcripts, call recordings, logs, model fine-tuning sets and outputs that contain covered data are covered data. This section adds detail to the short CJIS and Publication 1075 entries in Section 3.10.4.

### 3.11.1 IRS Publication 1075 (federal tax information)

**What it is.** *Tax Information Security Guidelines for Federal, State and Local Agencies* turns the safeguarding conditions of IRC § 6103(p)(4) into physical, personnel and technical controls built on NIST SP 800-53 Rev. 5. It applies to every federal, state, tribal and local agency that receives federal tax information (FTI), for example revenue, child-support, human-services, benefits and workforce agencies, and to their contractors, subcontractors and cloud providers. The IRS Office of Safeguards reviews compliance; TIGTA investigates unauthorized access and disclosure. Information derived from FTI is still FTI.

**Status.**

| Edition | Status | AI-relevant content |
|---|---|---|
| **Rev. 11-2021** | **In force** (the binding text as of November 2026) | No AI section. All controls apply to AI systems that store, process or transmit FTI |
| **Rev. 12-2026 (early-release draft)** | **Pending**; posted on irs.gov marked as a draft; takes effect six months after final publication; comments to the Office of Safeguards | Adds a definition of **"Artificial Intelligence"** ("a machine-based system that can, for a given set of human-defined objectives, make predictions, recommendations, or decisions influencing real or virtual environments") and of **cloud service provider**; adds a **new Section 3.3.9, Artificial Intelligence**, on the use of FTI within AI systems (text of 3.3.9 not reviewed here; verify); updates Exhibit 2 to align with OMB M-25-22 (reported); expands Section 3.3.1 cloud computing and Section 2.E.6.1 (the agency must show legal protections for FTI are in place and explain how it monitors the cloud provider); prohibits **personal-assistant smart devices** in FTI workspaces (AC-20 CE-3); requires quarterly phishing simulations (AT-2 CE-1); adds Taxpayer First Act § 2004 contractor certification and review requirements; accepts FBI Next Generation Identification enrollment for reinvestigation; removes AC-23 (data mining protection) and several other controls; says Secure Data Transfer was retired in December 2025 (reported) |

**Requirements that matter most for virtual agents (Rev. 11-2021 unless noted).**

| Requirement | Value | What it means for a virtual agent |
|---|---|---|
| Safeguard Security Report (SSR) | Approved at least 90 days before receiving FTI; updated annually on the agency group's due date; Head of Agency certification | List the agent, its model endpoints, speech services, retrieval stores and logging in the SSR and data-flow diagram; update it when the AI stack changes |
| 45-day notification | To the Office of Safeguards at least 45 days before a contractor agreement that gives access to FTI, and before moving FTI to cloud and other notifiable technologies | Adding an AI vendor, model provider, contact-center platform or new cloud region that can reach FTI needs notice first; never "move first, notify later" |
| US-only processing | FTI may be processed and stored only in the United States and its territories (SA-9); contractor staff and systems certified as US-located | Model inference, transcription, human review and support must all stay in the US; check the model provider's regions, fallback routing and offshore support |
| Incident reporting | Possible unauthorized inspection or disclosure reported immediately, no later than 24 hours after identification, to TIGTA and the Office of Safeguards, without waiting for an internal investigation | A bot that reads FTI to the wrong caller, a prompt-injection leak or a transcript sent to an unapproved tool is a reportable incident |
| Data breach definition (draft Rev. 12-2026) | Includes an **oral disclosure** of FTI to a person not authorized to receive it and an authorized user accessing FTI for an unauthorized purpose | Voice agents must authenticate the caller and confirm authority before speaking any FTI; misheard or spoofed identities are breach scenarios |
| Multi-factor authentication | All privileged and non-privileged accounts that can reach FTI at NIST SP 800-63 AAL2 (IA-2) | Agent admin consoles, prompt and knowledge-base editors and analytics dashboards need MFA |
| Service accounts and API keys | Least privilege (AC-6), account management (AC-2), audit (AU-6) | The agent's own credentials to FTI systems need an owner, scope limited to the needed data, vaulted secrets, rotation and logging |
| Authorized access list and need to know | Reviewed monthly | Human reviewers of transcripts and model outputs must be on the list |
| Background investigations | For employees and contractors with FTI access; reinvestigation every 5 years | Applies to vendor staff who can see prompts, logs or recordings |
| Training | Annual disclosure awareness training; security awareness updates at least quarterly | Include AI-specific misuse (pasting FTI into public chatbots) |
| Encryption | FIPS-validated cryptography in transit and at rest (SC-8, SC-13, SC-28) | Applies to vector stores, caches and recordings |
| Contract language | Exhibit 7 safeguarding language in every contract; may be expanded but not reduced | Put Exhibit 7 into AI and contact-center vendor contracts, with flow-down to sub-processors |
| End of contract | Contractor returns or destroys FTI within 7 calendar days | Includes fine-tuning data, embeddings, caches and backups held by the AI vendor |
| Logs and records | FTI logs kept 5 years | Retention schedule for agent transcripts that contain FTI |
| Commingling and labeling | FTI must be identifiable; derived data remains FTI; masking does not remove the obligation | Model outputs and summaries built from FTI are FTI |
| FedRAMP | FedRAMP authorization helps but is not by itself sufficient; Publication 1075 parameters and attestations still apply (vendor interpretation) | Confirm the model provider's contract covers Publication 1075 obligations |

**Penalties (apply to individuals as well as organizations).**

| Provision | Conduct | Maximum penalty |
|---|---|---|
| **IRC § 7213** | Willful unauthorized disclosure of returns or return information | Felony: fine up to $5,000 and up to 5 years' imprisonment, plus prosecution costs; federal employees also dismissed (background; verify current amounts against 26 U.S.C. § 7213) |
| **IRC § 7213A** | Willful unauthorized inspection ("browsing") | Misdemeanor: fine up to $1,000 and up to 1 year's imprisonment (background; verify) |
| **IRC § 7431** | Knowing or negligent unauthorized inspection or disclosure | Civil damages to the taxpayer: the greater of $1,000 per act or actual damages, plus punitive damages for willful or grossly negligent acts and costs (background; verify) |
| Administrative | Safeguard review findings | Corrective action plans; the IRS can suspend or terminate FTI disclosures to an agency that fails to safeguard |

### 3.11.2 Other IRS rules

| Rule | Who it applies to | Status | Relevance to virtual agents | Penalties |
|---|---|---|---|---|
| **IRC § 6103** (confidentiality of returns) | IRS, agencies and contractors receiving FTI | In force | The legal basis for Publication 1075; limits who may receive FTI and for what purpose | §§ 7213, 7213A, 7431 (above) |
| **IRC § 7216 and Treas. Reg. § 301.7216** (use and disclosure by tax return preparers) | Tax preparers and anyone in the business of preparing returns, including software and online providers | In force; **no IRS AI-specific guidance under § 7216 found** (as of late 2026) | Using or disclosing return information outside the regulatory exceptions needs the taxpayer's signed consent in the required format (Rev. Proc. 2013-14, background). Commentators say sending client tax data to a third-party AI service is likely a "disclosure" unless an exception (such as the preparer's service-provider exception) applies; a general-purpose public chatbot probably does not qualify. Consent for marketing or non-preparation uses by a tax-help bot needs particular care | Criminal: misdemeanor, fine up to $1,000 and up to 1 year's imprisonment per violation (up to $100,000 for disclosures connected with identity theft) (background; verify) |
| **IRC § 6713** | Same as § 7216 | In force | Civil counterpart to § 7216 | $250 per unauthorized use or disclosure, up to $10,000 per year; higher for identity-theft-related disclosures (background; verify) |
| **OPR Alert 2026-19**, *Introductory Guidelines for Responsible AI Use in Federal Tax Practice* (June 24, 2026) | Practitioners under **Circular 230** (attorneys, CPAs, enrolled agents and others) | Guidance; applies existing Circular 230 duties, does not amend them | Cites due diligence (§ 10.22), fees (§ 10.27), competence (§ 10.35), procedures to ensure compliance (§ 10.36) and written advice (§ 10.37), plus confidentiality. Practitioners keep full responsibility for AI-assisted work, must review AI-drafted correspondence before sending, should use secure enterprise AI for client data, and should bill to reflect AI efficiencies. Not a ban on AI. The IRS also announced it will merge OPR and the Return Preparer Office (reported) | Circular 230 sanctions: censure, suspension or disbarment from practice before the IRS, and monetary penalties (background) |
| **FTC Safeguards Rule** (16 CFR Part 314, under GLBA) | Non-bank financial institutions, **including paid tax preparers** | In force; notification amendment effective May 13, 2024 | Written information security program, risk assessment, MFA, encryption, vendor oversight; report a "notification event" (unauthorized acquisition of unencrypted information of 500 or more consumers) to the FTC within 30 days of discovery | FTC enforcement; civil penalties where a rule violation is also covered by FTC civil-penalty authority (verify) |
| **IRS Publication 4557** (*Safeguarding Taxpayer Data*) and **Publication 5708** (WISP template) | Tax professionals | Guidance implementing the Safeguards Rule for preparers | Practical controls and a written information security plan; AI tools that touch client data belong in the plan. PTIN renewal includes an attestation to having a security plan (background; verify) | Through the Safeguards Rule and IRS e-file sanctions |
| **IRS Publication 1345** (*Handbook for Authorized IRS e-File Providers*) | Electronic return originators, transmitters and online providers | In force | Online providers must meet six security, privacy and business standards (background; verify current list) | Sanctions up to expulsion from IRS e-file |
| **IRS Publication 4812** (*Contractor Security Controls*, Rev. 13, 2022 latest found) | Contractors and subcontractors with access to IRS sensitive but unclassified (SBU) information or systems | In force | AI and contact-center vendors working for the IRS itself (not for states) follow Publication 4812 rather than Publication 1075 | Contract remedies plus §§ 7213, 7213A, 7431 |
| **Taxpayer First Act § 2004** | Contractors receiving FTI | In force; reflected in the draft Publication 1075 | Contractor certification and review requirements | Contract and disclosure-authority consequences |
| **IRM 10.24.1** (*IRS Policy for AI Governance*) and IRS generative AI policy | IRS employees, developers and AI providers to the IRS | Interim guidance (March 11, 2025) then IRM update reported February 2026 | AI risk assessments; bars entering sensitive taxpayer data into unapproved generative AI tools; addresses unintended disclosure from AI models. TIGTA (2024) and GAO (GAO-26-107522) found gaps in IRS AI risk management | Internal discipline; §§ 7213 and 7213A |

### 3.11.3 Other federal data regulations

| Regulation | Who it applies to | Status | Relevance to virtual agents | Maximum penalties |
|---|---|---|---|---|
| **SSA data exchange security requirements** (Technical System Security Requirements, TSSR; information exchange agreements) | State agencies and their contractors that receive SSA data (benefits, Medicaid, SNAP, child support) | In force; latest TSSR found is version 8.50 (2019), agreements require the "most current" version (verify); SSA moved data exchanges to a new policy division in 2026 | SSA certifies partners before data flows and runs triennial security reviews; agreements usually also require Publication 1075 for tax data. Treat agent prompts, logs and recordings containing SSA data as covered; get SSA approval before routing it to a new AI vendor | Loss of data access; Privacy Act and Computer Matching penalties (below) |
| **Privacy Act of 1974 and Computer Matching and Privacy Protection Act** | Federal agencies and contractors operating systems of records; matching agreements with states | In force | Systems-of-records notices, routine-use limits, accounting of disclosures; an agent that queries records needs a lawful routine use | Criminal misdemeanor fines up to $5,000 for willful disclosure; civil actual damages (minimum $1,000) (background) |
| **CMS ARC-AMPE** (*Acceptable Risk Controls for ACA, Medicaid and Partner Entities*) | Federal and state-based health exchanges, Medicaid agencies, enhanced direct-enrollment entities and partners | In force; replaced MARS-E 2.2 and the NEE framework effective on publication (version 1.02, April 2025; later 1.03) | NIST SP 800-53 Rev. 5-based controls for systems handling exchange and Medicaid data, including federal tax data used for eligibility | Loss of connection to the federal data services hub; HIPAA and Publication 1075 penalties where applicable |
| **42 CFR Part 2** (substance-use-disorder treatment records) | Federally assisted SUD programs and recipients of their records | Final rule in force; compliance required by **February 16, 2026**; HHS OCR enforcing | Consent, redisclosure notices and breach notification now aligned with HIPAA; a health bot must not reveal or reuse SUD records outside consent | HIPAA civil tiers (up to about $2.19 million per year for identical violations in 2026) and criminal penalties now apply |
| **FERPA** (education records) and **PPRA** | Schools and institutions receiving federal education funds and their vendors acting as "school officials" | In force | Student-facing bots and AI tutors need a school-official agreement, direct control and no redisclosure | Loss of federal funding (rarely used); investigations by the Student Privacy Policy Office (background) |
| **COPPA Rule** (amended 2025) | Operators of services directed to children under 13 or with actual knowledge | In force; amended rule compliance date April 22, 2026 (verify) | Verifiable parental consent, separate consent for disclosure to third parties (including AI training), data minimization and retention limits | FTC civil penalties up to $53,088 per violation (Section 1.4 penalty table) |
| **Driver's Privacy Protection Act** | State DMVs and anyone obtaining motor-vehicle records | In force | Agents using DMV data for identity verification must have a permitted use | Civil liquidated damages of at least $2,500 per violation, plus punitive damages; criminal fines (background) |
| **FISMA and NIST SP 800-53 Rev. 5** | Federal agencies and contractors operating federal systems | In force | Baseline for FedRAMP, Publication 1075, ARC-AMPE and TSSR | Through contracts, ATOs and inspector general reporting |
| **NIST SP 800-171, DFARS 252.204-7012 and the proposed FAR CUI rule** | Contractors handling controlled unclassified information (CUI) | DFARS clause in force (requires Rev. 2); DFARS assessment clauses replaced by 252.240-7997 from February 1, 2026 and a further class deviation revision on September 3, 2026 (sources conflict on scope; verify); **FAR CUI rule re-proposed June 23, 2026** (Rev. 3 baseline for civilian contracts, 72-hour incident reporting), finalization expected around the end of 2026 | FTI is often marked CUI; AI tools and contact-center platforms that handle CUI fall under these controls | Contract remedies, False Claims Act exposure for false cyber-compliance representations (background) |
| **FBI CJIS Security Policy** | Criminal justice agencies and vendors | In force (version 6.1) | See Section 3.10.4 | Loss of CJIS access; state penalties |

### 3.11.4 State regulations

| Regulation | State | Status | Relevance to virtual agents | Maximum penalties |
|---|---|---|---|---|
| **State tax confidentiality laws** | All states with income or sales taxes | In force | Most mirror IRC § 6103 for state tax data; state revenue bots need the same authentication, logging and vendor controls as for FTI, and state FTI agreements usually adopt Publication 1075 | Typically criminal penalties for unauthorized disclosure, with dismissal for employees (amounts vary; background) |
| **NYDFS Cybersecurity Regulation (23 NYCRR Part 500)** | New York (banks, insurers, money transmitters and other licensees) | In force; final amended requirements (universal MFA and asset inventory) effective **November 1, 2025**; first annual certification under the full rule due April 15, 2026 | MFA for all remote and privileged access; asset inventory including AI tools; third-party service-provider oversight; 72-hour cybersecurity-event notice; the 2024 AI cybersecurity industry letter (Section 3.3) applies these to AI-enabled social engineering and AI vendors | Penalties under the Financial Services and Banking Laws, assessed per violation; recent consent orders include $2.25 million (Delta Dental, April 30, 2026) and $2 million (PayPal, January 2025); one vendor reports more than $144 million across 27 entities (verify) |
| **CCPA regulations on automated decision-making technology (ADMT), risk assessments and cybersecurity audits** | California | Effective **January 1, 2026**; ADMT obligations from **January 1, 2027**; risk assessments for existing processing by December 31, 2027 with first submissions April 1, 2028; first cybersecurity audit certifications from April 1, 2028 for businesses above $100 million revenue (later for smaller ones) | Pre-use notice, opt-out and access rights for ADMT used in significant decisions; risk assessments for AI processing of personal information; audits of security programs | CCPA penalties of $2,663 per violation or $7,988 for intentional violations or those involving minors (Section 1.2 penalty table) |
| **NAIC Model Bulletin on the Use of AI Systems by Insurers** | About 24 states plus D.C. (as of spring 2026; one vendor reports 25 with 8 in progress; verify) | Guidance adopted by state insurance regulators; NAIC AI evaluation tool piloted in 12 states through September 2026 | Written AI program, governance, risk management, third-party vendor oversight and testing for unfair discrimination; applies to insurer chatbots and claims or underwriting agents | Enforcement under existing state unfair-trade-practice and market-conduct laws |
| **NAIC Insurance Data Security Model Law (#668)** | Adopted in many states (count unconfirmed; verify) | In force where adopted | Information security program, vendor oversight and 72-hour notice to the commissioner | State insurance penalties (vary) |
| **Massachusetts 201 CMR 17.00** | Massachusetts (anyone holding residents' personal information) | In force | Written information security program, encryption, vendor contracts | Enforced under Chapter 93A: up to $5,000 per violation (background) |
| **State breach-notification laws** | All 50 states, D.C. and territories | In force | Misdirected bot responses, transcript leaks and prompt-injection exfiltration can trigger notice; many states cover account credentials and biometric data | Varies, commonly per-violation or per-resident amounts with caps (for example up to $500,000 per breach in some states; background) |
| **Texas HB 3512** and **Texas Administrative Code Chapter 202 / TX-RAMP** | Texas state agencies and their cloud vendors | HB 3512 effective September 1, 2025 (annual state-certified AI training for employees and officials who use computers for at least 25% of their duties); TX-RAMP certification for cloud products; Texas TRAIGA duties for government AI (Section 1.2) | AI training and certification records for staff who manage agents; TX-RAMP certification for the agent platform | Contract and procurement consequences; TRAIGA penalties (Section 1.2) |
| **California SB 896** (Generative AI Accountability Act, 2024) | California state agencies | In force | Agencies must tell people when they are interacting with generative AI in state communications and services, inventory GenAI uses and assess risks, including to critical infrastructure | No private penalties found (verify) |
| **State CJIS, Medicaid and benefits agreements** | All states | In force | State agencies often add Publication 1075, TSSR and ARC-AMPE terms to vendor contracts in one agreement | Contract remedies; loss of federal data access |

### 3.11.5 Checklist for virtual agents that handle tax and regulated government data

| Requirement | Source | Evidence or test (catalog IDs) |
|---|---|---|
| Caller identity and authority confirmed before any FTI, SSA, SUD or student data is spoken or shown | IRC § 6103; Publication 1075 (oral disclosure as breach in the draft); 42 CFR Part 2; FERPA | Authentication and social-engineering tests, including spoofed caller ID and third-party "helper" scenarios; government ID handling (L4) |
| AI stack listed in the SSR and data-flow diagram; 45-day notice before new AI vendors or regions | Publication 1075 | SSR change log; IRS acknowledgement letter |
| All inference, transcription, storage, support and human review in the US | Publication 1075 SA-9 | Region pinning and fallback-routing tests; vendor attestation |
| No FTI or regulated data sent to unapproved model endpoints or public tools | Publication 1075; IRS generative AI policy; § 7216; Circular 230 alert | Data-loss and egress tests (L1 to L4); zero-retention settings verified (K8) |
| Written § 7216 consent before tax-preparer bots use or disclose return information for anything beyond preparation | § 7216; Treas. Reg. § 301.7216 | Consent capture and refusal-path tests |
| Practitioner review of AI-drafted tax advice and correspondence | Circular 230; OPR Alert 2026-19 | Human approval step logged before sending |
| MFA at AAL2 for agent administration, knowledge-base editing and transcript access | Publication 1075 IA-2; NYDFS Part 500; FTC Safeguards Rule | Access review (K5) |
| Agent service accounts scoped, vaulted, rotated and logged | Publication 1075 AC-2, AC-6, AU-6 | Credential inventory; misuse tests |
| 24-hour incident escalation path to TIGTA and the Office of Safeguards; 30-day FTC and 72-hour NYDFS paths where they apply | Publication 1075; FTC Safeguards Rule; NYDFS Part 500 | Tabletop exercise with an AI-leak scenario |
| Transcripts, embeddings and caches treated as covered records: labeled, encrypted, retained per schedule and destroyed within 7 days of contract end | Publication 1075 | Retention and destruction evidence from the AI vendor |
| No smart-speaker or personal voice assistants in FTI workspaces | Publication 1075 draft AC-20 CE-3 | Facility policy and inspection |
| AI disclosure to the public in state services | California SB 896; Texas TRAIGA; state laws (Section 1.2) | AI disclosure tests (M1) |
| ADMT notices, opt-outs and risk assessments for significant decisions | CCPA regulations | Notice and opt-out tests; risk-assessment record |

---

# Part 4. Open items to verify

| # | Item | Where |
|---|---|---|
| 1 | Federal Register date of the FCC September 30, 2026 revocation order | 1.4 |
| 2 | Text and thresholds of California AB 1609; scope for enterprise contact centers | 1.2 |
| 3 | New York S9051-B effective date; Washington HB 2225 scope for customer-service bots | 1.2 |
| 4 | 2026 chatbot laws in Connecticut, Georgia, Idaho, Iowa, Nebraska, Oregon, Rhode Island and Tennessee | 1.2 |
| 5 | Colorado AI Act litigation outcome; SB 26-189 text | 1.2 |
| 6 | Local laws: NYC biometric law, Portland ban, government facial-recognition bans | 1.1 |
| 7 | Comprehensive-privacy and all-party-consent state lists | 1.3 |
| 8 | Executive-order history and OMB memoranda | 1.4 |
| 9 | EU Omnibus high-risk dates; AI Liability Directive withdrawal; member-state laws (Germany, Denmark, Spain) | 1.5, 1.6 |
| 10 | UK DMCC fining level; Ofcom abandoned-call thresholds; accessibility regulation standard | 1.7 |
| 11 | Case statuses: Raine, Otter.ai, Wolf River, Starbuck v. Google, Mobley, Harper, Lokken, Kisting-Leung, Barrows, Clearview appeals, Thomson Reuters v. Ross appeal, GEMA appeal, NYT MDL | Part 2 |
| 12 | Background-only cases: SCHUFA holding, Uber Amsterdam, SyRI, Rite Aid, Dutch Clearview fine | Part 2 |
| 13 | PCI "Security Considerations for AI Systems" document and the telephone-payments supplement version | 3.1 |
| 14 | HIPAA Security Rule final status; HITRUST standalone option; Joint Commission/CHAI guidance | 3.2 |
| 15 | CFPB circular status; FINRA 24-09; NYDFS AI letter and Circular Letter 7 | 3.3 |
| 16 | ISO/IEC 42005 publication; NIST overlays; CSA AI Controls Matrix version | 3.4 |
| 17 | NYC automated customer-service rule: final text, hearing date and effective date | 1.1, 1.9.3 |
| 18 | Bill text of the People-First Chatbot Act, Senior Chatbot Protection Act and Senate CHATBOT Act (S.4407) | 1.9.3, 1.9.4 |
| 19 | Hawaii Act 248 official text | 1.2 |
| 20 | Ireland distance financial services regulations commencement date | 1.6 |
| 21 | Legislative session start and end dates used for the outlook ratings | 1.9.1 |
| 22 | Status of New York S7263, A222 and state-agency live-representative bills | 1.9.3, 1.9.4 |
| 23 | EN 18286:2026 Official Journal citation (Implementing Decision (EU) 2026/2274) and status of prEN 18228 and 18229 | 3.9 |
| 24 | Texas TRAIGA treatment of ISO/IEC 42001 as a recognized framework; Colorado SB 26-189 framework references | 3.9 |
| 25 | Publication status of ISO/IEC 27090, 27091 and 12792 | 3.9 |
| 26 | AICPA 2027 Trust Services Criteria exposure draft contents and Description Criteria draft | 3.9 |
| 27 | WISeR denial and delay figures; outcome of the Senate repeal resolution | 2.11 |
| 28 | SafeRent settlement approval date; Connecticut pricing law scope | 2.11, 1.4 |
| 29 | Survey figures (NerdWallet, Qualtrics, Glance, AnswerConnect, Citizens Advice) against the original reports | 2.11 |
| 30 | FedRAMP AI Prioritization criteria wording; authorized AI services and impact levels on the FedRAMP Marketplace; Rev5 retirement date; KSI counts | 3.10.1 |
| 31 | Whether a model or version change is a FedRAMP significant change (confirm with the authorizing official) | 3.10.1 |
| 32 | Final status of GSA draft clause GSAR 552.239-7001 | 3.10.2 |
| 33 | COSAIS first public draft; M-25-22 applicability date | 3.10.2 |
| 34 | CMMC Phase 2 pause (July 13, 2026) and DoD status of Anthropic models | 3.10.3 |
| 35 | IRS Office of Safeguards position on AI and federal tax information | 3.10.4 |
| 36 | GovRAMP AI addendum and procurement guidance publication; TX-RAMP AI requirements | 3.10.5 |
| 37 | Penalty amounts marked "background" or "verify" in the Section 1.1 to 1.7 penalty tables (including CA BOT Act, SB 53, CUBI, Maine, Florida FTSA, ECOA, FCRA, CRA lower tiers, DORA, Omnibus Directive, German BFSG, Ofcom) | 1.1 to 1.7 |
| 38 | SB 243 and Washington HB 2225 damages structure; Hawaii Act 248 penalties | 1.2 |
| 39 | China Cybersecurity Law fine levels and PIPL; anthropomorphic AI measures text | 1.10.2 |
| 40 | Penalties under the laws of Vietnam, Kazakhstan, Russia, Peru, Chile, UAE and Indonesia | 1.10 |
| 41 | Status of Mexico's 2026 amendments, Saudi AI law, Norway AI Act, Japan Basic AI Plan, Ontario job-posting rule | 1.10 |
| 42 | Singapore PDPA turnover threshold; India DPDP children's-data penalty; Australia Online Safety Act penalty level | 1.10.2 |
| 43 | Text of draft Publication 1075 Section 3.3.9 (AI) and final publication date of Rev. 12-2026; Exhibit 2 alignment with OMB M-25-22 | 3.11.1 |
| 44 | Current penalty amounts in IRC §§ 7213, 7213A, 7431, 7216 and 6713 | 3.11.1, 3.11.2 |
| 45 | Whether the IRS will issue § 7216 guidance on AI; exact list of Circular 230 provisions in OPR Alert 2026-19; OPR and Return Preparer Office merger | 3.11.2 |
| 46 | PTIN security-plan attestation; Publication 1345 online-provider standards; Publication 4812 latest revision | 3.11.2 |
| 47 | Current SSA TSSR version; COPPA amended-rule compliance date; DFARS class deviation scope (September 3, 2026); FAR CUI rule finalization | 3.11.3 |
| 48 | NAIC AI bulletin and Model Law #668 adoption counts; NYDFS aggregate fines; California SB 896 enforcement | 3.11.4 |

---

# Part 5. Sources

**Part 1 (laws and regulations):** [Fox Rothschild: California AB 1609](https://dataprivacy.foxrothschild.com/2026/09/articles/general-privacy-data-security-news-developments/5118/) · [Governor of California: September 28, 2026 signings](https://www.gov.ca.gov/2026/09/28/governor-newsom-signs-commonsense-legislation-to-make-your-life-easier/) · [WSGR: California 2026 privacy and AI bills](https://www.wsgr.com/en/insights/california-enacts-over-two-dozen-key-privacy-and-ai-bills-into-law-in-2026-legislative-session.html) · [CHCF: California health-care AI bills](https://www.chcf.org/blog/2026/10/08/newsom-approves-3-health-care-ai-bills-vetoes-2/) · [CASRAI: SB 942 effective August 2026](https://www.casrai.org/news/california-sb-942-ai-transparency-act-effective-august-2026) · [Hunton: CCPA staggered deadlines](https://www.hunton.com/privacy-and-cybersecurity-law-blog/newly-approved-ccpa-regulations-have-staggered-deadlines-for-compliance) · [Norton Rose Fulbright: Colorado AI law](https://www.nortonrosefulbright.com/en-us/knowledge/publications/18733d31/colorado-enacts-revised-ai-law) · [Akin: New York S9051-B](https://www.akingump.com/en/insights/ai-law-and-regulation-tracker/new-york-enacts-prohibition-on-unsafe-ai-companion-features-for-minors-s9051-b) · [Hunton: Washington HB 2225](https://hunton.com/privacy-and-cybersecurity-law-blog/washington-state-enacts-law-regulating-ai-companion-chatbots-with-private-right-of-action) · [Orrick: 2026 state chatbot laws](https://www.orrick.com/en/Insights/2026/04/2026-State-Chatbot-Laws-Key-Provisions-and-Regulatory-Trends) · [Transparency Coalition: 14 new state chatbot laws](https://www.transparencycoalition.ai/news/watershed-year-for-chatbot-safety-measures-14-new-state-laws-enacted-so-far-in-2026) · [Davis Polk: Utah AI law amendments](https://davispolk.com/insights/client-update/utah-scales-back-reach-generative-ai-consumer-protection-law) · [Oregon Legislature: HB 3865](https://apps.oregonlegislature.gov/liz/2025R1/Downloads/MeasureDocument/HB3865/B-Engrossed) · [KALB: Louisiana AI call disclosure bill](https://www.kalb.com/2026/04/08/louisiana-lawmakers-advance-bill-requiring-ai-disclosure-campaign-robocalls/) · [DCI: NYC Local Law 144 audit](https://blog.dciconsult.com/recommended-changes-to-local-law-144) · [FCC: AI-generated voices in robocalls](https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal) · [Inside Global Tech: FCC revocation order](https://www.insideglobaltech.com/2026/10/02/update-fcc-adopts-final-order-and-further-notice-on-tcpa-consent-revocation/) · [Orrick: revoke-all deferral](https://infobytes.orrick.com/2026-01-16/fcc-extends-robocall-consent-revocation-rule-waiver-to-january-2027/) · [FTC: TAKE IT DOWN Act enforcement](https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-begins-enforcing-take-it-down-act) · [Federal Register: amended COPPA Rule](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule) · [Cooley: CFPB adverse-action circular](https://www.cooley.com/news/insight/2023/2023-09-25-cfpb-mandates-additional-specificity-in-adverse-action-communications-based-on-ai-or-complex-credit-models) · [Global Policy Watch: GUARD Act](https://www.globalpolicywatch.com/2026/05/senate-judiciary-committee-advances-guard-act-regulating-minor-use-of-ai/) · [CASRAI: federal preemption](https://casrai.org/news/federal-ai-moratorium-state-preemption-fight-2026) · [Lawfare: AI preemption EO and BEAD](https://www.lawfaremedia.org/article/the-ai-preemption-executive-order-s-bead-strategy-faces-steep-legal-hurdles) · [Garrigues: AI Digital Omnibus published](https://www.garrigues.com/en_GB/garrigues-digital/ai-digital-omnibus-regulation-has-been-published-redefining-deadlines-and) · [Jones Day: Code of Practice on labelling](https://www.jonesday.com/en/insights/2026/06/european-commission-publishes-final-code-of-practice-on-marking-and-labelling-aigenerated-content) · [DPO AS: Council Digital Omnibus mandate](https://dpoas.co.il/blog/digital-omnibus-council-mandate-gdpr/) · [Taylor Wessing: Digital Fairness Act](https://www.taylorwessing.com/en/insights-and-events/insights/2026/10/eu-digital-fairness-act-dark-patterns-and-addictive-designs) · [European Commission: consumer credit](https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/consumer-financial-products-and-services/consumer-protection-financial-services_en) · [Ius Laboris: Platform Work Directive transposition](https://www.iuslaboris.com/insights/eu-platform-work-directive-which-countries-have-implemented/) · [McCann FitzGerald: CRA reporting](https://www.mccannfitzgerald.com/knowledge/data-privacy-and-cyber-risk/cyber-resilience-act-reporting-obligations-apply-from-11-september-2026) · [ENISA: CRA Single Reporting Platform](https://www.enisa.europa.eu/cra-srp/) · [Cleary Gottlieb: Italy's AI law](https://www.clearygottlieb.com/news-and-insights/publication-listing/italy-adopts-the-first-national-ai-law-in-europe-complementing-the-eu-ai-act.) · [A&O Shearman: UK DUAA in force](https://www.aoshearman.com/en/insights/ao-shearman-on-data/key-data-protection-changes-under-the-data-use-and-access-act-2025-comes-into-force) · [Mishcon de Reya: PECR fines and cookies](https://www.mishcon.com/news/unlawful-cookies-a-new-avenue-for-the-ico-to-issue-fines) · [RPC: Ofcom explainer on AI chatbots](https://www.rpclegal.com/snapshots/technology-digital/spring-2026/ofcom-publishes-an-explainer-on-the-regulation-of-ai-chatbots-under-the-online-safety-act/) · [IAPP: King's Speech, no AI bill](https://iapp.org/news/a/king-s-speech-signals-diffuse-uk-digital-policy-agenda-but-no-ai-bill) · [Inside Global Tech: UK financial regulators and AI](https://www.insideglobaltech.com/2026/04/09/uk-financial-services-regulators-approach-to-artificial-intelligence-in-2026/) · [GOV.UK: Report on Copyright and AI](https://assets.publishing.service.gov.uk/media/69ba692226909a14239612e4/CP2602959_-_Report_on_Copyright_and_Artificial_Intelligence_web.pdf)

**Section 1.9 (proposed laws):** [CalMatters: AB 1609](https://calmatters.digitaldemocracy.org/bills/ca_202520260ab1609) · [Quarles: AB 1609 customer-service requirements](https://www.quarles.com/newsroom/publications/please-hold-for-no-longer-than-fifteen-minutes-new-customer-service-requirements-for-ai-chatbots) · [Senate Judiciary analysis of AB 1609](https://sjud.senate.ca.gov/system/files/2026-06/ab-1609-zbur-sjud-analysis.pdf) · [NYC DCWP: proposed ban on AI customer-service doom loops](https://www.nyc.gov/site/dca/news/072-26/mamdani-administration-proposes-ban-ai-customer-service-doom-loops) · [Consumer Finance Monitor: NYC automated customer-service rules](https://www.consumerfinancemonitor.com/wp-content/uploads/sites/14/2026/10/NYC-Proposes-Sweeping-Rules-for-Automated-Customer-Service-Systems-Including-Mandatory-AI-Disclosure-and-Access-to-Human-Representatives.pdf) · [Bloomberg Law: NYC doom-loop proposal](https://news.bloomberglaw.com/banking-law/mamdani-targets-companies-with-ai-customer-service-doom-loops) · [insideARM: NYC chatbot disclosure and human access](https://www.insidearm.com/news/00096310-nyc-proposes-chatbot-disclosure-and-human/) · [Illinois HB 3653](https://ilga.gov/documents/legislation/104/HB/PDF/10400HB3653.pdf) · [New Jersey S965](https://app.azure.legiplex.com/nj/legislature/2026/2026-r/bills/s965) · [New Jersey A3663](https://app.azure.legiplex.com/nj/legislature/2026/2026-r/bills/a3663) · [New York A10796](https://www.nysenate.gov/legislation/bills/2025/A10796) · [New York A222](https://www.nysenate.gov/legislation/bills/2025/A222) · [Holland & Knight: New York chatbot liability bill](https://www.hklaw.com/en/insights/publications/2026/03/new-york-bill-would-create-liability-for-chatbot-proprietors) · [TCPAWorld: Keep Call Centers in America Act](https://tcpaworld.com/2025/08/04/talk-to-a-human-or-pay-the-price-congress-proposes-call-center-bill-mandating-ai-and-location-disclosures/) · [CX Today: critique of the call-center bill](https://www.cxtoday.com/contact-center/the-proposed-us-bill-to-mandate-human-customer-support-everything-thats-wrong-with-it/) · [GovInfo: H.R. 9619](https://www.govinfo.gov/app/details/BILLS-119hr9619ih) · [Rep. Foushee: People-First Chatbot Act](https://foushee.house.gov/media/press-releases/reps-foushee-casar-introduce-legislation-to-protect-children-and-americans-privacy-from-ai-chatbot-harms-and-require-chatbot-safety-assessments) · [Fairplay: People-First Chatbot Act introduced](https://fairplayforkids.org/people-first-chatbot-act-introduced-in-us-house/) · [AccountsRecovery: chatbot disclosure and human-transfer bill](https://www.accountsrecovery.net/2026/07/14/new-bill-would-regulate-ai-chatbots-require-disclosure-and-human-transfer-option-in-customer-service-interactions/) · [GovInfo: S. 5117](https://www.govinfo.gov/app/details/BILLS-119s5117is) · [WVVA: Senior Chatbot Protection Act](https://www.wvva.com/2026/07/24/justice-kelly-introduce-senior-chatbot-protection-act/) · [GovInfo: H.R. 7985](https://www.govinfo.gov/app/details/BILLS-119hr7985ih) · [Rep. Lofgren: AI labeling bill](https://lofgren.house.gov/media/press-releases/lofgren-introduces-legislation-aimed-improving-ai-labeling-practices) · [Inside Privacy: Digital Fairness Act and chatbots](https://www.insideprivacy.com/artificial-intelligence/digital-fairness-act-series-topic-2-transparency-and-disclosure-obligations-for-ai-chatbots-in-consumer-interactions/) · [CMS: inside the planned Digital Fairness Act](https://cms.law/en/aut/legal-updates/inside-the-eu-s-planned-digital-fairness-act-digital-design-subscription-traps-and-influencer-marketing) · [CX Today: Gartner on an EU right to talk to a human](https://www.cxtoday.com/contact-centre/by-2028-the-eu-will-mandate-the-right-to-talk-to-a-human-in-customer-service-predicts-gartner/) · [DLA Piper: Directive 2023/2673](https://www.dlapiper.com/insights/publications/2023/12/enhancing-consumer-rights-eu-directive-2023-2673-on-distance-financial-services-contracts-adopted) · [Irish Examiner: right to speak to a human for financial products](https://www.irishexaminer.com/news/politics/arid-41873094.html) · [Mason Hayes & Curran: new rights for financial services consumers](https://www.mhc.ie/latest/insights/new-rights-for-financial-services-consumers-introduced) · [Digital Policy Alert: Ireland Bill 93 of 2026](https://digitalpolicyalert.org/change/21797-design-requirement-in-artificial-intelligence-companion-services-protection-of-children-bill-2026-bill-93-of-2026) · [Hunton: Hawaii AI companion law](https://hunton.sitepilot11.firmseek.com/privacy-and-cybersecurity-law-blog/hawaii-enacts-ai-companion-disclosure-and-safety-law) · [Resultsense: Citizens Advice right to a human](https://www.resultsense.com/news/2026-09-22-citizens-advice-right-to-human-chatbots/) · [UK Parliament petition 776511](https://petition.parliament.uk/petitions/776511) · [Ofcom: AI in telecoms discussion paper](https://www.ofcom.org.uk/phones-and-broadband/telecoms-infrastructure/consumers-using-ai-to-help-manage-their-telecoms-services-but-human-contact-still-valued) · [Which?: response to Ofcom on AI in telecoms](https://www.which.co.uk/policy-and-insight/article/the-impact-of-ai-adoption-for-telecoms-customers-which-response-aWKz12b5Mk9s) · [GOV.UK: agentic AI and consumers](https://www.gov.uk/government/publications/agentic-ai-and-consumers/agentic-ai-and-consumers) · [Stephenson Harwood: CMA consumer powers and AI](https://www.stephensonharwood.com/media/zoidu3rv/stephenson-harwood-cmas-new-consumer-protection-powers-10-qs-ai-september-2026.pdf) · [CDT: 2026 state and federal AI legislation](https://cdt.org/insights/2026-state-and-federal-ai-legislation-updates/) · [Stateside: AI chatbot legislation across the states](https://www.stateside.com/blog/ai-chatbot-legislation-across-states) · [Transparency Coalition: model bills](https://www.transparencycoalition.ai/model-bills) · [Forkast: state AG coalition on agent liability](https://forkast.news/the-42-state-ag-coalition-how-state-attorneys-general-are-building-the-agent-liability-framework-congress-wont/) · [Chargeflow: agentic commerce regulation](https://www.chargeflow.io/es/blog/agentic-commerce-regulation-what-merchants-need-to-know) · [CalMatters: AB 1018](https://calmatters.digitaldemocracy.org/bills/ca_202520260ab1018)

**Section 2.11 (consumer harms):** [Fierce Healthcare: delays and failures in the WISeR pilot](https://www.fiercehealthcare.com/regulatory/delays-tech-failures-abound-cms-wiser-ai-prior-auth-pilot-documents-show) · [Healthcare Dive: EFF sues CMS over WISeR](https://www.healthcaredive.com/news/electronic-frontier-foundation-sues-cms-medicare-ai-prior-authorization-wiser/816087/) · [AI Weekly: WISeR denial rate in Washington](https://aiweekly.co/node/15216) · [Axios: Senate investigations of Medicare Advantage AI](https://www.axios.com/pro/health-care-policy/2024/10/17/senate-investigations-medicare-advantage-ai) · [Senate HSGAC: letter to UnitedHealthcare](https://www.hsgac.senate.gov/wp-content/uploads/2025-10-09-Letter-from-Ranking-Member-Blumenthal-to-UHC.pdf) · [Washington Senate Democrats: prior authorization law](https://senatedemocrats.wa.gov/orwall/2026/03/25/orwall-bill-to-improve-prior-authorization-transparency-signed-into-law/) · [Freevacy: Sainsbury's suspends facial recognition](https://www.freevacy.com/news/the-guardian/sainsburys-suspends-facial-recognition-in-store-over-false-id/7639) · [Big Brother Watch: shoppers wrongly blacklisted](https://bigbrotherwatch.org.uk/press-coverage/daily-mail-innocent-shoppers-are-being-wrongly-blacklisted-by-shops-using-facial-recognition/) · [AI Incident Database: Facewatch](https://incidentdatabase.ai/entities/facewatch/) · [Yahoo News: DWP algorithm wrongly flags 200,000](https://uk.news.yahoo.com/dwp-200-000-people-wrongly-204458374.html) · [EDRi: CNAF scoring algorithm case](https://edri.org/?p=62705) · [La Quadrature du Net: CNAF litigation](https://www.laquadrature.net/?p=27164) · [ABC News: SafeRent settlement](https://abcnews.go.com/US/wireStory/class-action-lawsuit-ai-related-discrimination-reaches-final-116075869) · [DOJ: statement of interest on tenant-screening algorithms](https://www.justice.gov/opa/pr/justice-department-files-statement-interest-fair-housing-act-case-alleging-unlawful-algorithm) · [House Oversight: surveillance pricing investigation](https://oversight.house.gov/release/comer-continues-investigation-into-surveillance-pricing-practices-and-their-impact-on-american-consumers/) · [King & Spalding: California AG surveillance pricing investigation](https://www.kslaw.com/news-and-insights/california-attorney-general-launches-surveillance-pricing-investigation-targeting-grocers-hotels-and-retailers) · [Faegre Drinker: surveillance pricing litigation](https://www.faegredrinker.com/en/insights/publications/2026/5/surveillance-pricing-the-next-frontier-of-privacy-litigation) · [DLA Piper: FTC personalized pricing policy statement](https://www.dlapiper.com/insights/publications/2026/09/ftc-seeks-comment-on-proposed-enforcement-policy-statement-regarding-personalized-pricing) · [Governing: Maryland surveillance pricing ban](https://www.governing.com/policy/why-maryland-took-aim-at-surveillance-pricing-in-grocery-stores) · [PaymentsJournal: CFPB on fraud false positives](https://www.paymentsjournal.com/accounts-often-frozen-for-weeks-on-fraud-false-positives-says-cfpb/) · [AlgorithmWatch: can algorithms close my bank account](https://algorithmwatch.org/en/can-algorithms-close-my-bank-account/) · [Gherson: AI and de-banking](https://www.gherson.com/blog/ai-and-de-banking-could-automated-compliance-systems-close-your-bank-account/) · [WCAX: AI chatbots hurt users' finances (NerdWallet survey)](https://www.wcax.com/2026/09/28/ai-chatbots-hurt-some-users-finances-survey-finds/) · [Entrepreneur: consumers dislike AI customer service](https://www.entrepreneur.com/business-news/people-hate-ai-customer-service-chatbots) · [Glance: AI service bots survey](https://www.glance.cx/blog/customer-service-ai-bots-not-ready-for-prime-time-survey-suggests) · [StreetInsider: 75% frustrated by AI customer service](https://www.streetinsider.com/PRNewswire/75%25+of+consumers+left+frustrated+by+AI+customer+service/25750141.html) · [Axios: FTC subpoenas OpenAI and Anthropic](https://www.axios.com/2026/10/15/ftc-openai-anthropic-ai-safety-investigation)

**Section 3.9 (ISO/IEC and SOC):** [iTeh: EN 18286:2026 record](https://standards.iteh.ai/catalog/standards/cen/34ea911c-a980-4433-85ac-1344f93da01b/en-18286-2026) · [Lumenova: EN 18286 breakdown](https://www.lumenova.ai/blog/en-18286-eu-ai-act-standard/) · [TechJack: EN 18286 becomes first harmonised standard](https://techjacksolutions.com/ai-brief/en-18286-2026-eu-ai-act-first-harmonised-standard/) · [KLA Digital: JTC 21 standards tracker](https://kla.digital/blog/jtc-21-standards-tracker) · [Krog Rules: AI Standardisation Watch, September 2026](https://krogrules.com/news/edition-16-september-2026) · [FPF: voluntary AI governance standards in US regulation](https://fpf.org/blog/incentives-or-obligations-the-u-s-regulatory-approach-to-voluntary-ai-governance-standards/) · [Promise Legal: TRAIGA safe harbor](https://blog.promise.legal/traiga-safe-harbor-nist-ai-rmf-business-decision/) · [Summit Law: Washington AI Task Force report](https://www.summitlaw.com/law-blog/washingtons-ai-task-force-interim-report-explained-what-public-agencies-ai-vendors-and-ai-deployers-need-to-know) · [ISO: ISO/IEC 42006](https://www.iso.org/standard/42006) · [ISO: ISO/IEC 27090](https://www.iso.org/ru/standard/27090) · [ISO 27001 Security: ISO/IEC 27091](https://www.iso27001security.com/html/27091) · [AIGL: ISO/IEC AI standards reference](https://www.aigl.blog/iso-iec-ai-standards-comprehensive-reference-march-2026/) · [OIML: international standards on AI](https://www.oiml.org/en/structure/digitalization-task-group/sg-ai/standardization-on-ai) · [BSI: ANAB accreditation for ISO/IEC 42001](https://www.bsigroup.com/en-US/insights-and-media/media-center/press-releases/2026/march/bsi-secures-anab-accreditation-to-certify-isoiec-42001/) · [CASRAI: who can certify ISO 42001](https://casrai.org/guides/iso-42006-explained-who-can-certify-iso-42001) · [AICPA: proposed update of SOC 2 Trust Services Criteria](https://www.aicpa-cima.com/news/article/aicpa-proposes-update-of-soc-2-r-trust-services-criteria-to-enhance-the-relevance-usability-and-value-of-cpas-reports) · [Journal of Accountancy: AICPA proposes SOC 2 improvements](https://www.journalofaccountancy.com/news/2026/oct/aicpa-proposes-improvements-to-soc-2-trust-services-criteria.html) · [Learnsignal: proposed 2027 SOC 2 AI changes](https://www.learnsignal.com/blog/soc-2-trust-services-criteria-2027-proposal-ai-guide/) · [Schneider Downs: AICPA TQA 9561 on AI in SOC examinations](https://schneiderdowns.com/our-thoughts-on/ai-in-soc-examinations-what-the-aicpas-new-tqa-section-9561-means-for-service-organizations/) · [CSA: the SOC 2 AI gap](https://labs.cloudsecurityalliance.org/research/csa-research-note-soc2-ai-controls-gap-20260830-csa-styled/) · [Knowlee: ISO 42001 vs SOC 2 vs ISO 27001](https://www.knowlee.ai/blog/iso-42001-vs-soc2-vs-iso-27001-comparison)

**Section 3.10 (government and FedRAMP):** [GSA: FedRAMP prioritizes 20x authorizations for AI](https://www.gsa.gov/about-gsa/newsroom/news-releases/gsa-fedramp-prioritize-20x-authorizations-for-ai-08252025) · [FedRAMP: AI prioritization](https://www.fedramp.gov/ai/) · [Federal News Network: CIO Council asks FedRAMP to prioritize AI](https://federalnewsnetwork.com/artificial-intelligence/2025/08/cio-council-asks-fedramp-to-prioritize-ai-tools-for-approval/) · [The Register: GSA AI chatbot fast track](https://www.theregister.com/2025/08/26/gsa_ai_chatbot_speedrun/) · [Knox Systems: FedRAMP AI prioritization](https://knoxsystems.com/resources/fedramp-ai-prioritization) · [GSA: AI in action](https://www.gsa.gov/blog/2025/12/31/ai-in-action-how-gsa-is-transforming-federal-services) · [Knox Systems: FedRAMP news 2026](https://knoxsystems.com/resources/fedramp-news-2026) · [A-LIGN: FedRAMP 20x status](https://www.a-lign.com/articles/fedramp-20x-what-it-is-and-where-it-stands-today) · [Secureframe: FedRAMP 20x vs Rev5](https://secureframe.com/blog/fedramp-20x-vs-rev5) · [FedRAMP: Emerging Technology Prioritization Framework](https://www.fedramp.gov/2024-06-27-release-of-et-framework/) · [FedScoop: generative AI prioritized in FedRAMP](https://fedscoop.com/gsa-prioritizes-generative-ai-in-fedramp-authorizations-under-new-framework/) · [Wiley: revamped OMB AI guidance](https://wiley.law/alert-Trump-Administration-Revamps-Guidance-on-Federal-Use-and-Procurement-of-AI) · [FedScoop: high-impact AI deadline](https://fedscoop.com/federal-agencies-ai-inventory-risk-management-deadline/) · [Akin: OMB M-25-22](https://www.akingump.com/en/insights/ai-law-and-regulation-tracker/omb-issues-memorandum-on-driving-efficient-acquisition-of-artificial-intelligence-in-government) · [Crowell: Unbiased AI requirements for contractors](https://www.crowell.com/en/insights/client-alerts/in-bid-to-ban-woke-ai-white-house-imposes-transparency-requirements-on-contractors) · [Lawfare: OMB guidance on the AI executive order](https://www.lawfaremedia.org/article/omb-releases-guidance-on-trump-s--woke-ai--executive-order) · [Federal News Network: DoD unbiased AI procurement guidance](https://federalnewsnetwork.com/contracting/2026/10/dod-issues-guidance-for-procuring-unbiased-ai-systems/) · [Venable: GSA proposed AI clause](https://www.venable.com/insights/publications/2026/03/gsa-proposes-new-contract-clause-focused-on-the) · [Wiley: GSA delays AI terms](https://www.wiley.law/alert-GSA-Delays-Rollout-of-AI-Procurement-Terms-and-Conditions-Extends-Comment-Period-to-April-3) · [Washington Technology: (US)AI OneGov contract](https://www.washingtontechnology.com/contracts/2026/10/usai-becomes-gsas-first-direct-onegov-contract-small-business/416794/) · [GSA: buy AI](https://www.gsa.gov/buy-ai) · [Crowell: NIST draft AI cybersecurity framework](https://www.crowell.com/en/insights/client-alerts/nist-releases-draft-framework-for-ai-cybersecurity-solicits-public-comment-what-organizations-using-or-deploying-ai-should-know) · [Cloud Security Alliance: NIST and CSA AI control frameworks](https://cloudsecurityalliance.org/blog/2025/09/03/a-look-at-the-new-ai-control-frameworks-from-nist-and-csa) · [Federal News Network: DoD AI on classified networks](https://federalnewsnetwork.com/defense-news/2026/05/dod-strikes-deals-with-major-tech-firms-to-deploy-ai-on-classified-networks/) · [ExecutiveBiz: Ask Sage IL5 authorization](https://www.executivebiz.com/article/ask-sage-secures-il5-provisional-authorization-from-disa) · [Mayer Brown: CMMC final rule](https://www.mayerbrown.com/en/insights/publications/2025/09/department-of-defense-releases-long-anticipated-final-rule-implementing-the-cybersecurity-maturity-model-certification-program) · [Smithers: CMMC Level 2 2026 updates](https://www.smithers.com/resources/2026/august/cmmc-level-2-requirements-and-2026-updates) · [SC World: CJIS Security Policy 6.1](https://www.scworld.com/brief/fbi-cjis-security-policy-updates-to-version-6-1) · [Vidizmo: what CJIS requires when AI touches criminal justice data](https://vidizmo.ai/blog/what-cjis-actually-requires-when-ai-touches-criminal-justice-data) · [Precision Federal: IRS Publication 1075 for AI](https://precision-federal.pages.dev/insights/irs-publication-1075-for-federal-ai) · [TaxProf Blog: IRS generative AI policy](https://taxprofblog.aals.org/2026/02/17/irs-adopts-generative-artificial-intelligence-policy/) · [GovRAMP: AI Security Task Force](https://govramp.org/?p=15582) · [Georgia Technology Authority: GovRAMP adoption](https://gta.georgia.gov/node/20221) · [GovRAMP: State of Arizona](https://programs.govramp.org/?p=2590) · [GOV.UK: ATRS mandatory scope and exemptions](https://www.gov.uk/government/publications/algorithmic-transparency-recording-standard-mandatory-scope-and-exemptions-policy) · [GOV.UK: AI Playbook for the UK Government](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government) · [European Commission: updated EU AI model contractual clauses](https://public-buyers-community.ec.europa.eu/communities/procurement-ai/news/updated-eu-ai-model-contractual-clauses-now-available)

**Penalties and worldwide laws (v1.4):** [FindLaw: Texas Bus. & Com. Code 552.105 (TRAIGA penalties)](https://codes.findlaw.com/tx/business-and-commerce-code/bus-com-sect-552-105/) · [CPPA: 2025 CCPA fine increases](https://cppa.ca.gov/announcements/2024/20241217.html) · [Orrick: CPPA increases fines for 2025](https://infobytes.orrick.com/2024-12-20/california-privacy-protection-agency-increases-fines-and-penalties-for-2025/) · [Mercer: HHS 2026 HIPAA penalty adjustments](https://www.mercer.com/en-us/insights/law-and-policy/hhs-adjusts-2026-hipaa-certain-aca-and-msp-monetary-penalties/) · [HIPAA Journal: HIPAA violation fines](https://www.hipaajournal.com/hipaa-violation-fines/) · [Federal Register: FTC 2026 civil penalty notice](https://public-inspection.federalregister.gov/2026-18853.pdf) · [FTC: 2025 inflation-adjusted civil penalties](https://search.ftc.gov/news-events/news/press-releases/2025/02/ftc-publishes-inflation-adjusted-civil-penalty-amounts-2025) · [National Law Review: SB 243 private lawsuits](https://natlawreview.com/article/when-ai-feels-human-californias-sb-243-opens-door-private-lawsuits) · [Bass Berry: California companion chatbot bill](https://bassberry.com/news/california-companion-chatbot-bill/) · [Jenner: California AI Transparency Act](https://www.jenner.com/en/news-insights/publications/californias-ai-transparency-act) · [Willkie: Utah and Colorado AI laws](https://willkie.com/publications/2024/07/utah-and-colorado-have-new-artificial-intelligence-laws) · [National Law Review: Utah AI Policy Act](https://natlawreview.com/article/utahs-ai-policy-act-now-effective) · [Baker Hostetler: Washington companion chatbot law](https://www.bakerlaw.com/insights/washingtons-new-ai-companion-chatbot-law-childrens-safety-private-right-of-action/) · [Freshfields: Online Safety Act vs DSA](https://freshfields.us/insights/campaigns/technology-quotient/tech-and-platform-regulation/data-and-cyber2/how-does-the-uk-online-safety-act-compare-to-the-eu-digital-services-act) · [NIS2 Directive: fines](https://nis2directive.eu/nis2-fines/) · [Osler: Quebec Law 25 enforcement](https://www.osler.com/en/insights/updates/law-25-a-new-enforcement-scheme-for-protection-of-personal-information-in-the-private-sector-in-que/) · [Corrs: Australian privacy penalties](https://corrs.com.au/insights/australia-to-introduce-world-leading-privacy-breach-penalties) · [King Stubb & Kasiva: DPDP penalties](https://ksandk.com/data-protection-and-data-privacy/penalties-adjudication-under-indias-dpdp-act-2023/) · [A&O Shearman: Saudi PDPL enforcement](https://www.aoshearman.com/en/insights/enforcement-of-the-saudi-personal-data-protection-law) · [CMS: Saudi Arabia data protection](https://cms.law/en/int/expert-guides/cms-expert-guide-to-data-protection-and-cyber-security-laws/saudi-arabia) · [IAPP: South Korea's AI Act](https://iapp.org/news/a/south-korea-s-ai-act-designed-to-be-all-roar-no-bite) · [Trade.gov: South Korea AI Basic Act](https://www.trade.gov/market-intelligence/south-korea-ai-basic-act) · [A&O Shearman: China Cybersecurity Law amendments](https://www.aoshearman.com/en/insights/ao-shearman-on-data/key-amendments-to-chinas-cybersecurity-law) · [China Briefing: Cybersecurity Law amendment](https://www.china-briefing.com/news/china-cybersecurity-law-amendment/) · [Digital Policy Alert: China anthropomorphic AI measures](https://digitalpolicyalert.org/change/19076) · [MLex: China companionship AI rules](https://www.mlex.com/mlex/amp/articles/2464373) · [Allen & Gledhill: Vietnam AI Law](https://www.allenandgledhill.com/sg/publication/articles/32667/s-new-law-on-artificial-intelligence-risk-based-regulatory-framework-in-force-1-march-2026) · [MLex: Vietnam AI law penalties](https://www.mlex.com/articles/2420798/vietnam-passes-first-ai-law-removes-revenue-based-penalties) · [Baker McKenzie: Taiwan AI Basic Act](https://www.bakermckenzie.com/en/insight/publications/2026/01/taiwan-ai-basic-act) · [Hogan Lovells: India AI labelling rules](https://www.hlc.com/en/publications/india-introduces-mandatory-labelling-for-ai-and-3hour-takedown-for-illegal-content) · [White & Case: Australia National AI Plan](https://www.whitecase.com/insight-alert/australias-national-ai-plan-big-ambitions-light-details) · [eSafety: codes on AI chatbots](https://esafety.gov.au/newsroom/media-releases/new-industry-codes-seek-to-take-on-ai-chatbots-that-encourage-suicide-and-engage-in-sexually-explicit-conversations-with-aussie-kids) · [eSafety: AI companions report](https://esafety.gov.au/newsroom/media-releases/esafety-report-shows-ai-companions-are-putting-children-at-risk) · [BLG: AI in Canada in 2026](https://www.blg.com/insights/2026/03/a-turning-point-for-ai-in-canada-in-2026) · [Lexpert: Canada after AIDA](https://www.lexpert.ca/news/technology-law/ai-laws-update-what-now-after-artificial-intelligence-and-data-act/394712) · [CASRAI: Brazil PL 2338 status](https://casrai.org/guides/brazil-ai-bill-pl-2338-status) · [Barbieri: Brazil AI Act comparison](https://www.barbieriadvogados.com/brazil-ai-act/) · [FPF: AI regulation in Latin America](https://fpf.org/blog/ai-regulation-in-latin-america-overview-and-emerging-trends-in-key-proposals/) · [CASRAI: Latin America AI law status](https://casrai.org/compare/latin-america-ai-law-status-compared) · [Bird & Bird: GCC AI regulation](https://www.twobirds.com/en/insights/2025/united-arab-emirates/gcc-navigating-ai-regulations---the-current-landscape) · [Reed Smith: GCC AI regulation snapshot](https://viewpoints.reedsmith.com/post/102iyjm/gcc-ai-regulation-snapshot) · [Africa Briefing: Nigeria AI rules](https://africabriefing.com/nigeria-set-to-pass-sweeping-ai-rules/) · [Algeria Tech: Kenya AI Bill 2026](https://algeriatech.news/kenya-ai-bill-2026-africa-first-statutory-framework/) · [Rajah & Tann: Malaysia Q1 2026](https://www.rajahtannasia.com/viewpoints/regional-round-up-malaysia-q1-2026/) · [Tilleke & Gibbins: AI regulation in Singapore and Thailand](https://www.tilleke.com/insights/ai-regulation-and-governance-in-singapore-and-thailand) · [Access Partnership: Philippines ASEAN AI framework](https://accesspartnership.com/access-alert-philippines-to-propose-asean-legal-framework-for-ai-in-2026) · [Swiss Federal Chancellery: regulation](https://www.bk.admin.ch/en/regulation) · [CMS: AI regulation in Norway](https://cms.law/en/int/expert-guides/ai-regulation-scanner/norway) · [Astana Times: Kazakhstan AI law](https://astanatimes.com/2025/11/kazakhstan-adopts-central-asias-first-ai-law/) · [Meduza: Russia's AI law](https://meduza.io/en/news/2026/07/08/russia-s-state-duma-passes-law-regulating-ai-requiring-respect-for-traditional-russian-values) · [Digital Policy Alert: Russia AI bill adopted](https://digitalpolicyalert.org/event/41944-bill-on-supporting-the-development-of-artificial-intelligence-technologies-bill-no1271570-8-including-data-localisation-requirement-was-adopted) · [Bell Gully: AI regulation global comparison](https://www.bellgully.com/insights/ai-regulation-a-global-comparison/) · [IAPP: global AI law and policy tracker](https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt34a8e3844fb44942/global_ai_law_policy_tracker.pdf)

**Section 3.11 (IRS rules and federal and state data regulations):** [IRS: Publication 1075 (Rev. 11-2021)](https://www.irs.gov/pub/irs-pdf/p1075.pdf) · [IRS: Publication 1075 early-release draft (Rev. 12-2026)](https://www.irs.gov/pub/irs-dft/p1075--dft.pdf) · [IRS: Safeguards cloud computing office hours](https://www.irs.gov/pub/irs-pgld/cloud_computing_office_hours_presentation.pdf) · [NHI Mgmt Group: Publication 1075 guide](https://nhimg.org/irs-publication-1075-guide) · [Precision Federal: Publication 1075 for AI](https://precisionfederal.com/insights/irs-publication-1075-for-federal-ai) · [Microsoft: Azure IRS 1075 offering](https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-irs-1075) · [NCDOR: IRC 7431, 7213 and 7213A penalty provisions](https://ncdor.gov/documents/files/irc-7431-7213-7213a-penalty-provisions/open) · [GovInfo: 26 U.S.C. § 7431](https://www.govinfo.gov/content/pkg/USCODE-2023-title26/html/USCODE-2023-title26-subtitleF-chap76-subchapB-sec7431.htm) · [CPA Practice Advisor: before client tax data touches AI](https://cpapracticeadvisor.com/2026/10/12/what-to-settle-before-client-tax-data-touches-ai/191491) · [MY-CPE: AI compliance, IRC 7216 and FTC](https://my-cpe.com/blogs/ai-compliance-for-cpa-accounting-firms-irc-7216-aicpa-ftc) · [IRS OPR: Alert 2026-19](https://www.irs.gov/pub/opr-taxpros/issue-number-2026-19-introductory-guidelines-for-responsible-ai-use-in-federal-tax-practice.pdf) · [The Tax Adviser: IRS outlines AI risks and Circular 230 duties](https://www.thetaxadviser.com/news/2026/jun/irs-outlines-ai-risks-circular-230-duties-for-tax-practitioners/) · [Thomson Reuters: OPR AI guidelines](https://tax.thomsonreuters.com/news/irs-office-of-professional-responsibility-issues-guidelines-on-ai-use-in-tax-practice/) · [Kilpatrick: using AI in tax practice](https://ktslaw.com/blog/kilpatricks-state-and-local-tax-blog/2026/9/using-ai-in-tax-practice-what-practitioners-need-to-know-before-filing-season) · [Foster Garvey: OPR on AI](https://www.foster.com/newsroom/blog/larrys-tax-law/the-irs-office-of-professional-responsibility-weighs-in-on-the-proper-use-of-artificial-intelligence/) · [IRS: IRM 10.24.1 AI governance](https://www.irs.gov/node/156046) · [IRS: interim AI governance guidance](https://www.irs.gov/pub/foia/ig/spder/interim-guidance-raas-10-0524-0001-artificial-intelligence-governance-and-principles-redacted.pdf) · [GAO-26-107522: IRS AI](https://www.gao.gov/products/gao-26-107522) · [IRS: contractor security information (Publication 4812)](https://www.irs.gov/about-irs/procurement/contractor-security-information) · [Rightworks: Publication 4557](https://www.rightworks.com/blog/irs-pub-4557/) · [Akin: FTC Safeguards Rule breach reporting](https://akingump.com/en/insights/blogs/ag-data-dive/ftc-requires-non-banking-financial-institutions-to-report-data-security-breaches) · [SSA: data exchange security information](https://ssa.gov/dataexchange/security.html) · [SSA POMS DX 00101](https://secure.ssa.gov/POMS.nsf/lnx/2400101020) · [CompliancePoint: ARC-AMPE](https://www.compliancepoint.com/regulations/arc-ampe/) · [Coalfire: CMS publishes ARC-AMPE](https://coalfire.com/the-coalfire-blog/cms-publishes-arc-ampe) · [HHS: 42 CFR Part 2 final rule fact sheet](https://www.hhs.gov/hipaa/for-professionals/regulatory-initiatives/fact-sheet-42-cfr-part-2-final-rule/) · [Mintz: Part 2 required updates](https://www.mintz.com/insights-center/viewpoints/2146/2026-03-02-ensuring-compliance-part-2-final-rule-required-updates) · [Mayer Brown: FAR CUI proposal and CMMC pause](https://www.mayerbrown.com/en/insights/publications/2026/07/far-council-proposes-revised-cui-safeguarding-and-incident-reporting-framework-while-dow-pauses-cmmc-implementation) · [Inside Government Contracts: class deviation revision 3](https://www.insidegovernmentcontracts.com/2026/09/dow-issues-revision-3-of-its-class-deviation-on-security-requirements/) · [Hunton: FAR CUI proposed rule](https://www.hunton.com/government-contracts-intelligence-briefing/far-council-releases-updated-cui-proposed-rule-as-part-of-the-revolutionary-far-overhaul) · [Hogan Lovells: NYDFS final Part 500 requirements](https://www.hoganlovells.com/en/publications/nydfs-final-set-of-cybersecurity-requirements-under-amended-part-500-take-effect-november-1-2025) · [Ropes & Gray: NYDFS 2026](https://ropesgray.com/en/insights/alerts/2026/01/nydfs-regulated-entities-face-stronger-cybersecurity-regulations) · [Bright Defense: NYDFS enforcement](https://www.brightdefense.com/news/new-nydfs-rules-tighten-compliance-for-financial-firms/) · [Hunton: CPPA finalizes ADMT, risk assessment and audit rules](https://www.hunton.com/privacy-and-information-security-law/cppa-finalizes-ccpa-regulations-on-automated-decision-making-technology-risk-assessments-and-cybersecurity-audits) · [Thompson Coburn: 2026 CCPA regulations](https://www.thompsoncoburn.com/insights/californias-2026-ccpa-regulations-summary-and-preparation-guide/) · [Mayer Brown: NAIC Spring 2026 meeting](https://www.mayerbrown.com/en/insights/publications/2026/04/us-naic-spring-2026-national-meeting-highlights-innovation-cybersecurity-and-technology-h-committee-update) · [Openlayer: NAIC AI bulletin](https://www.openlayer.com/blog/post/naic-model-bulletin-ai-governance) · [Texas Legislature: HB 3512 analysis](https://capitol.texas.gov/tlodocs/89R/analysis/html/HB03512H.htm) · [LegiScan: California SB 896 enrolled](https://legiscan.com/CA/text/SB896/id/3019415/California-2023-SB896-Enrolled.html)

**Part 2 (cases):** [Torkin Manes: Moffatt v. Air Canada](https://www.torkin.com/insights/publication/bc-tribunal-confirms-companies-remain-liable-for-ai-chatbot-created-information) · [ASIS: German court holds Google liable](https://www.asisonline.org/security-management-magazine/latest-news/today-in-security/2026/june/incorrect-AI-liability/) · [Haynes Boone: defamation in the AI age](https://www.haynesboone.com/news/articles/defamation-in-the-ai-age) · [Benesch: first wave of AI defamation cases](https://www.beneschlaw.com/insight/when-chatgpt-lies-what-the-first-wave-of-ai-defamation-cases-means-for-plaintiffs/) · [CourtDocket: Garcia v. Character.AI](https://courtdocket.org/garcia-v-character-ai-lawsuit-first-amendment-ruling-and-settlement/) · [Goodwin: Ambriz v. Google and CIPA](https://www.goodwinlaw.com/en/insights/publications/2025/02/alerts-practices-dpc-ftec-ai-voice-products-subject-to-california-invasion-of-privacy-claims) · [Maine Law: Ambriz, Popa and standing](https://sjipl.mainelaw.maine.edu/2025/12/18/the-collapse-of-capability-theory-ambriz-popa-and-the-future-of-article-iii-standing-in-ai-privacy-cases/) · [ZwillGen: Otter.ai litigation](https://www.zwillgen.com/litigation/first-major-ai-meeting-assistant-lawsuit-practical-lessons-otter-ai-litigation/) · [Keker: Dialpad CIPA ruling](https://www.keker.com/news/news-items/s-f-court-rejects-claims-that-dialpad-s-ai-enhancements-violate-wiretapping-law) · [Tech Policy Press: Meta Texas settlement](https://techpolicy.press/meta-settles-texas-biometric-data-lawsuit) · [Fox 7: Google Texas settlement](https://www.fox7austin.com/news/google-texas-lawsuit-settlement-may-2025) · [ICO: Upper Tribunal judgment on Clearview](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2025/10/uk-upper-tribunal-hands-down-judgment-on-clearview-ai-inc) · [GOV.UK: ICO v. Clearview [2025] UKUT 319](https://www.gov.uk/administrative-appeals-tribunal-decisions/the-information-commissioners-office-v-clearview-ai-inc-privacy-international-intervening-2025-ukut-319-aac) · [SCL: CJEU on explanations of automated credit decisions](https://www.scl.org/cjeu-rules-that-data-subjects-are-entitled-to-explanations-of-automated-credit-decisions/) · [CURIA press release C-203/22](https://curia.europa.eu/jcms/upload/docs/application/pdf/2025-02/cp250022en.pdf) · [EDPB: Replika fine](https://www.edpb.europa.eu/news/ai-the-italian-supervisory-authority-fines-company-behind-chatbot-replika_ga) · [Digital Policy Alert: OpenAI fine annulled](https://digitalpolicyalert.org/event/38611-italian-court-cancelled-eur-15-million-italian-data-protection-authority-fine-against-openai) · [WBUR: Kramer fine](https://www.wbur.org/news/2024/09/27/steve-kramer-biden-robocalls-fines) · [Infosecurity: Lingo Telecom](https://www.infosecurity-magazine.com/news/lingo-telecom-fine-1m-fake-joe/) · [TCPAWorld: Aidvantage settlement](https://tcpaworld.com/2026/08/05/tcpa-advantage-aiadvatage-to-settle-tcpa-class-action-for-3000000-00/) · [Norton Rose Fulbright: EEOC iTutorGroup settlement](https://nortonrosefulbright.com/en/knowledge/publications/2ec12415/us-eeocs-first-settlement-in-ai-hiring-discrimination) · [Akin: Mobley v. Workday](https://www.akingump.com/en/insights/ai-law-and-regulation-tracker/court-allows-discrimination-claims-against-ai-hiring-tool-to-proceed-or-mobley-v-workday-inc) · [Epstein Becker Green: Harper v. Sirius XM](https://www.ebglaw.com/workforce-bulletin/artificial-intelligence-bias-harper-v-sirius-xm-challenges-algorithmic-discrimination-in-hiring) · [HR Dive: Sirius XM dismissal](https://www.hrdive.com/news/sirius-xm-beats-allegations-of-ai-fueled-racial-bias/832115/) · [HR Dive: ACLU complaint against Intuit and HireVue](https://www.hrdive.com/news/ai-intuit-hirevue-deaf-indigenous-employee-discrimination-aclu/743273/) · [AFS Law: discovery against UHC](https://www.afslaw.com/perspectives/alerts/federal-court-orders-broad-discovery-against-uhc-ai-coverage-denial-lawsuit) · [Radiology Business: Cigna lawsuit](https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/cigna-violated-law-denying-claims-imaging-and-other-services-bulk-lawsuit-alleges) · [CASRAI: AI-washing enforcement record](https://casrai.org/guides/ai-washing-enforcement-sec-ftc-record) · [O'Melveny: SEC AI-washing charges](https://omm.com/insights/alerts-publications/sec-targets-ai-washing-in-charges-against-two-investment-advisers) · [PYMNTS: FTC and Air AI](https://www.pymnts.com/legal/2026/ftc-seeks-to-ban-air-ai-from-marketing-business-opportunities/) · [JD Supra: Texas generative AI settlement](https://production.jdsupra.com/legalnews/the-eyes-of-texas-are-on-ai-generative-6527212) · [Jurist: Anthropic settlement approved](https://www.jurist.org/news/2026/07/judge-approves-record-1-5-billion-settlement-involving-anthropic/) · [Norton Rose Fulbright: AI copyright cases in 2026](https://www.nortonrosefulbright.com/en/knowledge/publications/ce8eaa5f/ai-in-litigation-series-an-update-on-ai-copyright-cases-in-2026) · [AI Lawsuit Tracker: rulings](https://ailawsuittracker.com/rulings/) · [UK Judiciary: Getty Images v. Stability AI](https://www.judiciary.uk/judgments/getty-images-and-others-v-stability-ai/) · [Cleary Gottlieb: Getty v. Stability](https://www.clearygottlieb.com/news-and-insights/publication-listing/uk-high-court-issues-landmark-ruling-in-getty-images-v-stability-ai) · [SCOTUSblog: Thaler v. Perlmutter](https://www.scotusblog.com/cases/thaler-v-perlmutter/) · [Loeb & Loeb: Lehrman v. Lovo](https://www.loeb.com/en/insights/publications/2025/07/lehrman-v-lovo-inc) · [Linklaters: Ayinde judgment](https://www.linklaters.com/insights/blogs/digilinks/2025/june/ai---check-your-cites---ayinde-judgement) · [OECD AI incidents: Zhang v. Chen](https://oecd.ai/en/incidents/2024-02-26-9c91) · [Law Times: CAD 31,150 costs](https://www.lawtimesnews.com/resources/professional-regulation/lawyer-who-used-ai-fabricated-citations-hit-with-31150-in-costs-to-lso/393407) · [CTV: AI citations in Canadian courts](https://www.ctvnews.ca/sci-tech/article/ai-fabricated-legal-citations-in-canadian-courts-tip-of-the-iceberg-expert-warns/) · [UC Strategies: 2026 AI hallucination fines](https://ucstrategies.com/news/courts-fined-lawyers-145k-for-ai-hallucinations-in-q1-alone/)

**Part 3 (standards):** [PCI SSC: integrating AI in PCI assessments](https://blog.pcisecuritystandards.org/new-guidance-integrating-artificial-intelligence-into-pci-assessments) · [PCI SSC: guidance on securing AI in payment environments](https://www.pcisecuritystandards.org/about_us/press_releases/pci-ssc-publishes-additional-guidance-on-securing-ai-in-payment-environments/) · [Help Net Security: PCI SSC human approval for AI agent actions](https://helpnetsecurity.com/2026/10/09/pci-ssc-payment-environments-ai-security-guidance) · [Barr Advisory: is AI in scope for PCI DSS](https://www.barradvisory.com/resource/ai-scope-pci-dss/) · [Call Centre Helper: telephone payments guidance](https://www.callcentrehelper.com/new-guidance-secure-telephone-payments-140960.htm) · [MoFo: HHS withdraws tracking appeal](https://www.mofo.com/resources/insights/240930-a-mofo-privacy-minute-q-a-hhs-withdraws) · [Crowell: Section 1557 decision-support tools](https://www.crowell.com/en/insights/client-alerts/hhs-applies-discrimination-prohibitions-to-use-of-automated-and-non-automated-patient-care-decision-support-tools) · [Drummond Group: HTI-1 final rule](https://www.drummondgroup.com/blog/analyzing-hti-1-final-rule/) · [Norton Rose Fulbright: CMS on AI in MA coverage](https://www.nortonrosefulbright.com/en/knowledge/publications/644bd9a2/cms-clarifies-medicare-advantage-organizations-use-of-ai-and-algorithms-in-coverage-decisions) · [Arnold & Porter: FDA CDS guidance 2026](https://www.arnoldporter.com/en/perspectives/advisories/2026/01/fda-cuts-red-tape-on-clinical-decision-support-software) · [HITRUST: AI Security Assessment](https://hitrustalliance.net/blog/building-trust-in-ai-introducing-the-hitrust-ai-security-assessment-and-certification) · [Sullivan & Cromwell: revised model risk guidance](https://www.sullcrom.com/insights/memo/2026/April/OCC-Fed-FDIC-Issue-Revised-Guidance-Model-Risk-Management) · [CFPB: Chatbots in consumer finance](https://consumerfinance.gov/data-research/research-reports/chatbots-in-consumer-finance/chatbots-in-consumer-finance) · [Paul Hastings: SEC withdraws 14 proposals](https://www.paulhastings.com/insights/client-alerts/sec-withdraws-14-pending-rule-proposals) · [Quarles: NAIC bulletin adoption](https://quarles.com/newsroom/publications/nearly-half-of-states-have-now-adopted-naic-model-bulletin-on-insurers-use-of-ai) · [GOV.UK: AI Cyber Security Code of Practice](https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice) · [Hunton: UK AI cyber security code](https://hunton.com/privacy-and-information-security-law/uk-publishes-ai-cyber-security-code-of-practice-and-implementation-guide) · [Knowlee: ISO 27001, 42001, SOC 2 and AI Act crosswalk](https://www.knowlee.ai/blog/ai-security-compliance-framework-2026) · [Baker McKenzie: Singapore agentic AI framework](https://www.bakermckenzie.com/en/insight/publications/2026/01/singapore-governance-framework-for-agentic-ai-launched) · [Twilio: 10DLC privacy policy requirement](https://static1.twilio.com/en-us/changelog/a2p-10dlc-campaign-registration-will-require-privacy-policy-and-) · [Content Authenticity Initiative: state of content authenticity 2026](https://contentauthenticity.org/blog/the-state-of-content-authenticity-in-2026)
