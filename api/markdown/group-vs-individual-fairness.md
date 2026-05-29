- ### Definition
  Group vs Individual Fairness denotes two competing paradigms for defining and enforcing algorithmic fairness: group fairness requires statistical parity of outcomes or error rates across protected demographic cohorts, while individual fairness requires that similar individuals receive similar predictions regardless of group membership. The two paradigms are formally incompatible in general — satisfying demographic parity does not guarantee individual fairness and vice versa — representing a fundamental tension in fair machine learning that practitioners must resolve through context-specific policy choices. This distinction shapes the selection of fairness metrics, audit methodologies, and bias mitigation interventions in AI system design.

- ### Relationships
  - hasPart:: [[Fairness Metrics]], [[Fairness Constraints]]
  - requires:: [[Fairness Auditing Tools]], [[Bias Detection Methods]]
  - enables:: [[Bias Mitigation Techniques]], [[Algorithmic Accountability]]
  - relatedTo:: [[Fairness]], [[Fairness (OECD)]], [[Disparate Impact]], [[Algorithmic Bias]], [[Equity]]
  - contrastsWith:: [[Fairness Accuracy Tradeoffs]]
  - uses:: [[Machine Learning Model]], [[Explainability]]

- ### Content
  Group fairness metrics formalise the requirement that a model's predictions do not systematically disadvantage a protected group. Demographic parity (or statistical parity) requires that positive prediction rates are equal across groups: P(Ŷ=1|A=0) = P(Ŷ=1|A=1). Equalised odds additionally requires that both true positive rates and false positive rates are equal across groups, ensuring that neither group bears a disproportionate burden of false negatives or false positives. Predictive parity (calibration within groups) requires that among those predicted positive, the proportion who are truly positive is equal across groups. These metrics are mutually exclusive except in degenerate cases (Chouldechova, 2017), forcing practitioners to choose the metric most aligned with the deployment context and applicable law.

  Individual fairness, formalised by Dwork et al. (2012) in "Fairness Through Awareness," requires that a classifier f is Lipschitz-continuous with respect to a task-specific similarity metric D on individuals: D(f(x₁), f(x₂)) ≤ D(x₁, x₂). This formulation is theoretically appealing — it prevents treating similar people differently — but operationally demanding because defining a task-appropriate similarity metric that does not encode prohibited biases is itself a sociotechnical challenge. Counterfactual fairness (Kusner et al., 2017) offers an alternative individual-level criterion: a prediction is counterfactually fair if it would be unchanged had the individual belonged to a different demographic group.

  The tension between group and individual fairness has practical consequences for bias mitigation algorithm selection. Pre-processing methods that re-sample or re-weight training data typically target group fairness criteria. In-processing methods that add fairness constraints to the optimisation objective can enforce group or counterfactual fairness. Post-processing methods that adjust decision thresholds per group (e.g., Hardt et al., 2016) enforce equalised odds at the expense of within-group individual consistency.

  Regulatory frameworks — including the EU AI Act's non-discrimination requirements and the US Equal Credit Opportunity Act — primarily reference group-level disparate impact standards, making group fairness operationally dominant in regulated domains. Nevertheless, individual fairness arguments are influential in high-stakes decisions (criminal sentencing, medical diagnosis) where the moral wrongness of treating similar individuals differently is especially salient.

- ### Provenance
  - sources:: Dwork et al. (2012), Hardt et al. (2016), Barocas et al. (2019)
  - migration-date:: 2026-04-26T00:00:00Z