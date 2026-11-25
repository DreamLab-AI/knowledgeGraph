---
okf_version: "0.2"
type: Class
title: Proof of Reserves
resource: urn:ngm:class:proof-of-reserves
domain: blockchain
description: Proof of reserves is a cryptographic auditing technique by which a custodial entity, such as a cryptocurrency exchange or stablecoin issuer, demonstrates that it holds sufficient assets to cover its customer liabilities. The asset side is typically attested by publishing on-chain wallet ownership, while the liability side is committed using a Merkle tree so that individual customers can verify the
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:cryptographic-proof
requires:
  - urn:ngm:class:custody
  - urn:ngm:class:transparency
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:stablecoin
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:tether
  - urn:ngm:class:usdc
  - urn:ngm:class:digital-asset-custody
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:reserve-asset
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Proof of Reserves

Proof of reserves is a cryptographic auditing technique by which a custodial entity, such as a cryptocurrency exchange or stablecoin issuer, demonstrates that it holds sufficient assets to cover its customer liabilities. The asset side is typically attested by publishing on-chain wallet ownership, while the liability side is committed using a Merkle tree so that individual customers can verify their balance is included without exposing the full ledger. More advanced schemes combine these with zero-knowledge proofs to prove solvency while preserving the confidentiality of total liabilities and individual balances.
