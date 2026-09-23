---
okf_version: "0.2"
type: Class
title: JSON-LD Serialisation
resource: urn:ngm:class:json-ld
domain: standards
description: A W3C-standardised serialisation of linked data in ordinary JSON, in which an @context maps plain JSON keys to IRIs so that documents remain idiomatic JSON for developers while being losslessly convertible to RDF graphs. JSON-LD 1.1 (W3C Recommendation, 2020) provides @id, @type, framing, and compaction/expansion algorithms, and is the interchange syntax used by schema.org markup, Verifiable Crede
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:serialisation-format
enables:
  - urn:ngm:class:knowledge-graph
implements:
  - urn:ngm:class:linked-data
bridgesTo:
  - urn:ngm:class:w3c-recommendation
  - urn:ngm:class:schema-org
uses:
  - urn:ngm:class:json-data-interchange-format
relatedTo:
  - urn:ngm:class:rdf
  - urn:ngm:class:semantic-web-linked-data-standard
---

# JSON-LD Serialisation

A W3C-standardised serialisation of linked data in ordinary JSON, in which an @context maps plain JSON keys to IRIs so that documents remain idiomatic JSON for developers while being losslessly convertible to RDF graphs. JSON-LD 1.1 (W3C Recommendation, 2020) provides @id, @type, framing, and compaction/expansion algorithms, and is the interchange syntax used by schema.org markup, Verifiable Credentials, DID documents, ActivityPub, and agent-to-agent protocols.
