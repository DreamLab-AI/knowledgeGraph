public:: true

# Blob Transaction
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:blob-transaction",
  "@type": "Page",
  "title": "Blob Transaction",
  "vc:slug": "blob-transaction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blob-transaction",
  "@type": "Class",
  "label": "Blob Transaction",
  "definition": "A blob transaction is an Ethereum transaction type introduced by EIP-4844 (Proto-Danksharding) that carries a large binary payload of 'blob' data alongside the standard transaction fields, priced separately from calldata gas. Blobs are stored by consensus nodes for a limited retention window rather than persisted in perpetuity by the EVM, which keeps the cost of posting rollup data far lower than embedding it as ordinary calldata. Blob transactions are the mechanism by which layer-2 rollups post the data needed for fraud or validity proofs back to layer 1.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transaction",
      "label": "Transaction"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:danksharding",
        "label": "Danksharding"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - A blob transaction is an Ethereum transaction type introduced by EIP-4844 (Proto-Danksharding) that carries a large binary payload of 'blob' data alongside the standard transaction fields, priced separately from calldata gas.
  - It is a subclass of [[Transaction]].
- ### Content
  - A blob transaction is an Ethereum transaction type introduced by EIP-4844 (Proto-Danksharding) that carries a large binary payload of 'blob' data alongside the standard transaction fields, priced separately from calldata gas. Blobs are stored by consensus nodes for a limited retention window rather than persisted in perpetuity by the EVM, which keeps the cost of posting rollup data far lower than embedding it as ordinary calldata. Blob transactions are the mechanism by which layer-2 rollups post the data needed for fraud or validity proofs back to layer 1.
