schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#NarrativeTheme
legacy_uri:: urn:visionclaw:concept:spatial-computing:narrative-theme
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
      "vc:value": "sha256-12-294ad6226bc9"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#NarrativeTheme"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9980"
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
      "vc:value": "Narrative Theme"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:narrative-theme"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:narrative-theme"
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
    "@id": "urn:visionflow:page:9eb5f60aca64f96de441bd12478d476946a09f91227150c7504c80e29150c156@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:narrative-theme",
  "@type": "OntologyClass",
  "label": "Narrative Theme",
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
    "@id": "urn:visionflow:page:9eb5f60aca64f96de441bd12478d476946a09f91227150c7504c80e29150c156"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9eb5f60aca64f96de441bd12478d476946a09f91227150c7504c80e29150c156@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "The underlying message, central idea, or motif that pervades a story and shapes public perception, constructed through selective framing, language choices, and emphasis on particular details to guide audience interpretation of events, characters, and meaning.",
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
      "@id": "urn:visionflow:owl:class:storytelling",
      "vc:label": "Storytelling"
    }
  ]
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9eb5f60aca64f96de441bd12478d476946a09f91227150c7504c80e29150c156@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
