---
okf_version: "0.2"
type: Class
title: Reputation Data
resource: urn:ngm:class:reputation-data
domain: spatial-computing
description: A structured dataset containing historical records of user behavior, transaction outcomes, peer feedback, and trust metrics used to calculate reputation scores in peer-to-peer systems and virtual communities.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-content-and-assets
hasPart:
  - urn:ngm:class:transaction-history
  - urn:ngm:class:trust
  - urn:ngm:class:feedback-score
  - urn:ngm:class:behavioral-pattern
  - urn:ngm:class:trust
requires:
  - urn:ngm:class:timestamp-service
  - urn:ngm:class:data-storage
  - urn:ngm:class:identity-provider
enables:
  - urn:ngm:class:community
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:trust
  - urn:ngm:class:access-control
  - urn:ngm:class:trust
  - urn:ngm:class:community
dependsOn:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:audit-trail
partOf:
  - urn:ngm:class:social-network-graph
  - urn:ngm:class:reputation-system
  - urn:ngm:class:trust-framework
  - urn:ngm:class:social-network-graph
---

# Reputation Data

A structured dataset containing historical records of user behavior, transaction outcomes, peer feedback, and trust metrics used to calculate reputation scores in peer-to-peer systems and virtual communities.
