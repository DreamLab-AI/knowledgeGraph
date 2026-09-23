---
okf_version: "0.2"
type: Class
title: Steganography
resource: urn:ngm:class:steganography
domain: security
description: Steganography is the practice of concealing the existence of a message by embedding it within an innocuous carrier such as an image, audio file or text, so that only the intended recipient is aware that hidden information is present. Unlike encryption, which scrambles content but leaves it visibly protected, steganography aims to make the very presence of communication undetectable. The two techni
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:obfuscation
enables:
  - urn:ngm:class:privacy
contrastsWith:
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-watermarking
bridgesTo:
  - urn:ngm:class:privacy
uses:
  - urn:ngm:class:obfuscation
supports:
  - urn:ngm:class:privacy
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-watermarking
  - urn:ngm:class:cryptography
---

# Steganography

Steganography is the practice of concealing the existence of a message by embedding it within an innocuous carrier such as an image, audio file or text, so that only the intended recipient is aware that hidden information is present. Unlike encryption, which scrambles content but leaves it visibly protected, steganography aims to make the very presence of communication undetectable. The two techniques are complementary and are often combined for layered confidentiality.
