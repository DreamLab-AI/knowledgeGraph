Disparate Impact is a legal doctrine and AI fairness concept denoting the condition where a facially neutral policy, practice, or algorithmic decision system produces outcomes that disproportionately disadvantage a legally protected group relative to a comparator group, regardless of discriminatory intent. Measured via the four-fifths rule or statistical significance tests, it is legally actionable in employment (US EEOC guidelines), lending, housing, and insurance, and is the analytical basis for algorithmic bias audits under the EU AI Act and GDPR. Remediation requires either demonstrating business necessity or adopting less discriminatory alternatives.

### Semantic Classification

### Content

### Definition

Disparate Impact is the condition in which a statistically neutral decision rule or algorithmic system produces outcome distributions that differ significantly across legally protected demographic groups (race, gender, age, disability, religion, national origin). Unlike disparate treatment (intentional direct discrimination), disparate impact is outcome-based: the policy or algorithm need not mention protected characteristics to be unlawful. The analytical standard originates in US employment law via the EEOC's 1978 Uniform Guidelines and has since been codified or adopted in UK (Equality Act 2010), EU anti-discrimination directives, and sector-specific regulations for financial services and housing.

### Relationships

Detecting disparate impact requires Fairness Metrics (selection rate ratios, equalised odds differentials, demographic parity gaps) and Bias Detection Methods capable of disaggregating model outputs by protected group. It enables — and indeed mandates in regulated sectors — the use of Fairness Auditing Tools and Algorithmic Accountability mechanisms. It is closely related to Algorithmic Bias (the technical cause), Harmful Bias (the broader harm concept), and Bias Mitigation Techniques (the remediation toolkit). Intersectional Fairness addresses cases where multiple overlapping protected characteristics interact to produce amplified impacts. Regulatory Compliance frameworks increasingly reference disparate impact as the operative standard for AI system approval.

### Content

The four-fifths rule (80% rule) provides the operational threshold: disparate impact is indicated when the selection rate for a protected group is less than 80% of the selection rate for the highest-performing group. For example, if 50% of white applicants and 35% of Black applicants are approved for loans, the ratio is 0.70 (below 0.80), indicating potential disparate impact. Statistical significance tests (chi-square, Fisher's exact test, standardised mean difference) supplement the four-fifths rule for small sample sizes.

In AI systems, disparate impact analysis requires disaggregated performance evaluation across all relevant demographic intersections, documentation of less discriminatory alternative model formulations if disparate impact is found, and justification of business necessity when alternatives with lower impact are not adopted. The EU AI Act's conformity assessment requirements for high-risk AI systems in employment, credit, and essential services explicitly incorporate bias testing obligations that operationalise the disparate impact doctrine. Fairness-aware machine learning techniques — including pre-processing (resampling), in-processing (fairness constraints during training), and post-processing (calibration) — provide the mitigation toolkit, though all involve trade-offs with overall predictive accuracy captured by the Fairness Accuracy Tradeoffs concept.

### Provenance

