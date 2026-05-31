- ### Definition
  - SHAP, short for SHapley Additive exPlanations, is a method for explaining the output of machine-learning models by attributing each prediction to its input features. It is grounded in Shapley values from cooperative game theory, which fairly distribute a payoff among contributors, treating each feature as a player and the prediction as the payoff. SHAP provides locally accurate, consistent feature attributions and unifies several earlier explanation techniques under a common framework.

- ### Semantic Classification
  - owl-class:: ml:SHAP
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Machine Learning Domain]]
  - bridges-to:: [[Explainable AI]], [[LIME]]
  - requires:: [[Shapley Value]], [[Machine Learning Model]]
  - enables:: [[Model Interpretability]], [[Feature Attribution]]

- ### Content
  - SHAP computes, for a given prediction, how much each feature contributes relative to a baseline expectation. By framing the model as a cooperative game and features as players, it uses Shapley values to allocate the difference between the prediction and the baseline across features in a way that satisfies properties such as local accuracy, consistency and the handling of features that have no effect.
  - Exact Shapley computation is exponential in the number of features, so SHAP provides efficient approximations tailored to model classes, including a fast exact method for tree ensembles and sampling-based or kernel-based estimators for general models. This makes the approach practical for models ranging from gradient-boosted trees to deep networks.
  - The resulting attributions support both local explanations of individual predictions and global summaries of feature importance across a dataset. SHAP has become a standard tool in explainable artificial intelligence, used for debugging models, auditing for bias and communicating model behaviour to stakeholders.

- ### Provenance
  - sources:: [[Lundberg and Lee, A Unified Approach to Interpreting Model Predictions (2017)]]
  - migration-date:: 2026-05-29T00:00:00Z