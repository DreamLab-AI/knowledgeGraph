---
okf_version: "0.2"
type: Class
title: Type System
resource: urn:ngm:class:type-system
domain: infrastructure
description: A type system is a formal component of a programming language that classifies values and expressions into types and defines rules constraining how they may be combined. It is enforced by a checker that rejects programs violating these rules, preventing classes of errors before or during execution. Type systems vary along axes such as static versus dynamic checking, strength, and expressiveness, tr
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:programming-language
hasPart:
  - urn:ngm:class:interface
requires:
  - urn:ngm:class:programming-language
enables:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:quality-assurance
dependsOn:
  - urn:ngm:class:compiler
implements:
  - urn:ngm:class:type-script
uses:
  - urn:ngm:class:compiler
supports:
  - urn:ngm:class:api
partOf:
  - urn:ngm:class:programming-language
relatedTo:
  - urn:ngm:class:type-script
  - urn:ngm:class:interface
  - urn:ngm:class:software-architecture
---

# Type System

A type system is a formal component of a programming language that classifies values and expressions into types and defines rules constraining how they may be combined. It is enforced by a checker that rejects programs violating these rules, preventing classes of errors before or during execution. Type systems vary along axes such as static versus dynamic checking, strength, and expressiveness, trading safety guarantees against flexibility.
