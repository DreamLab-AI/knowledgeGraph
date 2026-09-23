
Cloud-native architecture is an approach to designing and operating applications that fully exploit elastic, on-demand cloud infrastructure. It favours loosely coupled, independently deployable services packaged in containers, orchestrated dynamically, and managed through automation, declarative configuration and continuous delivery. The goal is resilient, scalable systems that can be evolved rapidly and recover automatically from failure.

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

- ### Provenance

