schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#ConceptualHierarchy
legacy_uri:: urn:visionclaw:concept:infrastructure:conceptual-hierarchy
public:: true

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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Blockchain]] (bc), [[AI Agent System]] (ai), or [[Digital Twin]] (mv)"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-f80983ec7a3f"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#ConceptualHierarchy"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Conceptual Hierarchy"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:conceptual-hierarchy"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:conceptual-hierarchy"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:326226d737da2081e5cff55ed514c366ac54f74a44c105e3180aea9c65549749@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "definition": "Conceptual Hierarchy is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
    }
  ],
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:326226d737da2081e5cff55ed514c366ac54f74a44c105e3180aea9c65549749@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - ConceptualHierarchy is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:ConceptualHierarchy
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

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
