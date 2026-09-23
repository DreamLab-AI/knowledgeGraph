---
okf_version: "0.2"
type: Class
title: OWL Class Hierarchy
resource: urn:ngm:class:owl-class-hierarchy
domain: artificial-intelligence
description: The OWL Class Hierarchy is the directed acyclic graph (DAG) of named and anonymous classes connected via rdfs:subClassOf axioms within a Web Ontology Language (OWL) ontology, imposing a partial order on the class extension lattice. It provides the primary vehicle for monotonic inheritance of properties and restrictions, enabling description-logic reasoners such as HermiT, Pellet, and FaCT++ to cla
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:ontology-structure
hasPart:
  - urn:ngm:class:owl-class
  - urn:ngm:class:subclass-axiom
  - urn:ngm:class:equivalent-class-axiom
  - urn:ngm:class:disjoint-classes-axiom
requires:
  - urn:ngm:class:description-logic
  - urn:ngm:class:rdf-schema
enables:
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:classification
  - urn:ngm:class:inference
  - urn:ngm:class:consistency-checking
  - urn:ngm:class:classification
  - urn:ngm:class:inference
dependsOn:
  - urn:ngm:class:open-world-assumption
  - urn:ngm:class:formal-semantics
implements:
  - urn:ngm:class:owl-2-web-ontology-language
  - urn:ngm:class:description-logic
  - urn:ngm:class:owl-2-web-ontology-language
  - urn:ngm:class:description-logic
contrastsWith:
  - urn:ngm:class:closed-world-assumption
  - urn:ngm:class:rdf-type-hierarchy
  - urn:ngm:class:property-hierarchy
bridgesTo:
  - urn:ngm:class:upper-ontology
  - urn:ngm:class:machine-learning-taxonomy
uses:
  - urn:ngm:class:turtle
  - urn:ngm:class:rdfs-subclassof
  - urn:ngm:class:manchester-syntax
  - urn:ngm:class:turtle
supports:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:ontology-alignment
  - urn:ngm:class:semantic-web-linked-data-standard
standardizedBy:
  - urn:ngm:class:w3-c
partOf:
  - urn:ngm:class:owl-2-web-ontology-language
  - urn:ngm:class:owl-2-web-ontology-language
relatedTo:
  - urn:ngm:class:biomedical-ontology
  - urn:ngm:class:hermit-reasoner
  - urn:ngm:class:pellet-reasoner
  - urn:ngm:class:protege
---

# OWL Class Hierarchy

The OWL Class Hierarchy is the directed acyclic graph (DAG) of named and anonymous classes connected via rdfs:subClassOf axioms within a Web Ontology Language (OWL) ontology, imposing a partial order on the class extension lattice. It provides the primary vehicle for monotonic inheritance of properties and restrictions, enabling description-logic reasoners such as HermiT, Pellet, and FaCT++ to classify individuals, detect unsatisfiable classes, and compute implicit subsumption relationships that are not asserted explicitly. The hierarchy is closed under the OWL semantics of the chosen profile (OWL 2 DL, EL, QL, or RL), constraining the decidability and computational complexity of reasoning tasks performed over it. Well-engineered class hierarchies underpin interoperability across domains including biomedical ontologies (GO, SNOMED CT), geospatial standards, and knowledge-graph schemas.
