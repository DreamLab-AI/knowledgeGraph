
Model calibration is the process of ensuring that the probabilities a predictive model outputs reflect the true likelihood of outcomes, so that, for example, events predicted with 70 per cent confidence occur roughly 70 per cent of the time. A well-calibrated model produces reliable confidence estimates, which is essential when predictions inform risk-sensitive decisions. Calibration is assessed with reliability diagrams and metrics such as expected calibration error, and corrected with post-hoc techniques that adjust a model's output probabilities without changing its rankings.

- ### Overview
  - Calibration distinguishes a confident model from a correct one.
  - Modern deep networks are often overconfident and benefit from recalibration.
  - Reliability diagrams plot predicted confidence against observed accuracy.
  - Post-hoc methods such as temperature scaling adjust the logits of a trained model.
- ### Mechanisms
  - Expected calibration error summarises the gap between confidence and accuracy.
  - Temperature scaling rescales logits with a single learned parameter.
  - Isotonic and Platt-style mappings recalibrate output probabilities.
  - Calibration is preserved or broken across dataset shift.
  - Proper scoring rules align training objectives with calibration.
- ### Applications
  - Medical diagnosis where confidence guides clinician trust.
  - Autonomous systems weighing risk under uncertainty.
  - Fraud and credit scoring requiring meaningful probabilities.
  - Ensemble and selective-prediction pipelines that abstain when uncertain.
- ### Provenance

