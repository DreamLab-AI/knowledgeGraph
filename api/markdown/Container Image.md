
An immutable, layered filesystem bundle packaging an application together with its runtime, libraries, and configuration metadata, from which container instances are created. Defined by the OCI Image Specification as content-addressed layers plus a manifest and configuration, images are built once, distributed through registries, and executed identically on any compliant runtime, providing the reproducible unit of software delivery that underpins containerised infrastructure from cloud clusters to edge devices.

- ### Semantic Classification

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

