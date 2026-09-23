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
---

# Transaction Censorship

Transaction censorship is the selective exclusion or delay of specific transactions from a blockchain by miners, validators, or block builders, typically to comply with sanctions lists, extract value, or suppress particular users or protocols. It undermines a blockchain's censorship-resistance guarantees and can arise from regulatory pressure on centralised infrastructure such as relays or MEV builders, or from validator cartels acting in concert. Its severity depends on the degree of validator or mining centralisation, since a sufficiently decentralised set of block producers makes sustained censorship costly to coordinate. Mitigations include inclusion lists, proposer-builder separation, and encrypted mempools.
