public:: true

# Narrative Theme
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9eb5f60aca64f96de441bd12478d476946a09f91227150c7504c80e29150c156",
  "@type": "Page",
  "vc:slug": "narrative-theme",
  "title": "Narrative Theme",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:narrative-structure",
      "vc:label": "Narrative Structure"
    },
    {
      "@id": "urn:visionflow:owl:class:storytelling",
      "vc:label": "Storytelling"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9980"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Narrative Theme"
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
  "@id": "urn:ngm:class:narrative-theme",
  "@type": "Class",
  "label": "Narrative Theme",
  "definition": "The underlying message, central idea, or motif that pervades a story and shapes public perception, constructed through selective framing, language choices, and emphasis on particular details to guide audience interpretation of events, characters, and meaning.",
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
        "@id": "urn:ngm:class:storytelling",
        "label": "Storytelling"
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
  "@id": "urn:visionflow:annotation:link-resolutions:narrative-theme:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9eb5f60aca64f96de441bd12478d476946a09f91227150c7504c80e29150c156"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Narrative Structure]]",
      "resolved": "urn:visionflow:owl:class:narrative-structure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Storytelling]]",
      "resolved": "urn:visionflow:owl:class:storytelling",
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
  - The underlying message, central idea, or motif that pervades a story and shapes public perception, constructed through selective framing, language choices, and emphasis on particular details to guide audience interpretation of events, characters, and meaning.

- ### Semantic Classification
  - owl-class:: spatial-computing:NarrativeTheme
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Narrative Structure]]
  - enables:: [[Storytelling]]

- ### Content

  - #### Common Themes
		- Conflict and Resolution: Central struggles and their outcomes
		- Identity and Self-Discovery: Characters understanding themselves
		- Power and Corruption: Dynamics of authority and its abuse
		- Love and Relationships: Complexities of human connections
		- Good versus Evil: Moral and ethical dilemmas
  - #### Analysis Methods
		- Structural analysis examines plot elements and story characteristics
		- Functional analysis identifies purposes of storytelling moments
		- Thematic analysis determines motifs and story types present
		- Dialogic/performance analysis studies narrative delivery
		- NLP research enables automated theme extraction and interpretation
  - here's some stuff blah blah blah

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
