---
okf_version: "0.2"
type: Class
title: Ontology
resource: urn:ngm:class:ontology
domain: artificial-intelligence
description: "In computer science and knowledge engineering, an ontology is a formal, machine-readable specification of a shared conceptualisation within a domain: it explicitly defines the classes of entities that exist, the properties and attributes of those entities, the relationships (object properties) that may hold between them, and the logical axioms that constrain valid world states. Ontologies are expr"
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:knowledge-representation
hasPart:
  - urn:ngm:class:owl-class-hierarchy
  - urn:ngm:class:object-property
  - urn:ngm:class:data-property
  - urn:ngm:class:owl-class-hierarchy
requires:
  - urn:ngm:class:formal-language
  - urn:ngm:class:axiom
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:semantic-search
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:linked-open-data
  - urn:ngm:class:semantic-interoperability
contrastsWith:
  - urn:ngm:class:database-schema
  - urn:ngm:class:taxonomy
bridgesTo:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:rdf
  - urn:ngm:class:owl-class-hierarchy
  - urn:ngm:class:description-logic
  - urn:ngm:class:sparql
  - urn:ngm:class:description-logic
partOf:
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:semantic-web-linked-data-standard
relatedTo:
  - urn:ngm:class:linked-data
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:upper-ontology
---

# Ontology

In computer science and knowledge engineering, an ontology is a formal, machine-readable specification of a shared conceptualisation within a domain: it explicitly defines the classes of entities that exist, the properties and attributes of those entities, the relationships (object properties) that may hold between them, and the logical axioms that constrain valid world states. Ontologies are expressed using languages such as OWL 2 (Web Ontology Language) built atop RDF, enabling automated reasoning engines to infer implicit knowledge and detect logical inconsistencies. They underpin knowledge graphs, linked data systems, semantic interoperability frameworks, and AI knowledge representation across scientific, industrial, and Web domains. Rooted in philosophical ontology (the study of being and categories of existence), the computational form translates that tradition into machine-processable schemas governed by Description Logics with decidable inference.
