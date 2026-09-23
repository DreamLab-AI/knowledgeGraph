---
okf_version: "0.2"
type: Class
title: Data Collection
resource: urn:ngm:class:data-collection
domain: data
description: Data collection is the systematic process of gathering raw observations, measurements, or records from primary sources — including sensors, user interactions, instruments, surveys, and web scraping — in a form suitable for storage, processing, and analysis. As a foundational stage of the data lifecycle, it determines the completeness, representativeness, and quality of all downstream analytical pr
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:data-annotation
  - urn:ngm:class:sampling
  - urn:ngm:class:data-labelling
requires:
  - urn:ngm:class:io-t-sensor-network
  - urn:ngm:class:data-schema
  - urn:ngm:class:consent-management
enables:
  - urn:ngm:class:data-processing
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:training-data
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:data-analysis
dependsOn:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-privacy
  - urn:ngm:class:etl-pipeline
contrastsWith:
  - urn:ngm:class:synthetic-data
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:web-scraping
  - urn:ngm:class:api-integration
  - urn:ngm:class:crowdsourcing
relatedTo:
  - urn:ngm:class:data-provenance
  - urn:ngm:class:data-quality
  - urn:ngm:class:active-learning
  - urn:ngm:class:data-centric-ai
---

# Data Collection

Data collection is the systematic process of gathering raw observations, measurements, or records from primary sources — including sensors, user interactions, instruments, surveys, and web scraping — in a form suitable for storage, processing, and analysis. As a foundational stage of the data lifecycle, it determines the completeness, representativeness, and quality of all downstream analytical products. In machine learning contexts, data collection encompasses sourcing, labelling, and curating training datasets that govern model capability and bias characteristics.
