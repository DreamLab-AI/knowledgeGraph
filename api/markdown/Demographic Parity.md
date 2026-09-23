
Demographic parity is a group-fairness criterion requiring that a model's positive prediction rate be equal across protected groups, independent of the true label. Also called statistical parity, it is satisfied when the probability of a favourable decision does not depend on membership of a protected attribute such as gender or ethnicity. It is one of several formal, often mutually incompatible, definitions of algorithmic fairness.

- ### Overview
	- Demographic parity targets equality of outcomes: every group should receive positive decisions at the same rate. This appeals directly to anti-discrimination policy and maps onto the four-fifths rule used to flag disparate impact.
	- Crucially, demographic parity ignores the ground-truth label. If the underlying base rates of the positive class genuinely differ between groups, enforcing parity can reduce accuracy and may conflict with other fairness criteria such as equalised odds. Impossibility results show these criteria generally cannot all hold at once except in degenerate cases.
	- Practitioners enforce it through pre-processing (re-weighting or re-sampling data), in-processing (fairness-constrained training objectives), or post-processing (group-specific decision thresholds).
- ### Key aspects
	- Requires equal positive prediction rates across protected groups.
	- Label-independent: does not condition on the true outcome.
	- Operationalises the legal concept of [[Disparate Impact]] and the four-fifths rule.
	- Often trades off against [[Accuracy]] and against label-conditional fairness criteria.
	- Enforceable via pre-, in-, or post-processing interventions.
- ### Applications
	- Auditing hiring, lending, and admissions models for unequal selection rates.
	- Setting group-aware thresholds to equalise approval rates in [[Classification]] pipelines.
	- Regulatory compliance reporting where outcome equality is mandated.
	- Comparative fairness dashboards that surface [[Bias]] across demographic segments.
- ### Provenance

