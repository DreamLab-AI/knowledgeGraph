Generalisation is the capacity of a machine-learning model to perform accurately on previously unseen data drawn from the same distribution as its training set, rather than merely memorising training examples. It is the central objective of supervised learning and is quantified by the gap between training and held-out performance. Good generalisation reflects a model that has captured the underlying regularities of a task instead of spurious correlations.

### Overview

- A model that generalises well achieves a small gap between training error and held-out (test) error.
- The bias-variance trade-off frames generalisation: too little capacity underfits, too much overfits, and the sweet spot minimises expected error on new data.
- Statistical learning theory bounds generalisation error in terms of hypothesis-class complexity and sample size; modern over-parameterised networks complicate this classical picture.
- Distribution shift breaks the assumption that test data matches training data, motivating robustness and domain-adaptation research.

### Key aspects

- Measurement: estimated using held-out validation sets and [[Cross-Validation]].
- Control: regularisation, early stopping, data augmentation, and capacity tuning narrow the generalisation gap.
- Inductive bias: architectural and prior assumptions steer the model toward solutions that transfer.
- Sample efficiency: how much data is needed to reach a target generalisation level.

### Applications

- Selecting and tuning models so they deploy reliably on real-world inputs.
- Enabling [[Transfer Learning]], where representations learned on one task generalise to related tasks.
- Benchmarking and comparing models through evaluation on unseen test distributions.

### Provenance

