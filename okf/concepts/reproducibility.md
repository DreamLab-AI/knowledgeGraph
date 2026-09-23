---
okf_version: "0.2"
type: Class
title: Reproducibility
resource: urn:ngm:class:reproducibility
domain: data
description: "Reproducibility is the property of a scientific or computational study whereby independent researchers can obtain the same or statistically equivalent results by applying the same methods and analysis procedures to the same dataset. It is a foundational criterion for the credibility and cumulative progress of empirical disciplines, distinguishing it from replicability, which extends the criterion "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:quality-assurance
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:open-data
  - urn:ngm:class:containerisation
  - urn:ngm:class:pre-registration
enables:
  - urn:ngm:class:robustness
  - urn:ngm:class:peer-review
  - urn:ngm:class:scientific-trust
dependsOn:
  - urn:ngm:class:data-provenance
  - urn:ngm:class:metadata-management
  - urn:ngm:class:documentation
contrastsWith:
  - urn:ngm:class:replication
  - urn:ngm:class:generalisability
bridgesTo:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:mlops
uses:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:workflow-management
  - urn:ngm:class:statistical-analysis
relatedTo:
  - urn:ngm:class:sensitivity
  - urn:ngm:class:transparency
  - urn:ngm:class:open-science
  - urn:ngm:class:data-quality
  - urn:ngm:class:benchmarking
---

# Reproducibility

Reproducibility is the property of a scientific or computational study whereby independent researchers can obtain the same or statistically equivalent results by applying the same methods and analysis procedures to the same dataset. It is a foundational criterion for the credibility and cumulative progress of empirical disciplines, distinguishing it from replicability, which extends the criterion to new data or new samples. Reproducibility failures arise from incomplete method documentation, software environment drift, undisclosed analytical flexibility, or data inaccessibility. Achieving it systematically requires version-controlled code, containerised execution environments, open datasets, and pre-registered analysis plans.
