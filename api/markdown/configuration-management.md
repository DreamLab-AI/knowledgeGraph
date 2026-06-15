- ### Definition
  - Configuration management is the engineering discipline of systematically establishing, recording, and maintaining the desired state of a system's components, settings, and dependencies across its lifecycle. As a practice within [[Software Engineering]], it treats configuration as versioned, auditable artefacts under [[Version Control]] rather than ad hoc manual edits.
  - It implements [[Change Management]] and underpins [[DevOps]] and [[Continuous Integration]] by making environments reproducible and consistent.

- ### Overview
  - The core problem configuration management solves is drift: over time, manually administered systems diverge from their intended state and from each other, producing the "works on my machine" failure mode and brittle, irreproducible environments. Configuration management replaces manual administration with explicit, version-controlled definitions of how a system should be configured.
  - Classical configuration management originated in systems administration and quality engineering, tracking the state of hardware and software baselines. The modern form, infrastructure-as-code, expresses the desired state declaratively so that tooling can converge real systems to match, idempotently and repeatably.
  - By recording every configuration as code, the discipline gains the benefits of software engineering: review, testing, history, and rollback. A misconfiguration becomes a diff that can be inspected and reverted, and an [[Audit]] trail follows automatically.

- ### Key aspects
  - **Desired-state definition** — Configurations are declared explicitly, describing the target state of packages, services, files, and settings rather than the steps to reach it.
  - **Version control** — All configuration artefacts live under [[Version Control]], giving history, branching, review, and the ability to reproduce any prior state.
  - **Idempotent convergence** — Tools apply configurations idempotently, so repeated runs converge systems to the desired state without unintended side effects.
  - **Change management** — Modifications flow through a controlled [[Change Management]] process — proposal, review, approval, and traceable application.
  - **Auditability** — Because every change is recorded, the system supports [[Audit]] and compliance, answering who changed what, when, and why.
  - **Environment consistency** — Development, staging, and production environments are defined from the same sources, eliminating drift and supporting reliable [[Testing]].

- ### Applications
  - **Infrastructure-as-code** — Declarative provisioning of servers, networks, and cloud resources, enabling reproducible infrastructure.
  - **Continuous delivery** — Configuration management feeds [[Continuous Integration]] and deployment pipelines so releases are consistent and repeatable.
  - **DevOps practice** — It is a foundational capability of [[DevOps]], aligning development and operations around shared, codified system definitions.
  - **Disaster recovery** — Reproducible configuration allows environments to be rebuilt rapidly from source after failure.
  - **Compliance and governance** — Versioned configuration provides the [[Audit]] evidence needed for regulated environments and [[Quality Assurance]].

- ### Relationships
  - subClassOf:: [[Software Engineering]]
  - hasPart:: [[Version Control]]
  - hasPart:: [[Change Management]]
  - requires:: [[Version Control]]
  - enables:: [[Continuous Integration]]
  - enables:: [[DevOps]]
  - supports:: [[DevOps]]
  - supports:: [[Quality Assurance]]
  - implements:: [[Change Management]]
  - dependsOn:: [[Software Engineering]]
  - relatedTo:: [[Testing]]
  - relatedTo:: [[Audit]]
  - bridgesTo:: [[DevOps]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15