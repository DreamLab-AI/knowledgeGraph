
GitOps is an operational model in which the desired state of infrastructure and applications is declared in version-controlled repositories and continuously reconciled into running systems by automated agents. Git becomes the single source of truth, so changes flow through pull requests and merges while reconcilers detect and correct drift. It applies software-delivery practices, review, audit and rollback, to operations.

- ### Overview
	- GitOps closes the loop between declared intent and actual state. Operators commit declarative manifests describing applications, networking and policy; an in-cluster agent watches the repository and applies any differences, reverting unauthorised changes.
	- Because every change is a tracked commit, GitOps inherits review, [[Audit Logging]], reproducibility and instant rollback from version-control workflows. It is most mature in [[Kubernetes]] and [[Container Orchestration]] environments where declarative APIs make reconciliation natural.
	- The model integrates with [[Continuous Integration]] for building artefacts and with [[Continuous Delivery]] for promoting them across environments, while [[Observability]] confirms that the converged state is healthy.
- ### Key aspects
	- Declarative configuration stored entirely in [[Version Control]].
	- Continuous reconciliation that converges actual state toward declared state.
	- Drift detection and automatic correction of out-of-band changes.
	- Pull-request workflows providing review, approval and audit.
	- Fast, deterministic rollback by reverting commits.
- ### Applications
	- Managing Kubernetes clusters and workloads declaratively.
	- Promoting releases across environments through [[Continuous Delivery]].
	- Enforcing policy and [[Configuration Management]] as code.
	- Accelerating [[Disaster Recovery]] by re-applying the repository to fresh infrastructure.
- ### Provenance

