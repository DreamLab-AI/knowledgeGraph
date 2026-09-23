
Terraform is an open-source infrastructure-as-code tool that lets engineers define cloud and on-premises resources in declarative configuration files and provision them through a consistent execution workflow. It maintains a state file that records the real-world mapping of declared resources, computes a plan describing the changes needed to reach the desired state, and applies those changes idempotently. Terraform supports many providers through a plugin model, enabling multi-cloud and hybrid provisioning from a single configuration language.

- ### Overview
	- Terraform was created to give teams a single, provider-agnostic language for describing infrastructure rather than clicking through cloud consoles or writing imperative scripts.
	- Configurations are written in HashiCorp Configuration Language (HCL), a human-readable declarative syntax that describes the desired end state of resources.
	- The tool reconciles the declared desired state against a persisted state file, producing a plan that shows exactly which resources will be created, changed, or destroyed before any action is taken.
	- A plugin-based provider model lets Terraform manage hundreds of platforms, from major cloud providers to DNS, monitoring, and SaaS services, enabling multi-cloud and hybrid deployments.
- ### Key aspects
	- Declarative configuration: engineers specify the desired outcome, and Terraform determines the operations required to achieve it.
	- State management: a state file tracks the mapping between configuration and real resources, supporting drift detection and incremental change.
	- Plan and apply workflow: a dry-run plan precedes any mutation, improving safety and reviewability.
	- Provider plugins: an extensible ecosystem abstracts disparate APIs behind a uniform resource model.
	- Modules: reusable, parameterised configuration units that promote composition and standardisation.
- ### Mechanisms
	- Dependency graph construction: Terraform builds a directed acyclic graph of resources to determine correct creation and destruction ordering.
	- Idempotent reconciliation: repeated applies converge on the same desired state without unintended side effects.
	- Remote state backends: state can be stored centrally to support collaboration, locking, and consistency across teams.
- ### Applications
	- Provisioning compute, networking, and storage across [[Cloud Infrastructure]] providers.
	- Standardising environment creation for development, staging, and production in [[DevOps]] pipelines.
	- Managing [[Kubernetes]] clusters and their supporting cloud resources.
	- Codifying [[Data Centre]] and hybrid infrastructure for auditable, repeatable deployments.
- ### Provenance

