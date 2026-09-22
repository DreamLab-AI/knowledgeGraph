public:: true

# Calldata Compression

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:calldata-compression",
  "@type": "Page",
  "title": "Calldata Compression",
  "vc:slug": "calldata-compression",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:calldata-compression",
  "@type": "Class",
  "label": "Calldata Compression",
  "definition": "Calldata compression is the practice of encoding transaction data more compactly before posting it as calldata to a base-layer blockchain, reducing the number of bytes that must be paid for and stored. Rollups such as Arbitrum and Base apply techniques including signature aggregation, zero-byte-heavy encoding and custom serialisation formats to shrink batch size. Because calldata gas cost dominates rollup transaction fees, compression directly reduces the cost of settling Layer 2 state on the base chain.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:calldata",
      "label": "Calldata"
    }
  ],
  "relations": {},
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
	- Calldata compression is the practice of encoding transaction data more compactly before posting it as calldata to a base-layer blockchain, reducing the number of bytes that must be paid for and stored. Rollups such as Arbitrum and Base apply techniques including signature aggregation, zero-byte-heavy encoding and custom serialisation formats to shrink batch size. Because calldata gas cost dominates rollup transaction fees, compression directly reduces the cost of settling Layer 2 state on the base chain.
- ### Relationships
	- subClassOf:: [[Calldata]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
