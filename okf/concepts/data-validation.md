---
okf_version: "0.2"
type: Class
title: Data Validation
resource: urn:ngm:class:data-validation
domain: infrastructure
description: Data validation is the process of checking that data conforms to defined rules, formats, ranges and constraints before it is processed, stored or transmitted. It detects errors, inconsistencies and anomalies at ingestion and transformation boundaries, ensuring that only well-formed and trustworthy data enters downstream systems. Validation is enforced through schema checks, type and range assertio
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:schema-validation
requires:
  - urn:ngm:class:error-handling
enables:
  - urn:ngm:class:data-quality
  - urn:ngm:class:data-integrity
  - urn:ngm:class:reliability
dependsOn:
  - urn:ngm:class:data-schema
uses:
  - urn:ngm:class:data-schema
  - urn:ngm:class:verification
supports:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-governance
  - urn:ngm:class:compliance
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:data-quality
  - urn:ngm:class:data-cleaning
  - urn:ngm:class:data-transformation
---

# Data Validation

Data validation is the process of checking that data conforms to defined rules, formats, ranges and constraints before it is processed, stored or transmitted. It detects errors, inconsistencies and anomalies at ingestion and transformation boundaries, ensuring that only well-formed and trustworthy data enters downstream systems. Validation is enforced through schema checks, type and range assertions, referential integrity rules and business-logic constraints.
