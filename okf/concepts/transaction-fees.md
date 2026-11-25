---
okf_version: "0.2"
type: Class
title: transaction fees
resource: urn:ngm:class:transaction-fees
domain: blockchain
description: Transaction fees are amounts paid by users to have their transactions included in a blockchain block. They compensate miners or validators and help prioritise transactions when capacity is limited.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
enables:
  - urn:ngm:class:transaction-validation
bridgesTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# transaction fees

Transaction fees are amounts paid by users to have their transactions included in a blockchain block. They compensate miners or validators and help prioritise transactions when capacity is limited.
