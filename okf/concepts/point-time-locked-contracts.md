---
okf_version: "0.2"
type: Class
title: Point Time-Locked Contracts
resource: urn:ngm:class:point-time-locked-contracts
domain: blockchain
description: Point Time-Locked Contracts (PTLCs) are a Bitcoin Lightning Network payment primitive that use elliptic-curve adaptor signatures and a single secret point, rather than a hash preimage, to enforce conditional, time-bound payment across a route. They replace Hash Time-Locked Contracts with a scheme that reveals no shared hash across hops, improving privacy and eliminating hash-linkage attacks betwee
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:hash-time-locked-contract
requires:
  - urn:ngm:class:taproot
---

# Point Time-Locked Contracts

Point Time-Locked Contracts (PTLCs) are a Bitcoin Lightning Network payment primitive that use elliptic-curve adaptor signatures and a single secret point, rather than a hash preimage, to enforce conditional, time-bound payment across a route. They replace Hash Time-Locked Contracts with a scheme that reveals no shared hash across hops, improving privacy and eliminating hash-linkage attacks between channels. PTLCs are enabled by Taproot's Schnorr signatures and are proposed as a routing primitive for higher Bitcoin layers such as BTC Layer 3.
