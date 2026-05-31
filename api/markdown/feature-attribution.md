- ### Definition
  - A family of explainable AI techniques that assign a contribution score to each input feature, indicating how much it influenced a model's particular prediction.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FeatureAttribution
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Explainable AI]]
  - bridges-to:: [[SHAP]], [[Feature Importance]]
  - requires:: [[Machine Learning]]
  - enables:: [[Interpretability]]

- ### Content
  - Feature attribution explains an individual model prediction by quantifying how each input feature contributed to it, typically as positive or negative weights. Methods include gradient-based approaches and game-theoretic ones such as SHAP, as well as surrogate models like LIME.
  - These attributions support model interpretability and debugging by revealing which inputs drive outputs, helping practitioners detect spurious correlations and communicate behaviour. Attribution scores for a single prediction are distinct from global feature importance across a whole model.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z