Inductive bias is the set of assumptions a learning algorithm uses to generalise from finite training data to unseen inputs. Because infinitely many functions fit any finite sample, a learner must prefer some hypotheses over others, and that preference — encoded in model architecture, regularisation, priors, or the choice of hypothesis space — is its inductive bias. Appropriate inductive bias is what lets a model extrapolate sensibly rather than merely memorise.

### Overview

- Without bias, learning is impossible: a hypothesis consistent with all observed labels can disagree arbitrarily on every unobserved point. Inductive bias resolves this underdetermination by restricting or weighting the space of candidate functions, expressing prior belief about which solutions are plausible.
- The No Free Lunch theorem formalises why bias is unavoidable: averaged over all possible problems, no learner beats random guessing, so any practical advantage comes from assumptions matched to the structure of real-world tasks.

### Mechanisms

- Architectural bias: convolution encodes translation equivariance, recurrence and attention encode sequence structure, graph networks encode relational structure.
- Regularisation and priors: weight decay, dropout, and Bayesian priors bias learning toward simpler or smoother functions.
- Hypothesis-space restriction: choosing linear models, decision trees, or kernels constrains what can be expressed and thereby what is learned.

### Applications

- Convolutional networks exploit spatial locality for image tasks; transformers exploit long-range token interactions for language.
- Choosing regularisation strength to trade variance for bias and control the bias-variance tradeoff.
- Designing data augmentations that inject invariances as a soft inductive bias.

### Provenance

