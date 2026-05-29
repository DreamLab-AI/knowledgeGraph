- ### Definition
  - Disparate Impact is a legal doctrine and form of indirect discrimination that occurs when facially neutral policies, practices, or algorithmic systems disproportionately affect protected groups, regardless of intent to discriminate. Originating from US employment law (EEOC Uniform Guidelines 1978) and extended to UK and EU anti-discrimination frameworks, disparate impact is measured by comparing selection rates, approval rates, or outcome rates between protected and unprotected groups. The "80 percent rule" (four-fifths rule) establishes that disparate impact exists when the selection rate for a protected group is less than 80 percent of the rate for the highest-performing group, calculated as a disparate impact ratio. Unlike disparate treatment (intentional direct discrimination), disparate impact focuses on discriminatory outcomes rather than discriminatory intent. Legal defenses include business necessity (US) - demonstrating the practice is job-related and consistent with business necessity, and proportionate means (UK/EU) - showing the practice is a proportionate means of achieving a legitimate aim. In AI systems, disparate impact analysis requires statistical testing of algorithmic decisions across demographic groups, documentation of less discriminatory alternatives if available, and compliance with sector-specific regulations in employment, lending, insurance, and housing domains.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DisparateImpact
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - requires:: [[Fairness Metrics]], [[Bias Detection Methods]]
  - enables:: [[Fairness Auditing Tools]], [[Algorithmic Accountability]]
  - relatedTo:: [[Algorithmic Bias]], [[Harmful Bias]], [[Bias Mitigation Techniques]], [[Diversity, Non-Discrimination, and Fairness]], [[Intersectional Fairness]], [[Regulatory Compliance]]
  - contrastsWith:: [[Group vs Individual Fairness]], [[Fairness Accuracy Tradeoffs]]

- ### Content

  ### Definition

  Disparate Impact is the condition in which a statistically neutral decision rule or algorithmic system produces outcome distributions that differ significantly across legally protected demographic groups (race, gender, age, disability, religion, national origin). Unlike disparate treatment (intentional direct discrimination), disparate impact is outcome-based: the policy or algorithm need not mention protected characteristics to be unlawful. The analytical standard originates in US employment law via the EEOC's 1978 Uniform Guidelines and has since been codified or adopted in UK (Equality Act 2010), EU anti-discrimination directives, and sector-specific regulations for financial services and housing.

  ### Relationships

  Detecting disparate impact requires Fairness Metrics (selection rate ratios, equalised odds differentials, demographic parity gaps) and Bias Detection Methods capable of disaggregating model outputs by protected group. It enables — and indeed mandates in regulated sectors — the use of Fairness Auditing Tools and Algorithmic Accountability mechanisms. It is closely related to Algorithmic Bias (the technical cause), Harmful Bias (the broader harm concept), and Bias Mitigation Techniques (the remediation toolkit). Intersectional Fairness addresses cases where multiple overlapping protected characteristics interact to produce amplified impacts. Regulatory Compliance frameworks increasingly reference disparate impact as the operative standard for AI system approval.

  ### Content

  The four-fifths rule (80% rule) provides the operational threshold: disparate impact is indicated when the selection rate for a protected group is less than 80% of the selection rate for the highest-performing group. For example, if 50% of white applicants and 35% of Black applicants are approved for loans, the ratio is 0.70 (below 0.80), indicating potential disparate impact. Statistical significance tests (chi-square, Fisher's exact test, standardised mean difference) supplement the four-fifths rule for small sample sizes.

  In AI systems, disparate impact analysis requires disaggregated performance evaluation across all relevant demographic intersections, documentation of less discriminatory alternative model formulations if disparate impact is found, and justification of business necessity when alternatives with lower impact are not adopted. The EU AI Act's conformity assessment requirements for high-risk AI systems in employment, credit, and essential services explicitly incorporate bias testing obligations that operationalise the disparate impact doctrine. Fairness-aware machine learning techniques — including pre-processing (resampling), in-processing (fairness constraints during training), and post-processing (calibration) — provide the mitigation toolkit, though all involve trade-offs with overall predictive accuracy captured by the Fairness Accuracy Tradeoffs concept.

- ### Provenance
  - sources:: [[US EEOC Uniform Guidelines]], [[UK Equality Act 2010]], [[EU Anti-Discrimination Directives]]
  - migration-date:: 2026-04-26T00:00:00Z