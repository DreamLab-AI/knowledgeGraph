public:: true

# Math Library
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d499d89721389c320ab0d3087710b33741224addbe182a9046a9d95884dec8db",
  "@type": "Page",
  "vc:slug": "math-library",
  "title": "Math Library",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:software-library",
      "vc:label": "Software Library"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-1007"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Math Library"
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
  "@id": "urn:ngm:class:math-library",
  "@type": "Class",
  "label": "Math Library",
  "definition": "A math library component in the Metaverse domain that required by PhysicsEngine.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:software-library",
      "label": "Software Library"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:math-library:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d499d89721389c320ab0d3087710b33741224addbe182a9046a9d95884dec8db"
  },
  "vc:resolutions": [
    {
      "raw": "[[Software Library]]",
      "resolved": "urn:visionflow:owl:class:software-library",
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
  - A math library component in the Metaverse domain that required by PhysicsEngine.

- ### Semantic Classification
  - owl-class:: spatial-computing:MathLibrary
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Software Library]]

- ### Content
  MathLibrary — content pending enrichment.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z
