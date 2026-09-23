---
okf_version: "0.2"
type: Class
title: Semantic Versioning
resource: urn:ngm:class:semantic-versioning
domain: infrastructure
description: "Semantic Versioning (SemVer) is a versioning scheme that encodes compatibility information in a three-part MAJOR.MINOR.PATCH number: major increments signal breaking changes, minor increments add backward-compatible functionality, and patch increments fix bugs without changing the interface. It gives consumers of a package or API a predictable way to reason about upgrade risk. It is widely adopted"
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:version-control
requires:
  - urn:ngm:class:version-control
enables:
  - urn:ngm:class:backward-compatibility
relatedTo:
  - urn:ngm:class:api-versioning
  - urn:ngm:class:api-contract
  - urn:ngm:class:model-registry
---

# Semantic Versioning

Semantic Versioning (SemVer) is a versioning scheme that encodes compatibility information in a three-part MAJOR.MINOR.PATCH number: major increments signal breaking changes, minor increments add backward-compatible functionality, and patch increments fix bugs without changing the interface. It gives consumers of a package or API a predictable way to reason about upgrade risk. It is widely adopted across package registries, REST and gRPC API contracts, and machine learning model registries.
