The trained artefact produced by a machine learning pipeline: a parameterised function — such as a decision tree ensemble, support vector machine or neural network — whose weights have been fitted to data by an optimisation procedure, and which maps new inputs to predictions, classifications, rankings or generated content; the unit that is evaluated, selected, versioned, deployed, monitored and eventually retrained or retired in production systems.

### Semantic Classification

### Content

## Definition

A **machine learning model** is the concrete output of training: a function with learned parameters that generalises from observed data to unseen inputs. The term covers everything from a logistic regression with a handful of coefficients to a transformer with hundreds of billions of weights. What unites them is the workflow around the artefact — a hypothesis class is chosen, parameters are fitted by minimising a loss over training data, generalisation is estimated on held-out data, and the frozen result is packaged for inference. The model is distinct from the algorithm that produced it (gradient descent, boosting) and from the system that serves it, a distinction that matters for versioning, reproducibility and governance.

The lifecycle of a model is the organising spine of applied machine learning. Upstream, data preparation, ground-truth labelling and [[Feature Selection]] determine what signal is available to fit; model selection and hyperparameter search compare candidate artefacts; threshold optimisation tunes the mapping from scores to decisions. Downstream, the model is serialised (ONNX, SavedModel, safetensors), deployed to servers or edge devices — often after quantisation or distillation to meet latency and memory budgets — and monitored for data drift, performance decay and fairness regressions. Model cards and registries document provenance, intended use and known limitations, requirements that regulation increasingly makes mandatory for high-risk applications.

In this graph the class acts as the hub that evaluation, debugging, selection and deployment concepts attach to: pages on generalisation, cross-validation, principal component analysis and edge deployment all describe operations performed on or for a machine learning model.

## Technical Details

Models are usefully classified along three axes. By learning paradigm: supervised (classification, regression), unsupervised (clustering, dimensionality reduction), self-supervised and reinforcement-learned. By hypothesis class: linear models, kernel machines, tree ensembles (random forests, gradient-boosted trees), probabilistic graphical models and neural networks, with deep architectures dominating perception and language tasks while gradient boosting remains highly competitive on tabular data. By parametric character: parametric models with a fixed weight count versus non-parametric methods such as k-nearest neighbours whose effective capacity grows with the data. Key evaluation quantities — bias-variance trade-off, calibration, out-of-distribution robustness — are properties of the trained artefact rather than of the algorithm, which is why rigorous practice always distinguishes the two.

## Current Landscape

- **The model artefact is now a regulated object**: under the EU AI Act, obligations for providers of general-purpose AI models (Article 53) applied from 2 August 2025 — maintained technical documentation covering architecture, training and evaluation, compute and energy; documentation for downstream integrators; a copyright-compliance policy; and a public training-content summary using the Commission's mandatory template published on 24 July 2025.
- **Transitional deadlines**: GPAI models placed on the EU market before 2 August 2025 must be brought into compliance by 2 August 2027; models above the 10²⁵-FLOP systemic-risk threshold face additional adversarial-testing, incident-reporting, and cybersecurity obligations.
- **Voluntary scaffolding**: the Commission's GPAI Code of Practice and accompanying guidelines (July 2025) operationalise these duties; providers submit systemic-risk notifications and model reports through the EU's SEND platform.
- **Serialisation and lineage practice**: safetensors has displaced pickle-based weight formats for safe distribution on model hubs; model registries and lineage-tracking platforms (MLflow 3's model-centric redesign, June 2025) increasingly bind the artefact to the exact code, data, prompts and evaluations that produced it — turning the model card from documentation courtesy into compliance evidence.

  **Sources**:

- https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers
- https://www.skadden.com/insights/publications/2025/08/eus-general-purpose-ai-obligations
- https://artificialintelligenceact.eu/high-level-summary/
- https://mlflow.org/releases/3/

