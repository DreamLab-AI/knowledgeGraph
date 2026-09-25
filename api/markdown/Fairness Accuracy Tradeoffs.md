The fundamental tension in supervised machine learning between maximising predictive accuracy and satisfying fairness constraints, characterised by the Pareto frontier of achievable (accuracy, fairness) pairs. Imposing fairness constraints restricts the hypothesis space, excluding models that achieve accuracy through reliance on protected-attribute correlations. The magnitude of the accuracy cost depends on the chosen fairness criterion (demographic parity, equalised odds, calibration), the base rate differences between groups, and the flexibility of the model class.

### Semantic Classification

### Content

The Fairness Accuracy Tradeoffs page retains its existing detailed definition above. The following paragraphs contextualise key concepts.

The tradeoff arises because fairness constraints such as demographic parity (equal positive prediction rates across groups), equalised odds (equal true/false positive rates), and calibration (equal predictive probability accuracy) are mathematically incompatible with each other in most real-world settings where base rates differ between groups — a result formalised by Chouldechova (2017) and Kleinberg et al. (2017).

In practice, the tradeoff is navigated via multi-objective optimisation with a regularisation term balancing accuracy loss against fairness violation: L = L_accuracy + λ·L_fairness. Varying λ traces the Pareto frontier, and stakeholders must make normative judgements about acceptable accuracy sacrifices for fairness gains — judgements that are context-dependent and require domain expertise.

Corbett-Davies et al. (2017) demonstrated that in criminal justice risk assessment, fairness constraints can simultaneously reduce accuracy for the dominant group and improve outcomes for the disadvantaged group, complicating simplistic accuracy-fairness framings. This research reinforced the importance of deployment context and stakeholder priorities in choosing fairness criteria.

### Provenance

