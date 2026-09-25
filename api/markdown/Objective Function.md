An objective function is a scalar-valued function that quantifies the quality of a candidate solution, which an optimisation or learning process seeks to minimise or maximise. In machine learning it formalises the goal of training — for example minimising prediction error or maximising likelihood — so that algorithms can adjust parameters to improve it. The choice of objective function determines what a model is rewarded for, shaping its behaviour, biases and generalisation.

### Overview

- The objective function encodes, in a single number, what success means for an optimisation problem. Optimisers search the parameter or decision space to drive this value toward an optimum, often using gradient information where the function is differentiable. In supervised learning the objective is typically a loss to be minimised; in reinforcement learning it is a return to be maximised; in classical optimisation it may be cost, profit or risk subject to constraints. Properties such as convexity, smoothness and the presence of regularisation strongly affect tractability.

### Key aspects

- Minimisation versus maximisation conventions
- Convex versus non-convex landscapes
- Differentiability and gradient availability
- Regularisation terms and constraints
- Surrogate objectives versus true evaluation metrics
- Multi-objective and weighted formulations

### Applications

- Defining training loss for supervised models
- Specifying returns in reinforcement learning
- Cost minimisation in operations research
- Guiding hyperparameter optimisation
- Formulating constrained engineering optimisation

### Provenance

