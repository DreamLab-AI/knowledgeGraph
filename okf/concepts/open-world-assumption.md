---
okf_version: "0.2"
type: Class
title: Open World Assumption
resource: urn:ngm:class:open-world-assumption
domain: artificial-intelligence
description: The open world assumption (OWA) is a logical stance in knowledge representation under which the absence of a statement from a knowledge base does not imply that the statement is false, only that its truth value is unknown. It is the foundational semantic principle of description logics and the Web Ontology Language (OWL), reflecting the incomplete and distributed nature of knowledge on the Semanti
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:ontology
requires:
  - urn:ngm:class:no-unique-name-assumption
enables:
  - urn:ngm:class:knowledge-integration
  - urn:ngm:class:semantic-reasoning-engine
dependsOn:
  - urn:ngm:class:formal-semantics
  - urn:ngm:class:logical-inference
implements:
  - urn:ngm:class:description-logic
  - urn:ngm:class:monotonic-reasoning
contrastsWith:
  - urn:ngm:class:closed-world-assumption
  - urn:ngm:class:negation-as-failure
bridgesTo:
  - urn:ngm:class:automated-reasoner
uses:
  - urn:ngm:class:web-ontology-language
  - urn:ngm:class:rdf
supports:
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:linked-data
partOf:
  - urn:ngm:class:knowledge-representation
relatedTo:
  - urn:ngm:class:domain-ontology
  - urn:ngm:class:knowledge-graph
---

# Open World Assumption

The open world assumption (OWA) is a logical stance in knowledge representation under which the absence of a statement from a knowledge base does not imply that the statement is false, only that its truth value is unknown. It is the foundational semantic principle of description logics and the Web Ontology Language (OWL), reflecting the incomplete and distributed nature of knowledge on the Semantic Web. The OWA contrasts directly with the closed world assumption used in conventional databases and logic programming, where unstated facts are treated as false.
