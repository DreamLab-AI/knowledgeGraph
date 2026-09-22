public:: true

# Product Provenance

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:product-provenance",
  "@type": "Page",
  "title": "Product Provenance",
  "vc:slug": "product-provenance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:product-provenance",
  "@type": "Class",
  "label": "Product Provenance",
  "definition": "Product provenance is the verifiable record of a product's origin and the chain of custody it has passed through from raw material to end consumer. It is established by capturing and linking events, such as manufacture, inspection and transfer, into an auditable trail, increasingly recorded on distributed ledgers to resist tampering. Platforms such as VeChain implement product provenance by anchoring supply-chain traceability events on-chain so that authenticity claims can be independently verified.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supply-chain-traceability",
      "label": "Supply Chain Traceability"
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
	- Product provenance is the verifiable record of a product's origin and the chain of custody it has passed through from raw material to end consumer. It is established by capturing and linking events, such as manufacture, inspection and transfer, into an auditable trail, increasingly recorded on distributed ledgers to resist tampering. Platforms such as VeChain implement product provenance by anchoring supply-chain traceability events on-chain so that authenticity claims can be independently verified.
- ### Relationships
	- subClassOf:: [[Supply Chain Traceability]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
