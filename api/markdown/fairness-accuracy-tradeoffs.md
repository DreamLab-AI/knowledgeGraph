- ### Definition
  - Fairness Accuracy Tradeoffs represent the fundamental tension in machine learning between maximizing predictive accuracy and satisfying fairness constraints, characterized by the Pareto frontier of achievable (accuracy, fairness) pairs where improving one objective typically requires sacrificing the other. This tradeoff arises because fairness constraints restrict the hypothesis space of permissible models, excluding solutions that achieve maximum accuracy through reliance on correlations between protected attributes and outcomes, even when those correlations reflect genuine statistical relationships in the data. The magnitude of accuracy cost depends on several factors: the strength of correlation between protected attributes and outcomes, which fairness constraint is enforced (with independence constraints typically more costly than separation constraints), the flexibility of the model class, and base rate differences between groups. Implementation typically involves multi-objective optimization with a tradeoff parameter λ balancing accuracy loss L_accuracy and fairness violation L_fairness in the combined objective L = L_accuracy + λ·L_fairness, where varying λ traces out the Pareto frontier. While some contexts permit minimal accuracy costs for fairness improvements, others involve substantial tradeoffs requiring normative judgment about acceptable accuracy sacrifices for fairness gains. Research by Corbett-Davies et al. (2017) demonstrates that fairness constraints can sometimes improve accuracy for disadvantaged groups while reducing overall accuracy, and that the tradeoff is context-dependent based on deployment objectives and stakeholder priorities.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessAccuracyTradeoffs
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  Fairness Accuracy Tradeoffs **require** Algorithmic Bias (as the phenomenon being constrained) and Machine Learning Model (as the subject of optimisation). They **depend on** Bias Mitigation Techniques to navigate the Pareto frontier and AI Fairness definitions to formalise the constraint. They are **related to** Responsible AI, Explainable AI, AI Ethics, and Accountability as the broader governance context. They **contrast with** Algorithmic Bias and Variance (the statistical bias-variance tradeoff, a distinct concept). They **support** Responsible AI Principles by quantifying the cost of fairness commitments.

- ### Content
  The Fairness Accuracy Tradeoffs page retains its existing detailed definition above. The following paragraphs contextualise key concepts.

  The tradeoff arises because fairness constraints such as demographic parity (equal positive prediction rates across groups), equalised odds (equal true/false positive rates), and calibration (equal predictive probability accuracy) are mathematically incompatible with each other in most real-world settings where base rates differ between groups — a result formalised by Chouldechova (2017) and Kleinberg et al. (2017).

  In practice, the tradeoff is navigated via multi-objective optimisation with a regularisation term balancing accuracy loss against fairness violation: L = L_accuracy + λ·L_fairness. Varying λ traces the Pareto frontier, and stakeholders must make normative judgements about acceptable accuracy sacrifices for fairness gains — judgements that are context-dependent and require domain expertise.

  Corbett-Davies et al. (2017) demonstrated that in criminal justice risk assessment, fairness constraints can simultaneously reduce accuracy for the dominant group and improve outcomes for the disadvantaged group, complicating simplistic accuracy-fairness framings. This research reinforced the importance of deployment context and stakeholder priorities in choosing fairness criteria.

- ### Provenance
  - sources:: [[Corbett-Davies et al. (2017)]], [[Kleinberg et al. (2017)]], [[Chouldechova (2017)]]
  - migration-date:: 2026-04-26T00:00:00Z