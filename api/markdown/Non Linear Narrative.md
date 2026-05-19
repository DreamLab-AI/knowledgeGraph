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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9985"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Non Linear Narrative"
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
  "@id": "urn:ngm:class:non-linear-narrative",
  "@type": "Class",
  "label": "Non Linear Narrative",
  "definition": "A storytelling approach where events are presented out of chronological order or where audience choices create branching paths through the narrative, allowing multiple ways to experience story events based on interactions and decisions.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:narrative-structure",
      "label": "Narrative Structure"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:player-agency",
        "label": "Player Agency"
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
