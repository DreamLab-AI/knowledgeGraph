public:: true

# Alan Turing Institute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aa57673b1f768b7c61043d9c5f2bcd6afd380836a3e244ad9f21a1785d170cf0",
  "@type": "Page",
  "vc:slug": "alan-turing-institute",
  "title": "Alan Turing Institute",
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
      "@id": "urn:visionflow:linked:university-college-london",
      "vc:label": "University College London"
    },
    {
      "@id": "urn:visionflow:linked:university-of-oxford",
      "vc:label": "University of Oxford"
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
      "vc:value": "Alan Turing Institute"
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
  "@id": "urn:ngm:class:alan-turing-institute",
  "@type": "Class",
  "label": "Alan Turing Institute",
  "definition": "The United Kingdom's national institute for data science and artificial intelligence, founded in 2015 and headquartered in London.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:alan-turing-institute:f3ed3e8ff629",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:aa57673b1f768b7c61043d9c5f2bcd6afd380836a3e244ad9f21a1785d170cf0"
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
      "raw": "[[University College London]]",
      "resolved": "urn:visionflow:linked:university-college-london",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[University of Oxford]]",
      "resolved": "urn:visionflow:linked:university-of-oxford",
      "kind": "ResolvedLink"
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
  - The United Kingdom's national institute for data science and artificial intelligence, founded in 2015 and headquartered in London.

- ### Semantic Classification
  - owl-class:: general:AlanTuringInstitute
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[University College London]], [[University of Oxford]]
  - enables:: [[Artificial Intelligence]], [[Machine Learning Discipline]]

- ### Content
  - The Alan Turing Institute is the United Kingdom's national institute for data science and artificial intelligence, established in 2015 and named after Alan Turing. It convenes research across partner universities and applies methods to challenges in health, defence, and the public sector.
  - It works with founding university partners including University College London and the University of Oxford, coordinating national capability in AI and data science.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
