---
okf_version: "0.2"
type: Class
title: BOLT12 Offers
resource: urn:ngm:class:bolt12-offers
domain: blockchain
description: BOLT12 Offers is a Lightning Network specification defining reusable, static payment requests called offers, improving on single-use BOLT11 invoices. An offer is a long-lived, shareable code from which payers fetch a fresh invoice on demand via onion messages, enabling recurring payments, refunds, and donation links without a server issuing each invoice. It also improves privacy through blinded pa
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:lightning-network
---

# BOLT12 Offers

BOLT12 Offers is a Lightning Network specification defining reusable, static payment requests called offers, improving on single-use BOLT11 invoices. An offer is a long-lived, shareable code from which payers fetch a fresh invoice on demand via onion messages, enabling recurring payments, refunds, and donation links without a server issuing each invoice. It also improves privacy through blinded paths that hide the recipient's node identity.
