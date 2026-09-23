---
okf_version: "0.2"
type: Class
title: Over Collateralisation
resource: urn:ngm:class:over-collateralisation
domain: blockchain
description: Over-collateralisation is a risk-management practice in which the value of assets pledged as collateral exceeds the value of the obligation they secure. In decentralised finance it is the standard requirement for permissionless lending and for backing stablecoins, where borrowers must deposit more value than they draw to absorb price volatility. The surplus margin protects lenders and protocols ag
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:de-fi
requires:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:lending-protocol
  - urn:ngm:class:stablecoin
  - urn:ngm:class:liquidation-mechanism
dependsOn:
  - urn:ngm:class:price-oracle
implements:
  - urn:ngm:class:risk-management
contrastsWith:
  - urn:ngm:class:interest-rate
uses:
  - urn:ngm:class:oracle
supports:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:decentralised-exchange
partOf:
  - urn:ngm:class:risk-management
relatedTo:
  - urn:ngm:class:aave
  - urn:ngm:class:interest-rate
  - urn:ngm:class:liquidity
---

# Over Collateralisation

Over-collateralisation is a risk-management practice in which the value of assets pledged as collateral exceeds the value of the obligation they secure. In decentralised finance it is the standard requirement for permissionless lending and for backing stablecoins, where borrowers must deposit more value than they draw to absorb price volatility. The surplus margin protects lenders and protocols against default by ensuring that collateral can be liquidated for at least the amount owed even when prices move adversely.
