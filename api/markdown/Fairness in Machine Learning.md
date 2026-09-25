Fairness in machine learning is the study and practice of ensuring that learned models do not produce systematically disadvantageous outcomes for individuals or groups defined by protected attributes such as race, gender, or age. It encompasses formal fairness criteria — including demographic parity, equalised odds, and individual fairness — and the techniques used to measure and mitigate disparate impact before, during, or after training. The field is central to responsible and ethical AI, balancing accuracy with equitable treatment.

- Fairness in machine learning seeks models whose outcomes do not systematically disadvantage protected groups. It is a pillar of [[Responsible AI]] and [[Ethical AI]], closely tied to [[Algorithmic Fairness]], [[Bias]] mitigation, and [[Explainable AI]].
- It defines formal criteria for equitable treatment and the methods to measure and correct disparities.

### Overview

- Models can inherit and amplify historical inequities present in [[Training Data]], producing disparate impact even without explicit use of protected attributes.
- Fairness criteria formalise different, sometimes mutually incompatible, notions of equity, so practitioners must choose criteria appropriate to context.
- Mitigation spans pre-processing the data, constraining the learning objective, and post-processing predictions.

### Key aspects

- Group fairness: parity of outcomes or error rates across demographic groups (e.g. demographic parity, equalised odds).
- Individual fairness: similar individuals receive similar predictions.
- Trade-offs: improving one fairness metric or accuracy can degrade another.
- Context dependence: the appropriate definition depends on the decision and its stakes.

### Mechanisms

- Pre-processing: reweighting or transforming data to reduce encoded bias.
- In-processing: adding fairness constraints or regularisers to the training objective.
- Post-processing: adjusting decision thresholds per group to equalise selected metrics.
- Auditing: measuring disparate impact via [[Audit]] and [[Model Interpretability]] tooling.

### Applications

- Lending, hiring, and admissions decisions subject to anti-discrimination law.
- Healthcare risk scoring where equitable access is critical.
- Content ranking and recommendation that affect group visibility.
- Regulatory [[Compliance]] and [[Governance]] reporting on automated decisions.

### Provenance

