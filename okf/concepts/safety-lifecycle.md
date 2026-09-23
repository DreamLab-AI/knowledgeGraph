---
okf_version: "0.2"
type: Class
title: Safety Lifecycle
resource: urn:ngm:class:safety-lifecycle
domain: standards
description: The safety lifecycle is a structured, end-to-end process defined by functional-safety standards for managing safety from concept through decommissioning. It organises activities such as hazard and risk analysis, safety requirement allocation, design, implementation, verification, validation, operation, and modification into defined phases with documented inputs, outputs, and review gates. Standard
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:functional-safety
hasPart:
  - urn:ngm:class:hazard-analysis
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:fmea
requires:
  - urn:ngm:class:hazard-analysis
  - urn:ngm:class:safety-integrity-level
enables:
  - urn:ngm:class:safety-integrity-level
implements:
  - urn:ngm:class:iec-61508
  - urn:ngm:class:iec-62061
uses:
  - urn:ngm:class:fmea
  - urn:ngm:class:fault-tree-analysis
supports:
  - urn:ngm:class:safety-instrumented-system
  - urn:ngm:class:reliability-engineering
standardizedBy:
  - urn:ngm:class:iec-61508
  - urn:ngm:class:iso-26262
partOf:
  - urn:ngm:class:functional-safety
relatedTo:
  - urn:ngm:class:functional-safety
  - urn:ngm:class:safety-case
  - urn:ngm:class:hazop
---

# Safety Lifecycle

The safety lifecycle is a structured, end-to-end process defined by functional-safety standards for managing safety from concept through decommissioning. It organises activities such as hazard and risk analysis, safety requirement allocation, design, implementation, verification, validation, operation, and modification into defined phases with documented inputs, outputs, and review gates. Standards such as IEC 61508, IEC 62061, and ISO 26262 prescribe safety lifecycles to ensure that safety-related systems achieve and sustain their required integrity levels.
