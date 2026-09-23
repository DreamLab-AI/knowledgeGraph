
Model scaling is the practice of systematically increasing the size of a machine learning model, the volume of training data, and the compute budget to improve performance in line with empirical scaling laws. Predictable power-law relationships link these resources to reductions in loss, guiding decisions about parameter counts and data allocation. Scaling has been a primary driver behind the capabilities of modern foundation models.

- ### Overview
  - Model scaling formalises the observation that increasing parameters, data, and compute together yields smooth, predictable improvements in model quality. Compute-optimal scaling balances parameter count against the number of training tokens to extract the most performance from a fixed budget. The approach has shifted research effort toward infrastructure, data curation, and distributed training at scale.
- ### Mechanisms
  - Power-law relationships connect loss to model size, data, and compute
  - Compute-optimal allocation balances parameters against training tokens
  - Distributed training partitions models and data across many accelerators
  - Larger models exhibit qualitatively new capabilities at certain thresholds
  - Diminishing returns and data limits constrain naive scaling
- ### Applications
  - Training large language and multimodal foundation models
  - Budgeting compute and data for a target capability level
  - Forecasting performance before committing to expensive training runs
  - Designing infrastructure for parallel training across accelerators
- ### Provenance

