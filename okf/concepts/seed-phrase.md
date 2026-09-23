---
okf_version: "0.2"
type: Class
title: Seed Phrase
resource: urn:ngm:class:seed-phrase
domain: blockchain
description: A seed phrase, also called a recovery or mnemonic phrase, is an ordered list of words, typically twelve or twenty-four, that encodes the master secret from which a cryptocurrency wallet derives all of its private keys. Generated from random entropy and mapped to words via a standard wordlist, it provides a human-readable backup that can fully restore a wallet on any compatible device. Because anyo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:digital-wallet
hasPart:
  - urn:ngm:class:entropy
requires:
  - urn:ngm:class:cold-storage
enables:
  - urn:ngm:class:self-custody
  - urn:ngm:class:hierarchical-deterministic-wallet
dependsOn:
  - urn:ngm:class:key-management
uses:
  - urn:ngm:class:cryptographic-key
supports:
  - urn:ngm:class:private-key
  - urn:ngm:class:cryptocurrency-wallet
partOf:
  - urn:ngm:class:digital-wallet
relatedTo:
  - urn:ngm:class:security
  - urn:ngm:class:blockchain
---

# Seed Phrase

A seed phrase, also called a recovery or mnemonic phrase, is an ordered list of words, typically twelve or twenty-four, that encodes the master secret from which a cryptocurrency wallet derives all of its private keys. Generated from random entropy and mapped to words via a standard wordlist, it provides a human-readable backup that can fully restore a wallet on any compatible device. Because anyone holding the phrase controls the funds, its secrecy and secure storage are paramount to self-custody.
