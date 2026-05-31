- ### Definition
  - A measure of the average squared difference between predicted values and observed values, widely used to quantify estimation and prediction error.

- ### Semantic Classification
  - owl-class:: mathematics:MeanSquaredError
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Loss Function]]
  - bridges-to:: [[Gradient Descent]]
  - requires:: [[Statistics]], [[Probability Theory]]
  - enables:: [[Supervised Learning]]

- ### Content
  - Mean squared error averages the squared residuals between predictions and targets, penalising larger errors disproportionately. It decomposes into bias and variance components, linking it directly to statistical learning theory.
  - As a differentiable loss function it is convenient for optimisation by gradient descent and is a default choice for regression tasks in supervised learning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z