public:: true

# University of Oxford
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:58d260f171dfa8b682449d91bacdfbb9f72e999e6b055175a92cfc660b3932ec",
  "@type": "Page",
  "vc:slug": "university-of-oxford",
  "title": "University of Oxford",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:alan-turing-institute",
      "vc:label": "Alan Turing Institute"
    },
    {
      "@id": "urn:visionflow:linked:entity",
      "vc:label": "Entity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "University of Oxford"
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
  "@id": "urn:ngm:class:university-of-oxford",
  "@type": "Class",
  "label": "University of Oxford",
  "definition": "A collegiate research university in Oxford, England, and one of the world's leading universities, with major activity in computing and artificial intelligence.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:entity",
      "label": "Entity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline",
        "label": "Machine Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:university-of-oxford:03e2bc3d6a02",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:58d260f171dfa8b682449d91bacdfbb9f72e999e6b055175a92cfc660b3932ec"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Alan Turing Institute]]",
      "resolved": "urn:visionflow:linked:alan-turing-institute",
      "kind": "StubLink"
    },
    {
      "raw": "[[Entity]]",
      "resolved": "urn:visionflow:linked:entity",
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
  - A collegiate research university in Oxford, England, and one of the world's leading universities, with major activity in computing and artificial intelligence.

- ### Semantic Classification
  - owl-class:: general:UniversityofOxford
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[Alan Turing Institute]]
  - enables:: [[Artificial Intelligence]], [[Machine Learning Discipline]]

- ### Content
  - The University of Oxford is a collegiate research university in England with a long history and broad disciplinary coverage. It maintains internationally leading research in computer science, machine learning, and the mathematical sciences.
  - It is a partner of the Alan Turing Institute and a significant contributor to artificial intelligence and data science research in the United Kingdom.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
