
Ground truth labels are the authoritative, human-verified or empirically observed target values assigned to data instances, used to train and evaluate supervised machine-learning models. They represent the correct answer against which model predictions are compared, forming the basis for loss computation during training and accuracy measurement during evaluation. The quality, consistency, and coverage of ground truth labels directly bound the performance a learned model can achieve.

- ### Overview
  - Ground truth labels anchor supervised learning: the model adjusts its parameters to minimise the discrepancy between its predictions and these reference values.
  - Labels may derive from expert human annotation, crowd-sourced consensus, instrumented measurement, or downstream business outcomes treated as targets.
  - Label noise, ambiguity, and class imbalance propagate directly into model behaviour, so labelling protocols and inter-annotator agreement are treated as first-class quality concerns.
- ### Key aspects
  - Labels can be categorical for [[Classification]] or continuous for [[Regression]] tasks.
  - Annotation guidelines define how edge cases are resolved to keep labels consistent across annotators.
  - Inter-annotator agreement metrics quantify labelling reliability.
  - Held-out labelled examples form the basis of evaluation against [[Accuracy]] and related metrics.
  - Active learning prioritises which unlabelled instances most benefit from acquiring ground truth.
- ### Applications
  - Training image classifiers where each image carries a verified category label.
  - Building evaluation benchmarks that score competing models on a common labelled set.
  - Fine-tuning [[Deep Learning]] models on domain-specific labelled corpora.
  - Measuring [[Data Quality]] regressions by re-auditing label correctness over time.
- ### Provenance

