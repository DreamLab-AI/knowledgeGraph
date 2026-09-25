Data drift is the change over time in the statistical distribution of the input data fed to a deployed machine learning model relative to the distribution it was trained on. Unlike concept drift, which alters the relationship between inputs and targets, data drift (also called covariate or feature drift) shifts the marginal distribution of the features themselves and can silently degrade model accuracy even when the learned mapping remains valid. Detecting and responding to data drift is a central concern of model monitoring and MLOps, typically driving alerts, scheduled retraining, or fallback policies.

### In Plain Terms

- When the real-world data an AI meets in daily use slowly drifts away from the examples it was trained on — a demand forecaster trained before a market shift, say. Nothing about the model changes, but its answers quietly get less accurate, which is why its incoming data is watched over time.

### Overview

- A model learns patterns from a snapshot of the world; once deployed, the world keeps moving. When the live feature distribution diverges from the training distribution, the model is asked to extrapolate beyond its support, and predictions become unreliable.
- Data drift is distinguished from concept drift: data drift moves the distribution of X while leaving P(Y|X) intact, whereas concept drift moves P(Y|X) itself. In practice both can co-occur and both degrade live performance.
- Drift can be gradual (slow demographic change), sudden (a new data source or sensor), or seasonal (recurring cyclical patterns). Each profile calls for different detection windows and response policies.

### Mechanisms

- Statistical distance tests such as Kolmogorov-Smirnov, Population Stability Index, and Jensen-Shannon divergence compare reference and live windows.
- Density-based monitoring uses [[Density Estimation]] to score the likelihood of incoming samples under the training distribution.
- Embedding and reconstruction methods flag drift in high-dimensional or unstructured data where univariate tests fail.
- Alerting and automated [[Retraining]] pipelines close the loop when drift exceeds thresholds.

### Applications

- Production monitoring of credit, fraud, and recommendation models.
- Triggering scheduled or event-driven model retraining.
- Data-quality gating in feature stores and ingestion pipelines.
- Root-cause analysis when live metrics degrade.

### Provenance

