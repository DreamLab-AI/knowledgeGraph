---
okf_version: "0.2"
type: Class
title: Closed World Assumption
resource: urn:ngm:class:closed-world-assumption
domain: artificial-intelligence
description: "The Closed World Assumption (CWA) is the presumption that any statement not known to be true is false, treating the knowledge base as a complete description of the world. It is foundational to database query semantics, logic programming, and negation as failure, where the absence of a fact licenses inferring its negation. CWA simplifies reasoning over finite, curated domains but breaks down where "
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:formal-logic
  - urn:ngm:class:non-monotonic-reasoning
hasPart:
  - urn:ngm:class:negation-as-failure
  - urn:ngm:class:database-completeness-assumption
  - urn:ngm:class:answer-set-programming
requires:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:formal-logic
  - urn:ngm:class:inference-engine
  - urn:ngm:class:logic-programming
  - urn:ngm:class:first-order-logic
  - urn:ngm:class:formal-language
enables:
  - urn:ngm:class:reasoning
  - urn:ngm:class:query-answering
  - urn:ngm:class:data-integrity-constraint
  - urn:ngm:class:definite-query-answering
  - urn:ngm:class:relational-database-semantics
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:expert-systems
  - urn:ngm:class:answer-set-programming
dependsOn:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:formal-logic
  - urn:ngm:class:first-order-logic
  - urn:ngm:class:database-theory
implements:
  - urn:ngm:class:reasoning
  - urn:ngm:class:negation-as-failure
  - urn:ngm:class:deductive-database-semantics
  - urn:ngm:class:shacl
  - urn:ngm:class:datalog
  - urn:ngm:class:prolog
contrastsWith:
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:open-world-assumption
  - urn:ngm:class:owl-class-hierarchy
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:non-monotonic-logic
bridgesTo:
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:logic-programming
  - urn:ngm:class:shacl
  - urn:ngm:class:enterprise-knowledge-graph
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:large-language-models
uses:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:negation-as-failure
  - urn:ngm:class:datalog
  - urn:ngm:class:prolog
  - urn:ngm:class:sql
  - urn:ngm:class:rdf
  - urn:ngm:class:sparql
  - urn:ngm:class:description-logic
supports:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:relational-database
  - urn:ngm:class:logic-programming
  - urn:ngm:class:sparql
  - urn:ngm:class:deductive-database
  - urn:ngm:class:sql
  - urn:ngm:class:shacl
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:iso-iec
partOf:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:database-theory
relatedTo:
  - urn:ngm:class:ontology
  - urn:ngm:class:reasoning
  - urn:ngm:class:inference-engine
  - urn:ngm:class:description-logic
  - urn:ngm:class:shacl
  - urn:ngm:class:sparql
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:expert-systems
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:answer-set-programming
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:database-theory
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:large-language-models
---

# Closed World Assumption

The Closed World Assumption (CWA) is the presumption that any statement not known to be true is false, treating the knowledge base as a complete description of the world. It is foundational to database query semantics, logic programming, and negation as failure, where the absence of a fact licenses inferring its negation. CWA simplifies reasoning over finite, curated domains but breaks down where information is incomplete.
