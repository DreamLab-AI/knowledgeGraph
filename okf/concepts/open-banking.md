---
okf_version: "0.2"
type: Class
title: Open Banking
resource: urn:ngm:class:open-banking
domain: finance
description: Open Banking is a regulatory and technical framework that allows authorised third-party providers to access customer banking data and initiate payments through secure application programming interfaces, subject to explicit customer consent. It shifts control of financial data from incumbent banks to the account holder, who may grant fine-grained, revocable permissions. The model underpins regulate
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:financial-services
hasPart:
  - urn:ngm:class:consent-management
  - urn:ngm:class:api-gateway
  - urn:ngm:class:payment-processing
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:digital-identity
  - urn:ngm:class:regulatory-compliance
enables:
  - urn:ngm:class:fintech
  - urn:ngm:class:financial-inclusion
  - urn:ngm:class:data-sharing
dependsOn:
  - urn:ngm:class:financial-regulation
bridgesTo:
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:oauth
  - urn:ngm:class:rest-api
  - urn:ngm:class:api-standard
supports:
  - urn:ngm:class:interoperability
  - urn:ngm:class:data-privacy
partOf:
  - urn:ngm:class:financial-system
relatedTo:
  - urn:ngm:class:gdpr
  - urn:ngm:class:banking
---

# Open Banking

Open Banking is a regulatory and technical framework that allows authorised third-party providers to access customer banking data and initiate payments through secure application programming interfaces, subject to explicit customer consent. It shifts control of financial data from incumbent banks to the account holder, who may grant fine-grained, revocable permissions. The model underpins regulated data sharing regimes such as the EU's PSD2 and the UK's Open Banking Standard, fostering competition and new financial products.
