A false positive is an outcome in which a classifier or detection system reports the positive class for an instance that actually belongs to the negative class. It is one of the four cells of a confusion matrix and corresponds to a Type I error in statistical terms. The rate of false positives directly shapes precision and specificity and is traded off against false negatives when a decision threshold is tuned.

### Overview

- Detection and classification systems sort instances into predicted positive and negative classes, then compare against ground truth.
- A false positive raises a false alarm: the system flags something that is, in fact, benign or absent.
- Lowering the false-positive rate usually raises the false-negative rate, so the balance is chosen to fit the cost of each error type.

### Key aspects

- Defined relative to ground-truth labels and a fixed positive class.
- One of true positive, false positive, true negative and false negative.
- Drives precision and specificity but not recall.
- Sensitive to class imbalance and threshold placement.

### Applications

- Alert fatigue in an [[Intrusion Detection System]] from excessive false alarms.
- Tuning [[Anomaly Detection]] to suppress spurious detections.
- Diagnostic screening where false alarms trigger unnecessary follow-up.
- Reporting in [[Model Evaluation]] alongside [[Recall]] and [[Precision]].

### Provenance

