- ### Definition
  - Specificity, also known as the [[True Negative Rate]] (TNR) or selectivity, is a fundamental [[Classification Metric]] measuring the proportion of actual negative instances that a binary classifier or diagnostic test correctly labels as negative. It is computed as TN / (TN + FP), where TN denotes true negatives and FP denotes false positives. Alongside [[Sensitivity]] (the [[Recall]] or true positive rate), specificity characterises the complete operating behaviour of a classifier and directly informs construction of the [[ROC Curve]] and principled [[Threshold Selection]].

- ### Overview
  - Specificity answers the question: "Of all the cases that are genuinely negative, what fraction does the model correctly reject?" A perfect specificity of 1.0 means zero false alarms; a low specificity means the model frequently misidentifies negatives as positives, flooding downstream users with false positives.
  - The metric is symmetric to [[Sensitivity]] (recall) in the following sense: sensitivity measures performance on positive instances, specificity measures performance on negative instances. The two quantities are not interchangeable and neither subsumes the other. Most real-world applications require a considered balance between the two.
  - Specificity is a property of the classifier operating at a fixed [[Decision Threshold]], not a fixed property of the model itself. Raising the threshold increases specificity (fewer false positives) at the expense of sensitivity (more false negatives), producing the familiar trade-off visualised on the [[ROC Curve]].
  - In [[Medical Diagnostics]], high specificity is especially prized for confirmatory tests — a highly specific test that comes back positive provides strong evidence of disease because it rarely raises false alarms. Conversely, high-sensitivity (high-recall) tests are preferred for screening, where missing a true positive is the greater risk.

- ### Key Components and Formula
  - **[[Confusion Matrix]] entries used:**
    - TN (True Negatives) — actual negatives correctly classified as negative
    - FP (False Positives) — actual negatives incorrectly classified as positive
  - **Formula:** Specificity = TN / (TN + FP)
  - **Complement:** 1 − Specificity = [[False Positive Rate]] (FPR), the x-axis of the [[ROC Curve]]
  - **Range:** [0, 1]; values closer to 1.0 indicate fewer false positives
  - **Threshold dependency:** specificity increases as the [[Decision Threshold]] rises; at threshold = 1.0, specificity = 1.0 but sensitivity may collapse
  - **Population dependency:** unlike [[Positive Predictive Value]] (precision), specificity is independent of class prevalence — it depends only on the set of actual negatives and how many the model classifies correctly

- ### Related Metrics and Contrasts
  - **[[Sensitivity]] vs Specificity** — the canonical dual; sensitivity = TP / (TP + FN); the two form the axes of the [[ROC Curve]]
  - **[[Precision]] vs Specificity** — precision (positive predictive value) = TP / (TP + FP); precision involves both true and false positives relative to predictions, whereas specificity involves negatives relative to ground truth labels
  - **[[F1 Score]]** — harmonic mean of precision and recall; does not incorporate specificity directly, making it unsuitable when false positive cost dominates
  - **[[Youden Index]]** (Informedness) = Sensitivity + Specificity − 1; a single scalar summarising classifier performance across both classes
  - **[[Negative Predictive Value]] (NPV)** = TN / (TN + FN); the post-test probability that a negative prediction is correct; depends on prevalence, unlike specificity
  - **[[Matthews Correlation Coefficient]] (MCC)** — accounts for all four quadrants of the [[Confusion Matrix]]; often preferred over F1 for imbalanced datasets
  - **[[AUC-ROC]]** — the Area Under the ROC Curve; aggregates specificity/sensitivity pairs across all thresholds into a single performance summary

- ### The ROC Curve and Threshold Selection
  - The [[ROC Curve]] plots sensitivity (y-axis) against 1 − specificity (i.e., [[False Positive Rate]], x-axis) across all possible decision thresholds. Each point on the curve corresponds to a specific operating point of the classifier.
  - Selecting a threshold is a decision about acceptable trade-offs:
    - High specificity / low sensitivity: fewer false positives, more false negatives
    - High sensitivity / low specificity: fewer false negatives, more false positives
  - The optimal operating point is task-dependent. In fraud detection, high specificity prevents customer friction; in cancer screening, high sensitivity prevents missed diagnoses.
  - The [[Youden Index]] offers one principled criterion: choose the threshold that maximises sensitivity + specificity − 1, corresponding to the point on the ROC curve farthest from the diagonal.
  - [[Cost-Sensitive Learning]] frameworks assign asymmetric misclassification costs to guide threshold selection formally.

