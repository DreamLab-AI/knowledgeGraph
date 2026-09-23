---
okf_version: "0.2"
type: Class
title: Git Mark
resource: urn:ngm:class:git-mark
domain: blockchain
description: Git Mark is a Block Trails Profile that anchors a Git history to Bitcoin by using each commit hash as the tweak that advances a trail, so the sequence of commits becomes a single-use-seal chain whose ordering and uniqueness are enforced by Bitcoin's UTXO model. The Blocktrails verifier checks a git-mark trail against the chain, confirming that each marked commit was timestamped and is tamper-evide
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:block-trails
enables:
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:supply-chain-security
dependsOn:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:proof-of-publication
implements:
  - urn:ngm:class:trusted-timestamping
  - urn:ngm:class:trusted-timestamping
bridgesTo:
  - urn:ngm:class:version-control
  - urn:ngm:class:continuous-integration
uses:
  - urn:ngm:class:git
  - urn:ngm:class:single-use-seals
  - urn:ngm:class:taproot
  - urn:ngm:class:sha-256
partOf:
  - urn:ngm:class:block-trails
relatedTo:
  - urn:ngm:class:content-provenance
  - urn:ngm:class:audit-log
  - urn:ngm:class:client-side-validation
---

# Git Mark

Git Mark is a Block Trails Profile that anchors a Git history to Bitcoin by using each commit hash as the tweak that advances a trail, so the sequence of commits becomes a single-use-seal chain whose ordering and uniqueness are enforced by Bitcoin's UTXO model. The Blocktrails verifier checks a git-mark trail against the chain, confirming that each marked commit was timestamped and is tamper-evident on Bitcoin — it proves the history's immutability and temporal anchoring, not the correctness of the code itself. This gives a Bitcoin-secured provenance log for source repositories without storing any repository data on-chain.
