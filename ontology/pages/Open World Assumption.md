public:: true

# Open World Assumption
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:open-world-assumption", "@type":"Page", "title":"Open World Assumption", "vc:slug":"open-world-assumption", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-world-assumption",
  "@type": "Class",
  "label": "Open World Assumption",
  "definition": "The open world assumption (OWA) is a logical stance in knowledge representation under which the absence of a statement from a knowledge base does not imply that the statement is false, only that its truth value is unknown. It is the foundational semantic principle of description logics and the Web Ontology Language (OWL), reflecting the incomplete and distributed nature of knowledge on the Semantic Web. The OWA contrasts directly with the closed world assumption used in conventional databases and logic programming, where unstated facts are treated as false.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:ontology", "label": "Ontology" }
  ],
  "relations": {
    "implements": [
      { "@id": "urn:ngm:class:description-logic", "label": "Description Logic" },
      { "@id": "urn:ngm:class:monotonic-reasoning", "label": "Monotonic Reasoning" }
    ],
    "dependsOn": [
      { "@id": "urn:ngm:class:formal-semantics", "label": "Formal Semantics" },
      { "@id": "urn:ngm:class:logical-inference", "label": "Logical Inference" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:knowledge-integration", "label": "Knowledge Integration" },
      { "@id": "urn:ngm:class:semantic-reasoning", "label": "Semantic Reasoning" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:web-ontology-language", "label": "Web Ontology Language" },
      { "@id": "urn:ngm:class:rdf", "label": "RDF" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:semantic-web", "label": "Semantic Web" },
      { "@id": "urn:ngm:class:linked-data", "label": "Linked Data" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:closed-world-assumption", "label": "Closed World Assumption" },
      { "@id": "urn:ngm:class:negation-as-failure", "label": "Negation as Failure" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:no-unique-name-assumption", "label": "No Unique Name Assumption" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:automated-reasoner", "label": "Automated Reasoner" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:domain-ontology", "label": "Domain Ontology" },
      { "@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph" }
    ]
  },
  "sameAs": [
    { "@id": "urn:ngm:class:owa", "label": "OWA" }
  ],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - The [[Open World Assumption]] holds that an unstated fact is unknown rather than false, providing the semantic foundation for [[Description Logic]] and the [[Web Ontology Language]]. It supports the [[Semantic Web]] and contrasts directly with the [[Closed World Assumption]] of databases.

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

- ### Relationships
  - subClassOf:: [[Ontology]]
  - implements:: [[Description Logic]]
  - implements:: [[Monotonic Reasoning]]
  - dependsOn:: [[Formal Semantics]]
  - enables:: [[Knowledge Integration]]
  - uses:: [[Web Ontology Language]]
  - supports:: [[Semantic Web]]
  - contrastsWith:: [[Closed World Assumption]]
  - contrastsWith:: [[Negation as Failure]]
  - requires:: [[No Unique Name Assumption]]
  - partOf:: [[Knowledge Representation]]
  - relatedTo:: [[Domain Ontology]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
