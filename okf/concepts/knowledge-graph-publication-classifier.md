---
okf_version: "0.2"
type: Class
title: Knowledge Graph Publication Classifier
resource: urn:ngm:class:knowledge-graph-publication-classifier
domain: infrastructure
description: "Public, as a Logseq property tag (`public:: true`), marks a knowledge-graph page as intended for external publication. In the NarrativeGoldmine ontology it acts as an access-control classifier: pages bearing this annotation are included in export pipelines targeting the open WebVOWL visualisation and the public-facing OWL2 dataset. It is a metadata concept rather than a domain-level class, functio"
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:infra-computing-and-cloud
uses:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:data-governance
relatedTo:
  - urn:ngm:class:metadata-standard
  - urn:ngm:class:access-control
  - urn:ngm:class:linked-data
---

# Knowledge Graph Publication Classifier

Public, as a Logseq property tag (`public:: true`), marks a knowledge-graph page as intended for external publication. In the NarrativeGoldmine ontology it acts as an access-control classifier: pages bearing this annotation are included in export pipelines targeting the open WebVOWL visualisation and the public-facing OWL2 dataset. It is a metadata concept rather than a domain-level class, functioning analogously to an access-control label within the data-governance layer.
