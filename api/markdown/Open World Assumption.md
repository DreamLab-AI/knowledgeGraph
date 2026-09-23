
The open world assumption (OWA) is a logical stance in knowledge representation under which the absence of a statement from a knowledge base does not imply that the statement is false, only that its truth value is unknown. It is the foundational semantic principle of description logics and the Web Ontology Language (OWL), reflecting the incomplete and distributed nature of knowledge on the Semantic Web. The OWA contrasts directly with the closed world assumption used in conventional databases and logic programming, where unstated facts are treated as false.

- ### Overview
  - Under the OWA a reasoner only concludes that something is false when the knowledge base explicitly entails its negation. Missing information is interpreted as incomplete knowledge about an open, evolving world rather than as a definitive denial. This is appropriate for the Web, where any single source describes only a fragment of reality and new assertions may always be added.
  - The OWA pairs naturally with the absence of the unique name assumption: two different identifiers may denote the same entity unless an explicit inequality is stated. Together these choices make ontology reasoning monotonic — adding facts never retracts previously valid conclusions.

- ### Key aspects
  - Absence of evidence is not evidence of absence.
  - Monotonic entailment: conclusions are preserved as knowledge grows.
  - Compatible with distributed, mergeable knowledge sources.
  - Default for OWL and description-logic reasoners.

- ### Applications
  - Ontology-based data integration across heterogeneous sources.
  - Semantic Web and linked-data reasoning where completeness cannot be assumed.
  - Biomedical and enterprise knowledge graphs requiring conservative inference.

- ### Provenance

