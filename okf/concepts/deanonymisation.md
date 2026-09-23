---
okf_version: "0.2"
type: Class
title: Deanonymisation
resource: urn:ngm:class:deanonymisation
domain: security
description: Deanonymisation is the adversarial process of re-identifying individuals within data that was intended to be anonymous or pseudonymous, reversing the protective transformation that anonymisation applied. It works by correlating a supposedly de-identified record against auxiliary information — public datasets, quasi-identifiers such as postcode, age, and gender, behavioural fingerprints, or linkage
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:adversarial-attack
contrastsWith:
  - urn:ngm:class:anonymisation
uses:
  - urn:ngm:class:data-analysis
  - urn:ngm:class:open-source-intelligence
relatedTo:
  - urn:ngm:class:pseudonymity
  - urn:ngm:class:privacy
---

# Deanonymisation

Deanonymisation is the adversarial process of re-identifying individuals within data that was intended to be anonymous or pseudonymous, reversing the protective transformation that anonymisation applied. It works by correlating a supposedly de-identified record against auxiliary information — public datasets, quasi-identifiers such as postcode, age, and gender, behavioural fingerprints, or linkage across leaked corpora — until a unique individual is singled out. Landmark demonstrations against released medical, mobility, and streaming datasets have shown that removing direct identifiers is rarely sufficient. As the antonym of anonymisation, deanonymisation is both a privacy threat to defend against and an analytical technique used to test whether a dataset's protection actually holds.
