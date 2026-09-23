---
okf_version: "0.2"
type: Class
title: Dutch Auction
resource: urn:ngm:class:dutch-auction
domain: blockchain
description: A Dutch auction is a descending-price auction mechanism in which the offered price starts high and falls over time until a bidder accepts, with the first acceptance determining the clearing price. In blockchain and token markets it is implemented in smart contracts to distribute tokens or NFTs, set initial offering prices, and liquidate collateral, with the falling-price schedule encoded on-chain.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:auction-mechanism
hasPart:
  - urn:ngm:class:price-discovery
requires:
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:price-discovery
implements:
  - urn:ngm:class:auction-mechanism
bridgesTo:
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:initial-coin-offering
  - urn:ngm:class:nft-marketplace
partOf:
  - urn:ngm:class:auction-mechanism
relatedTo:
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:price-discovery
  - urn:ngm:class:nft-marketplace
---

# Dutch Auction

A Dutch auction is a descending-price auction mechanism in which the offered price starts high and falls over time until a bidder accepts, with the first acceptance determining the clearing price. In blockchain and token markets it is implemented in smart contracts to distribute tokens or NFTs, set initial offering prices, and liquidate collateral, with the falling-price schedule encoded on-chain. Variants include single-item and multi-unit uniform-price formats used for fairer price discovery.
