- ### Definition
  - Model governance is the framework of policies, roles, controls, and documentation applied across a model's lifecycle to manage its risk and ensure fitness for purpose. It establishes accountability for development, [[Model Validation]], approval, deployment, and [[Model Monitoring]], evidenced by [[Model Cards]], [[Audit Trail]] records, and validation reports. It is a domain-specific application of [[AI Governance]] that operationalises [[Responsible AI]] and underpins [[Regulatory Compliance]] for analytical and machine-learning systems.

- ### Overview
  - Model governance matured first in regulated finance, where supervisory guidance on model risk management established formal validation and oversight expectations, and has since broadened to all AI-driven decision systems.
  - It assigns clear ownership across the three lines of defence — model developers, independent validators, and internal audit — to avoid the conflicts of self-assessment.
  - Governance gates require that models pass documented review before deployment and remain under continuous oversight afterwards.
  - Emerging AI regulation, including risk-tiered regimes, is making structured model governance a legal as well as a prudential requirement.

- ### Key aspects
  - #### Lifecycle controls
    - Defined stage gates for development, [[Model Validation]], approval, deployment, and decommissioning, each with required evidence.
  - #### Documentation
    - [[Model Documentation]] and [[Model Cards]] capture purpose, data, limitations, performance, and intended use for review and reuse.
  - #### Independent validation
    - [[Model Validation]] independently challenges assumptions, data, and performance, testing for robustness and [[Fairness]].
  - #### Ongoing oversight
    - [[Model Monitoring]] and periodic revalidation detect drift and degradation, with an [[Audit Trail]] recording decisions and changes.

- ### Mechanisms
  - #### Model inventory
    - A central register (often a [[Model Registry]]) records every model, its risk tier, owner, and approval status.
  - #### Review and approval
    - Risk-tiered review boards approve high-impact models and set conditions, monitoring frequency, and escalation paths.
  - #### Explainability and challenge
    - [[Explainability]] techniques support effective challenge by validators and meaningful accountability to affected parties.

- ### Applications
  - **Credit and capital models** — banks govern rating and provisioning models under prudential model-risk expectations.
  - **Healthcare AI** — clinical models require validation, documentation, and monitoring before and after deployment.
  - **Hiring and lending decisions** — governance enforces [[Fairness]] testing and adverse-impact review for consequential decisions.
  - **Generative AI controls** — governing prompts, fine-tunes, and evaluations of large models extends the framework to new model classes.
  - **Regulated reporting** — [[Audit Trail]] and documentation evidence satisfy auditors and supervisors, supporting [[Regulatory Compliance]].

- ### Relationships
  - hasPart:: [[Model Validation]]
  - hasPart:: [[Model Documentation]]
  - hasPart:: [[Model Cards]]
  - requires:: [[Model Monitoring]]
  - requires:: [[Audit Trail]]
  - requires:: [[Explainability]]
  - partOf:: [[AI Governance]]
  - enables:: [[Responsible AI]]
  - enables:: [[Regulatory Compliance]]
  - uses:: [[Model Evaluation]]
  - uses:: [[Model Registry]]
  - supports:: [[Fairness]]
  - supports:: [[Regulatory Compliance]]
  - bridgesTo:: [[MLOps]]
  - bridgesTo:: [[Data Governance]]
  - relatedTo:: [[Model Deployment]]
  - relatedTo:: [[Responsible AI]]

- ### Provenance
  - sources:: US Federal Reserve / OCC SR 11-7 Guidance on Model Risk Management; NIST AI Risk Management Framework; Mitchell et al. (2019) Model Cards for Model Reporting
  - updated:: 2026-06-15