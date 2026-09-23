---
okf_version: "0.2"
type: Class
title: Resolver
resource: urn:ngm:class:resolver
domain: standards
description: A resolver is a component that takes an identifier and returns the resource, address, or value it stands for. In identification infrastructure such as GS1 Digital Link and the Domain Name System, a resolver service receives a request containing a structured identifier and redirects the requester to one of potentially many linked resources — product information, traceability records, or network add
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:middleware
enables:
  - urn:ngm:class:interoperability
uses:
  - urn:ngm:class:unique-identifier
partOf:
  - urn:ngm:class:gs1-digital-link
  - urn:ngm:class:proprioceptive-sensor
relatedTo:
  - urn:ngm:class:domain-name-system
  - urn:ngm:class:rotary-encoder
---

# Resolver

A resolver is a component that takes an identifier and returns the resource, address, or value it stands for. In identification infrastructure such as GS1 Digital Link and the Domain Name System, a resolver service receives a request containing a structured identifier and redirects the requester to one of potentially many linked resources — product information, traceability records, or network addresses — chosen by link type and context. The term also names the electromechanical rotary transformer used in robotics and motor control to resolve a shaft's absolute angular position from induced analogue signals.
