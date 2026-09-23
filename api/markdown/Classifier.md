
A model or algorithm that assigns input instances to one of a finite set of discrete categories, typically by learning a decision function from labelled training data. Classifiers range from linear models (logistic regression, linear SVMs) through tree ensembles to deep neural networks, and most output class probabilities or scores that a decision threshold converts into hard labels. Their performance is characterised through confusion-matrix quantities such as true and false positives, precision, recall, and ROC analysis.

- ### Semantic Classification

- ### Content

  ## Definition

  A **classifier** is a function `f: X → {1, …, K}` that maps an input representation to one of `K` discrete classes. In practice most classifiers are learned: given labelled examples, a [[Supervised Learning]] procedure fits parameters that minimise a surrogate loss (cross-entropy, hinge loss) on the training set, so that the resulting decision function generalises to unseen inputs. The classifier is the artifact that performs [[Classification]] — the task itself — and the two terms anchor much of applied machine learning, from spam filtering and medical triage to object recognition and content moderation.

  Most modern classifiers are *scoring* classifiers: they output a probability or confidence per class rather than a bare label. A [[Classification Threshold]] then converts scores into decisions, and moving that threshold trades false positives against false negatives — the basis of ROC and precision–recall analysis. This separation matters operationally because the optimal threshold depends on class prevalence and the asymmetric costs of errors, both of which can change after deployment without retraining the model.

  A classical distinction separates **discriminative** classifiers, which model the decision boundary or conditional distribution `p(y|x)` directly (logistic regression, SVMs, standard neural network classifiers), from **generative** approaches, which model the joint or class-conditional distributions and classify via Bayes' rule (naive Bayes, Gaussian discriminant analysis). This contrast extends to modern [[Deep Generative Model]] families: a generative model learns to synthesise or density-estimate data, whereas a classifier only needs to discriminate between categories — a strictly easier statistical problem, which is why discriminative training usually wins on classification accuracy when labelled data is plentiful.

  ## Technical Details

  - **Major families**: linear models (logistic regression, linear SVM), kernel methods, decision trees and ensembles (random forests, gradient-boosted trees — still dominant on tabular data), k-nearest neighbours, naive Bayes, and deep networks (CNNs for images, transformers for text); large pretrained models are now commonly adapted into classifiers via fine-tuning or zero-shot prompting.
  - **Evaluation**: confusion matrix (true/false positives and negatives), accuracy, precision, recall, F1, ROC-AUC, PR-AUC; calibration metrics (ECE, Brier score) assess whether predicted probabilities are trustworthy.
  - **Decision theory**: with known error costs, the Bayes-optimal rule thresholds the posterior at a cost-dependent value; class imbalance is handled through resampling, cost-sensitive losses, or threshold tuning rather than raw accuracy.
  - **Multi-class and beyond**: softmax/one-vs-rest schemes extend binary classifiers to K classes; multi-label, hierarchical, and open-set classification relax the assumption of exactly one known class per instance.
  - **Failure modes**: distribution shift, spurious-correlation shortcuts, adversarial perturbations, and miscalibrated confidence — active research areas for deployed systems.

  ## Current Landscape

  - **Classifiers as the LLM safety layer**: Anthropic's Constitutional Classifiers (paper released 31 January 2025) are input/output classifiers trained on constitution-guided synthetic data; guarding Claude, they cut jailbreak success from 86% to 4.4% at the cost of a 0.38% increase in production-traffic refusals and ~23.7% inference overhead, and survived over 3,000 hours of red teaming without a universal jailbreak being found.
  - **Probe-based cascades**: the next-generation system (published January 2026) replaces a monolithic safeguard with a two-stage cascade — a linear probe over the model's internal activations screens all traffic and escalates suspicious exchanges to a classifier ensemble — achieving a 0.05% refusal rate on harmless production queries at roughly 1% additional compute, a ~40× cost reduction over the baseline exchange classifier.
  - **Cheap classification via representation reuse**: Anthropic's 2025 alignment work showed linear probes on intermediate activations match dedicated classifiers ~2% of the policy model's size at virtually no additional compute, and fine-tuning only final layers outperforms standalone classifiers a quarter of the base model's size.
  - **Tabular status quo holds**: gradient-boosted tree ensembles remain the default for tabular classification, while large pretrained models adapted by fine-tuning or zero-shot prompting now dominate text and image classification — increasingly evaluated as much on calibration and robustness as on raw accuracy.

  **Sources**:
  - https://www.anthropic.com/research/constitutional-classifiers
  - https://www.anthropic.com/research/next-generation-constitutional-classifiers
  - https://alignment.anthropic.com/2025/cheap-monitors/
  - https://www.alphaxiv.org/abs/2501.18837

- ### Provenance

