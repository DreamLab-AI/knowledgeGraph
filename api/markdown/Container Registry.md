
A content-addressed storage and distribution service for container images that implements the OCI Distribution Specification's push, pull, and discovery API. Registries hold image layers and manifests under named, tagged repositories, enforce authentication and access control, and increasingly store signatures, SBOMs, and other supply-chain artefacts alongside images, making them the central hand-off point between build pipelines and every runtime that deploys containerised software.

- ### Semantic Classification

- ### Content

  ## Definition

  A **container registry** is the distribution tier of containerised infrastructure: an HTTP service where build systems push [[Container Image]] artefacts and runtimes pull them. A registry organises images into *repositories* (for example `library/nginx`), each holding tagged references that resolve to content-addressed manifests and layers. Because every blob is identified by digest, clients transfer only layers they do not already hold, and a manifest fetched by digest is cryptographically guaranteed to be the exact artefact that was pushed.

  The push/pull protocol originated with the [[Docker Containerisation Platform]] and Docker Hub, and was standardised as the OCI Distribution Specification, so a single client can talk to Docker Hub, GitHub Container Registry, Google Artifact Registry, Amazon ECR, Azure ACR, Quay.io, or self-hosted registries such as Harbor, Zot and the CNCF Distribution reference implementation. Registries sit on the critical path of deployment: cluster nodes pull from them on every scale-up, so availability, geo-replication, and pull-through caching are first-order operational concerns.

  Modern registries have grown into supply-chain control points. Beyond images they store OCI artefacts generally — Helm charts, WASM modules, SBOMs, Sigstore signatures and in-toto attestations attached via the referrers API — and enforce policy: vulnerability scanning on push, tag immutability, retention rules and fine-grained access tokens. A registry differs from a [[Model Registry]] in kind: it versions opaque, content-addressed filesystem bundles for execution, whereas a model registry tracks trained ML models with experiment lineage, metrics and stage transitions; MLOps platforms increasingly bridge the two by packaging models as OCI artefacts.

  ## Current Landscape

  - **Hosted services**: Docker Hub remains the default public namespace; GitHub Container Registry (ghcr.io) dominates open-source CI integration; ECR, ACR, and Artifact Registry are standard within their clouds, with cross-region replication and IAM-native auth.
  - **Self-hosted**: Harbor (CNCF graduated) is the enterprise standard, adding RBAC projects, scanning (Trivy integration), replication and proxy caching; Zot is a minimal OCI-native alternative; JFrog Artifactory and Sonatype Nexus cover mixed-artefact estates.
  - **Supply-chain shift**: the OCI 1.1 referrers API made signatures, SBOMs and provenance first-class registry content; admission controllers (Kyverno, Sigstore policy-controller) now verify these at deploy time, turning the registry into the enforcement anchor for SLSA-style provenance.
  - **Operational patterns**: pull-through mirrors to survive upstream rate limits, digest pinning in manifests, image garbage collection tied to retention policy, and air-gapped replication for regulated and edge environments.

