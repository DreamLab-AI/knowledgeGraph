Immutable infrastructure is an operational model in which servers and components are never modified after deployment; instead, any change is delivered by building a new versioned artefact (image or container) and replacing the running instance. This eliminates configuration drift, makes deployments reproducible and rollbacks trivial, and pairs naturally with infrastructure-as-code and automated pipelines. It contrasts with mutable, in-place patching of long-lived servers.

### Overview

- Immutable infrastructure treats servers as disposable, versioned artefacts: to change behaviour you redeploy rather than reconfigure. This pattern, popularised by cloud and container platforms, removes drift and snowflake servers, simplifies testing because the deployed artefact equals the tested one, and makes rollback a matter of redeploying a prior image.

### Mechanisms

- Versioned, prebuilt images or container artefacts.
- Replace-not-patch deployment with blue/green or rolling strategies.
- Elimination of configuration drift and snowflake servers.
- Reproducible builds via infrastructure-as-code.
- Trivial rollback by redeploying a previous artefact.

### Applications

- Container and Kubernetes-based platforms.
- Cloud auto-scaling groups using golden images.
- Continuous deployment pipelines.
- Disaster recovery through reproducible rebuilds.

### Provenance

