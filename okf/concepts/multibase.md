---
okf_version: "0.2"
type: Class
title: Multibase
resource: urn:ngm:class:multibase
domain: infrastructure
description: Multibase is a self-describing encoding format specification that prefixes a binary value with a single character identifying which base encoding, such as base58btc, base32 or base64url, was used, so the encoded string can be decoded without external context. It is part of the Multiformats family of self-describing protocol specifications. It is used wherever content identifiers or decentralised-i
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:multiformats
partOf:
  - urn:ngm:class:multiformats
relatedTo:
  - urn:ngm:class:content-identifier
---

# Multibase

Multibase is a self-describing encoding format specification that prefixes a binary value with a single character identifying which base encoding, such as base58btc, base32 or base64url, was used, so the encoded string can be decoded without external context. It is part of the Multiformats family of self-describing protocol specifications. It is used wherever content identifiers or decentralised-identifier material must be represented as text unambiguously across systems, such as Content Identifiers.
