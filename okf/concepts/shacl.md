---
okf_version: "0.2"
type: Class
title: SHACL
resource: urn:ngm:class:shacl
domain: data
description: SHACL (Shapes Constraint Language) is a W3C standard for validating RDF graphs against a set of declarative conditions expressed as shapes. It defines constraints on the structure, datatypes, cardinality and value ranges that nodes in a graph must satisfy, and reports conformance results identifying any violations. SHACL enables data quality assurance and interface contracts for linked data, compl
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:knowledge-representation
enables:
  - urn:ngm:class:knowledge-graph
dependsOn:
  - urn:ngm:class:rdf
contrastsWith:
  - urn:ngm:class:owl
uses:
  - urn:ngm:class:rdf
  - urn:ngm:class:turtle
supports:
  - urn:ngm:class:data-quality
  - urn:ngm:class:data-governance
standardizedBy:
  - urn:ngm:class:knowledge-representation
partOf:
  - urn:ngm:class:knowledge-representation
relatedTo:
  - urn:ngm:class:owl
  - urn:ngm:class:sparql
  - urn:ngm:class:linked-data
---

# SHACL

SHACL (Shapes Constraint Language) is a W3C standard for validating RDF graphs against a set of declarative conditions expressed as shapes. It defines constraints on the structure, datatypes, cardinality and value ranges that nodes in a graph must satisfy, and reports conformance results identifying any violations. SHACL enables data quality assurance and interface contracts for linked data, complementing OWL by focusing on validation rather than inference.
