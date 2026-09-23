---
okf_version: "0.2"
type: Class
title: MiCA
resource: urn:ngm:class:mi-ca
domain: governance
description: MiCA (Markets in Crypto-Assets Regulation, EU 2023/1114) is the European Union's comprehensive legal framework governing crypto-assets not already covered by existing financial services legislation such as MiFID II. It classifies crypto-assets into three categories — utility tokens, asset-referenced tokens (ARTs), and e-money tokens (EMTs) — imposing tiered obligations on issuers including mandato
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:infra-legal-and-regulatory
requires:
  - urn:ngm:class:crypto-asset-white-paper
  - urn:ngm:class:national-competent-authority
  - urn:ngm:class:capital-adequacy
enables:
  - urn:ngm:class:eu-passporting
  - urn:ngm:class:consumer-protection
  - urn:ngm:class:market-integrity
dependsOn:
  - urn:ngm:class:european-banking-authority
  - urn:ngm:class:european-securities-and-markets-authority
implements:
  - urn:ngm:class:crypto-regulation
  - urn:ngm:class:aml
  - urn:ngm:class:crypto-regulation
contrastsWith:
  - urn:ngm:class:mifid-ii
  - urn:ngm:class:crypto-regulation
  - urn:ngm:class:crypto-regulation
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:central-bank-digital-currency-cbdc
uses:
  - urn:ngm:class:asset-referenced-token
  - urn:ngm:class:e-money-token
supports:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:de-fi
standardizedBy:
  - urn:ngm:class:european-union
  - urn:ngm:class:eba
  - urn:ngm:class:esma
partOf:
  - urn:ngm:class:eu-digital-finance-strategy
  - urn:ngm:class:eu-single-market
relatedTo:
  - urn:ngm:class:do-ra
  - urn:ngm:class:gdpr
  - urn:ngm:class:fatf-travel-rule
  - urn:ngm:class:transfer-of-funds-regulation
---

# MiCA

MiCA (Markets in Crypto-Assets Regulation, EU 2023/1114) is the European Union's comprehensive legal framework governing crypto-assets not already covered by existing financial services legislation such as MiFID II. It classifies crypto-assets into three categories — utility tokens, asset-referenced tokens (ARTs), and e-money tokens (EMTs) — imposing tiered obligations on issuers including mandatory white-paper disclosures, capital adequacy requirements, and reserve safeguards for stablecoins. Crypto-asset service providers (CASPs) — encompassing exchanges, custodians, portfolio managers, and advisers — must obtain authorisation from a national competent authority with passporting rights across the EU single market. MiCA entered into force in June 2023 with stablecoin provisions applying from June 2024 and the full CASP regime from December 2024, making it one of the world's first end-to-end crypto regulatory regimes.