- ### Applications / Use Cases
  - **[[Medical Diagnostics]]:** Highly specific tests (e.g., PCR for pathogen confirmation) minimise unnecessary treatment. Regulatory bodies such as the FDA require specificity reporting in diagnostic device submissions.
  - **[[Spam Filtering]]:** A high-specificity spam filter ensures legitimate emails rarely land in the spam folder (false positives), even if occasional spam leaks through.
  - **[[Fraud Detection]]:** Banks tune classifiers to high specificity to avoid blocking valid transactions; excessive false positives erode customer trust.
  - **[[Anomaly Detection]] in cybersecurity:** Security operations centres require high specificity to reduce alert fatigue — too many false alarms leads to ignored real threats.
  - **[[Drug Discovery]] and biomarker validation:** Specificity is a primary endpoint for assessing diagnostic biomarkers before clinical adoption.
  - **[[Natural Language Processing]] (NLP):** Named entity recognition systems report per-class specificity alongside precision/recall when negative classes are numerous (e.g., classifying millions of tokens as "not a named entity").
  - **[[Computer Vision]] object detection:** Detectors on surveillance feeds require high specificity to limit false alarms while maintaining adequate detection rates.
  - **[[Recommender Systems]]:** Conceptually, specificity corresponds to not recommending irrelevant items to users, complementing precision at the top-K level.

- ### Mechanisms and Computational Considerations
  - **Class imbalance effects:** In severely imbalanced datasets (many more negatives than positives), a naive classifier that predicts "always negative" achieves perfect specificity trivially. Metrics such as [[Balanced Accuracy]] (mean of sensitivity and specificity) or the [[Matthews Correlation Coefficient]] address this pathology.
  - **Multi-class extension:** Specificity generalises to multi-class problems via one-vs-rest decomposition; each class acts as the "positive" class and all others as "negative".
  - **Micro vs Macro averaging:** When averaging specificity across classes, micro-averaging weights by instance count; macro-averaging treats all classes equally — choice depends on whether class imbalance should be reflected in the aggregate.
  - **Bootstrapping and confidence intervals:** Point estimates of specificity from finite test sets carry sampling variance. Bootstrap resampling or Wilson score intervals are standard approaches to quantify uncertainty.
  - **Cross-validation:** Specificity should be evaluated across all folds of [[Cross-Validation]], not merely on a single held-out set, to ensure stability across data subsets.

- ### Relationships
  - requires:: [[Confusion Matrix]]
  - requires:: [[Binary Classification]]
  - contrastsWith:: [[Sensitivity]]
  - contrastsWith:: [[Precision]]
  - contrastsWith:: [[False Positive Rate]]
  - relatedTo:: [[Recall]]
  - relatedTo:: [[ROC Curve]]
  - relatedTo:: [[AUC-ROC]]
  - relatedTo:: [[F1 Score]]
  - relatedTo:: [[Youden Index]]
  - relatedTo:: [[Negative Predictive Value]]
  - relatedTo:: [[Likelihood Ratio]]
  - enables:: [[Threshold Selection]]
  - enables:: [[ROC Curve]]
  - enables:: [[Anomaly Detection]]
  - partOf:: [[Classifier Evaluation]]
  - partOf:: [[Model Evaluation]]
  - uses:: [[True Negative]]
  - uses:: [[False Positive]]
  - bridges-to:: [[Medical Diagnostics]]
  - bridges-to:: [[Fraud Detection]]
  - sameAs:: [[True Negative Rate]]
  - sameAs:: [[Selectivity]]

- ### Standards and Context
  - **ISO 15189 / ISO 15197:** Clinical laboratory standards require specificity reporting for diagnostic assays; IVD (in-vitro diagnostic) regulations in the EU (IVDR 2017/746) mandate specificity evaluation in clinical performance studies.
  - **FDA Guidance on Diagnostic Tests:** The U.S. FDA Guidance on In Vitro Diagnostic Devices specifies that diagnostic sensitivity and specificity are required endpoints in 510(k) and PMA submissions.
  - **TRIPOD Statement:** Transparent Reporting of a multivariable prediction model for Individual Prognosis Or Diagnosis (TRIPOD) recommends reporting both sensitivity and specificity alongside calibration measures.
  - **NCSS/PASS statistical software** and **scikit-learn** (Python) both implement specificity as a first-class evaluation metric, reinforcing its status in [[Machine Learning]] practice.
  - **WHO Guidance on Diagnostic Tests:** WHO technical documents for pandemic preparedness (e.g., COVID-19 antigen tests) specify minimum acceptable specificity thresholds before deployment.

- ### Provenance
  - sources:: ISO 15189, FDA IVD Guidance, TRIPOD Statement, scikit-learn documentation, WHO diagnostic guidance
  - updated:: 2026-06-13
  - migration-date:: 2026-05-29T00:00:00Z