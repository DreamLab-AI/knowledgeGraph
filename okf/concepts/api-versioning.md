---
okf_version: "0.2"
type: Class
title: API Versioning
resource: urn:ngm:class:api-versioning
domain: infrastructure
description: API versioning is the discipline of evolving a programmatic interface over time while controlling the impact of changes on existing consumers. It defines how new versions are identified, published, and retired, and how backward compatibility is preserved or broken deliberately. Sound versioning lets providers innovate without forcing every client to upgrade in lockstep.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:api-management
hasPart:
  - urn:ngm:class:semantic-versioning
  - urn:ngm:class:backward-compatibility
  - urn:ngm:class:deprecation
requires:
  - urn:ngm:class:api-design
enables:
  - urn:ngm:class:microservices
uses:
  - urn:ngm:class:semantic-versioning
  - urn:ngm:class:open-api-specification
supports:
  - urn:ngm:class:backward-compatibility
  - urn:ngm:class:api-management
standardizedBy:
  - urn:ngm:class:open-api-specification
partOf:
  - urn:ngm:class:api-management
  - urn:ngm:class:api-lifecycle
relatedTo:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:rest
  - urn:ngm:class:api-design
---

# API Versioning

API versioning is the discipline of evolving a programmatic interface over time while controlling the impact of changes on existing consumers. It defines how new versions are identified, published, and retired, and how backward compatibility is preserved or broken deliberately. Sound versioning lets providers innovate without forcing every client to upgrade in lockstep.
