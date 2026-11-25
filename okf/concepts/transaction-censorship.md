---
okf_version: "0.2"
type: Class
title: Transaction Censorship
resource: urn:ngm:class:transaction-censorship
domain: blockchain
description: Transaction censorship is the selective exclusion or delay of specific transactions from a blockchain by miners, validators, or block builders, typically to comply with sanctions lists, extract value, or suppress particular users or protocols. It undermines a blockchain's censorship-resistance guarantees and can arise from regulatory pressure on centralised infrastructure such as relays or MEV bui
maturity: established
quality: 0
is-a:
  - urn:ngm:class:censorship-resistance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Transaction Censorship

Transaction censorship is the selective exclusion or delay of specific transactions from a blockchain by miners, validators, or block builders, typically to comply with sanctions lists, extract value, or suppress particular users or protocols. It undermines a blockchain's censorship-resistance guarantees and can arise from regulatory pressure on centralised infrastructure such as relays or MEV builders, or from validator cartels acting in concert. Its severity depends on the degree of validator or mining centralisation, since a sufficiently decentralised set of block producers makes sustained censorship costly to coordinate. Mitigations include inclusion lists, proposer-builder separation, and encrypted mempools.
