---
okf_version: "0.2"
type: Class
title: FATF Travel Rule
resource: urn:ngm:class:fatf-travel-rule
domain: blockchain
description: The FATF Travel Rule (Recommendation 16 extended to virtual assets) requires Virtual Asset Service Providers (VASPs) to collect, verify, and transmit originator and beneficiary identity information alongside cryptocurrency transactions that meet or exceed a jurisdictional threshold, typically USD/EUR 1,000. Issued by the Financial Action Task Force, it extends the longstanding wire-transfer obliga
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-governance-and-regulation
requires:
  - urn:ngm:class:aml
  - urn:ngm:class:digital-identity
  - urn:ngm:class:kyc
  - urn:ngm:class:ivms-101
  - urn:ngm:class:vasp-counterparty-discovery
enables:
  - urn:ngm:class:financial-intelligence
  - urn:ngm:class:transaction-monitoring
  - urn:ngm:class:crypto-asset-compliance
implements:
  - urn:ngm:class:fatf-recommendation-16
  - urn:ngm:class:wire-transfer-rule
contrastsWith:
  - urn:ngm:class:privacy-coin
  - urn:ngm:class:wallet
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:wallet
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:trisa
  - urn:ngm:class:travel-rule-protocol
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:openvasp
standardizedBy:
  - urn:ngm:class:fatf
  - urn:ngm:class:financial-action-task-force
relatedTo:
  - urn:ngm:class:virtual-asset
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:bc-0456-virtual-asset-service-providers
  - urn:ngm:class:transfer-of-funds-regulation
  - urn:ngm:class:sanctions-screening
  - urn:ngm:class:bc-0456-virtual-asset-service-providers
---

# FATF Travel Rule

The FATF Travel Rule (Recommendation 16 extended to virtual assets) requires Virtual Asset Service Providers (VASPs) to collect, verify, and transmit originator and beneficiary identity information alongside cryptocurrency transactions that meet or exceed a jurisdictional threshold, typically USD/EUR 1,000. Issued by the Financial Action Task Force, it extends the longstanding wire-transfer obligation — rooted in the FATF 40 Recommendations and aligned with SWIFT messaging norms — to crypto-asset transfers, obligating sending VASPs to share identifying data with receiving VASPs before or simultaneously with the transfer. Compliance demands interoperability protocols, counterparty discovery infrastructure, and shared data standards such as IVMS 101 between exchanges, custodians, and wallet providers across different jurisdictions. The rule has been progressively transposed into national and regional law, including the EU Transfer of Funds Regulation, UK Money Laundering Regulations, and Singapore Payment Services Act.
