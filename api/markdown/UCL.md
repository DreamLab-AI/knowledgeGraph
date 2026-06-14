public:: true

# UCL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f110604ec31a99501fcd84d8b2cb496e180eb82b479d22aa8ef9c25bfc30e640",
  "@type": "Page",
  "vc:slug": "ucl",
  "title": "UCL",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:university-college-london",
      "vc:label": "University College London"
    },
    {
      "@id": "urn:visionflow:linked:alan-turing-institute",
      "vc:label": "Alan Turing Institute"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "UCL"
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
  "@id": "urn:ngm:class:ucl",
  "@type": "Class",
  "label": "UCL",
  "definition": "The common abbreviation for University College London, a major research university in London active in computing and artificial intelligence research.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:university-college-london",
      "label": "University College London"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline",
        "label": "Machine Learning Discipline"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ucl:43c34ee9af7b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f110604ec31a99501fcd84d8b2cb496e180eb82b479d22aa8ef9c25bfc30e640"
  },
  "vc:resolutions": [
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[University College London]]",
      "resolved": "urn:visionflow:linked:university-college-london",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Alan Turing Institute]]",
      "resolved": "urn:visionflow:linked:alan-turing-institute",
      "kind": "StubLink"
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
  - The common abbreviation for University College London, a major research university in London active in computing and artificial intelligence research.

- ### Semantic Classification
  - owl-class:: general:UCL
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[University College London]]
  - bridges-to:: [[University College London]], [[Alan Turing Institute]]
  - enables:: [[Machine Learning Discipline]]

- ### Content
  - UCL is the widely used short form for University College London. The acronym appears frequently in research output, partnerships, and institutional references.
  - It denotes the same institution, a research university with notable strengths in computer science, artificial intelligence, and data science.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
