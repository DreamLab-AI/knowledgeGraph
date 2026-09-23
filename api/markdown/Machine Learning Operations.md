
Machine learning operations is the discipline of applying DevOps principles, tooling, and automation to the end-to-end machine learning lifecycle so that models can be reliably built, deployed, monitored, and retrained in production. It coordinates data pipelines, experiment tracking, model registries, continuous integration and delivery, serving infrastructure, and observability to bridge the gap between data-science experimentation and dependable operational systems. By treating data, code, and models as versioned, testable artifacts, it makes ML systems reproducible, auditable, and continuously improvable rather than fragile one-off deployments.

- ### Overview
  - Machine learning operations arose because traditional software delivery practices do not account for the data and model dimensions that make ML systems uniquely fragile.
  - It extends [[DevOps]] with practices specific to ML: managing training data, tracking experiments, validating models before release, and detecting performance decay after deployment.
  - The discipline spans the full lifecycle — data ingestion, feature engineering, training, validation, deployment, serving, and monitoring with feedback loops back to retraining.
  - Maturity ranges from manual notebook-to-production handoffs through to fully automated continuous training pipelines triggered by data or performance changes.

- ### Key aspects
  - #### Versioning
    - Code, [[Data Versioning]], and [[Model Versioning]] are tracked together so any deployed model can be reproduced from its exact inputs.
  - #### Continuous integration and delivery
    - [[Continuous Integration]] pipelines test data schemas, model quality gates, and packaging before promotion to serving environments.
  - #### Serving and orchestration
    - Models are containerised and deployed on platforms such as [[Kubernetes]] for scalable, reproducible [[Model Serving]].
  - #### Monitoring
    - [[Model Monitoring]] tracks data drift, prediction drift, and quality metrics, triggering alerts and retraining.

- ### Mechanisms
  - #### Pipelines
    - Orchestrated [[Data Pipeline]] and training workflows automate the path from raw data to a registered, deployable model.
  - #### Registries and feature stores
    - A [[Model Registry]] catalogues model versions with lineage and stage, while a [[Feature Store]] provides consistent features for training and inference.
  - #### Continuous training
    - Performance or drift signals from monitoring close the loop by triggering automated retraining and controlled rollout.

- ### Applications
  - **Production recommendation systems** — continuous retraining keeps models current with shifting user behaviour.
  - **Fraud and risk models** — tight monitoring and rapid redeployment respond to adversarial drift.
  - **LLM and generative pipelines** — operationalising prompt, fine-tune, and evaluation workflows extends MLOps to large models.
  - **Regulated model deployment** — versioned artifacts and audit trails support [[Model Governance]] and compliance review.
  - **Edge ML** — packaging and updating models on distributed devices via automated [[Model Deployment]].

- ### Provenance

