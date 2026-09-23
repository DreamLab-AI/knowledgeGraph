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
---

# IPFS Content Addressing

The addressing scheme used by the InterPlanetary File System, in which content is identified by a cryptographic hash of its data rather than by location. The resulting content identifier changes if the content changes.
