---
okf_version: "0.2"
type: Class
title: Schema Versioning
resource: urn:ngm:class:schema-versioning
domain: infrastructure
description: "Schema versioning is the discipline of managing changes to a data schema over time so that producers and consumers can evolve independently without breaking interoperability. It defines policies and mechanisms — version identifiers, compatibility rules, deprecation windows and migration paths — that govern how additions, removals and modifications to fields and types are introduced. Robust schema "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-versioning
hasPart:
  - urn:ngm:class:backward-compatibility
requires:
  - urn:ngm:class:data-schema
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:backward-compatibility
dependsOn:
  - urn:ngm:class:data-validation
implements:
  - urn:ngm:class:data-versioning
contrastsWith:
  - urn:ngm:class:api-versioning
bridgesTo:
  - urn:ngm:class:schema-registry
uses:
  - urn:ngm:class:schema-registry
  - urn:ngm:class:data-schema
supports:
  - urn:ngm:class:api-versioning
  - urn:ngm:class:data-serialization
partOf:
  - urn:ngm:class:data-versioning
relatedTo:
  - urn:ngm:class:data-schema
  - urn:ngm:class:xml-schema-definition
  - urn:ngm:class:rest-api
---

# Schema Versioning

Schema versioning is the discipline of managing changes to a data schema over time so that producers and consumers can evolve independently without breaking interoperability. It defines policies and mechanisms — version identifiers, compatibility rules, deprecation windows and migration paths — that govern how additions, removals and modifications to fields and types are introduced. Robust schema versioning underpins reliable data interchange in distributed systems, event streams and long-lived APIs.
