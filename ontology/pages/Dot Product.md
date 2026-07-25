public:: true

# Dot Product
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dot-product",
  "@type": "Page",
  "vc:slug": "dot-product",
  "title": "Dot Product",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-07-25T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dot-product",
  "@type": "Class",
  "label": "Dot Product",
  "definition": "The dot product is a linear algebra operation that combines two vectors of equal dimension into a single scalar by summing the products of their corresponding components. Geometrically it measures how much two vectors align, and it is proportional to the cosine of the angle between them scaled by their magnitudes. In machine learning the dot product underlies similarity measures such as cosine similarity, attention scoring, and nearest-neighbour vector search.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "qualityScore": 0.5,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:linear-algebra",
      "label": "Linear Algebra"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "DanglingRelationFix-batch6-2026-07-25"
  }
}
```

- ### Definition
  - The dot product is a linear algebra operation that combines two vectors of equal dimension into a single scalar by summing the products of their corresponding components. Geometrically it measures how much two vectors align, and it is proportional to the cosine of the angle between them scaled by their magnitudes. In machine learning the dot product underlies similarity measures such as cosine similarity, attention scoring, and nearest-neighbour vector search.
