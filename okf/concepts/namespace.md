---
okf_version: "0.2"
type: Class
title: Namespace
resource: urn:ngm:class:namespace
domain: data
description: A namespace is a named scope that groups a set of identifiers so that names can be reused without collision across different contexts. By qualifying each name with its containing scope, a namespace lets the same local label denote distinct entities in different parts of a system. The concept appears across programming languages, XML and RDF vocabularies, file systems, DNS, and container orchestrat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data
requires:
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:metadata
dependsOn:
  - urn:ngm:class:uri
contrastsWith:
  - urn:ngm:class:database
bridgesTo:
  - urn:ngm:class:xml
uses:
  - urn:ngm:class:uri
  - urn:ngm:class:xml
supports:
  - urn:ngm:class:data-governance
partOf:
  - urn:ngm:class:data
relatedTo:
  - urn:ngm:class:dns
  - urn:ngm:class:database
  - urn:ngm:class:metadata
  - urn:ngm:class:schema
---

# Namespace

A namespace is a named scope that groups a set of identifiers so that names can be reused without collision across different contexts. By qualifying each name with its containing scope, a namespace lets the same local label denote distinct entities in different parts of a system. The concept appears across programming languages, XML and RDF vocabularies, file systems, DNS, and container orchestration as a fundamental mechanism for organising and disambiguating names.
