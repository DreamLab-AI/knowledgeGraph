---
okf_version: "0.2"
type: Class
title: Netting
resource: urn:ngm:class:netting
domain: finance
description: The offsetting of mutual obligations between counterparties so that only the net balance is settled, rather than each gross obligation individually. Netting compresses large volumes of bilateral or multilateral exposures into a single payable or receivable per party, dramatically reducing settlement volumes, liquidity needs, and counterparty credit risk. Legally enforceable forms include payment n
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:clearing
enables:
  - urn:ngm:class:settlement-finality
partOf:
  - urn:ngm:class:settlement
relatedTo:
  - urn:ngm:class:central-securities-depository
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Netting

The offsetting of mutual obligations between counterparties so that only the net balance is settled, rather than each gross obligation individually. Netting compresses large volumes of bilateral or multilateral exposures into a single payable or receivable per party, dramatically reducing settlement volumes, liquidity needs, and counterparty credit risk. Legally enforceable forms include payment netting, novation netting, and close-out netting on default, and it is the core economic function performed by clearing houses and payment systems.
