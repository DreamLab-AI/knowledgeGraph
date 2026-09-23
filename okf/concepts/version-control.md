---
okf_version: "0.2"
type: Class
title: Version Control
resource: urn:ngm:class:version-control
domain: infrastructure
description: Version control is a methodology and toolset for systematically tracking, managing, and auditing changes to files and artefacts over time, enabling multiple contributors to develop concurrently on isolated branches and integrate their work through well-defined merge strategies. Distributed version control systems such as Git maintain a full directed-acyclic-graph (DAG) history locally on every nod
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:git
  - urn:ngm:class:commit
  - urn:ngm:class:branching-strategy
  - urn:ngm:class:merge-conflict-resolution
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:collaboration
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:code-review
  - urn:ngm:class:infrastructure-as-code
dependsOn:
  - urn:ngm:class:file-system
  - urn:ngm:class:network-protocol
contrastsWith:
  - urn:ngm:class:centralised-version-control
bridgesTo:
  - urn:ngm:class:data-lineage
  - urn:ngm:class:blockchain
supports:
  - urn:ngm:class:ai-augmented-software-engineering
  - urn:ngm:class:mlops
  - urn:ngm:class:devops
relatedTo:
  - urn:ngm:class:data-provenance
  - urn:ngm:class:knowledge-management
  - urn:ngm:class:code-generation
  - urn:ngm:class:audit-trail
  - urn:ngm:class:data-versioning
  - urn:ngm:class:data-versioning
---

# Version Control

Version control is a methodology and toolset for systematically tracking, managing, and auditing changes to files and artefacts over time, enabling multiple contributors to develop concurrently on isolated branches and integrate their work through well-defined merge strategies. Distributed version control systems such as Git maintain a full directed-acyclic-graph (DAG) history locally on every node, supporting offline operation, cryptographically signed commits, and fine-grained blame and bisect operations. Version control underpins modern software delivery practices including continuous integration, infrastructure-as-code, dataset lineage, and MLOps pipelines by providing immutable, content-addressed snapshots of any evolving asset.
