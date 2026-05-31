public:: true

# King's College London
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c35be6ba07910d6e21a5967fe9bb9a14af5c4a2d33063bb8e6893faad5810156",
  "@type": "Page",
  "vc:slug": "king-s-college-london",
  "title": "King's College London",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:university-college-london",
      "vc:label": "University College London"
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
      "vc:value": "King's College London"
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
  "@id": "urn:ngm:class:king-s-college-london",
  "@type": "Class",
  "label": "King's College London",
  "definition": "A research university in London and constituent of the University of London, with strengths in health, security studies, and digital research.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:king-s-college-london:5d656bc2c16e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c35be6ba07910d6e21a5967fe9bb9a14af5c4a2d33063bb8e6893faad5810156"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
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
  - A research university in London and constituent of the University of London, with strengths in health, security studies, and digital research.

- ### Semantic Classification
  - owl-class:: general:KingsCollegeLondon
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[University College London]], [[Alan Turing Institute]]
  - enables:: [[Artificial Intelligence]]

- ### Content
  - King's College London is a research university in central London and a constituent college of the University of London. It is known for medicine, health sciences, law, and security and policy research, with growing activity in data science.
  - It contributes to the United Kingdom's research base and engages with national initiatives in artificial intelligence and digital health.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
