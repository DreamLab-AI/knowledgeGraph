- ### Definition
  - Machine learning operations applies [[DevOps]] principles and automation across the ML lifecycle so models can be reliably built, deployed, monitored, and retrained in production. It coordinates the [[Data Pipeline]], [[Feature Store]], [[Model Registry]], [[Model Deployment]], and [[Model Monitoring]] into a continuous, versioned system. Treating data, code, and models as testable artifacts makes ML systems reproducible and auditable. It is the operational equivalent of MLOps and a specialised branch of production [[Infrastructure]].

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

- ### Relationships
  - hasPart:: [[Model Deployment]]
  - hasPart:: [[Model Monitoring]]
  - hasPart:: [[Model Registry]]
  - uses:: [[Continuous Integration]]
  - uses:: [[Kubernetes]]
  - uses:: [[Feature Store]]
  - requires:: [[Data Pipeline]]
  - requires:: [[Data Versioning]]
  - implements:: [[DevOps]]
  - enables:: [[Model Serving]]
  - enables:: [[Model Versioning]]
  - supports:: [[Model Governance]]
  - dependsOn:: [[Data Pipeline]]
  - bridgesTo:: [[DevOps]]
  - bridgesTo:: [[Machine Learning]]
  - relatedTo:: [[Model Training]]
  - relatedTo:: [[Model Deployment]]

- ### Provenance
  - sources:: Google Cloud MLOps maturity model (Continuous delivery and automation pipelines in machine learning); Sculley et al. (2015) Hidden Technical Debt in Machine Learning Systems
  - updated:: 2026-06-15