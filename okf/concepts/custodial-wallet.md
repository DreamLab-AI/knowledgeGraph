---
okf_version: "0.2"
type: Class
title: Custodial Wallet
resource: urn:ngm:class:custodial-wallet
domain: blockchain
description: A custodial wallet is a cryptocurrency wallet in which a third party — typically an exchange or custodian — holds and controls the private keys on behalf of the user, who accesses funds through an account rather than direct on-chain key ownership. This model trades the self-sovereignty of non-custodial wallets for convenience, account recovery, and integrated services, while introducing counterpar
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:digital-wallet
hasPart:
  - urn:ngm:class:account-balance-ledger
  - urn:ngm:class:omnibus-account
requires:
  - urn:ngm:class:kyc
enables:
  - urn:ngm:class:account-recovery
  - urn:ngm:class:fiat-on-ramp
dependsOn:
  - urn:ngm:class:key-management
  - urn:ngm:class:trusted-third-party
implements:
  - urn:ngm:class:proof-of-reserves
contrastsWith:
  - urn:ngm:class:non-custodial-wallet
  - urn:ngm:class:self-custody
  - urn:ngm:class:multi-signature-wallet
bridgesTo:
  - urn:ngm:class:mpc-wallet
uses:
  - urn:ngm:class:hot-wallet
  - urn:ngm:class:cold-storage
supports:
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:exchange-custody
partOf:
  - urn:ngm:class:centralised-exchange
relatedTo:
  - urn:ngm:class:counterparty-risk
  - urn:ngm:class:cryptocurrency-custody
---

# Custodial Wallet

A custodial wallet is a cryptocurrency wallet in which a third party — typically an exchange or custodian — holds and controls the private keys on behalf of the user, who accesses funds through an account rather than direct on-chain key ownership. This model trades the self-sovereignty of non-custodial wallets for convenience, account recovery, and integrated services, while introducing counterparty risk and reliance on the custodian's security and solvency. Custodial arrangements are common at centralised exchanges and increasingly subject to regulatory requirements for asset segregation and proof of reserves.
