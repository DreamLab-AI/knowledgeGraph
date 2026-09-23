---
okf_version: "0.2"
type: Class
title: Data Discovery
resource: urn:ngm:class:data-discovery
domain: infrastructure
description: "Data Discovery is the iterative process of locating, profiling, cataloguing, and contextualising data assets distributed across an organisation's storage systems, databases, data lakes, SaaS applications, and streaming pipelines to make them findable, understandable, and trustworthy for analytics, governance, and compliance purposes. It encompasses automated metadata extraction, schema inference, "
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:data-management
enables:
  - urn:ngm:class:data-governance
  - urn:ngm:class:metadata-management
uses:
  - urn:ngm:class:metadata-registry
  - urn:ngm:class:data-lake
supports:
  - urn:ngm:class:data-management
---

# Data Discovery

Data Discovery is the iterative process of locating, profiling, cataloguing, and contextualising data assets distributed across an organisation's storage systems, databases, data lakes, SaaS applications, and streaming pipelines to make them findable, understandable, and trustworthy for analytics, governance, and compliance purposes. It encompasses automated metadata extraction, schema inference, data profiling (statistical characterisation), lineage tracing (upstream/downstream dependencies), and classification (sensitivity tagging). Data Discovery is foundational to implementing Data Governance frameworks and enabling self-service analytics in data mesh and data fabric architectures.
