A true negative is an outcome in binary classification where the model correctly predicts the negative class for an instance that is genuinely negative. It is one of the four cells of the confusion matrix and contributes to metrics such as specificity and accuracy. Counting true negatives is essential for evaluating how well a classifier avoids false alarms on negative cases.

### Overview

- When the ground truth is negative and the prediction is negative, the case is a true negative, representing a correctly rejected instance.
- Alongside true positives, false positives and false negatives it fully characterises a binary classifier's behaviour.
- Specificity is the proportion of actual negatives correctly identified, so true negatives directly measure resistance to false alarms.

### Key aspects

- Correct rejection of a genuinely negative instance.
- One of four confusion-matrix outcomes for binary tasks.
- Denominator component of specificity and accuracy.
- Sensitive to the chosen decision threshold.

### Applications

- Assessing screening tests that should not over-flag healthy cases.
- Measuring spam filters that correctly pass legitimate mail.
- Quantifying anomaly detectors' false-alarm resistance.

### Provenance

