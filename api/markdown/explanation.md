- ### Definition
  An Explanation in the context of AI systems is a human-interpretable account of why a model produced a particular output, which features influenced the prediction, and how the system would behave differently under alternative inputs. Explanations may be global (describing overall model behaviour), local (accounting for a single prediction), or contrastive (answering why outcome A rather than outcome B). They are the primary instrument through which AI Transparency and Explainability is operationalised for regulators, domain experts, and affected individuals.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Explanation
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - hasPart:: [[Feature Importance]], [[Post Hoc Explanation]]
  - requires:: [[Explainable AI]], [[Model Interpretability]]
  - enables:: [[Transparency and Explainability]], [[Algorithmic Accountability]], [[Decision Transparency]]
  - relatedTo:: [[Interpretability]], [[Explainability]], [[AI Trustworthiness]], [[Digital Twin]], [[Blockchain]]
  - contrastsWith:: [[Intrinsic Interpretability]]

- ### Content

  ### Definition

  An Explanation is the human-interpretable artefact produced by an explainability method to communicate the reasoning behind an AI model's output. The three main explanation types serve different purposes: global explanations summarise the overall decision logic (e.g., feature importance rankings across the training set), local explanations account for individual predictions (e.g., SHAP values for a single loan application), and contrastive explanations answer "why this outcome rather than that one" by identifying the minimal feature changes that would alter the decision.

  ### Relationships

  Explanations incorporate Feature Importance scores and Post Hoc Explanation methods as constituent parts. They require Explainable AI tooling (SHAP, LIME, attention visualisation) and Model Interpretability analysis to be generated. Explanations enable Transparency and Explainability as a system property, support Algorithmic Accountability by providing evidence for audit, and instantiate Decision Transparency in user-facing interfaces. They are closely related to Interpretability and the broader Explainability concept. The bridging to Digital Twin and Blockchain reflects cross-domain applications: Digital Twin simulations benefit from explanations of anomaly-detection outputs, while Blockchain audit trails can record explanation artefacts as tamper-evident accountability evidence.

  ### Content

  The quality of an explanation is assessed along multiple dimensions: faithfulness (does it accurately reflect the model's actual reasoning?), comprehensibility (can the target audience understand it?), and actionability (does it enable the recipient to take appropriate action?). Faithfulness is particularly problematic for post-hoc explanation methods applied to complex models: SHAP values are mathematically grounded in cooperative game theory and provide local additive approximations, but may not reflect causal pathways in non-linear models. LIME generates locally faithful linear approximations around a query point by sampling perturbations, but the approximation quality degrades away from the query.

  Contrastive explanations — also called counterfactual explanations — have gained significant regulatory attention because they align with the "right to explanation" as interpreted under GDPR recital 71 and the EU AI Act. They answer the practically actionable question: "what would I need to change to receive a different outcome?" without necessarily revealing proprietary model internals. Generating minimal, plausible, and diverse counterfactuals is an active research area, with methods such as DiCE (Diverse Counterfactual Explanations) providing multiple recourse paths simultaneously.
- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z