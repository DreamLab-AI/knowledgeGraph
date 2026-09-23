---
okf_version: "0.2"
type: Class
title: Identity Graph
resource: urn:ngm:class:identity-graph
domain: infrastructure
description: A network-based data structure representing entities, their digital identities, and relationships in a graph database optimized for identity resolution, trust scoring, and social network analysis.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:relationship-edge
  - urn:ngm:class:graph-database
  - urn:ngm:class:identity-node
  - urn:ngm:class:trust-attribute
requires:
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:graph-database
  - urn:ngm:class:identity-provider
enables:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:identity-resolution
  - urn:ngm:class:social-network-analysis
  - urn:ngm:class:reputation-system
dependsOn:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:did-resolution
  - urn:ngm:class:trust-metrics
partOf:
  - urn:ngm:class:identity-management-system
  - urn:ngm:class:trust-framework
---

# Identity Graph

A network-based data structure representing entities, their digital identities, and relationships in a graph database optimized for identity resolution, trust scoring, and social network analysis.
