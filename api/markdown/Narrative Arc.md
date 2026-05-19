schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#NarrativeArc
legacy_uri:: urn:visionclaw:concept:spatial-computing:narrative-arc
public:: true

# Narrative Arc
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5527ab64db9553639c714062229bbb21668a62c8841c1fe71bc17b831db739b6",
  "@type": "Page",
  "vc:slug": "narrative-arc",
  "title": "Narrative Arc",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:non-linear-narrative",
      "vc:label": "Non Linear Narrative"
    },
    {
      "@id": "urn:visionflow:owl:class:storytelling-structure",
      "vc:label": "Storytelling Structure"
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
      "vc:value": "sha256-12-653e73ee2afb"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#NarrativeArc"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9978"
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
      "vc:value": "Narrative Arc"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:narrative-arc"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:narrative-arc"
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
    "@id": "urn:visionflow:page:5527ab64db9553639c714062229bbb21668a62c8841c1fe71bc17b831db739b6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:narrative-arc",
  "@type": "Class",
  "label": "Narrative Arc",
  "definition": "The structural framework of a story that charts the progression through exposition, rising action, climax, falling action, and resolution, creating peaks and plateaus of dramatic tension that engage audiences and shape their emotional journey through the narrative.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:storytelling-structure",
      "label": "Storytelling Structure"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:non-linear-narrative",
        "label": "Non Linear Narrative"
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
  "@id": "urn:visionflow:annotation:link-resolutions:narrative-arc:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5527ab64db9553639c714062229bbb21668a62c8841c1fe71bc17b831db739b6"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Non Linear Narrative]]",
      "resolved": "urn:visionflow:owl:class:non-linear-narrative",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Storytelling Structure]]",
      "resolved": "urn:visionflow:owl:class:storytelling-structure",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5527ab64db9553639c714062229bbb21668a62c8841c1fe71bc17b831db739b6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The structural framework of a story that charts the progression through exposition, rising action, climax, falling action, and resolution, creating peaks and plateaus of dramatic tension that engage audiences and shape their emotional journey through the narrative.

- ### Semantic Classification
  - owl-class:: spatial-computing:NarrativeArc
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Storytelling Structure]]
  - enables:: [[Non Linear Narrative]]

- ### Content

  - #### Freytag's Five Stages
		- Exposition: Introduction to characters, setting, and circumstances
		- Rising Action: Tension and conflicts escalate building suspense
		- Climax: Highest point of tension where subplots converge
		- Falling Action: Conflict resolution as loose ends tie up
		- Resolution: Story closes showing how events changed characters
  - #### Technical Analysis
		- Computer-based language analysis reveals three primary processes
		- Staging establishes narrative foundation
		- Plot progression drives story forward
		- Cognitive tension builds and releases psychological engagement
		- LIWC-22 can map and score narrativity patterns

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
