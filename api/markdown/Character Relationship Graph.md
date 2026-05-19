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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9819"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Character Relationship Graph"
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
  "@id": "urn:ngm:class:character-relationship-graph",
  "@type": "Class",
  "label": "Character Relationship Graph",
  "definition": "A network data structure representing narrative characters as vertices and their interactions or relationships as edges, used to model social dynamics, drive procedural story generation, and analyze narrative structure through graph theory and social network analysis.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
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
