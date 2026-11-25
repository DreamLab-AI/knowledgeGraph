---
okf_version: "0.2"
type: Class
title: Slashing Conditions
resource: urn:ngm:class:slashing-conditions
domain: blockchain
description: Slashing conditions are the set of cryptographically provable validator violations that a proof-of-stake blockchain protocol enforces by destroying or redistributing staked tokens. Encoded directly in protocol logic, they cover equivocation, surround votes, and prolonged unavailability, and their parameters set the strength of the chain's economic security. They are an implemented enforcement mech
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:consensus-mechanism
relatedTo:
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:proof-of-stake-sustainability
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Slashing Conditions

Slashing conditions are the set of cryptographically provable validator violations that a proof-of-stake blockchain protocol enforces by destroying or redistributing staked tokens. Encoded directly in protocol logic, they cover equivocation, surround votes, and prolonged unavailability, and their parameters set the strength of the chain's economic security. They are an implemented enforcement mechanism in modern blockchain protocols.
