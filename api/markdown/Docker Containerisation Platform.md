public:: true

elevatedFrom:: [[Docker]]
# Docker Containerisation Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:docker",
  "@type": "Page",
  "vc:slug": "docker-containerisation-platform",
  "title": "Docker Containerisation Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:docker-containerisation-platform",
  "@type": "Class",
  "label": "Docker Containerisation Platform",
  "definition": "Docker is an open-source platform that automates the deployment, scaling, and management of applications by packaging them together with their runtime dependencies into lightweight, portable containers built on Linux kernel primitives (namespaces and cgroups). Unlike virtual machines, Docker containers share the host operating system kernel, providing process and filesystem isolation with far lower overhead while guaranteeing consistent execution across heterogeneous computing environments. Launched in 2013 by Docker Inc., the platform introduced an intuitive developer-facing toolchain, a layered image format, and the Docker Hub public registry, collectively mainstreaming container technology and catalysing the cloud-native ecosystem. Docker standardised container packaging through the Open Container Initiative (OCI) specification and remains the dominant interface for building, distributing, and running container images in both development and production contexts.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:software-platform", "label": "Software Platform"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:container-image", "label": "Container Image"},
      {"@id": "urn:ngm:class:container-registry", "label": "Container Registry"},
      {"@id": "urn:ngm:class:docker-compose", "label": "Docker Compose"},
      {"@id": "urn:ngm:class:container-runtime", "label": "Container Runtime"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:linux-kernel", "label": "Linux Kernel"},
      {"@id": "urn:ngm:class:operating-system-namespaces", "label": "Operating System Namespaces"},
      {"@id": "urn:ngm:class:control-groups", "label": "Control Groups"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cloud-native-applications", "label": "Cloud-Native Applications"},
      {"@id": "urn:ngm:class:continuous-integration-continuous-delivery", "label": "Continuous Integration Continuous Delivery"},
      {"@id": "urn:ngm:class:machine-learning-discipline-infrastructure", "label": "Machine Learning Infrastructure"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:devops", "label": "DevOps"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"},
      {"@id": "urn:ngm:class:cloud-platform", "label": "Cloud Platform"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:overlay-filesystem", "label": "Overlay Filesystem"},
      {"@id": "urn:ngm:class:container-networking", "label": "Container Networking"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:machine-learning-discipline-pipeline", "label": "Machine Learning Pipeline"},
      {"@id": "urn:ngm:class:software-engineering", "label": "Software Engineering"},
      {"@id": "urn:ngm:class:model-ops", "label": "ModelOps"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:open-container-initiative", "label": "Open Container Initiative"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:virtual-machine", "label": "Virtual Machine"},
      {"@id": "urn:ngm:class:serverless-computing", "label": "Serverless Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"},
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:software-infrastructure", "label": "Software Infrastructure"},
      {"@id": "urn:ngm:class:development-platform", "label": "Development Platform"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:gpu-computing", "label": "GPU Computing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:docker-engine", "label": "Docker Engine"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Docker is the leading open-source [[Containerisation]] platform that packages applications together with all their runtime dependencies into standardised, portable units called containers, enabling consistent and reproducible execution across development, testing, staging, and production environments. It builds upon [[Linux Kernel]] primitives — specifically [[Operating System Namespaces]] and [[Control Groups]] (cgroups) — to provide lightweight process isolation without the overhead of full [[Virtual Machine]] virtualisation. Docker's layered [[Container Image]] format, declarative [[Dockerfile]] syntax, and the [[Docker Hub]] public registry collectively lowered the barrier to entry for container adoption and established the patterns now codified in the [[Open Container Initiative]] specification.
- ### Overview
  - Docker was first released in March 2013 by dotCloud (later renamed Docker Inc.) and rapidly became one of the most consequential infrastructure technologies of the decade. By wrapping Linux container primitives behind a clean API and intuitive CLI tooling, Docker made [[Containerisation]] accessible to developers without deep Linux kernel expertise.
  - The core insight Docker delivered was reproducibility: a container image captures an application's code, runtime, libraries, environment variables, and configuration as an immutable, versioned artefact. This "build once, run anywhere" model solved the persistent "works on my machine" problem that plagued software teams, dramatically improving parity between development and production environments.
  - Docker images use a copy-on-write layered filesystem (typically [[Overlay Filesystem]]) so that common base layers — such as a standard [[Linux]] distribution or language runtime — are shared across images on a given host, minimising storage and download costs. Each instruction in a [[Dockerfile]] produces a new read-only layer; a thin writable layer is added only when a container is instantiated.
  - Docker's influence spread beyond application packaging to become the foundational primitive of the modern [[Cloud-Native Applications]] movement, catalysing [[Kubernetes]], service meshes, and the broader [[DevOps]] transformation of software delivery.
- ### Key Components
  - **Docker Engine** — the daemon process (`dockerd`) and REST API that manages image builds, container lifecycle, networking, and storage volumes on a host.
  - **Dockerfile** — a declarative text file specifying how to construct a [[Container Image]] layer by layer; the canonical build artefact for reproducible environments.
  - **[[Container Image]]** — an immutable, layered bundle containing application code, runtime, system libraries, and configuration, identified by a content-addressable digest. Distributed via [[Container Registry]] services.
  - **[[Container Registry]]** — a repository service for storing and distributing container images. Docker Hub is the default public registry; enterprise deployments commonly use private registries such as Amazon ECR, Google Artifact Registry, or self-hosted Harbor.
  - **[[Docker Compose]]** — a YAML-based tool for defining and running multi-container application stacks locally, specifying services, networks, and volumes in a single `docker-compose.yml` file. Central to development workflow standardisation.
  - **[[Container Runtime]]** — the low-level component that actually executes containers. Docker originally used LXC, then moved to its own `libcontainer`, now abstracted via `containerd` (a CNCF-graduated project) and `runc` (the OCI-compliant reference runtime).
  - **[[Container Networking]]** — Docker provides pluggable network drivers (bridge, host, overlay, macvlan) enabling containers to communicate within a host or across a cluster, with built-in DNS resolution for service discovery.
  - **Volumes and Bind Mounts** — persistent storage mechanisms decoupling data lifecycle from container lifecycle, critical for stateful workloads such as databases and [[Machine Learning Pipeline]] artefact storage.
  - **Docker Desktop** — the GUI application for macOS and Windows developers, bundling the Docker Engine, CLI, Docker Compose, and Kubernetes in a single installer; the primary on-ramp for developer adoption.
- ### Applications and Use Cases
  - **[[Continuous Integration Continuous Delivery]] (CI/CD)** — Docker containers provide isolated, reproducible build and test environments in CI pipelines (Jenkins, GitHub Actions, GitLab CI), eliminating environment drift between pipeline stages.
  - **[[Microservices Architecture]]** — each microservice is packaged as an independent container image, enabling independent deployment, scaling, and versioning of service components. Docker Compose supports local multi-service development; [[Kubernetes]] handles production orchestration.
  - **[[Machine Learning Infrastructure]]** — ML frameworks (PyTorch, TensorFlow, JAX) publish official Docker images. Container packaging captures complex dependency chains including CUDA drivers, cuDNN, and compiled C extensions, ensuring reproducible training and inference environments. Platforms such as Kubeflow, MLflow, and Ray all use containers as the unit of compute.
  - **[[Model Ops]]** — model serving endpoints are containerised for consistent deployment across cloud providers; containers enable A/B testing, canary deployments, and rollback of model versions without infrastructure changes.
  - **[[Edge Computing]]** — lightweight containers are deployed to edge devices and IoT gateways, enabling the same images developed in the cloud to run at the edge with minimal adaptation. Docker's ARM support is critical here.
  - **Development Environment Standardisation** — Dev Containers (VS Code Remote Containers) define the entire development environment as a container, ensuring all team members work in identical toolchains regardless of host OS.
  - **[[GPU Computing]] Workloads** — the NVIDIA Container Toolkit (formerly nvidia-docker) exposes GPU resources to containers, enabling graphics and ML workloads to run inside Docker without sacrificing hardware access.
  - **[[Federated Learning]]** — federated training frameworks use Docker containers to deploy identical training environments to distributed participant nodes, ensuring consistent model updates across heterogeneous infrastructure.
  - **Security Scanning and Compliance** — Docker Scout and third-party tools (Trivy, Snyk) scan container images for known CVEs, enabling supply chain security checks to be integrated into build pipelines.
- ### Relationships
  - hasPart:: [[Container Image]]
  - hasPart:: [[Container Registry]]
  - hasPart:: [[Docker Compose]]
  - hasPart:: [[Container Runtime]]
  - requires:: [[Linux Kernel]]
  - requires:: [[Operating System Namespaces]]
  - requires:: [[Control Groups]]
  - enables:: [[Cloud-Native Applications]]
  - enables:: [[Continuous Integration Continuous Delivery]]
  - enables:: [[Machine Learning Infrastructure]]
  - enables:: [[Microservices Architecture]]
  - enables:: [[DevOps]]
  - dependsOn:: [[Open Source Software]]
  - dependsOn:: [[Cloud Platform]]
  - uses:: [[Overlay Filesystem]]
  - uses:: [[Container Networking]]
  - supports:: [[Machine Learning Pipeline]]
  - supports:: [[Software Engineering]]
  - supports:: [[Model Ops]]
  - supports:: [[Edge Computing]]
  - standardizedBy:: [[Open Container Initiative]]
  - contrastsWith:: [[Virtual Machine]]
  - contrastsWith:: [[Serverless Computing]]
  - relatedTo:: [[Kubernetes]]
  - relatedTo:: [[Cloud Infrastructure]]
  - relatedTo:: [[Software Infrastructure]]
  - relatedTo:: [[Development Platform]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[GPU Computing]]
- ### Standards and Context
  - **[[Open Container Initiative]] (OCI)** — founded in 2015 under the Linux Foundation, the OCI defines the Image Specification (OCI Image Format) and Runtime Specification (`runc`), ensuring interoperability across container tools and runtimes. Docker's image format and `runc` runtime are the basis for both specifications.
  - **Cloud Native Computing Foundation (CNCF)** — `containerd` (Docker's container runtime) is a CNCF graduated project. The CNCF landscape includes dozens of tools that interoperate with Docker images: [[Kubernetes]], Helm, Argo, Flux, and others.
  - **NIST SP 800-190** — "Application Container Security Guide" from the US National Institute of Standards and Technology provides guidance on securing container deployments, addressing image trust, runtime security, and network policy.
  - **CIS Docker Benchmark** — the Center for Internet Security publishes a hardening benchmark for Docker Engine configuration, covering daemon settings, image hygiene, and runtime controls. Widely adopted in regulated industries.
  - **Supply Chain Levels for Software Artefacts (SLSA)** — an emerging framework encouraging provenance attestation for container images, supported by Docker's image signing and verification tooling (Notary, cosign/Sigstore).
  - Docker Engine is licensed under the Apache 2.0 licence. Docker Desktop requires a paid subscription for commercial use in enterprises above a certain size (changed in 2022).
- ### Provenance
  - sources:: Docker official documentation (docs.docker.com); Open Container Initiative specifications (opencontainers.org); CNCF Annual Survey; NIST SP 800-190; CIS Docker Benchmark
  - updated:: 2026-06-13
