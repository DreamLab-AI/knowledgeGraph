---
okf_version: "0.2"
type: Class
title: Backward Compatibility
resource: urn:ngm:class:backward-compatibility
domain: infrastructure
description: Backward compatibility is the property of a system, interface, or data format that allows newer versions to continue working correctly with inputs, clients, or data produced for older versions. It ensures that existing consumers do not break when a producer is upgraded, preserving established contracts while permitting evolution. Maintaining backward compatibility typically requires additive, non-
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-engineering
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:semantic-versioning
  - urn:ngm:class:api-versioning
enables:
  - urn:ngm:class:interoperability
contrastsWith:
  - urn:ngm:class:api-versioning
supports:
  - urn:ngm:class:interoperability
  - urn:ngm:class:reliability
  - urn:ngm:class:software-system
relatedTo:
  - urn:ngm:class:api-design
  - urn:ngm:class:software-development
  - urn:ngm:class:software-engineering
  - urn:ngm:class:standards
---

# Backward Compatibility

Backward compatibility is the property of a system, interface, or data format that allows newer versions to continue working correctly with inputs, clients, or data produced for older versions. It ensures that existing consumers do not break when a producer is upgraded, preserving established contracts while permitting evolution. Maintaining backward compatibility typically requires additive, non-breaking changes and careful deprecation policies.
