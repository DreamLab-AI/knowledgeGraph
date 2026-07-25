public:: true

# Linear Projection

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:linear-projection", "@type":"Page", "title":"Linear Projection", "vc:slug":"linear-projection", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:linear-projection",
  "@type": "Class",
  "label": "Linear Projection",
  "definition": "A linear projection is a matrix multiplication that maps an input vector from one vector space into another, typically changing its dimensionality while preserving linear structure. In neural architectures it is implemented as a fully connected layer without a non-linear activation, learning a weight matrix (and optional bias) applied uniformly across positions. It is the mechanism by which transformer attention derives query, key and value vectors, and by which patch embedding maps flattened image patches into a model's embedding space.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:attention",
        "label": "Attention"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A linear projection is a matrix multiplication that maps an input vector from one vector space into another, typically changing its dimensionality while preserving linear structure. In neural architectures it is implemented as a fully connected layer without a non-linear activation, learning a weight matrix (and optional bias) applied uniformly across positions. It is the mechanism by which transformer attention derives query, key and value vectors, and by which patch embedding maps flattened image patches into a model's embedding space.
