---
okf_version: "0.2"
type: Class
title: Redemption Mechanism
resource: urn:ngm:class:redemption-mechanism
domain: blockchain
description: "A redemption mechanism is the process by which a token holder can exchange a stablecoin or wrapped asset back into the underlying reserve asset it represents, such as fiat currency or collateral. It is the structural counterpart of minting and is central to maintaining a stablecoin's peg: credible redeemability allows arbitrageurs to profit from deviations between market price and par value, pulli"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:stablecoin
hasPart:
  - urn:ngm:class:burning
  - urn:ngm:class:proof-of-reserve
requires:
  - urn:ngm:class:collateral
  - urn:ngm:class:reserve
enables:
  - urn:ngm:class:peg
  - urn:ngm:class:arbitrage
dependsOn:
  - urn:ngm:class:proof-of-reserve
contrastsWith:
  - urn:ngm:class:minting
uses:
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:usdc
  - urn:ngm:class:tether
partOf:
  - urn:ngm:class:stablecoin
relatedTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:algorithmic-stablecoin
---

# Redemption Mechanism

A redemption mechanism is the process by which a token holder can exchange a stablecoin or wrapped asset back into the underlying reserve asset it represents, such as fiat currency or collateral. It is the structural counterpart of minting and is central to maintaining a stablecoin's peg: credible redeemability allows arbitrageurs to profit from deviations between market price and par value, pulling the price back to the peg. Redemption mechanisms vary from direct par redemption with the issuer to on-chain burn-and-release contracts.
