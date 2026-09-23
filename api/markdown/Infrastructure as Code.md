
Infrastructure as Code (IaC) is the practice of defining and provisioning computing infrastructure through machine-readable definition files rather than manual configuration. Declarative or imperative specifications describe the desired state of servers, networks, and services, which tooling then realises idempotently and reproducibly. Treating infrastructure like software allows version control, peer review, automated testing, and consistent deployment across environments, eliminating configuration drift.

- ### Overview
	- Manual infrastructure provisioning is slow, error-prone, and impossible to audit at scale.
	- IaC captures the desired state declaratively so tooling can converge real infrastructure to that state.
	- Because definitions are code, they benefit from review, testing, and reproducible deployment.
	- The approach eliminates configuration drift by making the repository the single source of truth.
- ### Key aspects
	- Declarative specification of the target state, with the engine computing the change plan.
	- Idempotency: applying the same definition repeatedly yields the same result.
	- Versioning and review of infrastructure changes alongside application code.
	- Drift detection and remediation to keep environments consistent.
- ### Applications
	- Provisioning cloud resources across multiple providers and regions.
	- Building reproducible staging and production environments from one definition.
	- GitOps pipelines where merges trigger infrastructure changes.
	- Disaster recovery by recreating entire environments from code.
- ### Provenance

