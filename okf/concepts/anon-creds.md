---
okf_version: "0.2"
type: Class
title: AnonCreds
resource: urn:ngm:class:anon-creds
domain: security
description: "AnonCreds (Anonymous Credentials) is a verifiable credential format and specification originally developed by the Hyperledger Indy project that enables privacy-preserving identity verification. The scheme allows holders to prove possession of credentials without revealing the credential itself or the issuer's signature, using zero-knowledge proofs. AnonCreds supports selective disclosure, letting "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:credential-format-standard
enables:
  - urn:ngm:class:privacy-preserving-technology
  - urn:ngm:class:differential-privacy
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:selective-disclosure
supports:
  - urn:ngm:class:authentication
relatedTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:credential-schema
---

# AnonCreds

AnonCreds (Anonymous Credentials) is a verifiable credential format and specification originally developed by the Hyperledger Indy project that enables privacy-preserving identity verification. The scheme allows holders to prove possession of credentials without revealing the credential itself or the issuer's signature, using zero-knowledge proofs. AnonCreds supports selective disclosure, letting a holder share only specific attributes, and predicates that prove a claim (e.g. age over 18) without revealing the underlying value. The specification has been standardised via the AnonCreds Working Group under the Decentralized Identity Foundation.
