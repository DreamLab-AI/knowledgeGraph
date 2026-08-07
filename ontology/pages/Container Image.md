public:: true

# Container Image
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2ec6ba5d5fafce5fe95b5f7b03e5a4ebcb5a1ce1017d9a1803df7f76a31adcf3",
  "@type": "Page",
  "vc:slug": "container-image",
  "title": "Container Image",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:containerisation",
      "vc:label": "Containerisation"
    },
    {
      "@id": "urn:visionflow:linked:container",
      "vc:label": "Container"
    },
    {
      "@id": "urn:visionflow:linked:container-registry",
      "vc:label": "Container Registry"
    },
    {
      "@id": "urn:visionflow:linked:docker-containerisation-platform",
      "vc:label": "Docker Containerisation Platform"
    },
    {
      "@id": "urn:visionflow:linked:edge-computing",
      "vc:label": "Edge Computing"
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
  "@id": "urn:ngm:class:container-image",
  "@type": "Class",
  "label": "Container Image",
  "definition": "An immutable, layered filesystem bundle packaging an application together with its runtime, libraries, and configuration metadata, from which container instances are created. Defined by the OCI Image Specification as content-addressed layers plus a manifest and configuration, images are built once, distributed through registries, and executed identically on any compliant runtime, providing the reproducible unit of software delivery that underpins containerised infrastructure from cloud clusters to edge devices.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:containerisation",
    "label": "Containerisation"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:container",
        "label": "Container"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:docker-containerisation-platform",
        "label": "Docker Containerisation Platform"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:container-registry",
        "label": "Container Registry"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
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
  - "An immutable, layered filesystem bundle packaging an application together with its runtime, libraries, and configuration metadata, from which container instances are created. Defined by the OCI Image Specification as content-addressed layers plus a manifest and configuration, images are built once, distributed through registries, and executed identically on any compliant runtime, providing the reproducible unit of software delivery that underpins containerised infrastructure from cloud clusters to edge devices."

- ### Semantic Classification
  - owl-class:: infrastructure:ContainerImage
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Containerisation]]
  - enables:: [[Container]]
  - part-of:: [[Docker Containerisation Platform]]
  - related-to:: [[Container Registry]]

- ### Content

  ## Definition

  A **container image** is the static, immutable artefact from which a running [[Container]] is instantiated. It bundles an application with everything it needs at runtime — binaries, language runtime, shared libraries, and default configuration — as an ordered stack of filesystem layers, together with a JSON configuration describing entrypoint, environment variables, exposed ports and the layer ordering. At run time, a container runtime unions the read-only layers (via OverlayFS or similar) and adds a thin writable layer on top, so many containers can share the same image with minimal duplication.

  Images are content-addressed: every layer and manifest is identified by the SHA-256 digest of its bytes. This makes them verifiable and cacheable — pulling an updated image transfers only the layers that changed — and it is why "build once, run anywhere" holds in practice. The format is standardised by the Open Container Initiative (OCI) Image Specification, which grew out of the original [[Docker Containerisation Platform]] image format, so images built with Docker, BuildKit, Buildah, Kaniko or Bazel run interchangeably on containerd, CRI-O, Podman and every Kubernetes distribution.

  As the unit of software distribution, the image is where supply-chain concerns concentrate. Images are shipped through a [[Container Registry]], signed (Sigstore Cosign, Notation), scanned for vulnerable packages, and increasingly accompanied by SBOMs and provenance attestations. Multi-architecture image indexes let a single tag serve amd64 and arm64 variants, which matters for heterogeneous fleets and [[Edge Computing]] deployments where small footprint and reproducibility are essential.

  ## Technical Details

  - **Anatomy**: manifest (points to config and layers by digest) → config JSON (execution parameters, layer diff IDs, history) → gzip/zstd-compressed tar layers; an image index (manifest list) groups per-platform manifests under one reference.
  - **Building**: Dockerfiles remain the dominant recipe format; each instruction produces a layer, so ordering and multi-stage builds control cache hits and final size. Distroless and Alpine bases, static linking, and layer squashing are standard size and attack-surface reductions.
  - **Tags vs digests**: tags (`app:1.4.2`) are mutable pointers; digests (`app@sha256:...`) are immutable. Production deployment pins digests to guarantee that what was tested is what runs.
  - **Immutability contract**: images are never patched in place — a fix means building and shipping a new image, which is what makes rollbacks trivial and configuration drift impossible at the filesystem level.
  - **Security practice**: minimal base images, non-root default users, vulnerability scanning in CI (Trivy, Grype), signature verification at admission, and reproducible builds are the accepted baseline for image hygiene.
