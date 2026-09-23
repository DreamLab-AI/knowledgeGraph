---
okf_version: "0.2"
type: Class
title: Notary Service
resource: urn:ngm:class:notary-service
domain: blockchain
description: "A notary service is a trusted third-party function that attests to the authenticity, integrity, and existence of a document or digital artefact at a specific point in time, producing a tamper-evident record legally admissible as proof. In digital contexts, notary services hash document content and anchor that hash to a verifiable ledger — blockchain or traditional timestamping authority — binding "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:security-services
enables:
  - urn:ngm:class:supply-chain-provenance
  - urn:ngm:class:credential-verification
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:digital-signature-verification
relatedTo:
  - urn:ngm:class:virtual-notary-service
  - urn:ngm:class:formal-verification
  - urn:ngm:class:compliance-verification
---

# Notary Service

A notary service is a trusted third-party function that attests to the authenticity, integrity, and existence of a document or digital artefact at a specific point in time, producing a tamper-evident record legally admissible as proof. In digital contexts, notary services hash document content and anchor that hash to a verifiable ledger — blockchain or traditional timestamping authority — binding the evidence to a precise timestamp without revealing the document contents. They bridge traditional legal document authentication with cryptographic proof mechanisms, enabling use cases ranging from intellectual property protection to supply chain provenance. Blockchain-anchored notary services eliminate single-point-of-failure trust assumptions present in classical certificate-authority-based approaches.
