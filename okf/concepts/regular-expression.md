---
okf_version: "0.2"
type: Class
title: Regular Expression
resource: urn:ngm:class:regular-expression
domain: standards
description: A regular expression is a formal notation for describing sets of strings using a concise pattern language built from literals, character classes, quantifiers, and grouping. Regular expressions describe exactly the class of regular languages and are typically implemented by compiling the pattern into a finite-state machine for efficient matching. They are a foundational tool for searching, validati
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:formal-language
requires:
  - urn:ngm:class:finite-state-machine
enables:
  - urn:ngm:class:compiler
  - urn:ngm:class:data-validation
dependsOn:
  - urn:ngm:class:automata-theory
implements:
  - urn:ngm:class:formal-language
contrastsWith:
  - urn:ngm:class:compiler
uses:
  - urn:ngm:class:finite-state-machine
  - urn:ngm:class:automata-theory
supports:
  - urn:ngm:class:compiler
  - urn:ngm:class:natural-language-processing
standardizedBy:
  - urn:ngm:class:posix
partOf:
  - urn:ngm:class:formal-language
relatedTo:
  - urn:ngm:class:finite-state-machine
  - urn:ngm:class:programming-language
  - urn:ngm:class:algorithm
  - urn:ngm:class:data-validation
---

# Regular Expression

A regular expression is a formal notation for describing sets of strings using a concise pattern language built from literals, character classes, quantifiers, and grouping. Regular expressions describe exactly the class of regular languages and are typically implemented by compiling the pattern into a finite-state machine for efficient matching. They are a foundational tool for searching, validating, and transforming text.
