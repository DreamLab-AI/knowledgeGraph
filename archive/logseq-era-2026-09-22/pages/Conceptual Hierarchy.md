public:: true
alias:: ConceptualHierarchy

# Conceptual Hierarchy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:326226d737da2081e5cff55ed514c366ac54f74a44c105e3180aea9c65549749",
  "@type": "Page",
  "vc:slug": "conceptual-hierarchy",
  "title": "Conceptual Hierarchy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-ras-ontology",
      "vc:label": "IEEE RAS Ontology"
    },
    {
      "@id": "urn:visionflow:linked:ieee-rsj-iros",
      "vc:label": "IEEE/RSJ IROS"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Conceptual Hierarchy"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:conceptual-hierarchy",
  "@type": "Class",
  "label": "Conceptual Hierarchy",
  "definition": "A Conceptual Hierarchy is a structured taxonomic organisation of domain concepts into subsumption (is-a) and composition (part-of) relationships, enabling systematic knowledge representation, inheritance of properties, and semantic interoperability across robotic and autonomous systems. It supports automated reasoning, modular system design, and classification of new entities within standardised ontological frameworks.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:owl-class-hierarchy", "label": "OWL Class Hierarchy"},
      {"@id": "urn:ngm:class:rdf", "label": "RDF"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:conceptual-hierarchy:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:326226d737da2081e5cff55ed514c366ac54f74a44c105e3180aea9c65549749"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE RAS Ontology]]",
      "resolved": "urn:visionflow:linked:ieee-ras-ontology",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE/RSJ IROS]]",
      "resolved": "urn:visionflow:linked:ieee-rsj-iros",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A Conceptual Hierarchy is a structured taxonomic organisation of domain concepts into subsumption (is-a) and composition (part-of) relationships, enabling systematic knowledge representation, inheritance of properties, and semantic interoperability across robotic and autonomous systems. It supports automated reasoning, modular system design, and classification of new entities within standardised ontological frameworks.

- ### Semantic Classification
  - owl-class:: infrastructure:ConceptualHierarchy
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Ontology]], [[Knowledge Representation]]
  - supports:: [[Robotics]], [[Knowledge Graph]]
  - related-to:: [[OWL Class Hierarchy]], [[RDF]]

- ### Content
  term-id: RB-9003
  domain: rb
  # ConceptualHierarchy
  A Conceptual Hierarchy in robotics ontology represents the structured organization of robot-related concepts into taxonomic relationships, enabling systematic knowledge representation and reasoning about robotic systems, components, and behaviors. This hierarchical structuring facilitates knowledge sharing, system integration, and automated reasoning in complex robotic applications.
  The hierarchy typically organizes concepts through subsumption relationships (is-a) and composition relationships (part-of), creating multi-level abstractions from general concepts like "Robot" down to specific instances like "KUKA KR 6 R900 sixx industrial manipulator." This structure supports inheritance of properties, classification of new entities, and semantic interoperability across heterogeneous robotic systems.
  Applications span robot task planning where hierarchical action representations enable decomposition of complex tasks, knowledge bases for robot programming by demonstration, semantic scene understanding for autonomous systems, and standardization efforts like IEEE RAS Ontology for Robotics and Automation. The conceptual hierarchy enables modular system design and facilitates communication between different robotic platforms and control architectures.
  Contemporary research integrates machine learning with ontological reasoning, develops dynamic ontologies that evolve through robot experience, and explores probabilistic extensions to handle uncertain knowledge. Recent standardization efforts including OWL-based ontologies and RDF representations enable web-scale knowledge sharing and collaborative robotics development across research institutions and industries.
  - Prestes, E., et al. (2013). "Towards a core ontology for robotics and automation." Robotics and Autonomous Systems, 61(11), 1193-1204
  - Schlenoff, C., et al. (2012). "An IEEE standard ontology for robotics and automation." IEEE/RSJ International Conference on Intelligent Robots and Systems, 1337-1342
  - Gruber, T.R. (1993). "A translation approach to portable ontology specifications." Knowledge Acquisition, 5(2), 199-220
  - Olivares-Alarcos, A., et al. (2019). "A Review and Comparison of Ontology-Based Approaches to Robot Autonomy." Knowledge Engineering Review, 34, e29

  ## Sources

- ### Provenance
  - sources:: [[IEEE RAS Ontology]], [[IEEE/RSJ IROS]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T14:15:00Z
