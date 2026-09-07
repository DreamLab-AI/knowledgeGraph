```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8a64e635ed99ebd600e8927a656299afd39f107e0c5881ee1d278bb587d4e6a8",
  "@type": "Page",
  "vc:slug": "narrative-design-ontology",
  "title": "Narrative Design Ontology",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:branching-path",
      "vc:label": "Branching Path"
    },
    {
      "@id": "urn:visionflow:linked:dramatis-personae-ontology",
      "vc:label": "Dramatis Personae Ontology"
    },
    {
      "@id": "urn:visionflow:linked:event-sequencing",
      "vc:label": "Event Sequencing"
    },
    {
      "@id": "urn:visionflow:linked:interactive-fiction",
      "vc:label": "Interactive Fiction"
    },
    {
      "@id": "urn:visionflow:linked:interactive-storytelling-system",
      "vc:label": "Interactive Storytelling System"
    },
    {
      "@id": "urn:visionflow:linked:narrative-schema-org",
      "vc:label": "Narrative Schema.org"
    },
    {
      "@id": "urn:visionflow:linked:plot-graph-database",
      "vc:label": "Plot Graph Database"
    },
    {
      "@id": "urn:visionflow:linked:plot-structure",
      "vc:label": "Plot Structure"
    },
    {
      "@id": "urn:visionflow:linked:procedural-story-generation",
      "vc:label": "Procedural Story Generation"
    },
    {
      "@id": "urn:visionflow:linked:story-event",
      "vc:label": "Story Event"
    },
    {
      "@id": "urn:visionflow:linked:story-node",
      "vc:label": "Story Node"
    },
    {
      "@id": "urn:visionflow:linked:story-ontology",
      "vc:label": "Story Ontology"
    },
    {
      "@id": "urn:visionflow:linked:transmedia-storytelling",
      "vc:label": "Transmedia Storytelling"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:character-model",
      "vc:label": "Character Model"
    },
    {
      "@id": "urn:visionflow:owl:class:character-relationship-graph",
      "vc:label": "Character Relationship Graph"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:dialogue-system",
      "vc:label": "Dialogue System"
    },
    {
      "@id": "urn:visionflow:owl:class:game-narratives",
      "vc:label": "Game Narratives"
    },
    {
      "@id": "urn:visionflow:owl:class:graph-database",
      "vc:label": "Graph Database"
    },
    {
      "@id": "urn:visionflow:owl:class:narrative-arc",
      "vc:label": "Narrative Arc"
    },
    {
      "@id": "urn:visionflow:owl:class:narrative-theme",
      "vc:label": "Narrative Theme"
    },
    {
      "@id": "urn:visionflow:owl:class:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:owl:class:procedural-generation",
      "vc:label": "Procedural Generation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20303"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Narrative Design Ontology"
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
  "@id": "urn:ngm:class:narrative-design-ontology",
  "@type": "Class",
  "label": "Narrative Design Ontology",
  "definition": "Formal ontology for modeling structured storytelling frameworks, interactive narratives, story graphs, character relationships, and branching narrative paths in digital and interactive media.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:character-relationship-graph",
        "label": "Character Relationship Graph"
      },
      {
        "@id": "urn:ngm:class:narrative-arc",
        "label": "Narrative Arc"
      },
      {
        "@id": "urn:ngm:class:narrative-theme",
        "label": "Narrative Theme"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Plot Graph Database"
      },
      {
        "@id": "urn:ngm:class:character-model",
        "label": "Character Model"
      },
      {
        "@id": "urn:ngm:class:dialogue-system",
        "label": "Dialogue System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interactive-storytelling",
        "label": "Interactive Fiction"
      },
      {
        "@id": "urn:ngm:class:procedural-content-generation",
        "label": "Procedural Story Generation"
      },
      {
        "@id": "urn:ngm:class:storytelling",
        "label": "Transmedia Storytelling"
      },
      {
        "@id": "urn:ngm:class:game-narratives",
        "label": "Game Narratives"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:interactive-storytelling",
        "label": "Interactive Storytelling System"
      }
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

- ### Definition
  - Formal ontology for modeling structured storytelling frameworks, interactive narratives, story graphs, character relationships, and branching narrative paths in digital and interactive media.

- ### Semantic Classification
  - owl-class:: spatial-computing:NarrativeDesignOntology
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[CreativeMediaDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Story Node]], [[Narrative Arc]], [[Character Relationship Graph]], [[Plot Structure]], [[Branching Path]], [[Story Event]], [[Narrative Theme]]
  - is-part-of:: [[Interactive Storytelling System]]
  - requires:: [[Character Model]], [[Event Sequencing]], [[Dialogue System]], [[Plot Graph Database]]
  - enables:: [[Interactive Fiction]], [[Game Narratives]], [[Transmedia Storytelling]], [[Procedural Story Generation]]
  - depends-on:: [[Graph Database]], [[Natural Language Processing]], [[Procedural Generation]]

- ### Content
  Narrative Design Ontology — content pending enrichment.

- ### Provenance
  - sources:: [[Dramatis Personae Ontology]], [[Story Ontology]], [[Narrative Schema.org]]
  - migration-date:: 2026-04-26T00:00:00Z
