---
okf_version: "0.2"
type: Class
title: YAML
resource: urn:ngm:class:yaml
domain: standards
description: A human-readable data serialisation language (YAML Ain't Markup Language) that expresses mappings, sequences, and scalars through indentation-based structure rather than delimiters, and is a strict superset of JSON. Designed for legibility and hand-editing, it adds comments, anchors and aliases for reuse, and multi-document streams, which has made it the dominant format for configuration in the De
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:data-serialization
contrastsWith:
  - urn:ngm:class:json
  - urn:ngm:class:xml
relatedTo:
  - urn:ngm:class:openapi
  - urn:ngm:class:data-format
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# YAML

A human-readable data serialisation language (YAML Ain't Markup Language) that expresses mappings, sequences, and scalars through indentation-based structure rather than delimiters, and is a strict superset of JSON. Designed for legibility and hand-editing, it adds comments, anchors and aliases for reuse, and multi-document streams, which has made it the dominant format for configuration in the DevOps ecosystem — Kubernetes manifests, CI pipelines, Ansible playbooks, and OpenAPI definitions — despite well-known pitfalls around implicit typing.
