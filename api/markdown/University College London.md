public:: true

# University College London
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e8e439dfe5d3a56289cbcca1f6ff645092302793e0549f943872e8a2a1acbda3",
  "@type": "Page",
  "vc:slug": "university-college-london",
  "title": "University College London",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
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
      "vc:value": "University College London"
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
  "@id": "urn:ngm:class:university-college-london",
  "@type": "Class",
  "label": "University College London",
  "definition": "A research university in London and constituent of the University of London, with strong programmes in computer science, machine learning, and engineering.",
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
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
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
  "@id": "urn:visionflow:annotation:link-resolutions:university-college-london:800b3f417b00",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e8e439dfe5d3a56289cbcca1f6ff645092302793e0549f943872e8a2a1acbda3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Machine Learning]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
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
  - A research university in London and constituent of the University of London, with strong programmes in computer science, machine learning, and engineering.

- ### Semantic Classification
  - owl-class:: general:UniversityCollegeLondon
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[Alan Turing Institute]]
  - enables:: [[Machine Learning]], [[Artificial Intelligence]]

- ### Content
  - University College London is a large multidisciplinary research university in central London. It maintains internationally recognised research in computer science, artificial intelligence, and machine learning, alongside the physical and life sciences.
  - It is a founding partner of the Alan Turing Institute and contributes substantially to data science and AI research in the United Kingdom.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
