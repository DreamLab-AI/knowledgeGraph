public:: true

# University of Sheffield
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b14c0e4cce079e57aee65ff3a95c7b2fde75c5dbfa02e9a4bcf92fb039036e9e",
  "@type": "Page",
  "vc:slug": "university-of-sheffield",
  "title": "University of Sheffield",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:linked:united-states",
      "vc:label": "United States"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "University of Sheffield"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:university-of-sheffield",
  "@type": "Class",
  "label": "University of Sheffield",
  "definition": "A public research university in Sheffield, England, and a member of the Russell Group of research-intensive universities. It is known for engineering, materials science, and natural language processing research.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Infra Software Engineering"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:university-of-sheffield:c67ddb3ab9b0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b14c0e4cce079e57aee65ff3a95c7b2fde75c5dbfa02e9a4bcf92fb039036e9e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[United States]]",
      "resolved": "urn:visionflow:linked:united-states",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A public research university in Sheffield, England, and a member of the Russell Group of research-intensive universities. It is known for engineering, materials science, and natural language processing research.

- ### Semantic Classification
  - owl-class:: education:UniversityofSheffield
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[United States]]
  - enables:: [[Natural Language Processing]]

- ### Content
  - The University of Sheffield is a public research university founded by royal charter in 1905. It is a member of the Russell Group and has strong programmes in engineering, materials, and computer science.
  - Its natural language processing group developed the GATE text engineering framework, and the university maintains research strengths in advanced manufacturing and materials science.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
