public:: true

# Long Context Modelling

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:long-context-modelling", "@type":"Page", "title":"Long Context Modelling", "vc:slug":"long-context-modelling", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:long-context-modelling",
  "@type": "Class",
  "label": "Long Context Modelling",
  "definition": "Long context modelling refers to techniques that let a language model process, attend to and reason over input sequences substantially longer than the context windows of earlier architectures, extending from thousands to hundreds of thousands of tokens. It is enabled by memory- and compute-efficient attention implementations such as Flash Attention, and by position-encoding schemes such as rotary position embedding that generalise to sequence lengths beyond those seen during training. Long context modelling is essential for tasks such as whole-document summarisation, long-form retrieval-augmented generation and multi-turn agent memory.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:context-window",
      "label": "Context Window"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:context-window",
        "label": "Context Window"
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
  - Long context modelling refers to techniques that let a language model process, attend to and reason over input sequences substantially longer than the context windows of earlier architectures, extending from thousands to hundreds of thousands of tokens. It is enabled by memory- and compute-efficient attention implementations such as Flash Attention, and by position-encoding schemes such as rotary position embedding that generalise to sequence lengths beyond those seen during training. Long context modelling is essential for tasks such as whole-document summarisation, long-form retrieval-augmented generation and multi-turn agent memory.
