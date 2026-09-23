---
okf_version: "0.2"
type: Class
title: Personal Data
resource: urn:ngm:class:personal-data
domain: governance
description: Personal data is any information relating to an identified or identifiable natural person, known as the data subject. Under data protection regimes such as the GDPR, identifiability can be direct (a name or identification number) or indirect (factors specific to a person's physical, economic, cultural or social identity). Special categories such as health, biometric or political data attract heigh
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-governance
requires:
  - urn:ngm:class:consent-management
enables:
  - urn:ngm:class:personal-data-store
dependsOn:
  - urn:ngm:class:privacy
  - urn:ngm:class:gdpr
contrastsWith:
  - urn:ngm:class:anonymisation
bridgesTo:
  - urn:ngm:class:identity
uses:
  - urn:ngm:class:pseudonymisation
  - urn:ngm:class:anonymisation
supports:
  - urn:ngm:class:data-sovereignty
standardizedBy:
  - urn:ngm:class:gdpr
partOf:
  - urn:ngm:class:data-protection
relatedTo:
  - urn:ngm:class:data-privacy
  - urn:ngm:class:data-breach
  - urn:ngm:class:right-to-be-forgotten
  - urn:ngm:class:surveillance
---

# Personal Data

Personal data is any information relating to an identified or identifiable natural person, known as the data subject. Under data protection regimes such as the GDPR, identifiability can be direct (a name or identification number) or indirect (factors specific to a person's physical, economic, cultural or social identity). Special categories such as health, biometric or political data attract heightened protection. The concept anchors most privacy and data governance obligations, determining when processing rules, consent requirements and individual rights apply.
