---
okf_version: "0.2"
type: Class
title: Heuristic Clustering
resource: urn:ngm:class:heuristic-clustering
domain: blockchain
description: Heuristic clustering, in blockchain forensics, is the practice of grouping addresses that are inferred to be controlled by the same entity using behavioural heuristics such as common-input-ownership or change-address detection, rather than direct cryptographic proof of common control. It is the core analytic technique used by chain-analysis firms to de-anonymise transaction graphs and attribute ac
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:clustering
uses:
  - urn:ngm:class:clustering
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Heuristic Clustering

Heuristic clustering, in blockchain forensics, is the practice of grouping addresses that are inferred to be controlled by the same entity using behavioural heuristics such as common-input-ownership or change-address detection, rather than direct cryptographic proof of common control. It is the core analytic technique used by chain-analysis firms to de-anonymise transaction graphs and attribute activity to real-world actors. Its outputs are probabilistic, and heuristics can misfire against wallets that deliberately break the assumed patterns.
