- ### Definition
  - Cloud-native architecture builds applications to exploit elastic [[Cloud Infrastructure]], composing them from [[Microservices]] packaged through [[Containerisation]].
  - It relies on dynamic orchestration with [[Kubernetes]] and automation via [[DevOps]] and [[Infrastructure as Code]].

- ### Overview
  - The pattern decomposes systems into small, independently deployable services that scale horizontally and fail gracefully.
  - It assumes infrastructure is programmable and disposable, so resources are provisioned, replaced and torn down automatically.
  - Practices such as the twelve-factor methodology, immutable artefacts and continuous delivery make services portable and reproducible.

- ### Key aspects
  - Container packaging and declarative orchestration of workloads.
  - Loose coupling and API-driven communication between [[Microservices]].
  - Automated, repeatable provisioning through [[Infrastructure as Code]].
  - Built-in [[Observability]] for metrics, logs and traces, plus self-healing.

- ### Applications
  - Elastic web and API platforms that scale with demand.
  - Continuous-delivery pipelines releasing many times per day.
  - Multi-cloud and hybrid deployments needing portability.
  - Resilient back-ends using [[Service Mesh]] for traffic control.

- ### Relationships
  - subClassOf:: [[Cloud Infrastructure]]
  - hasPart:: [[Microservices Architecture]]
  - hasPart:: [[Containerisation]]
  - requires:: [[Containerisation]]
  - requires:: [[Kubernetes]]
  - enables:: [[High Availability]]
  - enables:: [[Continuous Deployment]]
  - dependsOn:: [[Infrastructure as Code]]
  - dependsOn:: [[Observability]]
  - uses:: [[DevOps]]
  - supports:: [[Immutable Infrastructure]]
  - contrastsWith:: [[Service-Oriented Architecture]]
  - bridgesTo:: [[Twelve-Factor App]]
  - bridgesTo:: [[Service Mesh]]
  - relatedTo:: [[DevOps]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation