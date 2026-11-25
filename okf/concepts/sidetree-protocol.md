---
okf_version: "0.2"
type: Class
title: Sidetree Protocol
resource: urn:ngm:class:sidetree-protocol
domain: blockchain
description: The Sidetree Protocol is a layer-two protocol for operating scalable decentralised identifier networks on top of any existing decentralised ledger without requiring trusted intermediaries or special-purpose consensus. It batches large numbers of DID create, update, recover, and deactivate operations, anchors a single compact commitment to the underlying chain, and stores the operation data in cont
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:did-method
hasPart:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:content-addressed-storage
enables:
  - urn:ngm:class:did-document
dependsOn:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:bitcoin
implements:
  - urn:ngm:class:did-method
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:ipfs
supports:
  - urn:ngm:class:public-key-infrastructure
partOf:
  - urn:ngm:class:w3-c-did
relatedTo:
  - urn:ngm:class:w3-c-did
  - urn:ngm:class:ipfs
  - urn:ngm:class:merkle-tree
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Sidetree Protocol

The Sidetree Protocol is a layer-two protocol for operating scalable decentralised identifier networks on top of any existing decentralised ledger without requiring trusted intermediaries or special-purpose consensus. It batches large numbers of DID create, update, recover, and deactivate operations, anchors a single compact commitment to the underlying chain, and stores the operation data in content-addressed storage so that any node can deterministically replay the operation log to compute current DID states. This separation of anchoring from data lets identifier throughput scale far beyond the base chain's transaction capacity.
