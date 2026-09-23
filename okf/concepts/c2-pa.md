---
okf_version: "0.2"
type: Class
title: C2PA
resource: urn:ngm:class:c2-pa
domain: standards
description: C2PA (Coalition for Content Provenance and Authenticity) is a cross-industry open technical standards body and specification that cryptographically binds signed provenance metadata — covering capture origin, editing history, and AI generation disclosure — to digital media assets including images, video, audio, and documents. Founded by Adobe, Arm, BBC, Intel, Microsoft, and Truepic under the Joint
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:sc-standards-and-interop
hasPart:
  - urn:ngm:class:c2-pa-content-credentials
  - urn:ngm:class:c2pa-manifest
  - urn:ngm:class:c2pa-assertion
  - urn:ngm:class:c2pa-trust-list
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:provenance-verification
  - urn:ngm:class:media-authentication
  - urn:ngm:class:ai-generated-content-disclosure
  - urn:ngm:class:ai-generated-content-disclosure
implements:
  - urn:ngm:class:content-authenticity
  - urn:ngm:class:content-authenticity
  - urn:ngm:class:project-origin
contrastsWith:
  - urn:ngm:class:deepfakes
  - urn:ngm:class:synthetic-media
bridgesTo:
  - urn:ngm:class:ai-governance-and-ethics
  - urn:ngm:class:watermarking-service
  - urn:ngm:class:provenance-ontology-prov-o
  - urn:ngm:class:watermarking-service
  - urn:ngm:class:provenance-ontology-prov-o
uses:
  - urn:ngm:class:cose
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:jumbf
supports:
  - urn:ngm:class:disinformation-countermeasures
  - urn:ngm:class:supply-chain-transparency
  - urn:ngm:class:media-integrity
relatedTo:
  - urn:ngm:class:open-media-alliance
  - urn:ngm:class:w3-c-verifiable-credentials
  - urn:ngm:class:joint-development-foundation
---

# C2PA

C2PA (Coalition for Content Provenance and Authenticity) is a cross-industry open technical standards body and specification that cryptographically binds signed provenance metadata — covering capture origin, editing history, and AI generation disclosure — to digital media assets including images, video, audio, and documents. Founded by Adobe, Arm, BBC, Intel, Microsoft, and Truepic under the Joint Development Foundation, the C2PA specification defines the manifest container format (JUMBF/ISO 19566-5), assertion vocabularies, COSE-based signing mechanism, X.509 PKI trust model, and the resulting Content Credentials artefact. C2PA consolidates two prior initiatives — Adobe's Content Authenticity Initiative (CAI) and the BBC-led Project Origin — into a single interoperable standard for end-to-end media provenance across capture, editing, distribution, and verification stages.
