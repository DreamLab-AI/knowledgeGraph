public:: true

# Container Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1feee884a8bed36f13aa70e0bdd3691c205aa75163edd0cdf6f45ed47c91358c",
  "@type": "Page",
  "vc:slug": "container-registry",
  "title": "Container Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:containerisation",
      "vc:label": "Containerisation"
    },
    {
      "@id": "urn:visionflow:linked:container-image",
      "vc:label": "Container Image"
    },
    {
      "@id": "urn:visionflow:linked:docker-containerisation-platform",
      "vc:label": "Docker Containerisation Platform"
    },
    {
      "@id": "urn:visionflow:linked:model-registry",
      "vc:label": "Model Registry"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:container-registry",
  "@type": "Class",
  "label": "Container Registry",
  "definition": "A content-addressed storage and distribution service for container images that implements the OCI Distribution Specification's push, pull, and discovery API. Registries hold image layers and manifests under named, tagged repositories, enforce authentication and access control, and increasingly store signatures, SBOMs, and other supply-chain artefacts alongside images, making them the central hand-off point between build pipelines and every runtime that deploys containerised software.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:containerisation",
    "label": "Containerisation"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:container-image",
        "label": "Container Image"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:docker-containerisation-platform",
        "label": "Docker Containerisation Platform"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A content-addressed storage and distribution service for container images that implements the OCI Distribution Specification's push, pull, and discovery API. Registries hold image layers and manifests under named, tagged repositories, enforce authentication and access control, and increasingly store signatures, SBOMs, and other supply-chain artefacts alongside images, making them the central hand-off point between build pipelines and every runtime that deploys containerised software."

- ### Semantic Classification
  - owl-class:: infrastructure:ContainerRegistry
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Containerisation]]
  - has-part:: [[Container Image]]
  - part-of:: [[Docker Containerisation Platform]]
  - contrasts-with:: [[Model Registry]]

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
