schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#CharacterRelationshipGraph
legacy_uri:: urn:visionclaw:concept:spatial-computing:character-relationship-graph
public:: true

# Character Relationship Graph
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:13ecc50bdcd423e11458529235a1e901c4bc29ee46cfdb641a97255f1e9a15fc",
  "@type": "Page",
  "vc:slug": "character-relationship-graph",
  "title": "Character Relationship Graph",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:character-ai",
      "vc:label": "Character AI"
    },
    {
      "@id": "urn:visionflow:linked:character-attributes",
      "vc:label": "Character Attributes"
    },
    {
      "@id": "urn:visionflow:linked:narrative-generation",
      "vc:label": "Narrative Generation"
    },
    {
      "@id": "urn:visionflow:linked:relationship-modeling",
      "vc:label": "Relationship Modeling"
    },
    {
      "@id": "urn:visionflow:linked:story-analysis",
      "vc:label": "Story Analysis"
    },
    {
      "@id": "urn:visionflow:owl:class:graph-database",
      "vc:label": "Graph Database"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:social-network-graph",
      "vc:label": "Social Network Graph"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
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
      "vc:value": "sha256-12-cf31c55e457e"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#CharacterRelationshipGraph"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9819"
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
      "vc:value": "Character Relationship Graph"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:character-relationship-graph"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:character-relationship-graph"
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
    "@id": "urn:visionflow:page:13ecc50bdcd423e11458529235a1e901c4bc29ee46cfdb641a97255f1e9a15fc@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:character-relationship-graph",
  "@type": "Class",
  "label": "Character Relationship Graph",
  "definition": "A network data structure representing narrative characters as vertices and their interactions or relationships as edges, used to model social dynamics, drive procedural story generation, and analyze narrative structure through graph theory and social network analysis.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:social-network-graph",
      "label": "Social Network Graph"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:character-attributes",
        "label": "Character Attributes"
      },
      {
        "@id": "urn:ngm:class:relationship-modeling",
        "label": "Relationship Modeling"
      },
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:character-ai",
        "label": "Character AI"
      },
      {
        "@id": "urn:ngm:class:narrative-generation",
        "label": "Narrative Generation"
      },
      {
        "@id": "urn:ngm:class:story-analysis",
        "label": "Story Analysis"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:character-relationship-graph:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:13ecc50bdcd423e11458529235a1e901c4bc29ee46cfdb641a97255f1e9a15fc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Character AI]]",
      "resolved": "urn:visionflow:linked:character-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[Character Attributes]]",
      "resolved": "urn:visionflow:linked:character-attributes",
      "kind": "StubLink"
    },
    {
      "raw": "[[Narrative Generation]]",
      "resolved": "urn:visionflow:linked:narrative-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Relationship Modeling]]",
      "resolved": "urn:visionflow:linked:relationship-modeling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Story Analysis]]",
      "resolved": "urn:visionflow:linked:story-analysis",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graph Database]]",
      "resolved": "urn:visionflow:owl:class:graph-database",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Social Network Graph]]",
      "resolved": "urn:visionflow:owl:class:social-network-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:13ecc50bdcd423e11458529235a1e901c4bc29ee46cfdb641a97255f1e9a15fc@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A network data structure representing narrative characters as vertices and their interactions or relationships as edges, used to model social dynamics, drive procedural story generation, and analyze narrative structure through graph theory and social network analysis.

- ### Semantic Classification
  - owl-class:: spatial-computing:CharacterRelationshipGraph
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Social Network Graph]]
  - requires:: [[Graph Database]], [[Relationship Modeling]], [[Character Attributes]]
  - enables:: [[Narrative Generation]], [[Story Analysis]], [[Character AI]]
  - bridges-to:: [[Telecollaboration]]

- ### Content

  - ## Technical Details
  - **Network Properties**:
		- Vertices represent narrative characters
		- Edges represent interactions or relationships
		- Relationship types: positive, negative, neutral
		- Dynamic changes drive narrative emergence
  - **Research Findings (2024)**:
		- LLM-generated stories show higher density and clustering among amiable characters
		- Strong bias toward positive relationships in AI stories
		- LLMs struggle with complex relationships in longer narratives
		- Human stories have more conflict-driven social dynamics
  - **Notable Systems**:
		- NetworkING: Uses character relationships for interactive narrative generation
		- STORYVERSE: Co-authoring dynamic plot with LLM-based character simulation
  - **Applications Across Fields**: Literary analysis, AI narrative generation, game design, complex systems modeling
  - ## Applications
  - Procedural story generation
  - Interactive narrative game design
  - Literary criticism and analysis
  - Social simulation in virtual worlds
  - NPC relationship systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
