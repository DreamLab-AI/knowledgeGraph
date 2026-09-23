---
okf_version: "0.2"
type: Class
title: Self-Sovereign Identity (SSI)
resource: urn:ngm:class:self-sovereign-identity-ssi
domain: blockchain
description: Self-Sovereign Identity (SSI) is an identity model in which individuals control their own digital identifiers and credentials without dependence on a centralised issuing authority, using Decentralised Identifiers (DIDs) anchored to distributed ledgers and Verifiable Credentials signed by trusted issuers to enable selective disclosure. SSI shifts identity management from siloed service-provider acc
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:decentralized-identity
dependsOn:
  - urn:ngm:class:privacy-preserving-identity
uses:
  - urn:ngm:class:decentralized-identifiers
  - urn:ngm:class:verifiable-credentials
relatedTo:
  - urn:ngm:class:hyperledger-indy
  - urn:ngm:class:did-method
---

# Self-Sovereign Identity (SSI)

Self-Sovereign Identity (SSI) is an identity model in which individuals control their own digital identifiers and credentials without dependence on a centralised issuing authority, using Decentralised Identifiers (DIDs) anchored to distributed ledgers and Verifiable Credentials signed by trusted issuers to enable selective disclosure. SSI shifts identity management from siloed service-provider accounts to portable, user-held credentials that can be verified without querying the original issuer.
