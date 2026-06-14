public:: true

# Synthetic Biology
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:620303ec6c07337de2347000a1ef0b0abd6d17b085c8e4016a65a4282e0bdb5f",
  "@type": "Page",
  "vc:slug": "synthetic-biology",
  "title": "Synthetic Biology",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:fda",
      "vc:label": "FDA"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-synthetic-biology",
      "vc:label": "https://en.wikipedia.org/wiki/Synthetic_biology"
    },
    {
      "@id": "urn:visionflow:linked:https-www-genome-gov-genetics-glossary-synthetic-biology",
      "vc:label": "https://www.genome.gov/genetics-glossary/Synthetic-Biology"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Synthetic Biology"
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
  "@id": "urn:ngm:class:synthetic-biology",
  "@type": "Class",
  "label": "Synthetic Biology",
  "definition": "Synthetic biology is a field that applies engineering principles to design and construct biological systems and organisms. It combines biology, genetics, and engineering.",
  "domain": "data",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:synthetic-biology:533a38f4ae48",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:620303ec6c07337de2347000a1ef0b0abd6d17b085c8e4016a65a4282e0bdb5f"
  },
  "vc:resolutions": [
    {
      "raw": "[[FDA]]",
      "resolved": "urn:visionflow:linked:fda",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Synthetic_biology]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-synthetic-biology",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.genome.gov/genetics-glossary/Synthetic-Biology]]",
      "resolved": "urn:visionflow:linked:https-www-genome-gov-genetics-glossary-synthetic-biology",
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
  - Synthetic biology is a field that applies engineering principles to design and construct biological systems and organisms. It combines biology, genetics, and engineering.

- ### Semantic Classification
  - owl-class:: general:SyntheticBiology
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[FDA]]

- ### Content
  - Synthetic biology treats genetic material as components that can be designed and assembled to give organisms new functions. Practitioners engineer microbes to produce chemicals, sense conditions, or perform other defined tasks.
  - Applications include the manufacture of medicines, materials, and fuels, as well as research tools. The field raises questions of safety and governance, since engineered organisms must be contained and their effects understood before release.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Synthetic_biology]], [[https://www.genome.gov/genetics-glossary/Synthetic-Biology]]
  - migration-date:: 2026-05-29T00:00:00Z
