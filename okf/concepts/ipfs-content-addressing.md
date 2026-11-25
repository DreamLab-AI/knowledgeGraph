---
okf_version: "0.2"
type: Class
title: IPFS Content Addressing
resource: urn:ngm:class:ipfs-content-addressing
domain: distributed-systems
description: The addressing scheme used by the InterPlanetary File System, in which content is identified by a cryptographic hash of its data rather than by location. The resulting content identifier changes if the content changes.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:ipfs
requires:
  - urn:ngm:class:cryptographic-hash
enables:
  - urn:ngm:class:distributed-storage
bridgesTo:
  - urn:ngm:class:ipfs
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# IPFS Content Addressing

The addressing scheme used by the InterPlanetary File System, in which content is identified by a cryptographic hash of its data rather than by location. The resulting content identifier changes if the content changes.
