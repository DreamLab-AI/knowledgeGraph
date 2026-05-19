schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#ExpertSystems
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:expert-systems
public:: true

# Expert Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ff7b82b996e8a5301231668161ede8fe9997d5f32ce58c77bc8e98dc6769c221",
  "@type": "Page",
  "vc:slug": "expert-systems",
  "title": "Expert Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decision-support",
      "vc:label": "Decision Support"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-representation",
      "vc:label": "Knowledge Representation"
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
      "vc:value": "sha256-12-fdde0d7bd71c"
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
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#ExpertSystems"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1002"
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
      "vc:value": "Expert Systems"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:expert-systems"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:expert-systems"
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
    "@id": "urn:visionflow:page:ff7b82b996e8a5301231668161ede8fe9997d5f32ce58c77bc8e98dc6769c221@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:expert-systems",
  "@type": "OntologyClass",
  "label": "Expert Systems",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:knowledge-representation",
      "vc:label": "Knowledge Representation"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "draft",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:ff7b82b996e8a5301231668161ede8fe9997d5f32ce58c77bc8e98dc6769c221"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:ff7b82b996e8a5301231668161ede8fe9997d5f32ce58c77bc8e98dc6769c221@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Expert Systems is a artificial intelligence concept and a type of Knowledge Representation. that enables Decision Support.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:decision-support",
      "vc:label": "Decision Support"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
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
  "@id": "urn:visionflow:annotation:link-resolutions:expert-systems:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ff7b82b996e8a5301231668161ede8fe9997d5f32ce58c77bc8e98dc6769c221"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decision Support]]",
      "resolved": "urn:visionflow:linked:decision-support",
      "kind": "StubLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Representation]]",
      "resolved": "urn:visionflow:owl:class:knowledge-representation",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:ff7b82b996e8a5301231668161ede8fe9997d5f32ce58c77bc8e98dc6769c221@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Expert Systems is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ExpertSystems
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Knowledge Representation]]
  - enables:: [[Decision Support]]
  - bridges-to:: [[Autonomous Robot]], [[Blockchain]]

- ### Content

  ### Definition
  Expert systems are computer programs that emulate the decision-making ability of human experts in specific domains. They consist of a knowledge base containing domain-specific information and an inference engine that applies logical rules to derive conclusions, make recommendations, or solve complex problems within their specialized area of expertise.

  ### Architecture Components
  - Knowledge base (facts and rules)
  - Inference engine (reasoning mechanism)
  - User interface
  - Explanation facility
  - Knowledge acquisition module

  ### Historical Significance
  - MYCIN (medical diagnosis)
  - DENDRAL (chemical analysis)
  - XCON (computer configuration)
  - Peak popularity in 1980s-1990s

  ### Modern Applications
  - Medical diagnosis support
  - Financial planning
  - Quality control
  - Fault diagnosis
  - Configuration systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
