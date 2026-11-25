---
okf_version: "0.2"
type: Class
title: Self-Liquidation
resource: urn:ngm:class:self-liquidation
domain: blockchain
description: Self-liquidation is a DeFi technique in which a borrower proactively closes their own under-collateralised or at-risk lending position — often using a flash loan to repay debt and withdraw collateral atomically — rather than waiting for a third-party liquidator to seize it at a penalty. It lets borrowers capture the collateral value that would otherwise be lost to liquidation fees. It is used on l
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:flash-loan
partOf:
  - urn:ngm:class:flash-loan
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Self-Liquidation

Self-liquidation is a DeFi technique in which a borrower proactively closes their own under-collateralised or at-risk lending position — often using a flash loan to repay debt and withdraw collateral atomically — rather than waiting for a third-party liquidator to seize it at a penalty. It lets borrowers capture the collateral value that would otherwise be lost to liquidation fees. It is used on lending protocols such as Aave where liquidation penalties make self-initiated closure economically preferable.
