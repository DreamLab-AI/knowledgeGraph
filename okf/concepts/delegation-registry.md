---
okf_version: "0.2"
type: Class
title: Delegation Registry
resource: urn:ngm:class:delegation-registry
domain: blockchain
description: A delegation registry is an on-chain contract that records mappings from a token holder's address to a delegate authorised to act or vote on their behalf. In DAO governance it lets holders assign their voting power to a representative without transferring assets, and the registry serves as the canonical source consulted when tallying votes. It enables liquid democracy patterns and separation of cu
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:snapshot-voting
  - urn:ngm:class:on-chain-voting
---

# Delegation Registry

A delegation registry is an on-chain contract that records mappings from a token holder's address to a delegate authorised to act or vote on their behalf. In DAO governance it lets holders assign their voting power to a representative without transferring assets, and the registry serves as the canonical source consulted when tallying votes. It enables liquid democracy patterns and separation of custody from voting authority.
