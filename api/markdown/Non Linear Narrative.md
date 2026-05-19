schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#NonLinearNarrative
legacy_uri:: urn:visionclaw:concept:spatial-computing:non-linear-narrative
public:: true

# Non Linear Narrative
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:baa865c974122d3c8bb80561a21600cfb89391547149e9f1a2fcc7c95148c419",
  "@type": "Page",
  "vc:slug": "non-linear-narrative",
  "title": "Non Linear Narrative",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:player-agency",
      "vc:label": "Player Agency"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:narrative-structure",
      "vc:label": "Narrative Structure"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-2a3b217237d4"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#NonLinearNarrative"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9985"
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
      "vc:value": "Non Linear Narrative"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:non-linear-narrative"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:non-linear-narrative"
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
    "@id": "urn:visionflow:page:baa865c974122d3c8bb80561a21600cfb89391547149e9f1a2fcc7c95148c419@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:non-linear-narrative",
  "@type": "OntologyClass",
  "label": "Non Linear Narrative",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:narrative-structure",
      "vc:label": "Narrative Structure"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:baa865c974122d3c8bb80561a21600cfb89391547149e9f1a2fcc7c95148c419"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:baa865c974122d3c8bb80561a21600cfb89391547149e9f1a2fcc7c95148c419@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A storytelling approach where events are presented out of chronological order or where audience choices create branching paths through the narrative, allowing multiple ways to experience story events based on interactions and decisions.",
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
      "@id": "urn:visionflow:linked:player-agency",
      "vc:label": "Player Agency"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:non-linear-narrative:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:baa865c974122d3c8bb80561a21600cfb89391547149e9f1a2fcc7c95148c419"
  },
  "vc:resolutions": [
    {
      "raw": "[[Player Agency]]",
      "resolved": "urn:visionflow:linked:player-agency",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Narrative Structure]]",
      "resolved": "urn:visionflow:owl:class:narrative-structure",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:baa865c974122d3c8bb80561a21600cfb89391547149e9f1a2fcc7c95148c419@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A storytelling approach where events are presented out of chronological order or where audience choices create branching paths through the narrative, allowing multiple ways to experience story events based on interactions and decisions.

- ### Semantic Classification
  - owl-class:: spatial-computing:NonLinearNarrative
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Narrative Structure]]
  - enables:: [[Player Agency]]

- ### Content

  - #### Types
		- Internally nonlinear: Stories told chronologically out of order
		- Interactive nonlinear: Multiple paths based on audience choices
		- Branching narrative: Story diverges based on player decisions
		- Storylets: Modular narrative units for flexible assembly
  - #### Design Considerations
		- Balance between player freedom and narrative meaning
		- Scope management for branching complexity
		- Re-convergence points to control divergence
		- Testing requirements increase with path combinations
		- Higher development cost than linear narratives

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
