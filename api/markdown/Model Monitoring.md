Model monitoring is the continuous observation of a deployed machine learning model's inputs, outputs, and performance in production to detect degradation, data drift, concept drift, and operational issues. It tracks predictive quality, latency, and input distributions against baselines and triggers alerts or retraining when thresholds are breached. As a core MLOps practice, it closes the loop between deployment and maintenance, sustaining model reliability over time.

### Overview

- Once a model is in production via [[Model Deployment]], its accuracy can silently decay as the world changes.
- Monitoring tracks live predictions, input distributions, and quality metrics over time.
- Drift in inputs or in the input-output relationship signals that the model may no longer be valid.
- Detected issues route to alerting, investigation, and [[Model Training]] for refresh.

### Mechanisms

- Tracking prediction quality where ground truth becomes available.
- Data and concept drift detection comparing live distributions to training baselines.
- Operational metrics: latency, throughput, error rates, and resource use.
- [[Anomaly Detection]] over feature and output streams to surface outliers.

### Key aspects

- Drift: distributional shift in inputs or labels degrading performance.
- Ground-truth lag: delayed labels complicate quality measurement.
- Baselines: training-time references against which production is judged.
- Closed loop: connecting detection to retraining and redeployment.

### Applications

- Production ML in fraud, recommendation, and risk scoring.
- Regulated domains requiring auditable model performance.
- Automated retraining triggers in continuous-delivery pipelines.
- Governance reporting drawing on the [[Model Registry]].

### Provenance

