---
okf_version: "0.2"
type: Class
title: Spl Token
resource: urn:ngm:class:spl-token
domain: blockchain
description: "SPL Token is the token standard of the Solana Program Library, defining how fungible and non-fungible tokens are created and managed on the Solana blockchain through a shared on-chain program. Rather than deploying a separate contract per token as in ERC-20, all SPL tokens share a single canonical program and store balances in token accounts associated with each owner and mint. This account-model "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:fungible-token
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:solana
enables:
  - urn:ngm:class:non-fungible-token
dependsOn:
  - urn:ngm:class:solana
implements:
  - urn:ngm:class:token-standard
  - urn:ngm:class:fungible-token
contrastsWith:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:brc-20
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:solana-program-library
supports:
  - urn:ngm:class:token
partOf:
  - urn:ngm:class:fungible-token
relatedTo:
  - urn:ngm:class:token
  - urn:ngm:class:token-standard
---

# Spl Token

SPL Token is the token standard of the Solana Program Library, defining how fungible and non-fungible tokens are created and managed on the Solana blockchain through a shared on-chain program. Rather than deploying a separate contract per token as in ERC-20, all SPL tokens share a single canonical program and store balances in token accounts associated with each owner and mint. This account-model design enables high-throughput, low-cost token operations native to Solana's runtime.
