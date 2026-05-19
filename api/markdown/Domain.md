schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#Domain
legacy_uri:: urn:visionclaw:concept:infrastructure:domain
public:: true

# Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6581edef3c4261ba71b0b3181ae36ac170e23487348ab01ffc94374be0f6b6b1",
  "@type": "Page",
  "vc:slug": "domain",
  "title": "Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dnssec",
      "vc:label": "DNSSEC"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-owl-2",
      "vc:label": "W3C OWL 2"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-9ea57de8c52d"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#Domain"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "ONT-9001"
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
      "vc:value": "Domain"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:domain"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:domain"
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
    "@id": "urn:visionflow:page:6581edef3c4261ba71b0b3181ae36ac170e23487348ab01ffc94374be0f6b6b1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:domain",
  "@type": "OntologyClass",
  "label": "Domain",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "infrastructure"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "draft",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:6581edef3c4261ba71b0b3181ae36ac170e23487348ab01ffc94374be0f6b6b1"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:6581edef3c4261ba71b0b3181ae36ac170e23487348ab01ffc94374be0f6b6b1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Domain is a concept within the ngm domain.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:domain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6581edef3c4261ba71b0b3181ae36ac170e23487348ab01ffc94374be0f6b6b1"
  },
  "vc:resolutions": [
    {
      "raw": "[[DNSSEC]]",
      "resolved": "urn:visionflow:linked:dnssec",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C OWL 2]]",
      "resolved": "urn:visionflow:linked:w3-c-owl-2",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:6581edef3c4261ba71b0b3181ae36ac170e23487348ab01ffc94374be0f6b6b1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Domain is a concept within the ngm domain.
- ### Semantic Classification
  - owl-class:: infrastructure:Domain
  - owl-role:: Concept
- ### Relationships
  - <!-- No relationships defined -->
  - bridges-to:: [[Blockchain]] (bc)
- ### Content
  ## Definition
  A Domain represents a coherent and bounded sphere of knowledge or subject area within formal ontology engineering. In the context of knowledge representation, a domain defines the scope of conceptualization—the set of entities, relationships, and axioms that characterize a particular area of discourse (Gruber, 1993). Domains serve as fundamental organizing principles in ontology architecture, enabling modular knowledge organization and facilitating interoperability between specialized knowledge systems. The philosophical foundation of domain ontology derives from the distinction between upper ontologies (domain-independent) and domain ontologies (domain-specific), as articulated by Guarino (1998) in his seminal work on formal ontology. A domain establishes the ontological commitment of a knowledge system—the agreement to use shared vocabulary in a coherent and consistent manner for knowledge sharing purposes. In OWL-based systems, domains are typically realized through namespace declarations, import mechanisms, and modular ontology structures that allow for compositional knowledge engineering. The boundaries of a domain are determined by both epistemological considerations (what constitutes coherent knowledge) and pragmatic constraints (what is useful for a particular application). Modern approaches to domain modeling, as reflected in W3C OWL 2 specifications, emphasize the importance of clear domain delineation for reasoning efficiency, knowledge reuse, and semantic interoperability across heterogeneous systems. Domain partitioning enables specialized reasoning strategies, vocabulary management, and the application of domain-specific constraints while maintaining global consistency through upper-level ontological frameworks.
  #### References
  - Gruber, T. R. (1993). "Toward Principles for the Design of Ontologies Used for Knowledge Sharing." International Journal of Human-Computer Studies, 43(5-6), 907-928. https://tomgruber.org/writing/onto-design.pdf
  - Guarino, N. (1998). "Formal Ontology in Information Systems." Proceedings of FOIS'98, Trento, Italy. IOS Press. https://iaoa.org/isc2012/docs/Guarino2009_What_is_an_Ontology.pdf
  - W3C OWL Working Group. (2012). "OWL 2 Web Ontology Language: Structural Specification and Functional-Style Syntax (Second Edition)." https://www.w3.org/TR/owl2-syntax/
  - Guarino, N., Oberle, D., & Staab, S. (2009). "What Is an Ontology?" In Handbook on Ontologies (pp. 1-17). Springer. https://www.researchgate.net/publication/226279556_What_Is_an_Ontology
  - Wikipedia. (2024). "Ontology (information science)." https://en.wikipedia.org/wiki/Ontology_(information_science)
- ### Provenance
  - sources:: [[W3C OWL 2]], [[DNSSEC]]
  - migration-date:: 2026-04-26T00:00:00Z
