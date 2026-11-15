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
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# YAML

A human-readable data serialisation language (YAML Ain't Markup Language) that expresses mappings, sequences, and scalars through indentation-based structure rather than delimiters, and is a strict superset of JSON. Designed for legibility and hand-editing, it adds comments, anchors and aliases for reuse, and multi-document streams, which has made it the dominant format for configuration in the DevOps ecosystem — Kubernetes manifests, CI pipelines, Ansible playbooks, and OpenAPI definitions — despite well-known pitfalls around implicit typing.
