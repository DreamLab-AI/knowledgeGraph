public:: true

# Key-Value Cache

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:key-value-cache",
  "@type": "Page",
  "title": "Key-Value Cache",
  "vc:slug": "key-value-cache",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:key-value-cache",
  "@type": "Class",
  "label": "Key-Value Cache",
  "definition": "A key-value cache is a memory structure used in autoregressive transformer inference that stores the key and value projections computed for previously generated tokens, avoiding their recomputation on every new decoding step. By reusing cached keys and values, inference cost grows roughly linearly rather than quadratically with sequence length for the attention computation. Its memory footprint scales with context window length, batch size and model depth, making it a primary constraint on serving throughput for large language models.",
  "domain": "machine-learning",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:attention-mechanism",
      "label": "Attention Mechanism"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- A key-value cache is a memory structure used in autoregressive transformer inference that stores the key and value projections computed for previously generated tokens, avoiding their recomputation on every new decoding step. By reusing cached keys and values, inference cost grows roughly linearly rather than quadratically with sequence length for the attention computation. Its memory footprint scales with context window length, batch size and model depth, making it a primary constraint on serving throughput for large language models.
	- It is a [[Attention Mechanism]] concept.
- ### Relationships
	- subClassOf:: [[Attention Mechanism]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
