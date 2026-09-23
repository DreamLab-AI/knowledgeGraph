---
okf_version: "0.2"
type: Class
title: Monero
resource: urn:ngm:class:monero
domain: blockchain
description: "Monero (XMR) is an open-source, privacy-preserving cryptocurrency launched in April 2014 as a fork of the Bytecoin codebase, distinguished by making confidentiality mandatory for every transaction rather than optional. It achieves unlinkability and untraceability through three complementary cryptographic primitives: ring signatures that blend the spender's output among decoys drawn from the blockc"
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-token-and-asset
requires:
  - urn:ngm:class:ring-signature
  - urn:ngm:class:stealth-address
  - urn:ngm:class:pedersen-commitment
  - urn:ngm:class:proof-of-work
enables:
  - urn:ngm:class:financial-privacy
  - urn:ngm:class:fungibility
  - urn:ngm:class:censorship-resistance
implements:
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:cryptonote-protocol
  - urn:ngm:class:randomx
contrastsWith:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:ethereum
  - urn:ngm:class:zcash
  - urn:ngm:class:dash
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:secure-multi-party-computation
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:bulletproofs
  - urn:ngm:class:dandelion
partOf:
  - urn:ngm:class:privacy-coin
relatedTo:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:blockchain
  - urn:ngm:class:de-fi
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:aml
---

# Monero

Monero (XMR) is an open-source, privacy-preserving cryptocurrency launched in April 2014 as a fork of the Bytecoin codebase, distinguished by making confidentiality mandatory for every transaction rather than optional. It achieves unlinkability and untraceability through three complementary cryptographic primitives: ring signatures that blend the spender's output among decoys drawn from the blockchain history, one-time stealth addresses that prevent linking payments to a recipient's public key, and Ring Confidential Transactions (RingCT) that hide transferred amounts using Pedersen commitments. The protocol employs a proof-of-work algorithm — originally CryptoNight, later RandomX — engineered to maintain parity between CPUs and GPUs while resisting ASIC specialisation, thereby preserving decentralised mining participation.
