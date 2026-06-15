- ### Definition
  - [[Platform As A Service]] (PaaS) is a [[cloud computing]] model providing a managed runtime, database, and toolchain so developers can deploy [[application development]] projects without managing [[Infrastructure As A Service]] directly.
  - PaaS sits between [[Infrastructure As A Service]] (raw VMs) and [[Software As A Service]] (fully managed applications) in the cloud service stack.
  - It accelerates [[DevOps]] and [[Continuous Integration]] by abstracting server configuration, patching, and scaling.

- ### Overview
  - PaaS originated with Google App Engine (2008) and Force.com (Salesforce, 2007) as the first managed application platforms.
  - Heroku (2007) popularised git-push deployment, establishing the developer experience template for PaaS.
  - Modern PaaS offerings integrate CI/CD pipelines, managed databases, secret management, and observability tooling.
  - Kubernetes-native PaaS (OpenShift, Tanzu, Cloud Foundry) bridges PaaS convenience with IaaS flexibility.
  - Container-based PaaS has largely superseded language-runtime-locked early PaaS models.

- ### Key aspects
  - Abstracts OS management: patching, security hardening, and runtime upgrades managed by provider.
  - Buildpacks or container images define application runtime environments.
  - Managed services: databases, caches, message queues, search engines available as platform add-ons.
  - Built-in horizontal scaling via dyno/instance count adjustment.
  - Multi-tenancy with namespace isolation between customer applications.

- ### Mechanisms
  - Slug compilation or container build transforms source code into deployable artefacts.
  - Router/load balancer distributes inbound traffic across application instances.
  - Ephemeral filesystem encourages stateless application design; state externalised to managed services.
  - Health checks and automatic restarts maintain application availability.

- ### Applications
  - Rapid prototype and MVP deployment for startups without infrastructure teams.
  - Enterprise internal developer portals standardising deployment workflows.
  - SaaS product backends requiring elastic scaling without ops overhead.
  - API backends for mobile and web applications.
  - Machine learning model serving endpoints.

- ### Relationships
  - hasPart:: [[Runtime Environment]]
  - hasPart:: [[Database]]
  - hasPart:: [[Middleware]]
  - enables:: [[Application Development]]
  - enables:: [[Continuous Integration]]
  - enables:: [[DevOps]]
  - partOf:: [[Cloud Computing]]
  - contrastsWith:: [[Infrastructure As A Service]]
  - contrastsWith:: [[Software As A Service]]
  - dependsOn:: [[Infrastructure As A Service]]
  - supports:: [[Microservices]]
  - relatedTo:: [[Cloud Infrastructure]]
  - uses:: [[Kubernetes]]

- ### Provenance
  - updated:: 2026-06-15