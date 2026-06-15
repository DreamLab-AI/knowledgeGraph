- ### Definition
  - The bias-variance tradeoff describes how expected generalisation error in [[Supervised Learning]] decomposes into bias, variance, and irreducible noise. High bias produces [[Underfitting]] from overly simple assumptions; high variance produces [[Overfitting]] from excessive sensitivity to the training sample. Controlling [[Model Complexity]] and applying [[Regularization]] navigates the tradeoff toward minimum total error. It is a foundational result of [[Statistical Learning Theory]] guiding [[Model Evaluation]] and selection.

- ### Overview
  - The tradeoff formalises a long-standing intuition: a model flexible enough to capture true structure is also flexible enough to memorise noise.
  - For squared-error loss, expected test error at a point decomposes exactly into squared bias, variance, and irreducible error — a clean analytical result that motivates the framework.
  - As model complexity rises, training error falls monotonically while test error follows a U-shaped curve, defining an optimal complexity that minimises expected generalisation error.
  - The classical U-shape has been complicated by the deep-learning era observation of double descent, where test error can fall again in heavily overparameterised regimes, refining rather than overturning the underlying decomposition.

- ### Mechanisms
  - #### Bias
    - Systematic error from a model's structural assumptions; a linear model fitting nonlinear data has high bias regardless of sample size.
    - Manifests as poor performance on both training and test sets — the signature of [[Underfitting]].
  - #### Variance
    - Error from sensitivity to the particular training sample; high-variance models fit noise and generalise poorly.
    - Manifests as low training error but high test error — the signature of [[Overfitting]].
  - #### Irreducible error
    - Noise inherent in the data-generating process that no model can remove, setting a floor on achievable error.

- ### Key aspects
  - **Complexity control** — adjusting capacity via model class, depth, or number of parameters shifts the bias-variance balance.
  - **[[Regularization]]** — penalties (L1, L2, dropout, early stopping) deliberately add bias to reduce variance.
  - **[[Cross-Validation]]** — estimates out-of-sample error to locate the complexity sweet spot empirically.
  - **[[Ensemble Learning]]** — bagging primarily reduces variance, while boosting primarily reduces bias, illustrating the tradeoff in practice.

- ### Applications
  - **[[Hyperparameter Tuning]]** — choosing regularisation strength, tree depth, or learning rate is fundamentally a bias-variance balancing exercise.
  - **Model selection** — the tradeoff justifies preferring simpler models when data is scarce and richer models when data is abundant.
  - **[[Model Evaluation]]** — diagnosing whether errors stem from bias or variance directs the next modelling step (add features vs. regularise).
  - **[[Ensemble Learning]]** — random forests and gradient boosting are designed explicitly to manage the two error components.
  - **Learning-curve analysis** — comparing training and validation error against sample size reveals bias- versus variance-limited regimes.

- ### Relationships
  - hasPart:: [[Model Complexity]]
  - hasPart:: [[Overfitting]]
  - hasPart:: [[Underfitting]]
  - dependsOn:: [[Model Complexity]]
  - dependsOn:: [[Supervised Learning]]
  - enables:: [[Model Evaluation]]
  - enables:: [[Hyperparameter Tuning]]
  - requires:: [[Cross-Validation]]
  - uses:: [[Regularization]]
  - supports:: [[Model Training]]
  - supports:: [[Ensemble Learning]]
  - contrastsWith:: [[Overfitting]]
  - contrastsWith:: [[Underfitting]]
  - relatedTo:: [[Cross-Validation]]
  - relatedTo:: [[Regularization]]
  - relatedTo:: [[Hyperparameter Tuning]]

- ### Provenance
  - sources:: Hastie, Tibshirani & Friedman, The Elements of Statistical Learning; Geman, Bienenstock & Doursat (1992) on bias-variance dilemma; Belkin et al. (2019) on double descent
  - updated:: 2026-06-15