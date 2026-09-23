---
okf_version: "0.2"
type: Class
title: Trusted Setup Ceremony
resource: urn:ngm:class:trusted-setup-ceremony
domain: blockchain
description: A trusted setup ceremony is a one-time, multi-party procedure used to generate the public parameters required by certain zero-knowledge proof systems, such as zk-SNARKs, in which participants jointly compute the parameters while each contributes and then destroys a private random value, known as toxic waste. The scheme remains secure provided at least one participant honestly destroys their contri
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:zero-knowledge-proof
partOf:
  - urn:ngm:class:zero-knowledge-proof
relatedTo:
  - urn:ngm:class:zcash
  - urn:ngm:class:privacy-preserving-blockchain
---

# Trusted Setup Ceremony

A trusted setup ceremony is a one-time, multi-party procedure used to generate the public parameters required by certain zero-knowledge proof systems, such as zk-SNARKs, in which participants jointly compute the parameters while each contributes and then destroys a private random value, known as toxic waste. The scheme remains secure provided at least one participant honestly destroys their contribution, so ceremonies are typically run with many independent participants across jurisdictions to make full collusion implausible. Protocols such as Zcash have run public, auditable trusted setup ceremonies to generate the parameters underlying their privacy-preserving transactions.
